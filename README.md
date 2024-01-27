# stella-implementation-in-typescript

Template for an implementation of Stella in TypeScript (with ANTLRv4).

## Getting started

First, make sure you have `antlr4` installed using `pip install antlr4-tools`. Then, you must generate the Stella parser and lexer using `npm run antlr4`. Your main code should be in [`index.ts`](./src/index.ts), and to compile it run `npm run build`.
You can also run it in watch mode during development using `npm run watch`.

To run the built code, use `node build [path/to/file.stella]`
