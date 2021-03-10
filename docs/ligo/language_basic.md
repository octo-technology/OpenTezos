---
id: language_basics
title: Language basics
---

In this chapter, all the following examples will use the PascaLigo syntax.
# Types

LIGO is strongly and statically typed. This means that the compiler checks how your contract processes data, ensuring that each function's expectations are met. If it passes the test, your contract will not fail at run-time due to some inconsistent assumptions on your data. This is called type checking.

LIGO types are built on top of Michelson's type system.

## Built-in types
LIGO comes with all basic types built-in like string, int or tez for account balance or monetary transactions. You can find all built-in types on the [LIGO gitlab](https://gitlab.com/ligolang/ligo/-/tree/dev#L35).

## Type aliases
Type aliasing consists of renaming a given type when the context calls for a more precise name. This increases readability and maintainability of your smart contracts. For example we can choose to alias a string type as an animal breed - this will allow us to comunicate our intent with added clarity.

```js
type breed is string
const dog_breed : breed = "Saluki"
```

## Simple types
```js
// The type account_balances denotes maps from addresses to tez

type account_balances is map (address, tez)

const ledger : account_balances =
  map [("tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx" : address) -> 10mutez]
```
We will look more deeply into the map construct in the following chapters.

## Structured types
Often contracts require complex data structures, which in turn require well-typed storage or functions to work with. LIGO offers a simple way to compose simple types into structured types.

The first of those structured types is the record, which aggregates types as fields and indexes them with a field name. In the example below you can see the definition of data types for a ledger that keeps the balance and number of previous transactions for a given account.

```
type account is record [
  balance : tez;
  transactions : nat
]

const my_account : account = record [
    balance = 10mutez;
    transactions = 5n
  ]
```

We will look more deeply into the record construct in the following chapters.

# Constants and Variables

## Constants
Constants are immutable by design, which means their values cannot be reassigned. Put in another way, they can be assigned once, at their declaration. When defining a constant you need to provide a name, type and a value:

```js
const age : int = 25
```

## Variables
Variables, unlike constants, are mutable. They cannot be declared in a global scope, but they can be declared and used within functions, or as function parameters.
```js
var c: int := 2 + 3
c := c - 3
```

⚠️ Notice the assignment operator := for var, instead of = for constants.











