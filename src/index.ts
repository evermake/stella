import process from 'node:process'
import type { CharStream } from 'antlr4'
import { CommonTokenStream, FileStream } from 'antlr4'
import StellaLexer from './stella/stellaLexer'
import StellaParser from './stella/stellaParser'
import { AstTransformer } from './visitors'
import { typecheckProgram } from './typechecker'

let inputStream: CharStream

if (process.argv.length === 3) {
  inputStream = new FileStream(process.argv[2])
} else {
  throw new Error('Usage: node index.js [path/to/file.stella]')
}

const lexer = new StellaLexer(inputStream)
const tokenStream = new CommonTokenStream(lexer)
const parser = new StellaParser(tokenStream)

// The entry point for parsing is a "program"
const program = parser.program()

const t = new AstTransformer()
const ast = t.visitProgram(program)
// console.log(JSON.stringify(ast, (k, v) => v ?? null, 4));
typecheckProgram(ast)
