---
id: compilation
title: Compilation
---

In order to deploy a contract to a real Tezos network, 
we'd have to compile it first, 
this can be done with a tool called transpiler (aka LIGO compiler) is used to transform 
LIGO code into Michelson code.
Michelson smart contract are stored in a file with .tz extension.

## Compiling a contract

Here is how to transform LIGO code into Michelson code using the LIGO compiler in command line.

```shell
ligo compile-contract SOURCE_FILE ENTRY_POINT
```

## Defining the initial storage

```shell
ligo compile-storage SOURCE_FILE ENTRY_POINT LIGO_EXPRESSION
```

## Invoking the contract with a parameter

```shell
ligo compile-parameter SOURCE_FILE ENTRY_POINT LIGO_EXPRESSION
```

## Example

Let's consider the counter contract for our example.

Our counter contract will store a single `int` as it's storage, 
and will accept an `action` variant in order to re-route 
our single `main` function to two entrypoints for `add` (addition) and `sub` (subtraction).

```js
type parameter is
  Increment of int
| Decrement of int

type storage is int

type return is list (operation) * storage

function add (const n : int; const store : storage) : storage is store + n
function sub (const n : int; const store : storage) : storage is store - n

function main (const action : parameter; const store : storage) : return is
  ((nil : list(operation)),
   case action of
     Increment (n) -> add (n, store)
   | Decrement (n) -> sub (n, store)
   end)
```

### Compile

```shell
ligo compile-contract examples/counter.ligo main
```

Command above will output the following Michelson code:

```
{ parameter (or (int %decrement) (int %increment)) ;
  storage int ;
  code { DUP ;
         CDR ;
         DIP { DUP } ;
         SWAP ;
         CAR ;
         IF_LEFT
           { DUP ;
             DIP { DIP { DUP } ; SWAP } ;
             PAIR ;
             DUP ;
             CDR ;
             DIP { DUP ; CAR } ;
             SUB ;
             DIP { DROP 2 } }
           { DUP ;
             DIP { DIP { DUP } ; SWAP } ;
             PAIR ;
             DUP ;
             CDR ;
             DIP { DUP ; CAR } ;
             ADD ;
             DIP { DROP 2 } } ;
         NIL operation ;
         PAIR ;
         DIP { DROP 2 } } }

```

### Initial storage

However in order to **originate** a Michelson contract on Tezos, 
we also need to provide the initial storage value, we can use `compile-storage` 
to compile the LIGO representation of the storage to Michelson.

```shell
ligo compile-storage src/counter.ligo main 5
// Outputs: 5
```

### Invocation parameter

Same rules apply for parameters, as apply for translating LIGO storage values to Michelson. 
We will need to use `compile-parameter` to compile our action variant into Michelson, here's how:

```shell
ligo compile-parameter src/counter.ligo main 'Increment(5)'
// Outputs: (Right 5)
```

