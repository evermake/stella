import fs from 'node:fs'
import process from 'node:process'
import { CharStream, CommonTokenStream, FileStream } from 'antlr4'
import StellaLexer from './stella/stellaLexer'
import StellaParser from './stella/stellaParser'
import { AstTransformer } from './visitors'
import { typecheckProgram } from './typechecker'
import { TypecheckingFailedError } from './errors'

enum ErrorCode {
  InvalidCliUsage = 1,
  TypecheckingError = 2,
}

function main() {
  let inputStream: CharStream
  if (process.argv.length === 2) {
    // Program ran w/o arguments -> read from stdin.
    inputStream = new CharStream(fs.readFileSync(0).toString())
  } else if (process.argv.length === 3) {
    inputStream = new FileStream(process.argv[2])
  } else {
    console.error('Usage: node index.js path/to/file.stella')
    process.exit(ErrorCode.InvalidCliUsage)
  }

  const lexer = new StellaLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new StellaParser(tokenStream)

  const program = parser.program()

  const t = new AstTransformer()
  const ast = t.visitProgram(program)

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
