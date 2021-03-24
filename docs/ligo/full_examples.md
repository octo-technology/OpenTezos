---
id: full_examples
disable_pagination: true
title: Full examples
---

# Funadvisor

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
2. Having a sandboxed mode ready

## Sandboxed mode

This part will explain to you how to run a ‘localhost-only’ instance of a Tezos network.

### Run a sandboxed node

For instance, if you want to run a local network with two nodes, in the first terminal, 
the following command will initialize a node listening for peers on port 19731 and listening for RPC on port 18731.

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

### Defining storage

In a indice_types.ligo file we will put all the needed type definition.
For now let's definine the type of the storage and the entrypoints.

- `indiceStorage` is of integer type
- `indiceEntrypoints` that determine how the contract will be invoked:
  - By increasing the contract storage value with `Increment of int`.
  - By decreasing it with `Decrement of int`.
  - By sending this value to another contract that would have called it, with `sendValue of unit`.
- `indiceFullReturn`that determine the return type of the main function.
  

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
and create the main function `indiceMain`.
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

Increment function take two parameters:
- `param` of type `int` which is the value we will ad to the storage.
- `s` of type `indiceStorage`

This function return type is `indiceFullReturn` and will returns:
- an empty list of operations
- a modified storage which`s`

```js
function increment(const param : int; const s : indiceStorage) : indiceFullReturn is 
block { skip } with ((nil: list(operation)), s + param)
```

#### Decrement

```js
function decrement(const param : int; const s : indiceStorage) : indiceFullReturn is 
block { skip } with ((nil: list(operation)), s - param)
```

#### SendValue

```js
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

