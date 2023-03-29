import StellaVisitor from './src/stella/stellaParserVisitor';
import {
  DeclContext,
  DeclFunContext,
  DeclTypeAliasContext,
  ExtensionContext,
  ProgramContext,
  type AnExtensionContext,
} from './src/stella/stellaParser';

export class AstPrinter extends StellaVisitor<void> {
  private depth = 0;
  private print(msg: string) {
    console.log('|'.repeat(this.depth) + '> ' + msg);
  }

  visitProgram = (ctx: ProgramContext) => {
    this.depth++;

    this.print('Program');
    ctx.extension_list().forEach(this.visitAnExtension);
    ctx.decl_list().forEach(this.visitDecl);

    this.depth--;
  };

  visitAnExtension = (ext: ExtensionContext) => {
    const extension = ext as AnExtensionContext;
    this.depth++;

    extension.ExtensionName_list().forEach((name) => {
      this.print(`Extension [${name.getText()}]`);
    });

    this.depth--;
  };

  visitDecl = (ctx: DeclContext) => {
    console.log('Decl');

    if (ctx instanceof DeclFunContext) {
      return ctx.accept(this);
    }
    if (ctx instanceof DeclTypeAliasContext) {
      return ctx.accept(this);
    } else {
      this.print('Declaration');
    }
  };

  visitDeclFun = (ctx: DeclFunContext) => {
    this.depth++;

    this.print(`FunctionDecl [${ctx.StellaIdent().getText()}]`);

    // TODO: visit the children

    this.depth--;
  };

  visitDeclTypeAlias = (ctx: DeclTypeAliasContext) => {
    this.depth++;

    this.print('Type Alias');

    ctx._name;
    ctx._atype;

    this.depth--;
  };
}
