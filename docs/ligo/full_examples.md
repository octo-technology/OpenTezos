---
id: full_examples
disable_pagination: true
title: Examples
---

## Functions

## Records

## Loops

## Main function

## Transaction

## Option

# Full example - Funadvisor

This example is meant to illustrate the communication between contracts (with get_entrypoint_opt LIGO function) 
and lambda pattern which allows to modify a contract already deployed. 
It deals with implementing, deploying and interacting with Tezos smart contracts.

## The Fund and its advisor

The `indice` contract represents a fund value, 
and the `advisor` contract gives an advice on investing on this fund.

### Transaction workflow

The `advisor` contract can be invoked to request the fund value to the `indice` contract (via a transaction). 
The `indice` contract receives the request (transaction) 
and sends back the requested value. 
When `advisor` contract receives the fund value it can apply the "algorithm" to check it is worth investing !

TODO SCHEMA HERE

The resulting advice is stored in the storage (in result field).

### Lambda pattern

The real business logic of the `advisor` smart contract lies in the lambda function which is defined in the storage. 
The storage is vowed to be modified so as for the business logic (lambda).

So an entrypoint `ChangeAlgorithm` is provided to modify the algorithm that computes the worth of investment.

> **Lambda**   
> Changing the behavior of a smart contract can be done by customizing the implementation through lambda functions. 
> The idea is to implement the smart contract logic in a lambda function that can be modified after the contract deployment.  
> Find out more about lambda [here](https://tezosacademy.io/pascal/chapter-lambda).

## Requirement

1. Having the LIGO Compiler, and an code editor installed. 
   If not go [here](https://opentezos.com/ligo/installation).
2. Having a sandboxed mode ready.

## Sandboxed mode

This part will explain to you how to run a ‘localhost-only’ instance of a Tezos network.

### Run a sandboxed node

For instance, if you want to run a local network with two nodes, in the first terminal, 
the following command will initialize a node listening for peers on port 19731 and 
listening for RPC on port 18731.

```shell
./src/bin_node/tezos-sandboxed-node.sh 1 --connections 1
```

To launch the second node, run the following command in another terminal, 
and it will listen on port 19739 and 18739:

```shell
./src/bin_node/tezos-sandboxed-node.sh 9 --connections 1
```

### Use the sandboxed client

Once your node is running, open a new terminal 
and initialize the “sandboxed” client data in a temporary directory:

```shell
eval `./src/bin_client/tezos-init-sandboxed-client.sh 1`
```

### Activate a protocol

```shell
tezos-activate-alpha
```

> Find out more about sandboxed mode [here](https://tezos.gitlab.io/user/sandbox.html)

## First contract - Indice

### Defining storage and entrypoints

Let's create an `indice_types.ligo` file to put all the needed type definition.

- `indiceStorage` is of integer type
- `indiceEntrypoints` that determine how the contract will be invoked:
  - By increasing the contract storage value with `Increment of int`.
  - By decreasing it with `Decrement of int`.
  - By sending this value to another contract that would have called it, with `SendValue of unit`.
- `indiceFullReturn`that determines the return type of the main function.

```js
// indice_types.ligo

type indiceStorage is int

type indiceEntrypoints is Increment of int | Decrement of int | SendValue of unit

type indiceFullReturn is list(operation) * indiceStorage
```

> Note that the `sendValue` entrypoint does not take any parameter.

### Defining the main function

Now let's move to another file `indice.ligo` 
that will include the previous file `indice_types.ligo` 
and create the main function `indiceMain`
with writing `#include "indice_types.ligo"` at the beginning of the script.

```js
// indice.ligo
`#include "indice_types.ligo"`

function indiceMain(const ep : indiceEntrypoints; const store : indiceStorage) : indiceFullReturn is
block { skip } with ((nil: list(operation)), store )
```

Let's keep the block empty for now and see if it compiles correctly.

```shell
ligo compile-contract indice.ligo indiceMain
```

This should return:

```js
{ parameter or (or (int %decrement) (int %increment) (unit %sendValue)) ;
  storage int ;
  code { CDR ; NIL operation ; PAIR } }
```

Now let's implement the three entrypoints:

```js
// indice.ligo
`#include "indice_types.ligo"`

function indiceMain(const ep : indiceEntrypoints; const store : indiceStorage) : indiceFullReturn is
block { 
    const ret : indiceFullReturn = case ep of 
    | Increment(p) -> increment(p, store)
    | Decrement(p) -> decrement(p, store)
    | SendValue(p) -> sendValue(p, store)
    end;
    
 } with ret
```

### Defining the entrypoints

#### Increment

`increment` function takes two parameters:
- `param` of type `int` which is the value that will be incremented to the storage.
- `s` the initial value of the storage.

This function return type is `indiceFullReturn` and returns:
- an empty list of operations
- a modified storage with a new value of `s + param`

```js
//indice.ligo

function increment(const param : int; const s : indiceStorage) : indiceFullReturn is 
block { skip } with ((nil: list(operation)), s + param)
```

#### Decrement

`decrement` function takes two parameters:
- `param` of type `int` which is the value that will be decremented to the storage.
- `s` the initial value of the storage.

This function return type is `indiceFullReturn` and returns:
- an empty list of operations
- a modified storage with a new value of `s - param`

```js
//indice.ligo

function decrement(const param : int; const s : indiceStorage) : indiceFullReturn is 
block { skip } with ((nil: list(operation)), s - param)
```

#### SendValue

`sendValue` function takes two parameters:
- `param` of type `unit` which means it takes no parameter.
- `s` the initial value of the storage.

This function return type is `indiceFullReturn` and returns:
- a list of operation containing a transaction.
- the initial storage that is not modified.

The predefined function `Tezos.get_entrypoint_opt` can be used 
to retrieve the definition of a single entry point.  
`%receiveValue` is the label of the entrypoint that will be defined in the advisor contract.

When the function `get_entrypoint_opt` does not find any contract 
at a given `address`, or the contract doesn't match the type, then `None` is returned.

> Note that the `Tezos.get_entrypoint_opt` function is a solution of two-way communication 
> between contract that are already deployed.
> Find out more on `Tezos.get_entrypoint_opt` [here](https://tezosacademy.io/pascal/chapter-polymorphism)

```js
//indice.ligo

function sendValue(const param : unit; const s : indiceStorage) : indiceFullReturn is 
block { 
    const c_opt : option(contract(int)) = Tezos.get_entrypoint_opt("%receiveValue", Tezos.sender);
    const destinataire : contract(int) = case c_opt of
    | Some(c) -> c
    | None -> (failwith("sender cannot receive indice value") : contract(int))
    end;
    const op : operation = Tezos.transaction(s, 0mutez, destinataire);
    const txs : list(operation) = list [ op; ];
 } with (txs, s)
```

Let's compile again the main function to be sure we made no mistakes.

```shell
ligo compile-contract indice.ligo indiceMain
```

## Second contract - Advisor

### Defining storage and entrypoints

In a new file called `advisor_types.ligo` we define:

- `advisorStorage` is of record type containing three fields:
    - `indiceAddress` of type `address` to communicate with the indice contract.
    - `algorithm` which takes an `int` of parameter and returns a `bool`, 
      depending on the business logic.
    - `result` which is `True` if the investor should invest and `False` otherwise.
- `advisorEntrypoints` that determines how the contract will be invoked:
    - By receiving an integer value from another contract storage with `ReceiveValue of int`.
    - By requesting this value with `sendValue of unit`. 
    - By modifying the algorithm that computes the worth of investment with `ChangeAlgorithm of advisorAlgo`.
- `advisorFullReturn`that determines the return type of the main function.

```js
//advisor_types.ligo
type advisorAlgo is int -> bool

type advisorStorage is record [
    indiceAddress : address;
    algorithm : advisorAlgo;
    result : bool;
]

type advisorEntrypoints is ReceiveValue of int | RequestValue of unit | ChangeAlgorithm of advisorAlgo

type advisorFullReturn is list(operation) * advisorStorage
```
### Defining the main function

Like before, let's create another file `advisor.ligo`
that will include the previous file `advisor_types.ligo`
and create the main function `advisorMain`.

```js
//advisor.ligo
#include "advisor_types.ligo"

function advisorMain(const ep : advisorEntrypoints; const store : advisorStorage) : advisorFullReturn is
block { 
    const ret : advisorFullReturn = case ep of 
    | ReceiveValue(p) -> execute(p, store)
    | RequestValue(p) -> request(p, store)
    | ChangeAlgorithm(p) -> change(p, store)
    end;
 } with ret
```

### Defining the entrypoints

#### ReceiveValue

Symmetrically to the `SendValue` function defined for the indice contract, 
we define here the `RequestValue` function, so the two-way communication is complete.

`request` function takes two parameters:
- `param` of type `unit` which means it takes no parameter.
- `s` the initial value of the storage.

This function return type is `advisorFullReturn` and returns:
- a list of operation containing a transaction.
- the initial storage that is not modified.

```js
//advisor.ligo

function request(const p : unit; const s : advisorStorage) : advisorFullReturn is
block { 
    const c_opt : option(contract(unit)) = Tezos.get_entrypoint_opt("%sendValue", s.indiceAddress);
    const destinataire : contract(unit) = case c_opt of
    | Some(c) -> c
    | None -> (failwith("indice cannot send its value") : contract(unit))
    end;
    const op : operation = Tezos.transaction(unit, 0mutez, destinataire);
    const txs : list(operation) = list [ op; ];
 } with (txs, s)
```

#### RequestValue

`execute` function takes two parameters:
- `indiceVal` of type `int` which is the value that will be passed in the algorithm.
- `s` the initial value of the storage.

This function return type is `advisorFullReturn` and returns:
- an empty list of operations
- a modified storage with a new value for `s.result ` 
  that will be the boolean return of the algorithm.

```js
//advisor.ligo

function execute(const indiceVal : int; const s : advisorStorage) : advisorFullReturn is
block { 
    s.result := s.algorithm(indiceVal)
 } with ((nil : list(operation)), s)
```

#### ChangeAlgorithm

`change` function takes two parameters:
- `p` of type `advisorAlgo` which is the algorithm function corresponding to the wanted business logic.
- `s` the initial value of the storage.

This function return type is `advisorFullReturn` and returns:
- an empty list of operations
- a modified storage with a new value for `s.algorithm `.

```js
//advisor.ligo

function change(const p : advisorAlgo; const s : advisorStorage) : advisorFullReturn is
block { 
    s.algorithm := p;
 } with ((nil : list(operation)), s)
```

Let's compile the main function.

```shell
ligo compile-contract advisor.ligo advisorMain
```

### Compilation and deployment

