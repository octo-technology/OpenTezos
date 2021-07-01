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





