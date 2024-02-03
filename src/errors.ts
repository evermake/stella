import type { Type } from './ast'
import { t } from './utils'

export class BaseTypeError extends Error {
  tag: string = 'UNKNOWN'

  get detail(): string {
    return `Type error ${this.tag}: ${this.message}`
  }
}

/**
 * Unexpected type specified for a parameter of an anonymous function.
 */
export class UnexpectedTypeForParameterError extends BaseTypeError {
  tag: string = 'ERROR_UNEXPECTED_TYPE_FOR_PARAMETER'
}

/**
 * Type of an expression does not match an expected type (known from larger context).
 */
export class UnexpectedTypeForExpressionError extends BaseTypeError {
  tag: string = 'ERROR_UNEXPECTED_TYPE_FOR_EXPRESSION'

  constructor(
    public expectedType: Type,
    public actualType: Type,
  ) {
    const message = `Expected expression to be of type ${t(expectedType)}, but got ${t(actualType)}.`
    super(message)
  }
}

/**
 * Unexpected anonymous function where an expression of a non-function type is expected.
 */
export class UnexpectedLambdaError extends BaseTypeError {
  tag: string = 'ERROR_UNEXPECTED_LAMBDA'
}

/**
 * Unexpected expression where a function is expected.
 */
export class NotAFunctionError extends BaseTypeError {
  tag: string = 'ERROR_NOT_A_FUNCTION'
}

/**
 * Undefined variable in a an expression.
 */
export class UndefinedVariableError extends BaseTypeError {
  tag: string = 'ERROR_UNDEFINED_VARIABLE'
}

/**
 * A program is missing `main` function.
 */
export class MissingMainError extends BaseTypeError {
  tag: string = 'ERROR_MISSING_MAIN'
}

/**
 * Missing an explicit return type in the declaration of a function.
 */
export class MissingExplicitReturnTypeError extends BaseTypeError {
  tag: string = 'ERROR_MISSING_EXPLICIT_RETURN_TYPE'
}
