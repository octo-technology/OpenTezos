---
id: michocoq
title: Mi-Cho-Coq
authors: Frank Hillard
---


### Introduction

The _Mi-Cho-Coq_ library represents the bridge between Tezos smart contract and formal proof in Coq.

The _Mi-Cho-Coq_ library [2] is a formalization of the Michelson language [9] using the Coq interactive theorem prover [1].

In practice, the _Mi-Cho-Coq_ library is used to produce a formal definition of a Michelson script (e.g. the "Modeling theorem" [section](/formal-verification/modeling-theorem#Example_vote)). Each Michelson instruction has its equivalent in the _Mi-Cho-Coq_ library (e.g. see the syntax [subsection](/formal-verification/michocoq#Syntax)).

### Content

The _Mi-Cho-Coq_ library provides a formal definition (in Gallina) of the **type system** (Michelson types), the **syntax** (instructions of the Michelson), the **semantics** (evaluator) and the lexing and parsing (for type-checking).

> It is recommended to have notions of Language theory in order to understand the following Mi-Cho-Coq definition (grammar rules).


#### Type system

The **type system** consists of the definition of types (comparable types and non-comparable ones).

```
Inductive simple_comparable_type : Set :=
| string
| nat
| int
| bytes
...

Inductive comparable_type : Set :=
| Comparable_type_simple : simple_comparable_type -> comparable_type
| Cpair : simple_comparable_type -> comparable_type -> comparable_type.

Inductive type : Set :=
| Comparable_type (_ : simple_comparable_type)
| key
| unit
| signature
| option (a : type)
| list (a : type)
| set (a : comparable_type)
| contract (a : type)
| operation
| pair (a : type) (b : type)
| or (a : type) (_ : annot_o) (b : type) (_ : annot_o)
| lambda (a b : type)
| map (k : comparable_type) (v : type)
| big_map (k : comparable_type) (v : type)
| chain_id.
```

#### Syntax

The ****syntax** and typing of Michelson instructions are formalized as a dependent inductive type to rule out ill-typed instructions.

```
Inductive instruction :
  forall (self_type : Datatypes.option type) (tail_fail_flag : Datatypes.bool) (A B : Datatypes.list type), Set :=
| NOOP {A} : instruction A A
| FAILWITH {A B a} : instruction (a ::: A) B
| SEQ {A B C} : instruction A B -> instruction B C -> instruction A C
| IF_ {A B} : instruction A B -> instruction A B -> instruction (bool ::: A) B
| LOOP {A} : instruction A (bool ::: A) -> instruction (bool ::: A) A
...
```

#### Semantics


The **semantics** of types is defined by interpreting them by predefined Coq types (e.g. int -> Z, nat -> N, mutez -> int63). The semantics of Michelson is defined by an evaluator `eval` formalized as a _Fixpoint_. 

```
Fixpoint eval {self_type} {tff} {env} {A : stack_type} {B : stack_type}
         (i : instruction self_type tff A B) (fuel : Datatypes.nat) {struct fuel} :
  stack A -> M (stack B) :=
  match fuel with
  | O => fun SA => Failed _ Out_of_fuel
  | S n =>
    match i, SA, env with
    | FAILWITH, (x, _), _ => Failed _ (Assertion_Failure _ x)
    | NOOP, SA, _ => Return SA
    | DUP, (x, SA), _ => Return (x, (x, SA))
    | SWAP, (x, (y, SA)), _ => Return (y, (x, SA))
    | PUSH a x, SA, _ => Return (concrete_data_to_data _ x, SA)
    | UNIT, SA, _ => Return (tt, SA)
    | LAMBDA a b code, SA, _ => Return (existT _ _ code, SA)
    | EQ, (x, SA), _ => Return ((x =? 0)%Z, SA)
    | NEQ, (x, SA), _ => Return (negb (x =? 0)%Z, SA)
    | LT, (x, SA), _ => Return ((x <? 0)%Z, SA)
        | SEQ B C, SA, env => 
        let! r := eval env B n SA in
        eval env C n r
    | IF_ bt bf, (b, SA), env =>
        if b then eval env bt n SA else eval env bf n SA
    | LOOP body, (b, SA), env =>
        if b then eval env (body;; (LOOP body)) n SA else Return SA
...
```

> Since evaluating a Michelson instruction might fail (which Coq functions cannot), the return type of this evaluator is wrapped in an exception monad (handling errors such as overflow, lexing, parsing, fuel).

> Coq forbids non-terminating function so we use a common Coq trick to define the evaluator on diverging instructions such as LOOP: we make the evaluator structurally recursive on an extra argument of type Datatypes.nat called the fuel of the evaluator.




# ANNEXE 

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