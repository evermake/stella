import type { Type, TypeTypeVar } from './types'
import { T, t, typesEqual } from './utils'

export type Constraint = {
  /**
   * Left-hand side of the typing constraint.
   */
  lhs: Type

  /**
   * Right-hand side of the typing constraint.
   */
  rhs: Type
}

/**
 * Finite mapping from type variables to types. [TaPL §22.2.1]
 */
export type Substitution = SubstitutionPair[]

export type SubstitutionPair = {
  from: TypeTypeVar
  to: Type
}

/**
 * Applies the given substitution to the given type.
 *
 * @see [TaPL §22.1.1]
 */
export function applySubst(subst: Substitution, type: Type): Type {
  switch (type.type) {
    case 'TypeNat': // σ(Nat)
    case 'TypeBool': // σ (Bool)
    case 'TypeUnit':
    case 'TypeTop':
    case 'TypeBottom':
      return type
    case 'TypeTypeVar': // σ(X)
      return subst.find(({ from }) => from.id === type.id)?.to ?? type
    case 'TypeRef':
      return T.RefTo(applySubst(subst, type.referredType))
    case 'TypeFun': // σ(T1→T2)
      return T.fn(
        type.parametersTypes.map(paramType => applySubst(subst, paramType)),
        applySubst(subst, type.returnType),
      )
    case 'TypeList':
      return T.ListOf(applySubst(subst, type.elementType))
    case 'TypeSum':
      return T.Sum(
        applySubst(subst, type.left),
        applySubst(subst, type.right),
      )
    case 'TypeTuple':
      return T.Tuple(type.types.map(elementType => applySubst(subst, elementType)))
    case 'TypeRecord':
      return T.Record(Object.fromEntries(
        type.fieldTypes.map(({ label, fieldType }) => [
          label,
          applySubst(subst, fieldType),
        ]),
      ))
    default:
      throw new Error(`Cannot apply substitution to type ${t(type)}.`)
  }
}

/**
 * Returns a principal unifier [TaPL §22.4.2] for the given constraint set.
 */
export function unify(constraints: Constraint[]): Substitution {
  if (constraints.length === 0) {
    return []
  }

  const [constraint, ...rest] = constraints
  const { lhs: S, rhs: T } = constraint

  if (typesEqual(S, T)) {
    return unify(rest)
  } else if (S.type === 'TypeTypeVar') {
    if (mentionedTypeVars(T).has(S.id)) {
      throw new RecursiveTypeError(S, T, S, T)
    }
    return [
      ...unify(rest.map(constraint => ({
        lhs: applySubst([{ from: S, to: T }], constraint.lhs),
        rhs: applySubst([{ from: S, to: T }], constraint.rhs),
      }))),
      { from: S, to: T },
    ]
  } else if (T.type === 'TypeTypeVar') {
    if (mentionedTypeVars(S).has(T.id)) {
      throw new RecursiveTypeError(S, T, T, S)
    }
    return [
      ...unify(rest.map(constraint => ({
        lhs: applySubst([{ from: T, to: S }], constraint.lhs),
        rhs: applySubst([{ from: T, to: S }], constraint.rhs),
      }))),
      { from: T, to: S },
    ]
  } else if (S.type === 'TypeFun' && T.type === 'TypeFun') {
    if (S.parametersTypes.length !== T.parametersTypes.length) {
      throw new UnificationFailedError(S, T, `Function types have different number of parameters:\n  ${t(S)}\nand\n  ${t(T)}`)
    }
    return unify([
      ...rest,
      ...S.parametersTypes.map((paramType, i) => ({ lhs: paramType, rhs: T.parametersTypes[i] })),
      { lhs: S.returnType, rhs: T.returnType },
    ])
  } else if (S.type === 'TypeTuple' && T.type === 'TypeTuple') {
    if (S.types.length !== T.types.length) {
      throw new UnificationFailedError(S, T, `Tuple types have different number of elements:\n  ${t(S)}\nand\n  ${t(T)}`)
    }
    return unify([
      ...rest,
      ...S.types.map((elementType, i) => ({ lhs: elementType, rhs: T.types[i] })),
    ])
  } else if (S.type === 'TypeList' && T.type === 'TypeList') {
    return unify([...rest, { lhs: S.elementType, rhs: T.elementType }])
  } else if (S.type === 'TypeRef' && T.type === 'TypeRef') {
    return unify([...rest, { lhs: S.referredType, rhs: T.referredType }])
  } else if (S.type === 'TypeRecord' && T.type === 'TypeRecord') {
    const sLabels = S.fieldTypes.map(({ label }) => label)
    const tLabels = T.fieldTypes.map(({ label }) => label)
    sLabels.forEach((label) => {
      if (!tLabels.includes(label)) {
        throw new UnificationFailedError(S, T, `Record type ${t(T)} does not contain field ${label}.`)
      }
    })
    tLabels.forEach((label) => {
      if (!sLabels.includes(label)) {
        throw new UnificationFailedError(S, T, `Record type ${t(S)} does not contain field ${label}.`)
      }
    })
    return unify([
      ...rest,
      ...S.fieldTypes.map(({ label, fieldType }) => {
        const tFieldType = T.fieldTypes.find(({ label: tLabel }) => tLabel === label)!.fieldType
        return { lhs: fieldType, rhs: tFieldType }
      }),
    ])
  } else {
    throw new UnificationFailedError(S, T, `Cannot unify type\n  ${t(S)}\nwith\n  ${t(T)}`)
  }
}

export class UnificationFailedError extends Error {
  constructor(
    public lhs: Type,
    public rhs: Type,
    message?: string,
  ) {
    super(message)
  }
}
export class RecursiveTypeError extends UnificationFailedError {
  constructor(
    lhs: Type,
    rhs: Type,
    typeVar: TypeTypeVar,
    recursiveType: Type,
  ) {
    super(lhs, rhs, `Type variable ${t(typeVar)} occurs in ${t(recursiveType)}.`)
  }
}

/**
 * Returns a set of identifiers of the type variables mentioned in the given type.
 */
function mentionedTypeVars(type: Type, set: Set<number> | null = null): Set<number> {
  if (set === null) {
    set = new Set()
  }

  switch (type.type) {
    case 'TypeNat':
    case 'TypeBool':
    case 'TypeUnit':
    case 'TypeTop':
    case 'TypeBottom':
      return set
    case 'TypeTypeVar':
      set.add(type.id)
      return set
    case 'TypeRef':
      return mentionedTypeVars(type.referredType, set)
    case 'TypeFun':
      type.parametersTypes.forEach(paramType => mentionedTypeVars(paramType, set))
      return mentionedTypeVars(type.returnType, set)
    case 'TypeList':
      return mentionedTypeVars(type.elementType, set)
    case 'TypeTuple':
      type.types.forEach(elementType => mentionedTypeVars(elementType, set))
      return set
    case 'TypeSum':
      mentionedTypeVars(type.left, set)
      mentionedTypeVars(type.right, set)
      return set
    case 'TypeRecord':
      type.fieldTypes.forEach(({ fieldType }) => mentionedTypeVars(fieldType, set))
      return set
    default:
      throw new Error(`Cannot find mentioned type variables in type ${t(type)}.`)
  }
}
