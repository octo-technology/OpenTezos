---
id: gadt-coq
title: GADT and Coq
authors: Frank Hillard
---

For a better understanding of the formal verification on Tezos smart contract (written in Michelson language) (in the next [section](/formal-verification/modeling-theorem)), we will first describe the theory and tools behind the formal analysis.

In order to perform a formal verification, a formal tool (also called proof assistant) must be used. The _Coq_ proof assistant has been chosen to perform formal verification on Tezos smart contracts. _Coq_ provides a language for defining theorems and for proving these theorems. The proof process relies on:
- a theory (i.e. a base foundation of mathematic): We will introduce this branch of mathematics is called **Type theory**, and more specifically the Calculus of Construction which is the building principle of _Coq_.
- expressing the Michelson language as a formal definition: theoretically speaking (GADT, Monad), in practice (Mi-Cho-Coq)
- formalizing a Michelson script into a theorem and proving this theorem (in the next [section](/formal-verification/modeling-theorem)).

The goal is to:
- provide a strong typechecking mechanism of a Michelson script based on formal rules.
- ensure the semantic of a script by verifying post-conditions (in the next [section](/formal-verification/modeling-theorem)).

This section intends to give:
- a theoretical context about the mathematical principles (CoC, CiC) used in the formal proof process of _Coq_
- a bit of insight on how a language is designed with a GADT
- a brief description of the _Coq_ proof assistant
- a brief description of the Mi-Cho-Coq_ (library for _Coq_)

For a good understanding of this theoretical part, it is recommended to have some notions on logic (first-order, second-order) [[10]](/formal-verification/references), basics of mathematic (set, group, monoid, associativity, distributivity, reflexivity), functional programming, and language theory.


### Type theory

In mathematics, logic, and computer science, a type system is a formal system in which every term has a "type" which defines its meaning and the operations that may be performed on it. **Type theory** is the academic study of type systems.

Type theory is closely linked to many fields of active research. Most particular, the Curry–Howard correspondence [[6] [7]](/formal-verification/references) provides a deep isomorphism between intuitionistic logic, typed λ-calculus and cartesian closed categories. 

Some type theories serve as alternatives to set theory as a foundation of mathematics. Two well-known such theories are _Alonzo Church's typed λ-calculus_ and _Per Martin-Löf's intuitionistic type theory_. The _Per Martin-Löf's intuitionistic type theory_ has been the foundation of constructive mathematics. For example, Thierry Coquand's **Calculus of constructions** and its derivatives are the foundation used by **Coq** (the proof assistant) [[1]](/formal-verification/references).


### Coq

Initially developed by Thierry Coquand, _Coq_ [[1]](/formal-verification/references) is a proof assistant designed to develop mathematical proofs, and especially to write formal specifications, programs and proofs that programs comply to their specifications. 

Properties, programs and proofs are formalized in the _Coq_ language called _Gallina_ which follows the principles of the Calculus of Inductive Constructions (CIC).


#### CoC - CiC

Initially developed by Thierry Coquand, the _Calculus Of Constructions_ [[13]](/formal-verification/references) (or CoC) is a typed high-order λ-calculus (i.e. a typed formal system taking the logic of second-order into account). The CoC is used as a typed programming language. 

Many derivatives of CoC have been created to handle inductive types, predicates and co-inductive types.
The Calculus of Inductive Constructions ([[18]](/formal-verification/references) CiC) is an extension of CoC which integrates inductive datatype. The _Coq_ proof assistant is built upon CiC.

All logical judgments in Coq are typing judgments: the very heart of _Coq_ is, in fact, a type-checking algorithm. 

An interesting additional feature of _Coq_ is that it can automatically extract executable programs from specifications, as either Objective Caml or Haskell source code.

#### Gallina (Term and Vernacular)

Logical objects (such as theorems, axioms) are formalized in Gallina-Term language and proof scripts are formalized in Gallina-Vernacular language which provides _tactics_.

The proof script is executed by the _Coq_ inference engine. In the case of a Tezos smart contract, the inference engine rely on the Coq universe and the Mi-Cho-Coq library. 

For more information about the CoC and CiC foundation, it is recommended to read the official paper of "Thierry Coquand" and other documentation [[13] [16] [18]](/formal-verification/references). It is required to know the basis of λ-calculus [[17]](/formal-verification/references) in order to understand mathematical notations used in CoC and CiC.



### GADT

Generalized algebraic data type (GADT) is a generalization of parametric algebraic data types (i.e. a standard representation of algebraic data types).

The idea of **algebraic data types** is to define a language as a composite type and formalize an algebra of data types (like the algebra on numbers). The programming language can be seen as a complex-type with functors.

An important application of GADTs is to embed **higher-order abstract syntax** in a type-safe fashion.

In computer science, **higher-order abstract syntax** (abbreviated HOAS) is a technique for the representation of abstract syntax trees for languages with variable binders. 

This article [[8]](/formal-verification/references) describes how to define a **higher-order abstract syntax** in _Coq_ (i.e. defining axioms, and inductive types). 
GADT is similar to inductive families of data types (or inductive data types) found in _Coq_'s _Calculus of Inductive Constructions_ [[18]](/formal-verification/references).

#### ADT

In computer programming, especially functional programming and type theory, an **algebraic data type** is a kind of composite type, (i.e., a type formed by combining other types).

Two common classes of algebraic types are product types (i.e., tuples and records) and sum types (i.e., tagged or disjoint unions, coproduct types or variant types).

The values of a product type typically contain several values, called **fields**. All values of that type have the same combination of field types. The set of all possible values of a product type is the set-theoretic product, i.e., the Cartesian product, of the sets of all possible values of its field types.

The values of a sum type are typically grouped into several classes, called **variants**. A value of a variant type is usually created with a quasi-functional entity called a constructor. Each variant has its own constructor, which takes a specified number of arguments with specified types. The set of all possible values of a sum type is the set-theoretic sum, i.e., the disjoint union, of the sets of all possible values of its variants.  

Basically, the Algebraic Data Type (ADT) formalizes a language into a composite type and describes possible operations on data types.

#### Example with Michelson pairs and variants

Let's illustrate the ADT formalization by defining a set with PRODUCT (a product type) and SUM (a sum type) thus forming a semi-ring which can model Michelson language structures (Pairs and Variants). Defining Michelson data structures as an ADT provides a strong typechecking mechanism on Michelson scripts.

 The Michelson language can be modeled as a mathematical object (set) with a set of rules (PRODUCT and SUM) describing possible operations on datatypes. 

PRODUCT type = `(a b)` (i.e. Michelson pair)
- reflexivity: (up to an isomorphism) _swap_ : `(a b) ~ (b a)`
- associativity: (up to an isomorphism) _assoc_ :  `((a, b), c) ~ (a, (b, c))`
- neutral element: (up to an isomorphism) _first_ `(a,()) ~ a`

Programmatically speaking, a tuple `(int bool)` does not match a tuple `(bool int)` but both contain the same information. These two tuples are equivalent up to an isomorphism (which is the function "swap"; i.e. `swap x = (snd x, fst x)`). Notice that the inverse function of _swap_ is _swap_; and also _assoc_ and _first_ are invertible (up to an isomorphism).

SUM type = (Either a b); `Either a b = Left a | Right b` (i.e. variant)
- reflexivity: `Either a b ~ Either b a` 
- neutral element (`Void`): `Either a Void ~ a` (there is no element in the set Void) equivalent to `a + 0 = a`
- associativity: (i.e. `triple (a b c) = Left a | Right c | Middle b`)
- distributivity: `(a,Either(b,c)) ~ Either (a,b) (a,c)` is equivalent to `(a * (b + c) = a*b + a*c)`
- `(a, Void) ~ Void` is equivalent to `a * 0 = 0`

Notice that the variant ("Either" concept) can be combined with pairs due to the distributivity rule. 
Like for the PRODUCT type, properties (associativity, distributivity) are respected up to an isomorphism which is invertible (i.e. an inverse function exist for each isomorphism). 

For example, the "triple" function compose a variant from 3 elements. The function "triple_inv" decompose a triple in a nested pair containing the three elements: `triple_inv x = ((Left(x) Middle(x)) Right(x))`. `triple (a (b c)) = Left a | Right c | Middle b`.

So, a set equipped with PRODUCT and SUM represents a language equipped with _pairs_ and _variants_ (such as Michelson language). 

> Other language structures such as _List_ can be defined using the List Monad pattern.  

#### A semiring to generalize Michelson language 

In algebra, a set equipped with PRODUCT and SUM is a semi-ring. Notice that the inverse of SUM has no meaning (subtraction `a - b` is not permitted; programmatically speaking, removing an integer from a structure that has no integer field has no meaning). That's why the set equipped with PRODUCT and SUM is just a semi-ring and not a ring (due to the missing relation `a + inv(a) ~ Void` where `inv(a)` does not exist).

> Formally, a ring is an _abelian_ group whose operation is called _addition_, with a second binary operation called _multiplication_ that is associative, is distributive over the _addition_ operation, and has a multiplicative identity element. 

In mathematics, **rings are algebraic structures that generalize fields**: multiplication need not be commutative and multiplicative inverses need not exist. In other words, a ring is a set equipped with two binary operations satisfying properties analogous to those of addition and multiplication of integers. Ring elements may be numbers such as integers or complex numbers, but they may also be non-numerical objects such as polynomials, or functions.

To conclude , the formalization of a language into an algebra of data types (ADT) allows to specify a mathematical representation of a language; and thus allows to use CoC principles for proving theorems on this algebra (i.e. verifying a script of this language). The **Mi-Cho-Coq** library is the formal _Coq_ representation of the Michelson language and allows to specify a formal representation of a Tezos smart contract.


### Mi-Cho-Coq

The _Mi-Cho-Coq_ library represents the bridge between Tezos smart contract and formal proof in Coq.

The _Mi-Cho-Coq_ library [[2]](/formal-verification/references) is a formalization of the Michelson language [[9]](/formal-verification/references) using the Coq interactive theorem prover [[1]](/formal-verification/references).

In practice, the _Mi-Cho-Coq_ library is used to produce a formal definition of a Michelson script (e.g. the "Modeling theorem" [section](/formal-verification/modeling-theorem#Example_vote)). Each Michelson instruction has its equivalent in the _Mi-Cho-Coq_ library (e.g. see the syntax [subsection](/formal-verification/gadt-coq#Syntax)).

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

> Coq forbids non-terminating function so we use a common Coq trick to define the evaluator on diverging instructions such as LOOP: we make the evaluator structurally recursive on an extra argument of type Datatypes.nat called the **fuel** of the evaluator.













