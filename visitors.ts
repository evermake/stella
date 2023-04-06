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
  DotRecordContext,
  DotTupleContext,
  ConstUnitContext,
  InlContext,
  InrContext,
  ConsListContext,
  HeadContext,
  IsEmptyContext,
  TailContext,
  LogicNotContext,
  PredContext,
  IsZeroContext,
  FixContext,
  NatRecContext,
  FoldContext,
  UnfoldContext,
  MultiplyContext,
  DivideContext,
  LogicAndContext,
  AddContext,
  SubtractContext,
  LogicOrContext,
  AbstractionContext,
  TypeAscContext,
  TupleContext,
  RecordContext,
  VariantContext,
  MatchContext,
  ListContext,
  LessThanContext,
  LessThanOrEqualContext,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  EqualContext,
  NotEqualContext,
  IfContext,
  LetContext,
  LetRecContext,
  SequenceContext,
  BindingContext,
  MatchCaseContext,
  PatternBindingContext,
  ParenthesisedExprContext,
  TerminatingSemicolonContext,
} from './src/stella/stellaParser';
import type {
  Abstraction,
  Add,
  Application,
  Binding,
  BoolType,
  Cons,
  ConstBool,
  ConstInt,
  ConstUnit,
  Decl,
  DeclFun,
  DeclTypeAlias,
  Divide,
  DotRecord,
  DotTuple,
  Equal,
  Expr,
  Extension,
  Fix,
  Fold,
  GreaterThan,
  GreaterThanOrEqual,
  If,
  Inl,
  Inr,
  LessThan,
  LessThanOrEqual,
  Let,
  LetRec,
  List,
  ListHead,
  ListIsEmpty,
  ListTail,
  LogicalAnd,
  LogicalOr,
  Match,
  Multiply,
  NatIsZero,
  NatPred,
  NatRec,
  NatType,
  Node,
  LogicalNot,
  NotEqual,
  ParamDecl,
  PatternBinding,
  Program,
  Record,
  Sequence,
  Subtract,
  Succ,
  Tuple,
  Type,
  TypeAscription,
  Unfold,
  Var,
  Variant,
  MatchCase,
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

/**
 * This visitor transforms the concrete syntax tree generated by ANTLR into a simplified AST.
 * It does not follow the correct symantics of visitors (e.g.: uses `this.visit(node)`
 *  rather than `node.accept(this)`), but this is to avoid a lot of typecasting.
 */
export class AstTransformer extends StellaVisitor<Node> {
  visitProgram: (ctx: ProgramContext) => Program = (ctx) => {
    return {
      type: 'Program',
      extensions: ctx
        .extension_list()
        .flatMap((ext) =>
          (ext as AnExtensionContext)
            .ExtensionName_list()
            .map((name) => name.getText() as Extension)
        ),
      declarations: ctx.decl_list().map(this.visitDecl),
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
    if (ctx instanceof DotRecordContext) {
      return this.visitDotRecord(ctx);
    }
    if (ctx instanceof DotTupleContext) {
      return this.visitDotTuple(ctx);
    }
    if (ctx instanceof ConstTrueContext) {
      return this.visitConstTrue(ctx);
    }
    if (ctx instanceof ConstFalseContext) {
      return this.visitConstFalse(ctx);
    }
    if (ctx instanceof ConstUnitContext) {
      return this.visitConstUnit(ctx);
    }
    if (ctx instanceof ConstIntContext) {
      return this.visitConstInt(ctx);
    }
    if (ctx instanceof VarContext) {
      return this.visitVar(ctx);
    }
    if (ctx instanceof InlContext) {
      return this.visitInl(ctx);
    }
    if (ctx instanceof InrContext) {
      return this.visitInr(ctx);
    }
    if (ctx instanceof ConsListContext) {
      return this.visitConsList(ctx);
    }
    if (ctx instanceof HeadContext) {
      return this.visitHead(ctx);
    }
    if (ctx instanceof IsEmptyContext) {
      return this.visitIsEmpty(ctx);
    }
    if (ctx instanceof TailContext) {
      return this.visitTail(ctx);
    }
    if (ctx instanceof SuccContext) {
      return this.visitSucc(ctx);
    }
    if (ctx instanceof LogicNotContext) {
      return this.visitLogicNot(ctx);
    }
    if (ctx instanceof PredContext) {
      return this.visitPred(ctx);
    }
    if (ctx instanceof IsZeroContext) {
      return this.visitIsZero(ctx);
    }
    if (ctx instanceof FixContext) {
      return this.visitFix(ctx);
    }
    if (ctx instanceof NatRecContext) {
      return this.visitNatRec(ctx);
    }
    if (ctx instanceof FoldContext) {
      return this.visitFold(ctx);
    }
    if (ctx instanceof UnfoldContext) {
      return this.visitUnfold(ctx);
    }
    if (ctx instanceof ApplicationContext) {
      return this.visitApplication(ctx);
    }
    if (ctx instanceof MultiplyContext) {
      return this.visitMultiply(ctx);
    }
    if (ctx instanceof DivideContext) {
      return this.visitDivide(ctx);
    }
    if (ctx instanceof LogicAndContext) {
      return this.visitLogicAnd(ctx);
    }
    if (ctx instanceof AddContext) {
      return this.visitAdd(ctx);
    }
    if (ctx instanceof SubtractContext) {
      return this.visitSubtract(ctx);
    }
    if (ctx instanceof LogicOrContext) {
      return this.visitLogicOr(ctx);
    }
    if (ctx instanceof AbstractionContext) {
      return this.visitAbstraction(ctx);
    }
    if (ctx instanceof TypeAscContext) {
      return this.visitTypeAsc(ctx);
    }
    if (ctx instanceof TupleContext) {
      return this.visitTuple(ctx);
    }
    if (ctx instanceof RecordContext) {
      return this.visitRecord(ctx);
    }
    if (ctx instanceof VariantContext) {
      return this.visitVariant(ctx);
    }
    if (ctx instanceof MatchContext) {
      return this.visitMatch(ctx);
    }
    if (ctx instanceof ListContext) {
      return this.visitList(ctx);
    }
    if (ctx instanceof LessThanContext) {
      return this.visitLessThan(ctx);
    }
    if (ctx instanceof LessThanOrEqualContext) {
      return this.visitLessThanOrEqual(ctx);
    }
    if (ctx instanceof GreaterThanContext) {
      return this.visitGreaterThan(ctx);
    }
    if (ctx instanceof GreaterThanOrEqualContext) {
      return this.visitGreaterThanOrEqual(ctx);
    }
    if (ctx instanceof EqualContext) {
      return this.visitEqual(ctx);
    }
    if (ctx instanceof NotEqualContext) {
      return this.visitNotEqual(ctx);
    }
    if (ctx instanceof IfContext) {
      return this.visitIf(ctx);
    }
    if (ctx instanceof LetContext) {
      return this.visitLet(ctx);
    }
    if (ctx instanceof LetRecContext) {
      return this.visitLetRec(ctx);
    }
    if (ctx instanceof ParenthesisedExprContext) {
      return this.visitParenthesisedExpr(ctx);
    }
    if (ctx instanceof SequenceContext) {
      return this.visitSequence(ctx);
    }
    if (ctx instanceof TerminatingSemicolonContext) {
      return this.visitTerminatingSemicolon(ctx);
    }

    throw new Error('Unknown expression type: ' + ctx.getText());
  };

  visitDotRecord: (ctx: DotRecordContext) => DotRecord = (ctx) => {
    return {
      type: 'DotRecord',
      label: ctx._label.text,
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitDotTuple: (ctx: DotTupleContext) => DotTuple = (ctx) => {
    return {
      type: 'DotTuple',
      index: Number(ctx._index.text),
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitConstUnit: (ctx: ConstUnitContext) => ConstUnit = (ctx) => {
    return { type: 'Unit' };
  };

  visitVar: (ctx: VarContext) => Var = (ctx) => {
    return {
      type: 'Var',
      name: ctx._name.text,
    };
  };
  visitInl: (ctx: InlContext) => Inl = (ctx) => {
    return {
      type: 'Inl',
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitInr: (ctx: InrContext) => Inr = (ctx) => {
    return {
      type: 'Inr',
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitConsList: (ctx: ConsListContext) => Cons = (ctx) => {
    return {
      type: 'Cons',
      head: this.visitExpr(ctx._head),
      tail: this.visitExpr(ctx._tail),
    };
  };
  visitHead: (ctx: HeadContext) => ListHead = (ctx) => {
    return {
      type: 'ListHead',
      expr: this.visitExpr(ctx._list),
    };
  };
  visitIsEmpty: (ctx: IsEmptyContext) => ListIsEmpty = (ctx) => {
    return {
      type: 'ListIsEmpty',
      expr: this.visitExpr(ctx._list),
    };
  };
  visitTail: (ctx: TailContext) => ListTail = (ctx) => {
    return {
      type: 'ListTail',
      expr: this.visitExpr(ctx._list),
    };
  };
  visitLogicNot: (ctx: LogicNotContext) => LogicalNot = (ctx) => {
    return {
      type: 'LogicalNot',
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitPred: (ctx: PredContext) => NatPred = (ctx) => {
    return {
      type: 'NatPred',
      expr: this.visitExpr(ctx._n),
    };
  };
  visitIsZero: (ctx: IsZeroContext) => NatIsZero = (ctx) => {
    return {
      type: 'NatIsZero',
      expr: this.visitExpr(ctx._n),
    };
  };
  visitFix: (ctx: FixContext) => Fix = (ctx) => {
    return {
      type: 'Fix',
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitNatRec: (ctx: NatRecContext) => NatRec = (ctx) => {
    return {
      type: 'NatRec',
      initial: this.visitExpr(ctx._initial),
      n: this.visitExpr(ctx._n),
      step: this.visitExpr(ctx._step),
    };
  };
  visitFold: (ctx: FoldContext) => Fold = (ctx) => {
    return {
      type: 'Fold',
      expr: this.visitExpr(ctx._expr_),
      foldedType: this.visitType(ctx._type_),
    };
  };
  visitUnfold: (ctx: UnfoldContext) => Unfold = (ctx) => {
    return {
      type: 'Unfold',
      expr: this.visitExpr(ctx._expr_),
      unfoldedType: this.visitType(ctx._type_),
    };
  };
  visitMultiply: (ctx: MultiplyContext) => Multiply = (ctx) => {
    return {
      type: 'Multiply',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitDivide: (ctx: DivideContext) => Divide = (ctx) => {
    return {
      type: 'Divide',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitLogicAnd: (ctx: LogicAndContext) => LogicalAnd = (ctx) => {
    return {
      type: 'LogicalAnd',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitAdd: (ctx: AddContext) => Add = (ctx) => {
    return {
      type: 'Add',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitSubtract: (ctx: SubtractContext) => Subtract = (ctx) => {
    return {
      type: 'Subtract',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitLogicOr: (ctx: LogicOrContext) => LogicalOr = (ctx) => {
    return {
      type: 'LogicalOr',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitAbstraction: (ctx: AbstractionContext) => Abstraction = (ctx) => {
    return {
      type: 'Abstraction',
      parameters: ctx._paramDecls.map(this.visitParamDecl),
      returnValue: this.visitExpr(ctx._returnExpr),
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

  visitTypeAsc: (ctx: TypeAscContext) => TypeAscription = (ctx) => {
    return {
      type: 'TypeAscription',
      expr: this.visitExpr(ctx._expr_),
      ascribedType: this.visitType(ctx._type_),
    };
  };

  visitTuple: (ctx: TupleContext) => Tuple = (ctx) => {
    return {
      type: 'Tuple',
      exprs: ctx._exprs.map(this.visitExpr),
    };
  };
  visitRecord: (ctx: RecordContext) => Record = (ctx) => {
    return {
      type: 'Record',
      bindings: ctx._bindings.map(this.visitBinding),
    };
  };
  visitVariant: (ctx: VariantContext) => Variant = (ctx) => {
    return {
      type: 'Variant',
      label: ctx._label.text,
      expr: this.visitExpr(ctx._rhs),
    };
  };
  visitMatch: (ctx: MatchContext) => Match = (ctx) => {
    return {
      type: 'Match',
      // TODO: implement visiting match case
      cases: ctx._cases.map(this.visitMatchCase),
      expr: this.visitExpr(ctx.expr()),
    };
  };
  visitMatchCase: (ctx: MatchCaseContext) => MatchCase = (ctx) => {
    return {
      type: 'MatchCase',
      pattern: ctx._pat,
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitList: (ctx: ListContext) => List = (ctx) => {
    return {
      type: 'List',
      exprs: ctx.expr_list().map(this.visitExpr),
    };
  };
  visitLessThan: (ctx: LessThanContext) => LessThan = (ctx) => {
    return {
      type: 'LessThan',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitLessThanOrEqual: (ctx: LessThanOrEqualContext) => LessThanOrEqual = (
    ctx
  ) => {
    return {
      type: 'LessThanOrEqual',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitGreaterThan: (ctx: GreaterThanContext) => GreaterThan = (ctx) => {
    return {
      type: 'GreaterThan',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitGreaterThanOrEqual: (
    ctx: GreaterThanOrEqualContext
  ) => GreaterThanOrEqual = (ctx) => {
    return {
      type: 'GreaterThanOrEqual',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitEqual: (ctx: EqualContext) => Equal = (ctx) => {
    return {
      type: 'Equal',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitNotEqual: (ctx: NotEqualContext) => NotEqual = (ctx) => {
    return {
      type: 'NotEqual',
      left: this.visitExpr(ctx._left),
      right: this.visitExpr(ctx._right),
    };
  };
  visitIf: (ctx: IfContext) => If = (ctx) => {
    return {
      type: 'If',
      condition: this.visitExpr(ctx._condition),
      thenExpr: this.visitExpr(ctx._thenExpr),
      elseExpr: this.visitExpr(ctx._elseExpr),
    };
  };
  visitLet: (ctx: LetContext) => Let = (ctx) => {
    return {
      type: 'Let',
      patternBindings: ctx._patternBindings.map(this.visitPatternBinding),
      body: this.visitExpr(ctx._body),
    };
  };
  visitLetRec: (ctx: LetRecContext) => LetRec = (ctx) => {
    return {
      type: 'LetRec',
      patternBindings: ctx._patternBindings.map(this.visitPatternBinding),
      body: this.visitExpr(ctx._body),
    };
  };
  visitPatternBinding: (ctx: PatternBindingContext) => PatternBinding = (
    ctx
  ) => {
    return {
      type: 'PatternBinding',
      pattern: ctx._pat,
      rhs: this.visitExpr(ctx._rhs),
    };
  };
  visitSequence: (ctx: SequenceContext) => Sequence = (ctx) => {
    return {
      type: 'Sequence',
      // TODO: this does not actually flatten all the "Sequence"s into one list. It should do so.
      exprs: ctx.expr_list().map(this.visitExpr),
    };
  };
  visitParenthesisedExpr: (ctx: ParenthesisedExprContext) => Expr = (ctx) => {
    return this.visitExpr(ctx._expr_);
  };
  visitTerminatingSemicolon: (ctx: TerminatingSemicolonContext) => Expr = (
    ctx
  ) => {
    return this.visitExpr(ctx._expr_);
  };

  visitBinding: (ctx: BindingContext) => Binding = (ctx) => {
    return {
      type: 'Binding',
      name: ctx._name.text,
      expr: this.visitExpr(ctx._rhs),
    };
  };
}
