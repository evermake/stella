/** A Stella identifier satisfying the RegEx `[_a-zA-Z][\w!\-:?]*` */
export type Identifier = string;

export type Extension = `#${string}`;

export type Decl = DeclFun | DeclTypeAlias;

// TODO: integrate language extensions in the types
// Examples:
/*
export type NullaryFunctionExtension = { nullary: true };
export type MultiparamFunctionExtension = { multiparam: true };
type ParamType<Extension = {}> = Extension extends MultiparamFunctionExtension &
  NullaryFunctionExtension
  ? ParamDecl[]
  : Extension extends NullaryFunctionExtension
  ? [] | [ParamDecl]
  : Extension extends MultiparamFunctionExtension
  ? ParamDecl[]
  : [ParamDecl];
type Param = ParamType<NullaryFunctionExtension>;
*/

// ---- Types

type SimpleType<T extends Exclude<string, T>> = {
  type: T;
};
export type NatType = SimpleType<'NatType'>;
export type BoolType = SimpleType<'BoolType'>;
export type UnitType = SimpleType<'UnitType'>;
export interface FunctionType {
  type: 'FunctionType';
  // TODO: handle multi-param and nullary extensions being enabled, and make [Type] (tuple type with 1 element) the default
  parametersTypes: Type[];
  returnType: Type;
}

export type Type = NatType | BoolType | UnitType | FunctionType;
// TODO: TypeRec, tuple, record, variant, typelist (?), type var

// ---- Expressions

export interface Cons {
  type: 'Cons';
  head: Expr;
  tail: Expr;
}
type UnaryFunction<T extends Exclude<string, T>> = {
  type: T;
  expr: Expr;
};
export type Succ = UnaryFunction<'Succ'>;
export type ListHead = UnaryFunction<'ListHead'>;
export type ListTail = UnaryFunction<'ListTail'>;
export type ListIsEmpty = UnaryFunction<'ListIsEmpty'>;
export type Not = UnaryFunction<'Not'>;
export type NatPred = UnaryFunction<'NatPred'>;
export type NatIsZero = UnaryFunction<'NatIsZero'>;
export type Fix = UnaryFunction<'Fix'>;
export interface ConstInt {
  type: 'ConstInt';
  value: number;
}
export interface ConstBool {
  type: 'ConstBool';
  value: boolean;
}
export interface ConstUnit {
  type: 'Unit';
}
export interface DotRecord {
  type: 'DotRecord';
  expr: Expr;
  label: Identifier;
}
export interface DotTuple {
  type: 'DotTuple';
  expr: Expr;
  index: number;
}
export interface NatRec {
  type: 'NatRec';
  n: Expr;
  initial: Expr;
  step: Expr;
}
export interface Var {
  type: 'Var';
  name: Identifier;
}
export type Inl = UnaryFunction<'Inl'>;
export type Inr = UnaryFunction<'Inr'>;
export interface Fold {
  type: 'Fold';
  foldedType: Type;
  expr: Expr;
}
export interface Unfold {
  type: 'Unfold';
  unfoldedType: Type;
  expr: Expr;
}
export interface Application {
  type: 'Application';
  function: Expr;
  // TODO: handle type without unary/multi-param extensions enabled
  arguments: Expr[];
}
export interface TypeAscription {
  type: 'TypeAscription';
  expr: Expr;
  ascribedType: Type;
}
type BinaryOp<T extends Exclude<string, T>> = {
  type: T;
  left: Expr;
  right: Expr;
};
export type Multiply = BinaryOp<'Multiply'>;
export type Divide = BinaryOp<'Divide'>;
export type LogicalAnd = BinaryOp<'LogicalAnd'>;
export type Add = BinaryOp<'Add'>;
export type Subtract = BinaryOp<'Subtract'>;
export type LogicalOr = BinaryOp<'LogicalOr'>;

export interface Abstraction {
  type: 'Abstraction';
  // TODO: handle type without unary/multi-param extensions enabled
  parameters: ParamDecl[];
  returnValue: Expr;
}

export type Expr =
  | DotRecord
  | DotTuple
  | ConstBool
  | ConstUnit
  | ConstInt
  | Var
  | Inl
  | Inr
  | Cons
  | ListHead
  | ListIsEmpty
  | ListTail
  | Succ
  | Not
  | NatPred
  | NatIsZero
  | Fix
  | NatRec
  | Fold
  | Unfold
  | Application
  | Multiply
  | Divide
  | LogicalAnd
  | Add
  | Subtract
  | LogicalOr
  | TypeAscription
  | Abstraction;
// TODO: Tuple

// ---- Declarations

export interface ParamDecl {
  type: 'ParamDecl';
  name: Identifier;
  paramType: Type;
}

type Annotation = string;

export interface DeclFun {
  type: 'DeclFun';
  annotations: Annotation[];
  name: Identifier;
  returnType?: Type;
  /** Only present if the `#exceptions` extension is enabled */
  throwTypes: Type[];
  /** Only present if the `#nested-function-declarations` extension is enabled */
  nestedDeclarations: Decl[];
  // TODO: handle multi-param and nullary extensions being enabled, and make [ParamDecl] (tuple type with 1 element) the default
  parameters: ParamDecl[];
  returnValue: Expr;
}

export interface DeclTypeAlias {
  type: 'DeclTypeAlias';
  alias: Identifier;
  aliasedType: Type;
}

export interface Program {
  type: 'Program';
  extensions: Extension[];
  declarations: Decl[];
}

export type Node = Program | Decl | Expr | ParamDecl | Type;
