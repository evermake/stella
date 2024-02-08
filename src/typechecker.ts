import type { DeclFun, Expr, Program, Type } from './ast'
import { TypecheckingFailedError } from './errors'
import type { Extension } from './types'
import { T, areTypesEqual, t } from './utils'
import { Context } from './context'

export function typecheckProgram(ast: Program) {
  const ctx = new Context()

  ast.extensions.forEach(ext => ctx.extensions.add(ext as Extension))

  // Add all global functions to the scope, so we can correctly typecheck their
  // bodies later, when their calls will be invoked.
  for (const decl of ast.declarations) {
    if (decl.type === 'DeclFun') {
      if (!decl.returnType) {
        throw new TypecheckingFailedError('ERROR_MISSING_EXPLICIT_RETURN_TYPE', `Function "${decl.name}" is missing an explicit return type.`)
      }
      ctx.scope.set(decl.name, {
        type: 'TypeFun',
        parametersTypes: decl.parameters.map(p => p.paramType),
        returnType: decl.returnType,
      })
    }
  }

  for (const decl of ast.declarations) {
    switch (decl.type) {
      case 'DeclFun':
        typecheckDeclFun(decl, ctx)
        break
      default:
        throw new Error(`Typechecking for declaration of type "${decl.type}" is not supported.`)
    }
  }

  checkForValidMainInContext(ctx)
}

function typecheckDeclFun(decl: DeclFun, ctx: Context) {
  // @todo: decl.annations, decl.nestedDeclarations, decl.throwTypes

  const localCtx = ctx.newChild()

  if (decl.parameters.length !== 1) {
    throw new Error(`Function declarations must have exactly one parameter, but "${decl.name}" has ${decl.parameters.length}.`)
  }

  const param = decl.parameters[0]
  const returnVal = decl.returnValue.type === 'Sequence'
    ? decl.returnValue.expr1
    : decl.returnValue

  localCtx.scope.set(param.name, param.paramType)

  if (decl.returnType) {
    deriveType(returnVal, localCtx, decl.returnType)
  }
}

function deriveType(expr: Expr, ctx: Context, wantedType?: Type): Type {
  const derivedType = (() => {
    switch (expr.type) {
      case 'ConstBool': {
        return T.Bool
      }
      case 'ConstInt': {
        if (ctx.extensions.has('#natural-literals')) {
          if (expr.value < 0) {
            throw new TypecheckingFailedError('ERROR_ILLEGAL_NEGATIVE_LITERAL', `Negative integers are not supported (got ${expr.value}).`)
          }
        } else {
          if (expr.value !== 0) {
            throw new Error('Non-zero integers are not supported.')
          }
        }
        return T.Nat
      }
      case 'Var': {
        const varType = ctx.scope.get(expr.name)
        if (!varType) {
          throw new TypecheckingFailedError('ERROR_UNDEFINED_VARIABLE', `Variable "${expr.name}" is not defined.`)
        }
        return varType
      }
      case 'Succ': {
        deriveType(expr.expr, ctx, T.Nat)
        return T.Nat
      }
      case 'NatIsZero': {
        deriveType(expr.expr, ctx, T.Nat)
        return T.Bool
      }
      case 'NatRec': {
        deriveType(expr.n, ctx, T.Nat)

        const initialType = deriveType(expr.initial, ctx)
        deriveType(expr.step, ctx, T.fn([T.Nat], T.fn([initialType], initialType)))

        return initialType
      }
      case 'If': {
        deriveType(expr.condition, ctx, T.Bool)

        const thenType = deriveType(expr.thenExpr, ctx)
        deriveType(expr.elseExpr, ctx, thenType)

        return thenType
      }
      case 'Application': {
        if (expr.arguments.length !== 1) {
          throw new Error(`Functions must accept exactly one parameter.`)
        }
        const argExpr = expr.arguments[0]
        const fnExpr = expr.function

        const fnType = deriveType(fnExpr, ctx)
        if (fnType.type !== 'TypeFun') {
          throw new TypecheckingFailedError('ERROR_NOT_A_FUNCTION', `Left side of application must be a function, but got ${t(fnType)}.`)
        }

        if (fnType.parametersTypes.length !== 1) {
          throw new Error(`Functions must accept exactly one parameter.`)
        }

        deriveType(argExpr, ctx, fnType.parametersTypes[0])

        return fnType.returnType
      }
      case 'Abstraction': {
        if (expr.parameters.length !== 1) {
          throw new Error(`Anonymous function must have exactly one parameter, but definition has ${expr.parameters.length}.`)
        }

        const paramDecl = expr.parameters[0]

        let wantedReturnType
        if (wantedType) {
          if (wantedType.type !== 'TypeFun') {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_LAMBDA', `Expected ${t(wantedType)}, but got lambda.`)
          }
          if (wantedType.parametersTypes.length !== 1) {
            throw new Error(`Functions must accept exactly one parameter.`)
          }
          const wantedParamType = wantedType.parametersTypes[0]
          if (!areTypesEqual(wantedParamType, paramDecl.paramType)) {
            throw new TypecheckingFailedError('ERROR_UNEXPECTED_TYPE_FOR_PARAMETER', `Unexpected type for parameter "${paramDecl.name}": expected ${t(wantedParamType)}, but got ${t(paramDecl.paramType)}.`)
          }
          wantedReturnType = wantedType.returnType
        }

        const nestedCtx = ctx.newChild()
        nestedCtx.scope.set(paramDecl.name, paramDecl.paramType)

        return T.fn([paramDecl.paramType], deriveType(expr.returnValue, nestedCtx, wantedReturnType))
      }
      case 'Sequence': {
        if (expr.expr2) {
          throw new Error('Sequences are not supported.')
        }
        return deriveType(expr.expr1, ctx, wantedType)
      }
      default:
        throw new Error(`Cannot derive type for expression "${expr.type}".`)
    }
  })()

  if (wantedType) {
    expect(derivedType).toBe(wantedType)
  }

  return derivedType
}

function checkForValidMainInContext(ctx: Context) {
  const main = ctx.scope.get('main')
  if (!main) {
    throw new TypecheckingFailedError('ERROR_MISSING_MAIN', '"main" function is not found in the scope.')
  }
  if (main.type !== 'TypeFun') {
    throw new TypecheckingFailedError('ERROR_NOT_A_FUNCTION', `"main" must be a function, not ${t(main)}.`)
  }
}

function expect(actualType: Type) {
  return {
    toBe: (expectedType: Type) => {
      if (!areTypesEqual(actualType, expectedType)) {
        throw new TypecheckingFailedError('ERROR_UNEXPECTED_TYPE_FOR_EXPRESSION', `Expected expression to be of type ${t(expectedType)}, but got ${t(actualType)}.`)
      }
    },
  }
}
