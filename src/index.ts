import fs from 'node:fs'
import process from 'node:process'
import { program } from 'commander'
import { CharStream, CommonTokenStream, FileStream } from 'antlr4'
import StellaLexer from './stella/stellaLexer'
import StellaParser from './stella/stellaParser'
import { AstTransformer } from './visitors'
import { typecheckProgram } from './typechecker'
import { TypecheckingFailedError } from './errors'

enum ErrorCode {
  TypecheckingError = 2,
}

function main() {
  program
    .argument('[input-file]', 'Path to the input Stella file. If omitted, input is read from stdin.')
    .option('-p, --print', 'Only print parsed AST without typechecking.', false)
  program.parse()

  const inputFile = program.args[0]
  const printOnly = program.opts().print

  let inputStream: CharStream
  if (inputFile) {
    inputStream = new FileStream(inputFile)
  } else {
    inputStream = new CharStream(fs.readFileSync(0).toString())
  }

  const parser = new StellaParser(
    new CommonTokenStream(
      new StellaLexer(
        inputStream,
      ),
    ),
  )
  const stellaProgram = parser.program()
  const ast = new AstTransformer().visitProgram(stellaProgram)

  if (printOnly) {
    console.log(JSON.stringify(ast, (_, v) => v ?? null, 2))
    return
  }

  // @todo: Traverse AST to check whether used expressions are allowed for the
  //        enabled extensions.

  try {
    typecheckProgram(ast)
  } catch (err) {
    if (err instanceof TypecheckingFailedError) {
      console.error(err.message)
      process.exit(ErrorCode.TypecheckingError)
    } else {
      throw err
    }
  }
}

main()
