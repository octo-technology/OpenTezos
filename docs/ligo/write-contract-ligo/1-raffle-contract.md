---
id: 1-raffle-contract
title: Raffle contract
authors: Maxime Sallerin and Benjamin Pilia
---

import NotificationBar from '../../../src/components/docs/NotificationBar';

The language used in smart contracts on Tezos is [Michelson](/michelson/introduction), a stack-based language. However, this kind of language is not commonly used by developers and as the code becomes complex and longer, it gets increasingly harder to keep readable and clean code in Michelson. However, the Tezos ecosystem provides a number of high level languages, which make smart contracts development as easy as any application development. LIGO is one of these languages.

In this chapter, we will focus on smart contract development with the LIGO language (and particularly the _PascaLigo_ syntax). The most important aspects of LIGO will be covered here.

If you want to learn the complete LIGO syntax, you can take a look at:
1. [The official Ligolang documentation](https://ligolang.org/docs/intro/introduction): a complete reference maintained by the developing team.
2. [Tezos Academy](https://tezosacademy.io/): a gamified interactive tutorial with 30 examples. 

This chapter has been written with a smart contract development approach. Each part starts with an explanation of the LIGO syntax (called _LIGO prerequisite_ sections) that are later used for smart contract development.

The _LIGO prerequisite_ parts can be skipped if you do not want to learn the _PascaLigo_ syntax.

<NotificationBar>
  <p>

DISCLAIMER: This smart contract is meant for educational purpose only, and is not suitable for any other use. OpenTezos cannot be held responsible for any other use.

  </p>
</NotificationBar>

## Raffle smart contract
In this chapter, a simple [raffle](https://en.wikipedia.org/wiki/Raffle) example is considered. A raffle is a gambling game, where players buy tickets. The winning ticket is then drawn. In our case, a raffle will be developed in a smart contract with those rules: 
- An administrator (with his public address) wants to organize a raffle, which reward is some Tez.
- The administrator pays the reward to the winner with his own funds. 
- Anyone can participate in the raffle, and the participation fee is the same for everyone. However, each address can participate only once.
- Each ticket has the same probability of being picked.
- After a given time, defined at the beginning of the raffle, the administrator will close the raffle, and send the reward to the winner.

This raffle can be divided into three steps:
1. A raffle is opened, with a reward, for a given time.
2. During the allowed time, anyone can buy a raffle ticket.
3. The raffle is closed, the winner is randomly selected and rewarded with the prize.

Only one raffle session can be ongoing.

> Some choices have been made for educational purposes.

<NotificationBar>
  <p>

About the word **ticket**:
A ticket is a reserved word in Michelson and LIGO, introduced by the Edo protocol. 
In this chapter, the word ticket only refers to a raffle ticket. 

  </p>
</NotificationBar>

## Prerequisites for smart contracts development
When developing smart contracts, two tools are extremely useful:
1. a LIGO syntax support for your IDE
2. a LIGO compiler

These two tools will point out syntax errors and type-checking errors. However, it is recommended to compile aLigosmart contract as often as possible. The compilation will detect errors that the IDE linter won't. Thus, errors will be found early and should be more easily addressed.

## Smart contract initialization
> We're about to see everything that is required to create an empty smart contract:
> - Types, built-in types
> - Constants, Variables
> - Introduction to functions
> - main function
> -Ligocompilation

A Tezos smart contract has three parts:
1. **parameter**: possible invocations (function calls) of the smart contract.
2. **storage**: persistent on-chain data structure. Note that anyone can read this, but only the contract can change it.
3. **code**: a sequence of Michelson instructions to be executed when invoking a smart contract.

Compiling a LIGO smart contract will provide us all three parts.

Let's get started! The first step is to create a _.ligo_ file. Let's create a file called `raffle.ligo` which will contain a minimaly viable contract.

### LIGO concepts used in this part

#### Types
LIGO is strongly and statically typed. This means that the compiler checks how a contract processes data, ensuring that each function's expectations are met.
If it passes the test, the contract will not fail at run-time due to some inconsistent assumptions on the data. This is called type-checking.

LIGO types are built on top of the Michelson's type system.

##### Built-in types

LIGO supports all Michelson types, from basic primitives (such as `string` or `int`) to composite types (such as `option`, `list` or `map`), including contract-specific types (such as `address` or `tez`).

You can find all built-in types on the [LIGO gitlab](https://gitlab.com/ligolang/ligo/-/tree/dev#L35).

Below is a table of the most used built-in types. Most of them will be used in the raffle smart contract:

| Type                           | Description                                                                               | Example                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `unit`                         | carries no information                                                                    | `Unit`                                                                                                                                                        |
| `option`                       | value of some type or none                                                                | `Some ("this string is defined")`, `(None: option string)`                                                                                                    |
| `string`                       | Sequence of character                                                                     | `"This is a string"`                                                                                                                                          |
| `address`                      | Address of an implicit account                                                            | `("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address)`                                                                                                          |
| `int`                          | Positive or negative integer                                                              | `-5`,  `int(1n)`                                                                                                                                              |
| `nat`                          | Positive integer                                                                          | `0n`, `abs (1)`                                                                                                                                               |
| `tez`, `tz`, `mutez`           | Amount in tz or mutez                                                                     | `5mutez`, `10tez`                                                                                                                                             |
| `bool`                         | Boolean: true or false                                                                    | `True`, `False`                                                                                                                                               |
| `timestamp`                    | Timestamp (bakers are responsible for providing the given current timestamp)              | `("2000-01-01T10:10:10Z" : timestamp)`, `Tezos.now`                                                                                                           |
| `bytes`                        | Sequence of bytes                                                                         | `0x12e4`                                                                                                                                                      |
| `list (type)`                  | List definition. The same element can be found several times in a list                    | `list [1; 2; 2]`, `nil`                                                                                                                                       |
| `set (type)`                   | Set definition. The same element cannot be found several times in a list                  | `set []`, `set [3; 2; 2; 1]`                                                                                                                                  |
| `type1 * type2 ... * typeN`    | Tuple definition                                                                          | `("Alice", 5n, True)`                                                                                                                                         |
| `(keyType, valueType) map`     | Map an element of type `keyType` to an element of type `valueType`. Meant for finite maps | `Map.empty`, `Map.literal [(("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address), (1,2)); (("tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN" : address), (0,3))]`         |
| `(keyType, valueType) big_map` | Map an element of type `keyType` to an element of type `valueType`. Meant for huge maps   | `Big_map.empty`, `Big_map.literal [(("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address), (1,2)); (("tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN" : address), (0,3))]` |

> As you may have noticed, there is no `float` type. Indeed, `float` is not deterministic as its precision depends on the hardware that it runs on.

##### Type aliases

Type aliasing consists in giving a new name to a given type when the context calls for a more precise name.

It can be used to express our intent more clearly: for instance, a `coordinates` type defined by a tuple of two integers is meaningful than just using a tuple.

```js 
type coordinates is (int * int)
const my_position : coordinates = (2, 1)
```

⚠️ `Tuples` will be explained later.

It is also helpful to define a type for complex structures, such as the expected input and return of a function or the contract storage.

#### Constants & Variables declaration

##### Constants

Constants are by design immutable, which means they can only be assigned once, at their declaration. A constant is defined by a name, a type, and a value:

```js
const age : int = 25
```

##### Variables

Variables, unlike constants, are mutable. They cannot be declared in a global scope, but they can be declared and used within functions or as function parameters.

```js
var c: int := 2 + 3
c := c - 3
```

⚠️ The assignment operator is different: `:=` for variables, instead of `=` for constants.

#### Introduction to functions

As in many other language, LIGO allows to create functions. There are several ways to define a function, but the header is always the same:

```js
function <functionName> (const param1 : <param2Type>, const param2 : <param2Type>, ...): <returnType> is
    <code>
```

Functions will be detailed below. At this point, since the main function does nothing, it will use a [blockless function](/docs/ligo/write-contracts-ligo#blockless-functions) definition.

#### Main function
Every LIGO smart contract must define a `main` function. This `main` function defines _operations_ and updates the contract _storage_, depending on the contract parameter. It takes two parameters, the **contract parameter** and the **on-chain storage**, and returns a pair made of a **list of operations** and a **(new) on-chain storage**. 

<br/>

![](../../../static/img/ligo/main_function.svg)
<small className="figure">FIGURE 1: Main function</small>

<br/>

The contract parameter and storage type are up to the contract designer, but the type for the list of operations is not.

The return type of the `main` function is as follows (assuming that the `storage` type has already been defined elsewhere).

```js
type storage is ...  // Any name, any type
type returnMainFunction is list (operation) * storage
```

#### LIGO compilation

TheLigocode above should now compile with this command:

```shell
$Ligocompile-contract <ligoFile> <mainFunction>
```

If the compilation is successful, the output will be the Michelson code of the contract.

It is recommended to run this command as often as possible to check the code syntax and the types.

### Raffle storage initialization

Now that we have introduced some basic LIGO concepts (`type`, `constant`, `variable`, `function` and the `main` function), let's design our _Raffle_ smart contract.

The first step is to define the storage. Contract storage holds the contract data: it can be a single value or a complex structure. The storage definition is a `type` instruction. First, the storage will be as simple as possible: _empty_.

```js
type storage is unit
```

⚠️ The word _unit_ is a reserved word of the language and represents an _empty type_.

### Raffle parameter initialization

The parameter definition lists all the entrypoints of a smart contract, i.e., the names of the functions that can be called from the exterior.

At this point, the parameter definition will be skipped. It will be defined later on in this chapter.

To define a smart contract without any parameter definition:

```js
type raffleEntrypoints is unit
```

### Raffle code definition

The last part of a smart contract is the code definition. A smart contract can execute no instruction, but it must always return two things:

1. a list of operations
2. the storage

TheLigocompiler expects the smart contract to have at least one function, which is the `main` function. It does not have to be named that way but it is good practice to do so:

```js
type storage is unit
type raffleEntrypoints is unit

function main (const action : raffleEntrypoints; const store : storage): list (operation) * storage is
    ((nil: list(operation)), store)
```

This `main` function returns return an empty list of operations and the same storage as provided as input.

The raffle smart contract can now be compiled:

```shell
$Ligocompile-contract raffle.ligo main
```

### Summing-up

The three Michelson parts have an equivalence in LIGO.

| Michelson | LIGO                                                                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| parameter | `type raffleEntrypoints is`                                                                                                              |
| storage   | `type storage is`                                                                                                                        |
| code      | `function main (const action : raffleEntrypoints; const store : storage): list (operation) * storage is ((nil: list(operation)), store)` |
