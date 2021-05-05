---
id: michocoq
title: Mi-Cho-Coq
slug: /formal-verification
---


The _Mi-Cho-Coq_ library represents the bridge between Tezos smart contract and formal proof in Coq.

The _Mi-Cho-Coq_ library [2] is a formalization of the Michelson language [9] using the Coq interactive theorem prover [1].

It provides a formal definition (in Gallina) of the type system (Michelson types), the syntax (instructions of the Michelson), the semantics (evaluator) and the lexing and parsing (for type-checking).


The **type system** consist of the definition of types (comparable types and non-comparable ones).

The ****syntax** and typing of Michelson instructions are formalized as a dependent inductive type to rule out ill-typed instructions.

The **semantics** of types is defined by interpreting them by predefined Coq types (e.g. int -> Z, nat -> N, mutez -> int63). The semantics of Michelson is defined by an evaluator `eval` formalized as a _Fixpoint_. 
  
> Since evaluating a Michelson instruction might fail (which Coq functions cannot), the return type of this evaluator is wrapped in an exception monad (handling errors such as overflow, lexing, parsing, fuel).

> Coq forbids non-terminating function so we use a common Coq trick to define the evaluator on diverging instructions such as LOOP: we make the evaluator structurally recursive on an extra argument of type Datatypes.nat called the fuel of the evaluator.
