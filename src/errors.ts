import type { Extension } from './types'

export class ExtensionRequiredError extends Error {
  constructor(requiredExtension: Extension, detail: string) {
    super(`${detail}\nDid you forget to enable ${requiredExtension} extension?)`)
  }
}

export type TypeErrorTag =
  // Unexpected type specified for a parameter of an anonymous function.
  | 'ERROR_UNEXPECTED_TYPE_FOR_PARAMETER'

  // Type of an expression does not match an expected type (known from larger context).
  | 'ERROR_UNEXPECTED_TYPE_FOR_EXPRESSION'

  // Unexpected anonymous function where an expression of a non-function type is expected.
  | 'ERROR_UNEXPECTED_LAMBDA'

  // Unexpected expression where a function is expected.
  | 'ERROR_NOT_A_FUNCTION'

  // Undefined variable in a an expression.
  | 'ERROR_UNDEFINED_VARIABLE'

  // A program is missing `main` function.
  | 'ERROR_MISSING_MAIN'

  // Missing an explicit return type in the declaration of a function.
  | 'ERROR_MISSING_EXPLICIT_RETURN_TYPE'

  | 'ERROR_ILLEGAL_NEGATIVE_LITERAL'
  | 'ERROR_INCORRECT_ARITY_OF_MAIN'
  | 'ERROR_INCORRECT_NUMBER_OF_ARGUMENTS'
  | 'ERROR_UNEXPECTED_NUMBER_OF_PARAMETERS_IN_LAMBDA'

  //  Record is missing one or more of the expected fields.
  | 'ERROR_MISSING_RECORD_FIELDS'

  // Record has one or more unexpected fields.
  | 'ERROR_UNEXPECTED_RECORD_FIELDS'

  // Unexpected record where an expression of a non-record type is expected.
  | 'ERROR_UNEXPECTED_RECORD'

  // Unexpected expression where a record is expected.
  | 'ERROR_NOT_A_RECORD'

  // Access to a field that is not present in the record.
  | 'ERROR_UNEXPECTED_FIELD_ACCESS'

  // Unexpected tuple/pair where an expression of a non-tuple type is expected.
  | 'ERROR_UNEXPECTED_TUPLE'

  // Unexpected expression where a tuple/pair is expected.
  | 'ERROR_NOT_A_TUPLE'

export class TypecheckingFailedError extends Error {
  #tag: TypeErrorTag

  constructor(tag: TypeErrorTag, detail: string) {
    super(`Type error ${tag}: ${detail}`)
    this.#tag = tag
  }

  get tag(): TypeErrorTag {
    return this.#tag
  }
}
