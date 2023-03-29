/** A Stella identifier satisfying the RegEx `[_a-zA-Z][\w!\-:?]*` */
export type Identifier = string;

export type Extension = `#${string}`;

export type Decl = DeclFun | DeclTypeAlias;

export interface FunctionType {
  type: 'FunctionType';
  // TODO: handle multi-param and nullary extensions being enabled, and make [ParamDecl] (tuple type with 1 element) the default
  parameters: ParamDecl[];
  returnType: Type;
}

export type Type = 'Nat' | 'Bool' | FunctionType;

export interface Succ {
  type: 'Succ';
  expr: Expr;
}
export interface Cons {
  type: 'Cons';
  head: Expr;
  tail: Expr;
}
export interface ListHead {
  type: 'ListHead';
  expr: Expr;
}
export interface ListTail {
  type: 'ListTail';
  expr: Expr;
}
export interface ListIsEmpty {
  type: 'ListIsEmpty';
  expr: Expr;
}
export interface Not {
  type: 'Not';
  expr: Expr;
}
export interface NatPred {
  type: 'NatPred';
  expr: Expr;
}
export interface NatIsZero {
  type: 'NatIsZero';
  expr: Expr;
}
export interface Fix {
  type: 'Fix';
  expr: Expr;
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
export interface Fold {
  type: 'Fold';
  foldedType: Type;
  expr: Expr;
}
export interface Application {
  type: 'Application';
  function: Expr;
  // TODO: handle type without unary/multi-param extensions enabled
  arguments: Expr[];
}
export interface Abstraction {
  type: 'Abstraction';
  // TODO: handle type without unary/multi-param extensions enabled
  parameters: ParamDecl[];
  returnValue: Expr;
}

export type Expr =
  // TODO: dot record
  // TODO: dot tuple
  | boolean
  | number
  | Var
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
  // TODO: unfold
  | Application
  // TODO: Multiply
  // TODO: LogicalAnd
  // TODO: Add
  // TODO: LogicalOr
  // TODO: TypeAscription
  | Abstraction;
// TODO: Tuple

export interface ParamDecl {
  type: 'ParamDecl';
  name: Identifier;
  paramType: Type;
}

export interface DeclFun {
  type: 'DeclFun';
  name: Identifier;
  returnType?: Type;
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
