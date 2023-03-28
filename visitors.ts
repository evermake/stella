import StellaVisitor from './src/stella/stellaParserVisitor';
import { DeclFunContext, ProgramContext } from './src/stella/stellaParser';

export class AstPrinter extends StellaVisitor<void> {
  private depth = 0;
  private print(msg: string) {
    return '|'.repeat(this.depth) + '> ' + msg;
  }

  visitProgram = (ctx: ProgramContext) => {
    this.depth++;

    this.print('Program');

    ctx.extension_list().forEach((ext) => {
      // TODO: do something with the extension
    });
    ctx.decl_list().forEach((decl) => {
      // TODO: do something with the declaration
    });

    this.depth--;
  };

  visitDeclFun = (ctx: DeclFunContext) => {
    this.depth++;

    this.print(`Function [${ctx.StellaIdent().getText()}]`);

    // TODO: visit the children

    this.depth--;
  };
}
