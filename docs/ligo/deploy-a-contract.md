---
id: deploy-a-contract
title: Deploy a contract
---

# Smart Contract

A Tezos smart contract is a piece of **code** written in Michelson language (a low-level stack-based Turing-complete language).

It also defines all **entrypoints** (invocable functions) of the smart contract. In other words it defines the prototype of each entrypoint (e.g. specifies the types of parameters of the entrypoint).  

It also defines the **storage** of the smart contract (i.e. the data structure of the persistent memory associated to the smart contract).  

## Storage

The storage is an allocated memory space associated with a smart contract. 
The storage is the permanent data store for the smart contract.
The description of the storage is done by strongly-typing the data structure.

## Entrypoints

Entrypoints are invokable function for a smart contract.
Executing an entrypoint takes some parameters and a current state of the storage and returns a new state of storage and some operations.

![](../../static/img/ligo/smart_contract.svg)
<small className="figure">FIGURE 1: Smart contract</small>

> Operations are transactions (smart contract invocation) that will be sent to other contracts. 
> They will trigger an entrypoint at the targeted contract, 
> or a tez transfer (no invocation of entrypoint). 
> If the execution of an entrypoint produces operations (an ordered list of transactions) 
> then they are sent and executed according to the order of the operations on the list.

# LIGO Compiler

## Compiling a contract

In order to deploy a contract in a Tezos network,
we have to compile it first,
this can be done with a tool called compiler (aka LIGO compiler) used to transform
LIGO code into Michelson code.

Michelson smart contracts are stored in a file with .tz extension.

Here is how to transform LIGO code into Michelson code using the LIGO compiler in the command line.

```shell
ligo compile-contract SOURCE_LIGO_FILE MAIN_FUNCTION
```

Where:
- **SOURCE_LIGO_FILE** is the path to your LIGO file containing the main function.
- **MAIN_FUNCTION** is the name of your main function.

Example:

```shell
ligo compile-contract examples/counter.ligo main 
```

The examples are detailed later in the chapter, [here](#example).

> You can store the michelson output of the above command in .tz file 
> in order to use it later when deploying the contract:
> ```
> ligo compile-contract SOURCE_LIGO_FILE ENTRY_POINT > MICHELSON_FILE
> ```

## Defining the initial storage

The michelson output of the following command can be used to init the storage 
when deploying the contract.

```shell
ligo compile-storage SOURCE_LIGO_FILE MAIN_FUNCTION 'STORAGE_STATE'
```

Where:
- **STORAGE_STATE** is a LIGO expression that defines the initial state of the storage.

Example:

```shell
ligo compile-storage src/counter.ligo main 5
// Outputs: 5
```

## Invoking the contract with a parameter

The michelson output of the following command can be used as the entrypoint name 
when invoking an entrypoint of the smart contract.

```shell
ligo compile-parameter SOURCE_LIGO_FILE MAIN_FUNCTION 'ACTION(P)'
```

Where:
- **ACTION(P)** is a LIGO expression used to specify the action that triggers the associated entrypoint with the corresponding parameter p.

Example:

```shell
ligo compile-parameter src/counter.ligo main 'Increment(5)'
// Outputs: (Right 5)
```

## Simulating (Dry-running) a contract

Testing a contract can be quite easy if we utilize LIGO's built-in dry run feature. 
Dry-run works by simulating the main execution function, as if it were deployed on a real chain.

```shell
ligo dry-run [options] SOURCE_LIGO_FILE MAIN_FUNCTION 'ACTION(P)' 'STORAGE_STATE'
```

- **STORAGE_STATE** state of the storage when simulating the execution of the entrypoint.

Example:

```shell
ligo dry-run src/counter.ligo main "Increment(5)" 3
// tuple[   list[]
//          8
// ]
```
  
## Some specificities for Maps, Tuples and Records

Consider the following LIGO code snippet for the storage definition

```js
//starmap.ligo
type coordinates is ( int * int * int)
type storage is map (string, coordinates)

[...]
```

### Maps

Initialization of the elements of a map is specified between `map [` and `]` 
and elements are separated by a semi-colon `;`. Each element is a key/value pair separated by `->`.

Initialization of the elements of a map follows the syntax:

```
map[ KEY1 -> VALUE1; KEY2 -> VALUE2 ]
```

### Tuples

Initialization of elements of a tuple is specified between `(` and `)`, and separated by comma `,` .

```
(VALUE1, VALUE2, VALUE3)
```

Here is an example of a command line `ligo compile-storage` for compiling a map containing a tuple.

```shell
ligo compile-storage starmap.ligo main 'map [ "earth" -> (1,1,1) ]'
```

This command returns:

```shell
{ Elt "earth" (Pair (Pair 1 1) 1) }
```

When specifying an empty map, one must set the map [] into the expected type.

```shell
ligo compile-storage starmap.ligo main '(map []: map(string,coordinates))'
```

### Records

Initialization of elements in a record is specified between map `[` and `]`
and elements separated by semi-colon `;`.  
Each element is a key/value pair separated by `=` and follows the syntax:

```
record[ KEY1 = VALUE1; KEY2 = VALUE2 ]
```

If we now have a record instead of a tuple for `coordinates`,

```js
//starmap2.ligo
type coordinates = record [
  x = int;
  y = int;
  z = int
]
type storage is map (string, coordinates)

[...]
```

we will compile the storage as follows:

```shell
ligo compile-storage code.ligo main 'map [ "earth" -> record [x=1;y=1;z=1] ]'
```

This command returns:

```shell
{ Elt "earth" (Pair (Pair 1 1) 1) }
```


# Deploy and Invoke

## Deploy

A smart contract must be deployed on the blockchain in order to be invoked. 
When deploying a smart contract on the blockchain, one must specify the initial state of the storage.

Deployment of a smart contract in Tezos is called "**_origination_**".

Here is the syntax for the tezos command line to deploy a smart contract:

```shell
tezos-client originate contract CONTRACT_NAME for USER transferring AMOUNT_TEZ from FROM_USER \
             running MICHELSON_FILE \
             --init 'INITIAL_STORAGE' --burn-cap GAZ_FEE
```

where:
- **CONTRACT_NAME** name given to the contract
- **MICHELSON_FILE** path for the Michelson smart contract code (.tz file).
- **AMOUNT_TEZ** is the quantity of tez being transferred to the newly deployed contract. 
  If a contract balance reaches 0 then it is deactivated.
- **FROM_USER** account from which the tez are taken from (and transferred to the new contract).
- **INITIAL_STORAGE** is a Michelson expression. The --init parameter is used to specify initial state of the storage.
- **GAZ_FEE** it specifies the maximal fee the user is willing to pay for this operation (using the --burn-cap parameter).

## Invoke

Once the smart contract has been deployed on the blockchain (contract-origination operation baked into a block), 
it is possible to invoke an entrypoint for the smart contract using the command line.

Here is the syntax of the tezos command line to invoke a smart contract:

```shell
tezos-client transfer AMOUNT_TEZ from USER to CONTRACT_NAME --arg 'ENTRYPOINT_INVOCATION' --dry-run
```

where:
- **AMOUNT_TEZ** is the quantity of tez being transferred to the contract.
- **CONTRACT_NAME** name given to the contract
- **ENTRYPOINT_INVOCATION** is a Michelson expression of the entrypoint and the corresponding parameter. 
  The --arg parameter specifies an entrypoint call.

⚠️ Notice that the --dry-run parameter simulate the invocation of the entrypoint.

## Example

Let's consider the counter contract for our example.

Our counter contract will store a single `int` as its storage, 
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
ligo compile-contract examples/counter.ligo main > code.tz
```

Command above will output the following Michelson code:

> Note that the output has been saved in the Michelson file `code.tz`

```js
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

However, in order to **originate** a Michelson contract on Tezos, 
we also need to provide the initial storage value, we can use `compile-storage` 
to compile the LIGO representation of the storage to Michelson.

```shell
ligo compile-storage src/counter.ligo main 5
// Outputs: 5
```

### Invocation parameter

//TODO 
The same rules apply for parameters, as apply for translating LIGO storage values to Michelson. 
We will need to use `compile-parameter` to compile our action variant into Michelson, here's how:

```shell
ligo compile-parameter src/counter.ligo main 'Increment(5)'
// Outputs: (Right 5)
```

Now we can use `(Right 5)` which is a Michelson value, to invoke our contract via `tezos-client`

### Simulating

To dry-run the counter-contract, 
we will provide the `main` function with a variant parameter of value `Increment (5)` 
and, an initial storage value of `3`.

```shell
ligo dry-run src/counter.ligo main "Increment(5)" 3
// tuple[   list[]
//          8
// ]
```

The simulation shows that our storage would have been incremented to 8.

### Deploy

Now that we have verified that our code compiles well 
and that it was functional we can deploy our contract on the blockchain.

```shell
tezos-client originate contract counterContract for boostrap1 transferring 1 from boostrap2 \
             running code.tz \
             --init '0' --burn-cap 0.12525
```

> Note that you can simulate the deployment by adding the `--dry-run` parameter to the above command.  
> Note that boostrap1 and boostrap2 are users from the sandbox of tezos.  
> Sandboxed mode is a way to run a ‘localhost-only’ instance of a Tezos network.  
> Find more about sandboxed mode [here](examples#sandboxed-mode).

### Invoke

Let's invoke the entrypoint `Increment(5)` of the smart contract.
Remember that the output of the `compile-parameter` of this entrypoint was `(Right 5)`

```shell
tezos-client transfer 5 from boostrap1 to counterContract --arg '(Right 5)'
```

> note that you can simulate the invocation by adding the `--dry-run` parameter to the above command.

### Accessing storage

You can access the stored value with the following command:

```shell
tezos-client get contract storage for counterContract
```

