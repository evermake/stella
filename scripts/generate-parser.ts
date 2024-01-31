import process from 'node:process'
import url from 'node:url'
import path from 'node:path'
import { Buffer } from 'node:buffer'
import { execSync } from 'node:child_process'
import { openSync, readFileSync, writeSync } from 'node:fs'

const _filename = url.fileURLToPath(import.meta.url)
const scriptsDir = path.resolve(_filename, '..')

const output = execSync(
  'antlr4 -visitor -Dlanguage=TypeScript *.g4',
  { cwd: path.resolve(scriptsDir, '../src/stella/') },
).toString()

if (output !== '') {
  console.log('An error occurred generating the parser:')
  console.error(output)
  process.exit(1)
}

const preamble = Buffer.from('// @ts-nocheck\n')

const lexerFd = openSync(path.resolve(scriptsDir, '../src/stella/stellaLexer.ts'), 'r+')
const lexerData = readFileSync(lexerFd)
writeSync(lexerFd, preamble, 0, preamble.length, 0)
writeSync(lexerFd, lexerData, 0, lexerData.length, preamble.length)

const parserFd = openSync(path.resolve(scriptsDir, '../src/stella/stellaParser.ts'), 'r+')
const parserData = readFileSync(parserFd)
writeSync(parserFd, preamble, 0, preamble.length, 0)
writeSync(parserFd, parserData, 0, parserData.length, preamble.length)
