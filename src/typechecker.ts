import type { DeclFun, Expr, Program, Type, TypeFun } from './ast'
import { MissingExplicitReturnTypeError, MissingMainError, NotAFunctionError, UndefinedVariableError, UnexpectedLambdaError, UnexpectedTypeForExpressionError, UnexpectedTypeForParameterError } from './errors'

export function typecheckProgram(ast: Program) {
  const globalScope = new Scope()

  // Add all global functions to the scope, so we can correctly typecheck their
  // bodies later, when their calls will be invoked.
  for (const decl of ast.declarations) {
    if (decl.type === 'DeclFun') {
      if (!decl.returnType) {
        throw new MissingExplicitReturnTypeError(`Function "${decl.name}" is missing an explicit return type.`)
      }
      globalScope.set(decl.name, {
        type: 'TypeFun',
        parametersTypes: decl.parameters.map(p => p.paramType),
        returnType: decl.returnType,
      })
    }
  }

  for (const decl of ast.declarations) {
    switch (decl.type) {
      case 'DeclFun':
        typecheckDeclFun(decl, globalScope)
        break
      default:
        throw new Error(`Typechecking for declaration of type "${decl.type}" is not supported.`)
    }
  }

  checkForValidMainInGlobalScope(globalScope)
}

function typecheckDeclFun(decl: DeclFun, parentScope: Scope) {
  // @todo: decl.annations, decl.nestedDeclarations, decl.throwTypes

  // Create a new local scope.
  const localScope = new Scope(parentScope)

  if (decl.parameters.length !== 1) {
    throw new Error(`Function declarations must have exactly one parameter, but "${decl.name}" has ${decl.parameters.length}.`)
  }

  const param = decl.parameters[0]
  const returnVal = decl.returnValue.type === 'Sequence'
    ? decl.returnValue.expr1
    : decl.returnValue

  // Add parameter to a local scope.
  localScope.identifiers.set(param.name, param.paramType)

  const derivedType = deriveType(returnVal, localScope, decl.returnType)

  if (decl.returnType && !areTypesEqual(decl.returnType, derivedType)) {
    throw new UnexpectedTypeForExpressionError(`Function "${decl.name}" return type does not match actual return type: expected ${t(decl.returnType)}, but has ${t(derivedType)}.`)
  }
}

function deriveType(expr: Expr, scope: Scope, expectedType?: Type): Type {
  switch (expr.type) {
    case 'ConstBool': {
      return { type: 'TypeBool' }
    }
    case 'ConstInt': {
      if (expr.value === 0) {
        return { type: 'TypeNat' }
      }
      throw new Error('Non-zero integers are not supported.')
    }
    case 'Var': {
      const varType = scope.get(expr.name)
      if (!varType) {
        throw new UndefinedVariableError(`Variable "${expr.name}" is not defined.`)
      }
      return varType
    }
    case 'Succ': {
      const innerExprType = deriveType(expr.expr, scope)
      if (innerExprType.type !== 'TypeNat') {
        throw new UnexpectedTypeForExpressionError(`Expected expression in Succ to be of type Nat, but got ${innerExprType.type}.`)
      }
      return { type: 'TypeNat' }
    }
    case 'NatIsZero': {
      const argType = deriveType(expr.expr, scope)
      if (argType.type !== 'TypeNat') {
        throw new UnexpectedTypeForExpressionError(`Expected expression in NatIsZero to be of type Nat, but got ${argType.type}.`)
      }
      return { type: 'TypeBool' }
    }
    case 'NatRec': {
      const nType = deriveType(expr.n, scope)
      if (nType.type !== 'TypeNat') {
        throw new UnexpectedTypeForExpressionError(`Expected n in NatRec to be of type Nat, but got ${t(nType)}.`)
      }

      const stepType = deriveType(expr.step, scope)
      if (stepType.type !== 'TypeFun') {
        throw new UnexpectedTypeForExpressionError(`Step in NatRec has to be a function, instead it is ${t(stepType)}.`)
      }
      if (stepType.parametersTypes.length !== 1) {
        throw new Error(`Step in NatRec must accept exactly one parameter, but definition has ${stepType.parametersTypes.length}.`)
      }

      const stepParamType = stepType.parametersTypes[0]

      if (stepParamType.type !== 'TypeNat') {
        throw new UnexpectedTypeForExpressionError(`Expected first parameter in step of NatRec to be of type Nat, but got ${t(stepParamType)}.`)
      }

      const stepReturnType = stepType.returnType
      const initialType = deriveType(expr.initial, scope)

      // Type of initialType is T
      // stepReturnType must be of type (T) -> T
      const expectedType = {
        type: 'TypeFun' as const,
        parametersTypes: [initialType],
        returnType: initialType,
      }

      if (!areTypesEqual(stepReturnType, expectedType)) {
        throw new UnexpectedTypeForExpressionError(`Expected step function of NatRec to return type ${t(expectedType)}, but got ${t(stepReturnType)}.`)
      }

      return initialType
    }
    case 'If': {
      const conditionType = deriveType(expr.condition, scope)
      if (conditionType.type !== 'TypeBool') {
        throw new UnexpectedTypeForExpressionError(`Expected condition in if/then/else to be of type Bool, but got ${t(conditionType)}.`)
      }

      const thenType = deriveType(expr.thenExpr, scope)
      const elseType = deriveType(expr.elseExpr, scope)
      if (!areTypesEqual(thenType, elseType)) {
        throw new UnexpectedTypeForExpressionError(`Both branches of if/then/else must be of the same type, instead then has ${t(thenType)} and else has ${t(elseType)}.`)
      }

      return thenType
    }
    case 'Application': {
      if (expr.arguments.length !== 1) {
        throw new Error(`Functions must accept exactly one parameter.`)
      }
      const argExpr = expr.arguments[0]
      const fnExpr = expr.function
      // Todo: check that function expression is of type T -> infer D
      //       and arguments[0]

      const fnType = deriveType(fnExpr, scope)
      if (fnType.type !== 'TypeFun') {
        throw new UnexpectedTypeForExpressionError(`Left side of application must be a function, but got ${t(fnType)}.`)
      }

      if (fnType.parametersTypes.length !== 1) {
        throw new Error(`Functions must accept exactly one parameter.`)
      }

      const argType = deriveType(argExpr, scope)
      if (!areTypesEqual(argType, fnType.parametersTypes[0])) {
        throw new UnexpectedTypeForExpressionError(`Expected argument to be of type ${t(fnType.parametersTypes[0])}, but got ${t(argType)}.`)
      }

      return fnType.returnType
    }
    case 'Abstraction': {
      if (expr.parameters.length !== 1) {
        throw new Error(`Anonymous function must have exactly one parameter, but definition has ${expr.parameters.length}.`)
      }

      const paramDecl = expr.parameters[0]

      let expectedReturnType
      if (expectedType) {
        if (expectedType.type !== 'TypeFun') {
          throw new UnexpectedLambdaError(`Expected type ${t(expectedType)}, but got anonymous function.`)
        }
        if (expectedType.parametersTypes.length !== 1) {
          throw new Error(`Functions must accept exactly one parameter.`)
        }
        if (!areTypesEqual(expectedType.parametersTypes[0], paramDecl.paramType)) {
          throw new UnexpectedTypeForParameterError(`Expected parameter "${paramDecl.name}" to be of type ${t(expectedType.parametersTypes[0])}, but got ${t(paramDecl.paramType)}.`)
        }
        expectedReturnType = expectedType.returnType
      }

      const nestedScope = new Scope(scope)
      nestedScope.set(paramDecl.name, paramDecl.paramType)

      return {
        type: 'TypeFun',
        parametersTypes: [paramDecl.paramType],
        returnType: deriveType(expr.returnValue, nestedScope, expectedReturnType),
      }
    }
    case 'Sequence': {
      return deriveType(expr.expr1, scope)
    }
    default:
      throw new Error(`Cannot derive type for expression "${expr.type}".`)
  }
}

class Scope {
  parent: Scope | null
  identifiers: Map<string, Type>

  constructor(parent: Scope | null = null) {
    this.parent = parent
    this.identifiers = new Map()
  }

  get(name: string, traverseParents = true): Type | undefined {
    if (this.identifiers.has(name)) {
      return this.identifiers.get(name)!
    }
    if (traverseParents && this.parent) {
      return this.parent.get(name)
    }
    return undefined
  }

  set(name: string, type: Type) {
    this.identifiers.set(name, type)
  }

  has(name: string, traverseParents = true): boolean {
    return this.get(name, traverseParents) != null
  }
}

function checkForValidMainInGlobalScope(scope: Scope) {
  const main = scope.identifiers.get('main')
  if (!main) {
    throw new MissingMainError('"main" function is not found in the scope.')
  }
  if (main.type !== 'TypeFun') {
    throw new NotAFunctionError(`"main" must be a function, not ${t(main)}.`)
  }
}

/**
 * Stringifies a type.
 */
function t(type: Type): string {
  switch (type.type) {
    case 'TypeBool':
      return 'Bool'
    case 'TypeNat':
      return 'Nat'
    case 'TypeFun':
      return `fn(${type.parametersTypes.map(t).join(' -> ')}) -> ${t(type.returnType)}`
    case 'TypeVar':
      return 'Var'
    default:
      return type.type
  }
}

function areTypesEqual(t1: Type, t2: Type): boolean {
  if (t1.type !== t2.type) {
    return false
  }

  switch (t1.type) {
    case 'TypeNat':
    case 'TypeBool':
    case 'TypeUnit':
    case 'TypeTop':
    case 'TypeBottom':
      return true
    case 'TypeFun': {
      const t2_ = t2 as TypeFun
      const params1 = t1.parametersTypes
      const params2 = t2_.parametersTypes
      if (params1.length !== params2.length) {
        return false
      }
      if (!areTypesEqual(t1.returnType, t2_.returnType)) {
        return false
      }
      for (let i = 0; i < params1.length; i++) {
        if (!areTypesEqual(params1[i], params2[i])) {
          return false
        }
      }
      return true
    }
    case 'TypeRec':
    case 'TypeSum':
    case 'TypeTuple':
    case 'TypeRecord':
    case 'TypeVariant':
    case 'TypeList':
    case 'TypeVar':
    case 'TypeRef':
    case 'TypeForAll':
    case 'RecordFieldType':
    case 'VariantFieldType':
      throw new Error(`Cannot compare type "${t1.type}".`)
  }
}
