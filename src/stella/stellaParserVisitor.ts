// Generated from stellaParser.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { Start_ProgramContext } from "./stellaParser";
import { Start_ExprContext } from "./stellaParser";
import { Start_TypeContext } from "./stellaParser";
import { ProgramContext } from "./stellaParser";
import { LanguageCoreContext } from "./stellaParser";
import { AnExtensionContext } from "./stellaParser";
import { DeclFunContext } from "./stellaParser";
import { DeclTypeAliasContext } from "./stellaParser";
import { InlineAnnotationContext } from "./stellaParser";
import { ParamDeclContext } from "./stellaParser";
import { IsEmptyContext } from "./stellaParser";
import { FoldContext } from "./stellaParser";
import { AddContext } from "./stellaParser";
import { IsZeroContext } from "./stellaParser";
import { LessThanOrEqualContext } from "./stellaParser";
import { SuccContext } from "./stellaParser";
import { VarContext } from "./stellaParser";
import { GreaterThanOrEqualContext } from "./stellaParser";
import { LessThanContext } from "./stellaParser";
import { LogicNotContext } from "./stellaParser";
import { DotRecordContext } from "./stellaParser";
import { ParenthesisedExprContext } from "./stellaParser";
import { GreaterThanContext } from "./stellaParser";
import { EqualContext } from "./stellaParser";
import { TailContext } from "./stellaParser";
import { MultiplyContext } from "./stellaParser";
import { RecordContext } from "./stellaParser";
import { ListContext } from "./stellaParser";
import { LogicAndContext } from "./stellaParser";
import { LogicOrContext } from "./stellaParser";
import { HeadContext } from "./stellaParser";
import { NotEqualContext } from "./stellaParser";
import { PredContext } from "./stellaParser";
import { MatchContext } from "./stellaParser";
import { TypeAscContext } from "./stellaParser";
import { NatRecContext } from "./stellaParser";
import { ConstFalseContext } from "./stellaParser";
import { AbstractionContext } from "./stellaParser";
import { ConstIntContext } from "./stellaParser";
import { UnfoldContext } from "./stellaParser";
import { VariantContext } from "./stellaParser";
import { ConstTrueContext } from "./stellaParser";
import { DotTupleContext } from "./stellaParser";
import { FixContext } from "./stellaParser";
import { LetContext } from "./stellaParser";
import { IfContext } from "./stellaParser";
import { ApplicationContext } from "./stellaParser";
import { TupleContext } from "./stellaParser";
import { ConsListContext } from "./stellaParser";
import { BindingContext } from "./stellaParser";
import { Match_caseContext } from "./stellaParser";
import { PatternVariantContext } from "./stellaParser";
import { PatternTupleContext } from "./stellaParser";
import { PatternRecordContext } from "./stellaParser";
import { PatternListContext } from "./stellaParser";
import { PatternConsContext } from "./stellaParser";
import { PatternFalseContext } from "./stellaParser";
import { PatternTrueContext } from "./stellaParser";
import { PatternIntContext } from "./stellaParser";
import { PatternSuccContext } from "./stellaParser";
import { PatternVarContext } from "./stellaParser";
import { ParenthesisedPatternContext } from "./stellaParser";
import { LabelledPatternContext } from "./stellaParser";
import { TypeTupleContext } from "./stellaParser";
import { TypeVarContext } from "./stellaParser";
import { TypeVariantContext } from "./stellaParser";
import { TypeUnitContext } from "./stellaParser";
import { TypeBoolContext } from "./stellaParser";
import { TypeNatContext } from "./stellaParser";
import { TypeRecContext } from "./stellaParser";
import { TypeFunContext } from "./stellaParser";
import { TypeRecordContext } from "./stellaParser";
import { TypeListContext } from "./stellaParser";
import { TypeSumContext } from "./stellaParser";
import { RecordFieldTypeContext } from "./stellaParser";
import { VariantFieldTypeContext } from "./stellaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `stellaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class stellaParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `stellaParser.start_Program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_Program?: (ctx: Start_ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.start_Expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_Expr?: (ctx: Start_ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.start_Type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart_Type?: (ctx: Start_TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by the `LanguageCore`
	 * labeled alternative in `stellaParser.languageDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguageCore?: (ctx: LanguageCoreContext) => Result;
	/**
	 * Visit a parse tree produced by the `AnExtension`
	 * labeled alternative in `stellaParser.extension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnExtension?: (ctx: AnExtensionContext) => Result;
	/**
	 * Visit a parse tree produced by the `DeclFun`
	 * labeled alternative in `stellaParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclFun?: (ctx: DeclFunContext) => Result;
	/**
	 * Visit a parse tree produced by the `DeclTypeAlias`
	 * labeled alternative in `stellaParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclTypeAlias?: (ctx: DeclTypeAliasContext) => Result;
	/**
	 * Visit a parse tree produced by the `InlineAnnotation`
	 * labeled alternative in `stellaParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineAnnotation?: (ctx: InlineAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.paramDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamDecl?: (ctx: ParamDeclContext) => Result;
	/**
	 * Visit a parse tree produced by the `IsEmpty`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsEmpty?: (ctx: IsEmptyContext) => Result;
	/**
	 * Visit a parse tree produced by the `Fold`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFold?: (ctx: FoldContext) => Result;
	/**
	 * Visit a parse tree produced by the `Add`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;
	/**
	 * Visit a parse tree produced by the `IsZero`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsZero?: (ctx: IsZeroContext) => Result;
	/**
	 * Visit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `Succ`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSucc?: (ctx: SuccContext) => Result;
	/**
	 * Visit a parse tree produced by the `Var`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVar?: (ctx: VarContext) => Result;
	/**
	 * Visit a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `LessThan`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThan?: (ctx: LessThanContext) => Result;
	/**
	 * Visit a parse tree produced by the `LogicNot`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicNot?: (ctx: LogicNotContext) => Result;
	/**
	 * Visit a parse tree produced by the `DotRecord`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotRecord?: (ctx: DotRecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `ParenthesisedExpr`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisedExpr?: (ctx: ParenthesisedExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `GreaterThan`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThan?: (ctx: GreaterThanContext) => Result;
	/**
	 * Visit a parse tree produced by the `Equal`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual?: (ctx: EqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `Tail`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTail?: (ctx: TailContext) => Result;
	/**
	 * Visit a parse tree produced by the `Multiply`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiply?: (ctx: MultiplyContext) => Result;
	/**
	 * Visit a parse tree produced by the `Record`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecord?: (ctx: RecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `List`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by the `LogicAnd`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicAnd?: (ctx: LogicAndContext) => Result;
	/**
	 * Visit a parse tree produced by the `LogicOr`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOr?: (ctx: LogicOrContext) => Result;
	/**
	 * Visit a parse tree produced by the `Head`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHead?: (ctx: HeadContext) => Result;
	/**
	 * Visit a parse tree produced by the `NotEqual`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotEqual?: (ctx: NotEqualContext) => Result;
	/**
	 * Visit a parse tree produced by the `Pred`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPred?: (ctx: PredContext) => Result;
	/**
	 * Visit a parse tree produced by the `match`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch?: (ctx: MatchContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeAsc`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAsc?: (ctx: TypeAscContext) => Result;
	/**
	 * Visit a parse tree produced by the `NatRec`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNatRec?: (ctx: NatRecContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstFalse`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstFalse?: (ctx: ConstFalseContext) => Result;
	/**
	 * Visit a parse tree produced by the `Abstraction`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstraction?: (ctx: AbstractionContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstInt`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstInt?: (ctx: ConstIntContext) => Result;
	/**
	 * Visit a parse tree produced by the `Unfold`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnfold?: (ctx: UnfoldContext) => Result;
	/**
	 * Visit a parse tree produced by the `Variant`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariant?: (ctx: VariantContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConstTrue`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstTrue?: (ctx: ConstTrueContext) => Result;
	/**
	 * Visit a parse tree produced by the `DotTuple`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotTuple?: (ctx: DotTupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `Fix`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFix?: (ctx: FixContext) => Result;
	/**
	 * Visit a parse tree produced by the `Let`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLet?: (ctx: LetContext) => Result;
	/**
	 * Visit a parse tree produced by the `If`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf?: (ctx: IfContext) => Result;
	/**
	 * Visit a parse tree produced by the `Application`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplication?: (ctx: ApplicationContext) => Result;
	/**
	 * Visit a parse tree produced by the `Tuple`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `ConsList`
	 * labeled alternative in `stellaParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsList?: (ctx: ConsListContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinding?: (ctx: BindingContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.match_case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatch_case?: (ctx: Match_caseContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternVariant`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVariant?: (ctx: PatternVariantContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternTuple`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternTuple?: (ctx: PatternTupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternRecord`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternRecord?: (ctx: PatternRecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternList`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternList?: (ctx: PatternListContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternCons`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternCons?: (ctx: PatternConsContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternFalse`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternFalse?: (ctx: PatternFalseContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternTrue`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternTrue?: (ctx: PatternTrueContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternInt`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternInt?: (ctx: PatternIntContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternSucc`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternSucc?: (ctx: PatternSuccContext) => Result;
	/**
	 * Visit a parse tree produced by the `PatternVar`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternVar?: (ctx: PatternVarContext) => Result;
	/**
	 * Visit a parse tree produced by the `ParenthesisedPattern`
	 * labeled alternative in `stellaParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisedPattern?: (ctx: ParenthesisedPatternContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.labelledPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelledPattern?: (ctx: LabelledPatternContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeTuple`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTuple?: (ctx: TypeTupleContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeVar`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVar?: (ctx: TypeVarContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeVariant`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVariant?: (ctx: TypeVariantContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeUnit`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeUnit?: (ctx: TypeUnitContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeBool`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBool?: (ctx: TypeBoolContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeNat`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeNat?: (ctx: TypeNatContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeRec`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRec?: (ctx: TypeRecContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeFun`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFun?: (ctx: TypeFunContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeRecord`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRecord?: (ctx: TypeRecordContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeList`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;
	/**
	 * Visit a parse tree produced by the `TypeSum`
	 * labeled alternative in `stellaParser.stellatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSum?: (ctx: TypeSumContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.recordFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordFieldType?: (ctx: RecordFieldTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `stellaParser.variantFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantFieldType?: (ctx: VariantFieldTypeContext) => Result;
}

