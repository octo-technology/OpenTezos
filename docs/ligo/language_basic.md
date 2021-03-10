---
id: language_basics
title: Language basics
---

In this chapter, all the following examples will use the PascaLigo syntax.

# Types

LIGO is strongly and statically typed. This means that the compiler checks how your contract processes data, 
ensuring that each function's expectations are met. 
If it passes the test, your contract will not fail at run-time due to some inconsistent assumptions on your data. This is called type checking.

LIGO types are built on top of Michelson's type system.

## Built-in types

LIGO comes with all basic types built-in like string, int or tez for account balance or monetary transactions. 
You can find all built-in types on the [LIGO gitlab](https://gitlab.com/ligolang/ligo/-/tree/dev#L35).

## Type aliases

Type aliasing consists of renaming a given type when the context calls for a more precise name. 
This increases readability and maintainability of your smart contracts. 
For example we can choose to alias a string type as an animal breed - this will allow us to comunicate our intent with added clarity.

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

Often contracts require complex data structures, 
which in turn require well-typed storage or functions to work with. 
LIGO offers a simple way to compose simple types into structured types.

The first of those structured types is the record, 
which aggregates types as fields and indexes them with a field name. 
In the example below you can see the definition of data types 
for a ledger that keeps the balance and number of previous transactions for a given account.

```js
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

# Constants & Variables

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

# Maths, Numbers & Tez

LIGO offers three built-in numerical types:

- `int` are integers, such as `10`, `-6` and `0`.
- `nat` are natural numbers (integral numbers greater than or equal to zero). They are followed by the suffix **n** such as `3n`, `12n` and `0n` for the natural zero.
- `tez` are units of measure of Tezos tokens. They can be decimals and are followed by **tez** or **tz** such as `3tz` or `12.4tez`. You can also type units of millionth of tez, using the suffix **mutez** after a natural literal, such as `1000mutez` or `0mutez`.

⚠️ Notice there are no floating point types in LIGO as they are not determinist in hardware modules.

> Pro tip: you can use underscores for readability when defining large
> numbers:
>```js
>const sum : tez = 100_000mutez
>```

## Addition

Addition in LIGO is accomplished by means of the `+` infix
operator. Some type constraints apply, for example you cannot add a
value of type `tez` to a value of type `nat`.

```js
// int + int yields int
const a : int = 5 + 10

// nat + int yields int
const b : int = 5n + 10

// tez + tez yields tez
const c : tez = 5mutez + 0.000_010tez

//tez + int or tez + nat is invalid
// const d : tez = 5mutez + 10n

// two nats yield a nat
const e : nat = 5n + 10n

// nat + int yields an int: invalid
// const f : nat = 5n + 10;

const g : int = 1_000_000
```

## Subtraction

Subtraction looks as follows.

⚠️ Even when subtracting two `nats`, the result is an `int`

```js
const a : int = 5 - 10

// Subtraction of two nats yields an int
const b : int = 5n - 2n

// Therefore the following is invalid
// const c : nat = 5n - 2n

const d : tez = 5mutez - 1mutez
```

## Multiplication

You can multiply values of the same type, such as:

```js
const a : int = 5 * 5
const b : nat = 5n * 5n

// You can also multiply `nat` and `tez`
const c : tez = 5n * 5mutez
```

## Division

In LIGO you can divide `int`, `nat`, and `tez`. Here is how:

⚠️ Remember that there are no floating point numbers in LIGO so dividing 9 by 2 will output 4 and not 4.5

Therefore division of two `tez` values results into a `nat`

```js
const a : int = 10 / 3
const b : nat = 10n / 3n
const c : nat = 10mutez / 3mutez
```

## Modulo

LIGO also allows you to compute the remainder of the Euclidean division. In LIGO, it is a natural number.

```js
const a : int = 120
const b : int = 9
const rem1 : nat = a mod b  // 3
```

## Casting

You can *cast* an `int` to a `nat` and vice versa. Here is how:

```js
const a : int = int (1n)
const b : nat = abs (1)
```

## Checking a nat

You can check if a value is a `nat` by using a predefined cast
function which accepts an `int` and returns an optional `nat`: if the
result is not `None`, then the provided integer was indeed a natural
number, and not otherwise.

```js
const is_a_nat : option (nat) = is_nat (1)
```

