---
id: exam
title: Exam
authors: Frank Hillard
---


### Question 1

What is returned by the execution of a smart contract ?

- [ ] The current storage state when invoking the smart contract
- [x] The modified storage state after invoking the smart contract
- [ ] The entrypoint that has been called (and its related parameters)
- [x] The list of emitted operations produced by the execution of the smart contract
- [ ] The balance of the contract
- [ ] The size of the storage
- [ ] The code of the smart contract
- [ ] The list of users allowed to call the smart contract

### Question 2

What makes the bridge between the Tezos world and the formal world of Coq ?

- [ ] The Michelson language
- [ ] The Coq universe (predefined Coq types)
- [x] The Mi-cho-coq library
- [ ] The Tezos protocol


### Question 3

Who is Thierry Coquand ?

- [ ] The founder of the type theory called λ-calculus
- [x] The founder of the type theory called the calculus of constructions (CoC).
- [x] The principal developer of the _Coq_ proof assistant.
- [ ] The founder of the intuitionistic type theory.

### Question 4

GADT stands for ?

- [x] Generalized algebraic data type
- [ ] Generic abstract data type
- [ ] Generalized abstract data type
- [ ] Generic algebraic data type

### Question 5

What kind of algebra is used to define the Michelson language ?

- [ ] a non-commutative monoid (which only provides associativity of _pairs_, because _pairs_ are not distributive over variants)
- [x] a semi-ring (the rule `a + inv(a) ~ Void` is not verified (where "inv(a)" represents the inverse of `a`); because `inv(a)` does not exist)
- [ ] a ring (the rule `a + inv(a) ~ Void` is verified (where "inv(a)" represents the inverse of `a`))
- [ ] a group (fully symetric)

### Question 6

We have seen that a Michelson script must be translated into an annotated script (i.e. a formal definition) (because Mi-Cho-Coq provides an equivalent for each Michelson instruction). In the theorem we want to prove, we specify that "the execution of the annotated script is equivalent to post-conditions". Who is responsible for the execution of this annotated script ?

- [ ] The Michelson interpreter
- [x] The Mi-Cho-Coq evaluator
- [ ] The Coq inference engine

### Question 7

What post-conditions depends on (What post-conditions are built upon) ?

- [x] The storage modification produced by the execution of the smart contract
- [x] The entrypoint parameter which is invoked
- [ ] The sequence of Michelson instructions (smart contract code)
- [x] Operations produced by the execution of the smart contract
- [x] Environment variables (transaction properties such as sender, amount)
- [ ] Predefined Coq types and inductive types (Coq libraries)
- [ ] Mi-Cho-Coq library

