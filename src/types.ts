/**
 * Type that includes all possible extensions for the Stella language.
 *
 * @see https://fizruk.github.io/stella/ (Language Extensions)
 */
export type Extension =
  // Syntactic Sugar and Derived Forms
  | '#let-bindings'
  | '#nested-function-declarations'
  | '#wildcard-binders'
  | '#natural-literals'
  | '#arithmetic-operators'
  | '#comparison-operations'
  | '#nullary-functions'
  | '#multiparameter-functions'
  | '#curried-multiparameter-functions'

  // Base Types
  | '#char-type'
  | '#string-type'
  | '#integer-type'
  | '#floating-point-types'
  | '#decimal-types'
  | '#rational-types'
  | '#complex-number-types'
  | '#modular-arithmetic-types'
  | '#matrix-types'

  // Simple Types
  | '#type-ascriptions'
  | '#type-aliases'
  | '#unit-type'
  | '#pairs'
  | '#tuples'
  | '#records'
  | '#sum-types'
  | '#variants'
  | '#enumerations'
  | '#lists'
  | '#reference-types'
  | '#mutable-arrays'

  // Exceptions
  | '#panics'
  | '#boring-exceptions'
  | '#code-exceptions'
  | '#string-exceptions'
  | '#closed-variant-exceptions'
  | '#open-variant-exceptions'
  | '#subclass-exceptions'
  | '#checked-exceptions'

  // Patterns
  | '#patterns'
  | '#nested-patterns'
  | '#exhaustive-checker'
  | '#pattern-synonyms'

  // Subtyping
  | '#structural-subtyping'
  | '#top-type'
  | '#bottom-type'
  | '#downcasting'
  | '#numeric-subtyping'
  | '#dynamic-type-tests'
  | '#source-and-sink-references'
  | '#intersection-types'
  | '#union-types'
  | '#ambiguous-type-as-bottom'
  | '#try-cast-as'
  | '#type-cast'
  | '#type-cast-patterns'

  // Objects
  | '#imperative-objects'
  | '#structural-classes'
  | '#class-instance-variables'
  | '#superclass-variables'
  | '#open-recursion'
  | '#nominal-classes'

  // Recursive Types
  | '#equirecursive-types'
  | '#isorecursive-types'
  | '#nominal-types'

  // Universal Types
  | '#type-inference'
  | '#universal-types'
  | '#impredicative-types'
  | '#let-polymorphism'
