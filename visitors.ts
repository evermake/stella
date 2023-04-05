import StellaVisitor from './src/stella/stellaParserVisitor';
import {
  ApplicationContext,
  ConstFalseContext,
  ConstIntContext,
  ConstTrueContext,
  DeclContext,
  DeclFunContext,
  DeclTypeAliasContext,
  ExprContext,
  ExtensionContext,
  ParamDeclContext,
  ProgramContext,
  StellatypeContext,
  SuccContext,
  TypeBoolContext,
  TypeNatContext,
  VarContext,
  type AnExtensionContext,
} from './src/stella/stellaParser';
import type {
  Application,
  BoolType,
  ConstBool,
  ConstInt,
  Decl,
  DeclFun,
  DeclTypeAlias,
  Expr,
  Extension,
  NatType,
  Node,
  ParamDecl,
  Program,
  Succ,
  Type,
  Var,
} from './ast';

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

export class AstTransformer extends StellaVisitor<Node> {
  visitProgram: (ctx: ProgramContext) => Program = (ctx) => {
    return {
      type: 'Program',
      declarations: ctx.decl_list().map(this.visitDecl),
      extensions: ctx
        .extension_list()
        .flatMap((ext) =>
          (ext as AnExtensionContext)
            .ExtensionName_list()
            .map((name) => name.getText() as Extension)
        ),
    };
  };

  visitDecl: (ctx: DeclContext) => Decl = (ctx: DeclContext) => {
    if (ctx instanceof DeclFunContext) {
      return this.visitDeclFun(ctx);
    }
    if (ctx instanceof DeclTypeAliasContext) {
      return this.visitDeclTypeAlias(ctx);
    }
    throw Error('Unknown declaration type: ' + ctx);
  };

  visitDeclFun: (ctx: DeclFunContext) => DeclFun = (ctx) => {
    return {
      type: 'DeclFun',
      name: ctx._name.text,
      annotations: ctx._annotations.map((a) => a.getText()),
      nestedDeclarations: ctx.decl_list().map(this.visitDecl),
      parameters: ctx.paramDecl_list().map(this.visitParamDecl),
      returnType: ctx._returnType && this.visitType(ctx._returnType),
      throwTypes: ctx._throwTypes.map(this.visitType),
      returnValue: this.visitExpr(ctx._returnExpr),
    };
  };

  visitDeclTypeAlias: (ctx: DeclTypeAliasContext) => DeclTypeAlias = (ctx) => {
    return {
      type: 'DeclTypeAlias',
      alias: ctx._name.text,
      aliasedType: this.visitType(ctx._atype),
    };
  };

  visitExpr: (ctx: ExprContext) => Expr = (ctx) => {
    if (ctx instanceof VarContext) {
      return this.visitVar(ctx);
    }
    if (ctx instanceof ApplicationContext) {
      return this.visitApplication(ctx);
    }
    if (ctx instanceof SuccContext) {
      return this.visitSucc(ctx);
    }
    if (ctx instanceof ConstIntContext) {
      return this.visitConstInt(ctx);
    }
    if (ctx instanceof ConstTrueContext) {
      return this.visitConstTrue(ctx);
    }
    if (ctx instanceof ConstFalseContext) {
      return this.visitConstFalse(ctx);
    }
    if (ctx instanceof VarContext) {
      return this.visitVar(ctx);
    }
    throw new Error('Unknown expression type: ' + ctx.getText());
  };

  visitVar: (ctx: VarContext) => Var = (ctx) => {
    return {
      type: 'Var',
      name: ctx._name.text,
    };
  };

  visitApplication: (ctx: ApplicationContext) => Application = (ctx) => {
    // Question: what is ctx._expr?
    return {
      type: 'Application',
      function: this.visitExpr(ctx._fun),
      arguments: ctx._args.map(this.visitExpr),
    };
  };

  visitSucc: (ctx: SuccContext) => Succ = (ctx) => {
    return {
      type: 'Succ',
      expr: this.visitExpr(ctx._n),
    };
  };

  visitConstInt: (ctx: ConstIntContext) => ConstInt = (ctx) => {
    return {
      type: 'ConstInt',
      value: Number(ctx._n.text),
    };
  };
  visitConstTrue: (ctx: ConstTrueContext) => ConstBool = (ctx) => {
    return {
      type: 'ConstBool',
      value: true,
    };
  };
  visitConstFalse: (ctx: ConstFalseContext) => ConstBool = (ctx) => {
    return {
      type: 'ConstBool',
      value: false,
    };
  };

  visitParamDecl: (ctx: ParamDeclContext) => ParamDecl = (ctx) => {
    return {
      type: 'ParamDecl',
      name: ctx._name.text,
      paramType: this.visitType(ctx._paramType),
    };
  };

  visitType: (ctx: StellatypeContext) => Type = (ctx) => {
    if (ctx instanceof TypeNatContext) {
      return this.visitTypeNat(ctx);
    }
    if (ctx instanceof TypeBoolContext) {
      return this.visitTypeBool(ctx);
    }
    throw new Error('Unknown type: ' + ctx);
  };

  visitTypeNat = (ctx: TypeNatContext) => ({ type: 'NatType' } as NatType);
  visitTypeBool = (ctx: TypeBoolContext) => ({ type: 'BoolType' } as BoolType);
}
