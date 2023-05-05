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
  PatternContext,
  PatternVariantContext,
  PatternInlContext,
  PatternInrContext,
  PatternTupleContext,
  PatternRecordContext,
  PatternListContext,
  PatternConsContext,
  PatternFalseContext,
  PatternTrueContext,
  PatternUnitContext,
  PatternIntContext,
  PatternSuccContext,
  PatternVarContext,
  ParenthesisedPatternContext,
  LabelledPatternContext,
  TypeFunContext,
  TypeRecContext,
  TypeSumContext,
  TypeTupleContext,
  TypeRecordContext,
  TypeVariantContext,
  TypeListContext,
  TypeUnitContext,
  TypeVarContext,
  RecordFieldTypeContext,
  VariantFieldTypeContext,
  TypeParensContext,
  AssignContext,
  TypeCastContext,
  PanicContext,
  ThrowContext,
  TryCatchContext,
  TryWithContext,
  DerefContext,
  RefContext,
  ConstMemoryContext,
  DeclExceptionTypeContext,
  DeclExceptionVariantContext,
  TypeBottomContext,
  TypeTopContext,
  TypeRefContext,
  TypeForAllContext,
  TypeApplicationContext,
  TypeAbstractionContext,
  DeclFunGenericContext,
} from './src/stella/stellaParser';
import type {
  Abstraction,
  Add,
  Application,
  Binding,
  TypeBool,
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
  TypeNat,
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
  Pattern,
  PatternCons,
  PatternFalse,
  PatternInl,
  PatternInr,
  PatternInt,
  PatternList,
  PatternRecord,
  PatternSucc,
  PatternTrue,
  PatternTuple,
  PatternUnit,
  PatternVar,
  PatternVariant,
  LabelledPattern,
  TypeFun,
  TypeList,
  TypeRec,
  TypeRecord,
  TypeSum,
  TypeTuple,
  TypeUnit,
  TypeVar,
  TypeVariant,
  RecordFieldType,
  VariantFieldType,
  TypeTop,
  TypeBottom,
  DeclExceptionType,
  DeclExceptionVariant,
  ConstMemory,
  Assignment,
  TypeCast,
  Reference,
  Dereference,
  Panic,
  Throw,
  TryCatch,
  TryWith,
  TypeRef,
  TypeForAll,
  TypeApplication,
  TypeAbstraction,
  DeclFunGeneric,
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
    if (ctx instanceof DeclFunGenericContext) {
      return this.visitDeclFunGeneric(ctx);
    }
    if (ctx instanceof DeclTypeAliasContext) {
      return this.visitDeclTypeAlias(ctx);
    }
    if (ctx instanceof DeclExceptionTypeContext) {
      return this.visitDeclExceptionType(ctx);
    }
    if (ctx instanceof DeclExceptionVariantContext) {
      return this.visitDeclExceptionVariant(ctx);
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
  visitDeclFunGeneric: (ctx: DeclFunGenericContext) => DeclFunGeneric = (
    ctx
  ) => {
    return {
      type: 'DeclFunGeneric',
      name: ctx._name.text,
      annotations: ctx._annotations.map((a) => a.getText()),
      typeParams: ctx._generics.map((t) => t.text),
      parameters: ctx.paramDecl_list().map(this.visitParamDecl),
      returnType: ctx._returnType && this.visitType(ctx._returnType),
      throwTypes: ctx._throwTypes.map(this.visitType),
      nestedDeclarations: ctx.decl_list().map(this.visitDecl),
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

  visitDeclExceptionType: (ctx: DeclExceptionTypeContext) => DeclExceptionType =
    (ctx) => {
      return {
        type: 'DeclExceptionType',
        exceptionType: this.visitType(ctx._exceptionType),
      };
    };
  visitDeclExceptionVariant: (
    ctx: DeclExceptionVariantContext
  ) => DeclExceptionVariant = (ctx) => {
    return {
      type: 'DeclExceptionVariant',
      name: ctx._name.text,
      variantType: this.visitType(ctx._variantType),
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
    if (ctx instanceof ConstMemoryContext) {
      return this.visitConstMemory(ctx);
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
    if (ctx instanceof TypeApplicationContext) {
      return this.visitTypeApplication(ctx);
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
    if (ctx instanceof TypeAbstractionContext) {
      return this.visitTypeAbstraction(ctx);
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
    if (ctx instanceof AssignContext) {
      return this.visitAssign(ctx);
    }
    if (ctx instanceof TypeCastContext) {
      return this.visitTypeCast(ctx);
    }
    if (ctx instanceof RefContext) {
      return this.visitRef(ctx);
    }
    if (ctx instanceof DerefContext) {
      return this.visitDeref(ctx);
    }
    if (ctx instanceof PanicContext) {
      return this.visitPanic(ctx);
    }
    if (ctx instanceof ThrowContext) {
      return this.visitThrow(ctx);
    }
    if (ctx instanceof TryCatchContext) {
      return this.visitTryCatch(ctx);
    }
    if (ctx instanceof TryWithContext) {
      return this.visitTryWith(ctx);
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
  visitTypeAbstraction: (ctx: TypeAbstractionContext) => TypeAbstraction = (
    ctx
  ) => {
    return {
      type: 'TypeAbstraction',
      typeParams: ctx._generics.map((t) => t.text),
      expr: this.visitExpr(ctx._expr_),
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
  visitTypeApplication: (ctx: TypeApplicationContext) => TypeApplication = (
    ctx
  ) => {
    return {
      type: 'TypeApplication',
      function: this.visitExpr(ctx._fun),
      typeArguments: ctx._types.map(this.visitType),
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

  visitConstMemory: (ctx: ConstMemoryContext) => ConstMemory = (ctx) => {
    return {
      type: 'ConstMemory',
      value: ctx._mem.text,
    };
  };

  visitAssign: (ctx: AssignContext) => Assignment = (ctx) => {
    return {
      type: 'Assignment',
      lhs: this.visitExpr(ctx._lhs),
      rhs: this.visitExpr(ctx._rhs),
    };
  };
  visitTypeCast: (ctx: TypeCastContext) => TypeCast = (ctx) => {
    return {
      type: 'TypeCast',
      castType: this.visitType(ctx._type_),
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitRef: (ctx: RefContext) => Reference = (ctx) => {
    return {
      type: 'Reference',
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitDeref: (ctx: DerefContext) => Dereference = (ctx) => {
    return {
      type: 'Dereference',
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitPanic: (ctx: PanicContext) => Panic = (ctx) => {
    return {
      type: 'Panic',
    };
  };
  visitThrow: (ctx: ThrowContext) => Throw = (ctx) => {
    return {
      type: 'Throw',
      expr: this.visitExpr(ctx._expr_),
    };
  };
  visitTryCatch: (ctx: TryCatchContext) => TryCatch = (ctx) => {
    return {
      type: 'TryCatch',
      tryExpr: this.visitExpr(ctx._tryExpr),
      pattern: this.visitPattern(ctx._pat),
      fallbackExpr: this.visitExpr(ctx._fallbackExpr),
    };
  };
  visitTryWith: (ctx: TryWithContext) => TryWith = (ctx) => {
    return {
      type: 'TryWith',
      tryExpr: this.visitExpr(ctx._tryExpr),
      fallbackExpr: this.visitExpr(ctx._fallbackExpr),
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
    if (ctx instanceof TypeUnitContext) {
      return this.visitTypeUnit(ctx);
    }
    if (ctx instanceof TypeTopContext) {
      return this.visitTypeTop(ctx);
    }
    if (ctx instanceof TypeBottomContext) {
      return this.visitTypeBottom(ctx);
    }
    if (ctx instanceof TypeFunContext) {
      return this.visitTypeFun(ctx);
    }
    if (ctx instanceof TypeRecContext) {
      return this.visitTypeRec(ctx);
    }
    if (ctx instanceof TypeSumContext) {
      return this.visitTypeSum(ctx);
    }
    if (ctx instanceof TypeTupleContext) {
      return this.visitTypeTuple(ctx);
    }
    if (ctx instanceof RecordFieldTypeContext) {
      return this.visitRecordFieldType(ctx);
    }
    if (ctx instanceof TypeRecordContext) {
      return this.visitTypeRecord(ctx);
    }
    if (ctx instanceof VariantFieldTypeContext) {
      return this.visitVariantFieldType(ctx);
    }
    if (ctx instanceof TypeVariantContext) {
      return this.visitTypeVariant(ctx);
    }
    if (ctx instanceof TypeListContext) {
      return this.visitTypeList(ctx);
    }
    if (ctx instanceof TypeVarContext) {
      return this.visitTypeVar(ctx);
    }
    if (ctx instanceof TypeParensContext) {
      return this.visitTypeParens(ctx);
    }
    if (ctx instanceof TypeRefContext) {
      return this.visitTypeRef(ctx);
    }
    if (ctx instanceof TypeForAllContext) {
      return this.visitTypeForAll(ctx);
    }
    throw new Error('Unknown type: ' + ctx);
  };

  visitTypeNat = (ctx: TypeNatContext) => ({ type: 'TypeNat' } as TypeNat);
  visitTypeBool = (ctx: TypeBoolContext) => ({ type: 'TypeBool' } as TypeBool);
  visitTypeTop: (ctx: TypeTopContext) => TypeTop = (ctx) => {
    return {
      type: 'TypeTop',
    };
  };
  visitTypeBottom: (ctx: TypeBottomContext) => TypeBottom = (ctx) => {
    return {
      type: 'TypeBottom',
    };
  };

  visitTypeFun: (ctx: TypeFunContext) => TypeFun = (ctx) => {
    return {
      type: 'TypeFun',
      parametersTypes: ctx._paramTypes.map(this.visitType),
      returnType: this.visitType(ctx._returnType),
    };
  };
  visitTypeRec: (ctx: TypeRecContext) => TypeRec = (ctx) => {
    return {
      type: 'TypeRec',
      var: ctx._var_.text,
      recType: this.visitType(ctx._type_),
    };
  };
  visitTypeSum: (ctx: TypeSumContext) => TypeSum = (ctx) => {
    return {
      type: 'TypeSum',
      left: this.visitType(ctx._left),
      right: this.visitType(ctx._right),
    };
  };
  visitTypeTuple: (ctx: TypeTupleContext) => TypeTuple = (ctx) => {
    return {
      type: 'TypeTuple',
      types: ctx._types.map(this.visitType),
    };
  };
  visitRecordFieldType: (ctx: RecordFieldTypeContext) => RecordFieldType = (
    ctx
  ) => {
    return {
      type: 'RecordFieldType',
      label: ctx._label.text,
      fieldType: this.visitType(ctx._type_),
    };
  };
  visitTypeRecord: (ctx: TypeRecordContext) => TypeRecord = (ctx) => {
    return {
      type: 'TypeRecord',
      fieldTypes: ctx._fieldTypes.map(this.visitRecordFieldType),
    };
  };
  visitVariantFieldType: (ctx: VariantFieldTypeContext) => VariantFieldType = (
    ctx
  ) => {
    return {
      type: 'VariantFieldType',
      label: ctx._label.text,
      fieldType: this.visitType(ctx._type_),
    };
  };
  visitTypeVariant: (ctx: TypeVariantContext) => TypeVariant = (ctx) => {
    return {
      type: 'TypeVariant',
      fieldTypes: ctx._fieldTypes.map(this.visitVariantFieldType),
    };
  };
  visitTypeList: (ctx: TypeListContext) => TypeList = (ctx) => {
    return {
      type: 'TypeList',
      types: ctx._types.map(this.visitType),
    };
  };
  visitTypeUnit: (ctx: TypeUnitContext) => TypeUnit = (ctx) => {
    return {
      type: 'TypeUnit',
    };
  };
  visitTypeVar: (ctx: TypeVarContext) => TypeVar = (ctx) => {
    return {
      type: 'TypeVar',
      name: ctx._name.text,
    };
  };
  visitTypeParens: (ctx: TypeParensContext) => Type = (ctx) => {
    return this.visitType(ctx._type_);
  };
  visitTypeRef: (ctx: TypeRefContext) => TypeRef = (ctx) => {
    return {
      type: 'TypeRef',
      referredType: this.visitType(ctx._type_),
    };
  };
  visitTypeForAll: (ctx: TypeForAllContext) => TypeForAll = (ctx) => {
    return {
      type: 'TypeForAll',
      typeVars: ctx._types.map((t) => t.text),
      body: this.visitType(ctx._type_),
    };
  };

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
      cases: ctx._cases.map(this.visitMatchCase),
      expr: this.visitExpr(ctx.expr()),
    };
  };
  visitMatchCase: (ctx: MatchCaseContext) => MatchCase = (ctx) => {
    return {
      type: 'MatchCase',
      pattern: this.visitPattern(ctx._pattern_),
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
      pattern: this.visitPattern(ctx._pat),
      rhs: this.visitExpr(ctx._rhs),
    };
  };
  visitSequence: (ctx: SequenceContext) => Sequence = (ctx) => {
    return {
      type: 'Sequence',
      expr1: this.visitExpr(ctx._expr1),
      expr2: ctx._expr2 != null ? this.visitExpr(ctx._expr2) : undefined,
    };
  };
  visitParenthesisedExpr: (ctx: ParenthesisedExprContext) => Expr = (ctx) => {
    return this.visitExpr(ctx._expr_);
  };

  visitBinding: (ctx: BindingContext) => Binding = (ctx) => {
    return {
      type: 'Binding',
      name: ctx._name.text,
      expr: this.visitExpr(ctx._rhs),
    };
  };

  visitPattern: (ctx: PatternContext) => Pattern = (ctx) => {
    if (ctx instanceof PatternVariantContext) {
      return this.visitPatternVariant(ctx);
    }
    if (ctx instanceof PatternInlContext) {
      return this.visitPatternInl(ctx);
    }
    if (ctx instanceof PatternInrContext) {
      return this.visitPatternInr(ctx);
    }
    if (ctx instanceof PatternTupleContext) {
      return this.visitPatternTuple(ctx);
    }
    if (ctx instanceof PatternRecordContext) {
      return this.visitPatternRecord(ctx);
    }
    if (ctx instanceof PatternListContext) {
      return this.visitPatternList(ctx);
    }
    if (ctx instanceof PatternConsContext) {
      return this.visitPatternCons(ctx);
    }
    if (ctx instanceof PatternFalseContext) {
      return this.visitPatternFalse(ctx);
    }
    if (ctx instanceof PatternTrueContext) {
      return this.visitPatternTrue(ctx);
    }
    if (ctx instanceof PatternUnitContext) {
      return this.visitPatternUnit(ctx);
    }
    if (ctx instanceof PatternIntContext) {
      return this.visitPatternInt(ctx);
    }
    if (ctx instanceof PatternSuccContext) {
      return this.visitPatternSucc(ctx);
    }
    if (ctx instanceof PatternVarContext) {
      return this.visitPatternVar(ctx);
    }
    if (ctx instanceof ParenthesisedPatternContext) {
      return this.visitParenthesisedPattern(ctx);
    }

    throw new Error('Unknown pattern type: ' + ctx.getText());
  };

  visitPatternVariant: (ctx: PatternVariantContext) => PatternVariant = (
    ctx
  ) => {
    return {
      type: 'PatternVariant',
      label: ctx._label.text,
      pattern: ctx._pattern_ && this.visitPattern(ctx._pattern_),
    };
  };
  visitPatternInl: (ctx: PatternInlContext) => PatternInl = (ctx) => {
    return {
      type: 'PatternInl',
      pattern: this.visitPattern(ctx._pattern_),
    };
  };
  visitPatternInr: (ctx: PatternInrContext) => PatternInr = (ctx) => {
    return {
      type: 'PatternInr',
      pattern: this.visitPattern(ctx._pattern_),
    };
  };
  visitPatternTuple: (ctx: PatternTupleContext) => PatternTuple = (ctx) => {
    return {
      type: 'PatternTuple',
      patterns: ctx.pattern_list().map(this.visitPattern),
    };
  };
  visitLabelledPattern: (ctx: LabelledPatternContext) => LabelledPattern = (
    ctx
  ) => {
    return {
      type: 'LabelledPattern',
      label: ctx._label.text,
      pattern: this.visitPattern(ctx._pattern_),
    };
  };
  visitPatternRecord: (ctx: PatternRecordContext) => PatternRecord = (ctx) => {
    return {
      type: 'PatternRecord',
      patterns: ctx.labelledPattern_list().map(this.visitLabelledPattern),
    };
  };
  visitPatternList: (ctx: PatternListContext) => PatternList = (ctx) => {
    return {
      type: 'PatternList',
      patterns: ctx.pattern_list().map(this.visitPattern),
    };
  };
  visitPatternCons: (ctx: PatternConsContext) => PatternCons = (ctx) => {
    return {
      type: 'PatternCons',
      head: this.visitPattern(ctx._head),
      tail: this.visitPattern(ctx._tail),
    };
  };
  visitPatternFalse: (ctx: PatternFalseContext) => PatternFalse = (ctx) => {
    return {
      type: 'PatternFalse',
    };
  };
  visitPatternTrue: (ctx: PatternTrueContext) => PatternTrue = (ctx) => {
    return {
      type: 'PatternTrue',
    };
  };
  visitPatternUnit: (ctx: PatternUnitContext) => PatternUnit = (ctx) => {
    return {
      type: 'PatternUnit',
    };
  };
  visitPatternInt: (ctx: PatternIntContext) => PatternInt = (ctx) => {
    return {
      type: 'PatternInt',
      value: Number(ctx._n.text),
    };
  };
  visitPatternSucc: (ctx: PatternSuccContext) => PatternSucc = (ctx) => {
    return {
      type: 'PatternSucc',
      value: this.visitPattern(ctx._pattern_),
    };
  };
  visitPatternVar: (ctx: PatternVarContext) => PatternVar = (ctx) => {
    return {
      type: 'PatternVar',
      name: ctx._name.text,
    };
  };
  visitParenthesisedPattern: (ctx: ParenthesisedPatternContext) => Pattern = (
    ctx
  ) => {
    return this.visitPattern(ctx._pattern_);
  };
}
