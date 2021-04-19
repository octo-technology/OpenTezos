---
id: exam
title: Exam
---

### Question 1

What is correct about LIGO?

- [x] LIGO is a programming language for writing Tezos smart contracts.
- [ ] By default, smart contracts are written in LIGO language.
- [x] LIGO transpiles scripts written in a high-level language into a Michelson script.
- [ ] The LIGO syntax is PascaLigo.

### Question 2

What notions are defined inside the smart contract?

- [x] The type-definition of the storage.
- [ ] The balance on the contract.
- [ ] The initial value of the storage.
- [ ] The value of the entry point and its related parameters.
- [x] The type definition of the entry point.
- [ ] The size of the storage.
- [x] The code of the smart contract.
- [ ] The list of users allowed to call the smart contract.

### Question 3

What is returned by the execution of a smart contract?

- [ ] The current storage state when invoking the smart contract.
- [x] The modified storage state after invoking the smart contract.
- [ ] The entry point that has been called (and its related parameters).
- [x] The list of emitted operations produced by the execution of the smart contract.
- [ ] The balance of the contract.
- [ ] The size of the storage.
- [ ] The code of the smart contract.
- [ ] The list of users allowed to call the smart contract.


### Question 4

What is the right way to define a variable?

- [ ] `var int : my_age = 25`
- [ ] `int my_age = 25`
- [ ] `var int = my_age : 25`
- [ ] `var my_age : int = 25`
- [x] `var my_age : int := 25`
- [ ] `var my_age = 25 : int`

### Question 5

What is the right way to define a constant?

- [ ] `const string : my_name = "Roger"`
- [ ] `string my_age = "Roger"`
- [ ] `const string = my_name : "Roger"`
- [x] `const my_name : string = "Roger"`
- [ ] `const my_name : string := "Roger"`
- [ ] `const my_name = "Roger" : string`

### Question 6

Which of the following operations are correct?

- [x] `const a : int = 5 + 10`
- [x] `const c : tez = 5mutez + 0.000_010tez`
- [ ] `const c : nat = 5n - 2n`
- [x] `const b : int = 5n + 10`
- [ ] `const d : tez = 5mutez + 10n`
- [x] `const b : int = 5n - 2n`
- [x] `const d : tez = 5mutez - 1mutez`

### Question 7

What is correct about type aliasing?

- [x] Type aliasing consists of renaming a given type when the context calls for a more precise name.
- [x] Type aliasing increases the readability and maintainability of your smart contracts.
- [ ] `type name = string` is the correct way to define a type.
- [x] `type name is string` is the correct way to define a type.


### Question 8

What is a set?

- [ ] A linear collection of elements of the same type.
- [ ] A data structure which associate values of the same type to values of the same type.
- [x] An unordered collection of values of the same type.
- [ ] One-way data of different types can be packed into a single type, which is made of a field name and a field type.

### Question 9

What is a record?

- [ ] A linear collection of elements of the same type.
- [ ] A data structure which associate values of the same type to values of the same type.
- [ ] An unordered collection of values of the same type.
- [x] One-way data of different types can be packed into a single type, which is made of a field name and a field type.

###

### Question 10

Consider the following smart contract.

```js
type counterStorage is int

type counterEntrypoints is Increment of int | Decrement of int

type counterReturn is ########

function increment(const param : int; const s : counterStorage) : counterReturn is 
block { skip } with ((nil: list(operation)), s + param)

function decrement(const param : int; const s : counterStorage) : counterReturn is 
block { skip } with ((nil: list(operation)), s - param)

function main(const ep : counterEntrypoints; const store : counterStorage) : counterReturn is
block { 
    const ret : counterReturn = case ep of 
    | Increment(p) -> increment(p, store)
    | Decrement(p) -> decrement(p, store)
    end;
    
 } with ret
```

Complete the ######## part in the code to give a correct definition to the return type of the main function.

- [ ] `type counterReturn is list(operation) * counterEntrypoints`
- [ ] `type counterReturn is counterEntrypoints * counterStorage`
- [x] `type counterReturn is list(operation) * counterStorage`
- [ ] `type counterReturn is counterStorage`
- [ ] `type counterReturn is counterEntrypoints`
- [x] `type counterReturn is list(operation) * int`

What is an entrypoint for this smart contract?

- [ ] `Increment(p)`
- [ ] `Increment(p) -> increment(p, store)`
- [ ] `indiceEntrypoints`
- [ ] `Decrement(p)`
- [ ] `Decrement(p) -> decrement(p, store)`
- [x] `increment`
- [ ] `ret`
- [x] `decrement`

What command lines are correct for this smart contract?
(Assume that the smart contract is stored in a file **counter.ligo**)

- [x] ligo compile-contract counter.ligo main
- [ ] ligo compile-contract main counter.ligo
- [x] ligo dry-run counter.ligo main 'Increment(5)' '4'
- [ ] ligo dry-run counter.ligo increment 'Increment(5)' '4'
- [x] ligo compile-parameter counter.ligo main 'Decrement(5)'
- [ ] ligo compile-parameter counter.ligo decrement 'Decrement(5)'
- [ ] ligo compile-parameter counter.ligo main 'decrement' '5'
- [ ] ligo compile-parameter counter.ligo main '0'
- [x] ligo compile-storage counter.ligo main '0'
- [ ] ligo compile-storage counter.ligo main 'counterStorage(0)'
