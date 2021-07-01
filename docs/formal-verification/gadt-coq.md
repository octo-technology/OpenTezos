---
id: gadt-coq
title: Coq, GADT and Mi-Cho-Coq
authors: Frank Hillard
---

To better understand formal verification, let's first describe the theory and tools behind the formal analysis.

In order to perform a formal verification, we need a _proof assistant_. _Coq_ is a proof assistant which can be used for formal verification on Tezos smart contracts. Other proof assistants can be used instead of _Coq_ such as _Archetype_ or _K-framework_. In this section we will focus on _Coq_ which provides a language (_Gallina_) for defining theorems and for proving these theorems. The proof process relies on:

- A theory (i.e. a base foundation of mathematic): We will introduce a branch of mathematics called **Type theory**, and more specifically, the _Calculus of Construction_ (CoC), the building principle of _Coq_.

- An expression of the Michelson language as a formal definition: We use _GADT_ for the theory and _Mi-Cho-Coq_ in practice.

- A formalization of the Michelson script (code of the smart contract) into a theorem to prove this theorem (we'll see this in the next [chapter](/formal-verification/modeling-theorem)).

The goal is to:

- provide a solid type-checking mechanism of a Michelson script based on formal rules.

- ensure the semantic of the script by verifying post-conditions (in the next [section](/formal-verification/modeling-theorem)).

This section intends to give:
- a theoretical context about the mathematical principles (CoC, CiC) used in the formal proof process of _Coq_
- a bit of insight on how a language is designed with a _GADT_
- a brief description of the _Coq_ proof assistant
- a brief description of _Mi-Cho-Coq_ (library for _Coq_)

For a good understanding of this theoretical part, it is recommended to have some notions on first-order and second-order logic [[10]](/formal-verification/gadt-coq#references), mathematics (e.g. set, group, monoid, associativity, distributivity, reflexivity), functional programming, and language theory.

### Type theory
In mathematics, logic and computer science, a _type system_ is a formal system in which every term has a **type**. The type defines the meaning and the operations that can be performed on it. **Type theory** is the academic study of type systems.

Type theory is closely linked to many fields of active research, including the Curry–Howard correspondence [[6] [7]](/formal-verification/gadt-coq#references) that provides a deep isomorphism between _intuitionistic logic_, typed _λ-calculus_ and _cartesian closed categories_. 

Some type theories serve as alternatives to set theory as a foundation of mathematics. Two famous theories are _Alonzo Church's typed λ-calculus_ and _Per Martin-Löf's intuitionistic type theory_. The _Per Martin-Löf's intuitionistic type theory_ has been the foundation of constructive mathematics. For instance, Thierry Coquand's **Calculus of constructions** and its derivatives are the foundation used by **Coq** (the proof assistant) [[1]](/formal-verification/gadt-coq#references).

### Coq
Initially developed by Thierry Coquand, _Coq_ [[1]](/formal-verification/gadt-coq#references) is a proof assistant designed to develop mathematical proofs, and especially to write formal specifications, programs, and proofs that programs comply to their specifications. 

Specifications, programs, and proofs are formalized in the _Coq_ language called _Gallina_, which follows the _Calculus of Inductive Constructions_ (CIC).

A program is a sequence of instructions in a language. _Coq_ is a generic tool and can support many languages (e.g. Mi-Cho-Coq is a library for Michelson language support). A program represents **how** a modification is applied.
The specification of a program represents **what** a program is meant to do. _Coq_ provides a language (called Gallina -Terms) for modeling logical objects such as theorems, axioms, assumptions). The proof is a sequence of logical deductions (based on axioms, assumptions and the inference rule) that verify the **compliance of a program to its specification**.


#### CoC - CiC
Initially developed by Thierry Coquand, the _Calculus of Constructions_ [[13]](/formal-verification/gadt-coq#references) (or CoC) is a typed high-order _λ-calculus_ (i.e. a typed formal system taking the logic of second-order into account). The CoC is used as a typed programming language. 

Many derivatives of CoC have been created to handle inductive types, predicates and co-inductive types. The CIC ([[18]](/formal-verification/gadt-coq#references)) is an extension of CoC which integrates inductive datatype. The _Coq_ proof assistant is built upon CiC.

All logical judgments in Coq are typing judgments: the very heart of _Coq_ is, in fact, a type-checking algorithm. 

An interesting additional feature of _Coq_ is that it can automatically extract executable programs from specifications, either as _OCaml_ or as _Haskell_ source code.

#### Gallina (Term and Vernacular)
Logical objects (such as theorems, axioms) are formalized in Gallina-Term language, and proof scripts are formalized in Gallina-Vernacular language, which provides _tactics_.

The _Coq_ inference engine executes the proof script. In the case of a Tezos smart contract, the inference engine relies on the Coq universe and the _Mi-Cho-Coq_ library. 

For more information about the CoC and CiC foundation, it is recommended to read the official paper from Thierry Coquand and other documentation [[13] [16] [18]](/formal-verification/gadt-coq#references). It is required to know the basis of λ-calculus [[17]](/formal-verification/gadt-coq#references) in order to understand mathematical notations used in CoC and CiC.

### GADT
Generalized algebraic data type (GADT) is a generalization of parametric algebraic data types (i.e. a standard representation of algebraic data types).

The idea of **algebraic data types** is to define a language as a composite type and formalize an algebra of data types (like the algebra on numbers). The programming language can be seen as a complex-type with functors.

An essential application of GADTs is to embed **higher-order abstract syntax** in a type-safe fashion.

In computer science, **higher-order abstract syntax** (abbreviated HOAS) is a technique for the representation of abstract syntax trees for languages with variable binders. 

This article [[8]](/formal-verification/gadt-coq#references) describes how to define an **higher-order abstract syntax** in _Coq_ (i.e., defining axioms, and inductive types). 
GADT is similar to inductive families of data types (or inductive data types) found in _Coq_'s CIC [[18]](/formal-verification/gadt-coq#references).

#### Algebraic Data Type
In computer programming, and especially functional programming and type theory, an **algebraic data type** is a kind of composite type, (i.e., a type formed by combining other types).

Two common classes of algebraic types are product types (i.e., tuples and records) and sum types (i.e., tagged or disjoint unions, coproduct types or variant types).

The values of a product type typically contain several values, called **fields**. All values of that type have the same combination of field types. The set of all possible values of a product type is the set-theoretic product, i.e., the Cartesian product, of the sets of all possible values of its field types.

The values of a sum type are typically grouped into several classes, called **variants**. A value of a variant type is created with a quasi-functional entity called a constructor. Each variant has its own constructor, which takes a specified number of arguments with specified types. The set of all possible values of a sum type is the set-theoretic sum, i.e., the disjoint union, of the sets of all possible values of its variants.  

The _Algebraic Data Type_ (ADT) formalizes a language into a composite type and describes possible operations on data types.

#### Example with Michelson pairs and variants
Let's illustrate the ADT formalization by defining a set with PRODUCT (a product type) and SUM (a sum type) thus forming a _semi-ring_ that can model Michelson language structures (_Pairs_ and _Variants_). Defining Michelson data structures as an ADT provides a robust type-checking mechanism on Michelson scripts.

The Michelson language can be modeled as a mathematical object (set) with a set of rules (PRODUCT and SUM) describing possible operations on datatypes. 

PRODUCT type = `(a b)` (i.e., Michelson pair)
- reflexivity: (up to an isomorphism) _swap_ : `(a b) ~ (b a)`
- associativity: (up to an isomorphism) _assoc_ :  `((a, b), c) ~ (a, (b, c))`
- neutral element: (up to an isomorphism) _first_ : `(a,()) ~ a`

Programmatically speaking, a tuple `(int bool)` does not match a tuple `(bool int)`, but both contain the same information. These two tuples are equivalent up to an isomorphism (which is the function "swap"; i.e. `swap x = (snd x, fst x)`). Notice that the inverse function of _swap_ is _swap_. Also _assoc_ and _first_ are invertible (up to an isomorphism).

SUM type = (Either a b); `Either a b = Left a | Right b` (i.e. variant)
- reflexivity: `Either a b ~ Either b a` 
- neutral element (`Void`): `Either a Void ~ a` (there is no element in the set Void) equivalent to `a + 0 = a`
- associativity: (i.e. `triple (a b c) = Left a | Right c | Middle b`)
- distributivity: `(a,Either(b,c)) ~ Either (a,b) (a,c)` is equivalent to `(a * (b + c) = a*b + a*c)`
- `(a, Void) ~ Void` is equivalent to `a * 0 = 0`

Notice that the variant ("Either" concept) can be combined with pairs due to the distributivity rule. 
For the PRODUCT type, properties (associativity, distributivity) are respected up to an isomorphism that is invertible (i.e., an inverse function exists for each isomorphism). 

For example, the "triple" function compose a variant from three elements. The function "triple_inv" decompose a triple in a nested pair containing the three elements: `triple_inv x = ((Left(x) Middle(x)) Right(x))`. `triple (a (b c)) = Left a | Right c | Middle b`.

So, a set equipped with PRODUCT and SUM represents a language equipped with _pairs_ and _variants_ (such as Michelson language). 

> Other language structures such as _List_ can be defined using the _List Monad pattern_.  

#### A semi-ring to generalize Michelson language 
In algebra, a set equipped with PRODUCT and SUM is a semi-ring. Notice that the inverse of SUM has no meaning (subtraction `a - b` is not permitted; programmatically speaking, removing an integer from a structure that has no integer field has no meaning). That's why the set equipped with PRODUCT and SUM is just a semi-ring and not a ring (due to the missing relation `a + inv(a) ~ Void` where `inv(a)` does not exist).

> Formally speaking, a ring is an _abelian_ group whose operation is called _addition_, with a second binary operation called _multiplication_ that is associative, distributive over the _addition_ operation, and has a multiplicative identity element. 

In mathematics, **rings are algebraic structures that generalize fields**: multiplication need not be commutative and multiplicative inverses do not have to exist. In other words, a ring is a set equipped with two binary operations satisfying properties analogous to those of addition and multiplication of integers. Ring elements may be numbers, such as integers or complex numbers, but they may also be non-numerical objects, such as polynomial numbers or functions.

To conclude, the formalization of a language into an algebra of data types (ADT) allows to specify a mathematical representation of a language; and thus allows to use CoC principles to prove theorems on this algebra (i.e., verifying a script in this language). The **Mi-Cho-Coq** library is the formal _Coq_ representation of the Michelson language and allows to specify a formal representation of a Tezos smart contract.

### Mi-Cho-Coq
The _Mi-Cho-Coq_ library represents the bridge between Tezos smart contracts and formal proofs in Coq.

The _Mi-Cho-Coq_ library [[2]](/formal-verification/gadt-coq#references) is a formalization of the Michelson language [[9]](/formal-verification/gadt-coq#references) using the Coq interactive theorem prover [[1]](/formal-verification/gadt-coq#references).

In practice, the _Mi-Cho-Coq_ library is used to produce a formal definition of a Michelson script (i.e., the "Modeling theorem" [section](/formal-verification/modeling-theorem#Example_vote)). Each Michelson instruction has its equivalent in the _Mi-Cho-Coq_ library (e.g. see the syntax [subsection](/formal-verification/gadt-coq#Syntax)).

The _Mi-Cho-Coq_ library provides a formal definition (in Gallina) of the **type system** (Michelson types), the **syntax** (instructions of the Michelson), the **semantics** (evaluator) and the lexing and parsing (for type-checking).

> It is recommended to have notions of _Language theory_ in order to understand the following Mi-Cho-Coq definition (grammar rules).

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

Notice that the inductive type `instruction`  defines typing rules for each instruction (`SEQ`, `IF`, `LOOP`, ...).

#### Semantics
The **semantics** of types is defined by interpreting them with predefined _Coq_ types (e.g. int -> Z, nat -> N, mutez -> int63). The semantics of Michelson is defined by an evaluator `eval` formalized as a _Fixpoint_. 

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

Notice that the evaluator defines actions that must be performed for each type of instruction.


> Since evaluating a Michelson instruction might fail (whereas _Coq_ functions cannot), the return type of this evaluator is wrapped in an exception monad (handling errors such as overflow, lexing, parsing, fuel).

> Coq forbids non-terminating functions, so we use a common _Coq_ trick to define the evaluator on diverging instructions such as _LOOP_: we make the evaluator structurally recursive on an extra argument of type Datatypes.nat called the **fuel** of the evaluator.

## Conclusion

Proof assistants are built upon the Calculus of Construction, a branch of the Type theory. _Coq_ is proof assistant and can be seen as a formal engine.

We saw how the Michelson language can be represented as an Algebraic Data Type (GADT) by giving an example of building a semi-ring for representing _pairs_ and _variants_. 

Mi-Cho-Coq is a GADT formalizing the Michelson language (data structures and instructions (a formal definition for each) and is used in combination with _Coq_ to verify a Michelson script.

Coq and Mi-Cho-Coq are the tools allowing the formal verification of Tezos smart contract. Other similar tools can be used such as Archetype or K-framework.  

## References

[1] Coq - https://coq.inria.fr/distrib/current/refman/index.html

[2] Mi-cho-coq repository - https://gitlab.com/nomadic-labs/mi-cho-coq

[3] Introduction to Coq - http://www-sop.inria.fr/members/Yves.Bertot/courses/introcoq.pdf

[4] Gallina - https://coq.inria.fr/distrib/current/refman/language/gallina-specification-language.html

[5] Lambda-Calculus and Isomorphism Curry-Howard - http://disi.unitn.it/~bernardi/RSISE11/Papers/curry-howard.pdf

[6] Isomorphism Curry-Howard for Dummies - https://www.pédrot.fr/slides/inria-junior-02-15.pdf

[7] Isomorphism Curry-Howard (small) - https://www.seas.harvard.edu/courses/cs152/2015sp/lectures/lec15-curryhoward.pdf

[8] Higher-order abstract syntax in Coq - https://web.archive.org/web/20060830033826/http://www.site.uottawa.ca/~afelty/dist/tlca95.ps

[9] Michelson - https://tezos.gitlab.io/michelson-reference/

[10] Logique formelle - https://www.irif.fr/~roziere/2ord/2ndordre.pdf

[12] Axioms de Peano - https://fr.wikipedia.org/wiki/Axiomes_de_Peano

[13] Calculus of constructions - https://fr.wikipedia.org/wiki/Calcul_des_constructions

[14] Mini-guide Coq - https://www.lri.fr/~paulin/MathInfo/coq-survey.pdf

[15] Coq’Art - https://www.labri.fr/perso/casteran/CoqArt/coqartF.pdf

[16] The calculus of constructions (1988) by Thierry Coquand - https://www.sciencedirect.com/science/article/pii/0890540188900053

[17] Lambda-calcul - https://fr.wikipedia.org/wiki/Lambda-calcul

[18] Calculus of Inductive Constructions - https://coq.inria.fr/distrib/current/refman/language/cic.html

[19] Michelson - https://www.michelson-lang.com/why-michelson.html

[20] Vote example - https://gitlab.com/nomadic-labs/mi-cho-coq/-/blob/master/src/contracts_coq/vote.v

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