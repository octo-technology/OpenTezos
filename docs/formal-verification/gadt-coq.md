---
id: gadt
title: GADT and Coq
slug: /formal-verification
---

Before tackling the formal verification on Tezos smart contract (written in Michelson language), we will describe the theory and tool behind the formal analysis.

In order to perform a formal verification, a formal tool (also called proof assistant) must be used. The _Coq_ proof assistant has been chosen to perform formal verification on Tezos smart contracts. _Coq_ provides a language for defining theorems and for proving these theorems. The proof process relies on:
- a theory (i.e. a base foundation of mathematic) = We will introduce this branch of mathematics is called **Type theory**, and more specifically the Calculus of Construction which is the building principle of _Coq_.
- expressing the Michelson language as a formal definition = theoretically speaking (GADT, Monad), in practice (Mi-cho-coq)

The goal is to ensure the typechecking of a script (written in Michelson language). This is how we verify a script in a language as formal objects.
Then the goal is to ensure the semantic analysis of a script. this is done by verifying post-conditions (//TODO see section "modeling theorem").

This section intends to give:
- a theoretical context about the mathematical principles (CoC, CiC) mis en oeuvre in the formal proof process of _Coq_
- a bit of insight of how implementation of a language is designed with GADT and Monads,
- a brief description of the _Coq_ proof assistant
- a brief description of the Mi-Cho-Coq_ library for _Coq_

For a good understanding of this theoretical part, it is recommended to have some notions on logic (first-order, second-order) [10], basics of mathematic (set, group, monoid, associativity, distributivity, reflexivity), functionnal programming, and language theory.


## Type theory

In mathematics, logic, and computer science, a type system is a formal system in which every term has a "type" which defines its meaning and the operations that may be performed on it. **Type theory** is the academic study of type systems.

Type theory is closely linked to many fields of active research. Most particular, the Curry–Howard correspondence [[6] [7]](/formal-verification/references) provides a deep isomorphism between intuitionistic logic, typed λ-calculus and cartesian closed categories. 

Some type theories serve as alternatives to set theory as a foundation of mathematics. Two well-known such theories are _Alonzo Church's typed λ-calculus_ and _Per Martin-Löf's intuitionistic type theory_. The _Per Martin-Löf's intuitionistic type theory_ has been the foundation of constructive mathematics. For example, Thierry Coquand's **Calculus of constructions** and its derivatives are the foundation used by **Coq** (the proof assistant) [[1]](/formal-verification/references).




### Category theory

Category theory formalizes mathematical structure and its concepts in terms of a labeled directed graph called a category, whose nodes are called objects, and whose labeled directed edges are called _arrows_ (or morphisms). A category has two basic properties: the ability to compose the arrows associatively, and the existence of an identity arrow for each object. The language of category theory has been used to formalize concepts of other high-level abstractions such as _sets_, _rings_, and _groups_. Informally, category theory is a general theory of functions. 

The common usage of "type theory" is when those types are used with a term rewrite system. The most famous early example is Alonzo Church's simply typed lambda calculus. Church's theory of types helped the formal system avoid the Kleene–Rosser paradox that afflicted the original untyped lambda calculus. Church demonstrated that it could serve as a foundation of mathematics and it was referred to as a **higher-order logic**.

In **category theory**, a category is **Cartesian closed** if, roughly speaking, any morphism defined on a product of two objects can be naturally identified with a morphism defined on one of the factors. These categories are particularly important in mathematical logic and the theory of programming, in that their internal language is the **simply typed lambda calculus**. They are generalized by closed monoidal categories, whose internal language, linear type systems, are suitable for both quantum and classical computation.

 Here is an embedding of the **simply typed lambda calculus** with an arbitrary collection of base types, tuples and a fixed point combinator: 

```js
data Lam :: * -> * where
  Lift :: a                     -> Lam a        // lifted value
  Pair :: Lam a -> Lam b        -> Lam (a, b)   // product
  Lam  :: (Lam a -> Lam b)      -> Lam (a -> b) // lambda abstraction
  App  :: Lam (a -> b) -> Lam a -> Lam b        // function application
  Fix  :: Lam (a -> a)          -> Lam a        // fixed point
```

A fixed point of a function is a value that is mapped to itself by the function. In combinatory logic for computer science, a fixed-point combinator (or fixpoint combinator) is a higher-order function _fix_ that returns some fixed point of its argument function, if one exists.

#### Monad

In category theory, a monad (also triple, triad, standard construction and fundamental construction) is an endofunctor (a functor mapping a category to itself), together with two natural transformations required to fulfill certain coherence conditions. Monads are used in the theory of pairs of adjoint functors, and they generalize closure operators on partially ordered sets to arbitrary categories. 

In functional programming, a **monad** is an abstraction that allows structuring programs generically. Supporting languages may use monads to abstract away boilerplate code needed by the program logic. Monads achieve this by providing their own data type, which represents a specific form of computation, along with two procedures:

- One to wrap values of any basic type within the monad (yielding a **monadic value**);
- Another to compose functions that output monadic values (called **monadic functions**)

This allows monads to simplify a wide range of problems, like handling potential undefined values (with the Maybe monad), or keeping values within a flexible, well-formed list (using the List monad). With a monad, a programmer can turn a complicated sequence of functions into a succinct pipeline that abstracts away auxiliary data management, control flow, or side-effects.


Without getting too much into mathematics, in programming a Monad is a Design Pattern. It’s a structure, a wrapper which “enriches” a value by giving it a context.

//TODO ... 
It's about having representations simulating exactly notions such as exceptions and side-effects while keeping the purety of functionnal languages.

Famous examples of Monads are:

    Option/Maybe monad (it can represent a missing/null value)
    Either monad (it can represent a successful operation or a failure)
    IO/Effect monad (it can represent side-effects)
    Task monad (it can represent asynchronous side-effects)



#### GADT

Generalized algebraic data type (GADT) is a generalization of parametric algebraic data types (i.e. a standard representation of a algebraic data types).

The idea of **algebraic data types** is to define a language as a composite type and formalize an algebra of data types (like the algebra on numbers). (//TODO see ADT section) .The programming language can be seen as a complex-type with functors.

An important application of GADTs is to embed **higher-order abstract syntax** in a type safe fashion.

In computer science, **higher-order abstract syntax** (abbreviated HOAS) is a technique for the representation of abstract syntax trees for languages with variable binders. 

This article [8] describes how to define a **higher-order abstract syntax** in _Coq_ (i.e. defining axioms, and inductive types). 
GADT is similar to inductive families of data types (or inductive data types) found in _Coq_'s _Calculus of Inductive Constructions_.

##### ADT

In computer programming, especially functional programming and type theory, an **algebraic data type** is a kind of composite type, i.e., a type formed by combining other types.

Two common classes of algebraic types are product types (i.e., tuples and records) and sum types (i.e., tagged or disjoint unions, coproduct types or variant types).

The values of a product type typically contain several values, called fields. All values of that type have the same combination of field types. The set of all possible values of a product type is the set-theoretic product, i.e., the Cartesian product, of the sets of all possible values of its field types.

The values of a sum type are typically grouped into several classes, called variants. A value of a variant type is usually created with a quasi-functional entity called a constructor. Each variant has its own constructor, which takes a specified number of arguments with specified types. The set of all possible values of a sum type is the set-theoretic sum, i.e., the disjoint union, of the sets of all possible values of its variants. Enumerated types are a special case of sum types in which the constructors take no arguments, as exactly one value is defined for each constructor. 


The ADT describes possible operations on Data type;it allows to define an algebra on data types. In abstract algebra, a monoid is defined by reflexivity, associativity and a neutral element. 

The typechecking of a language can be modeled as a mathematical object (set) with a set of rules (PRODUCT and SUM) describing possible operations on datatypes.

PRODUCT type = (a b)
- reflexive => (not really but up to an isomorphism) _swap_ : (a b) ~ (b a)
- associativity (assoc) => (not really but up to an isomorphism) _assoc_ :  ((a, b), c) ~ (a, (b, c)) 
- neutral element (munit) => (not really but up to an isomorphism) _first_ (a,()) ~ a  

Programmatically speaking, a tuple `(int bool)` does not typecheck a tuple `(bool int)` but both contain the same information. These two tuples are equivalent up to an isomorphism (which is the function "swap"; i.e. `swap x = (snd x, fst x)`). Notice that the inverse function of _swap_ is _swap_; and also _assoc_ and _first_ are inversible (up to an isomorphism).

SUM type = (Either a b); `Either a b = Left a | Right b`
- reflexivity = `Either a b ~ Either b a` 
- neutral element (Void) = Either a Void ~ a (there is no element in the set Void) equivalent to `a + 0 = a`
- associativity: (variant) (i.e. `triple (a b c) = Left a | Right c | Middle b`)
- distributivity = `(a,Either(b,c)) ~ Either (a,b) (a,c)`  ===> equivalent to `(a * (b + c) = a*b + a*c)`
- (a, Void) ~ Void ===> equivalent to `a * 0 = 0`

Notice that all properties are inversible (up to an isomorphism).

In algebra, a set equipped with neutral element and associativity (PRODUCT and SUM) is a (//TODO monoid). Notice that the inverse of SUM has no meaning (subtraction `a - b` is not permitted; programmatically speaking, removing an integer from a structure that has no integer field have no meaning).


For example, we can create the Maybe monad.

```
MAYBE a = Nothing | Just a
        = Either () a
```

For example, we can define a List monad. 
```
data List a = Nil | Cons a (List a)
```


## Coq

Initially developed by Thierry Coquand, Coq [1] is a proof assistant designed to develop mathematical proofs, and especially to write formal specifications, programs and proofs that programs comply to their specifications. 

Properties, programs and proofs are formalized in the _Coq_ language called _Gallina_ which follows the principles of the Calculus of Inductive Constructions (CIC).


### CoC - CiC

Initially developed by Thierry Coquand, the _Calculus Of Constructions_ [13] (or CoC) is a typed high-order λ-calculus (i.e. a typed formal system taking the logic of second order into account). The CoC is used as a typed programming language. 

Many derivatives of CoC have been created to handle inductive types, predicates and co-inductive types.
The Calculus of Inductive Constructions ([18] CiC) is an extension of CoC which integrates inductive datatype. The _Coq_ proof assistant is built upon CiC.

All logical judgments in Coq are typing judgments: the very heart of _Coq_ is in fact a type-checking algorithm. 

An interesting additional feature of _Coq_ is that it can automatically extract executable programs from specifications, as either Objective Caml or Haskell source code.

### Gallina (Term and Vernacular)

Logical objects (such as theorems, axioms) are formalized in Gallina-Term language and proof scripts are formalized in Gallina-Vernacular language which provides _tactics_.

The proof script is executed by the _Coq_ inference engine. In the case of a Tezos smart contract, the inference engine rely on the Coq universe and the Mi-Cho-Coq library. 

For more information about the CoC and CiC foundation, it is recommended to read the official paper of "Thierry Coquand" and other documentation [13] [16] [18]. It is required to know the basis of λ-calculus [17] in order to understand mathematical notations used in CoC and CiC.




















//TODO to remove ???
### Logic of first-order

#### Horn clause

In logic, a **Horn clause** is a clause (a disjunction of literals) with at most one positive literal. A Horn clause with exactly one positive literal is a **definite clause**; a Horn clause with no positive literals is sometimes called a **goal clause**, especially in logic programming. A Horn formula is a conjunction of Horn clauses. A **dual-Horn clause** is a clause with at most one negative literal. Horn clauses play a basic role in logic programming and are important for constructive logic.