---
id: deploy_a_contract
title: Deploy a contract
---

# Smart Contract

A smart contract is some code written in Michelson langage (a low-level stack-based turing-complete language).

It defines all **entrypoints** (invokable functions) of the smart contract.  
It defines the prototype of each entry point (e.g. specifies the parameters types of the entry point).  
It defines the **storage** of the smart contract.  

## Storage

The storage is an allocated memory space associated to a smart contract. 
The storage is a persistent data store for the smart contract.
The description of the storage is done by strongly-typing the data structure.

## Entrypoints

Entry points of a smart contract describe how to mutate a storage.
Executing an entry point takes some parameters and a state of a storage 
and returns a new state of storage and some operations.

![](../../static/img/ligo/smart_contract.svg)
<small className="figure">FIGURE 1: Smart contract</small>

> Operations are transactions (smart contract invocation) that will be sent to some other contracts. 
> They will trigger an entry point of the targeted contract, 
> or a tez transfer (no invocation of entry point). 
> If the execution of an entry point produces operations (an ordered list of transactions) 
> then they are sent and executed following the order of the list of operations.

# LIGO Compiler

## Compiling a contract

In order to deploy a contract to a real Tezos network,
we'd have to compile it first,
this can be done with a tool called transpiler (aka LIGO compiler) is used to transform
LIGO code into Michelson code.
Michelson smart contract are stored in a file with .tz extension.

Here is how to transform LIGO code into Michelson code using the LIGO compiler in command line.

```shell
ligo compile-contract SOURCE_LIGO_FILE ENTRY_POINT
```

> You can store the michelson output of the above command in .tz file 
> in order to use it later when deploying the contract:
> ```
> ligo compile-contract SOURCE_LIGO_FILE ENTRY_POINT > MICHELSON_FILE
> ```

## Defining the initial storage

The output of the following command can be used to init the initial_storage 
when deploying the contract.

```shell
ligo compile-storage SOURCE_LIGO_FILE MAIN_FUNCTION 'STORAGE_STATE'
```

Where:
- **SOURCE_LIGO_FILE** is the path of your LIGO file containing the main function.
- **MAIN_FUNCTION** is the name of your main function.
- **STORAGE_STATE** is a LIGO expression to defining the state of the storage.

## Invoking the contract with a parameter

The output of the following command can be used as the entrypoint name 
when invoking an entrypoint of the smart contract.

```shell
ligo compile-parameter SOURCE_LIGO_FILE MAIN_FUNCTION 'ENTRY_POINT(P)'
```

Where:
- **ENTRY_POINT(P)** is a LIGO expression to specify the name of the entrypoint and the corresponding parameter p.

## Simulating (Dry-running) a contract

Testing a contract can be quite easy if we utilize LIGO's built-in dry run feature. 
Dry-run works by simulating the main function execution, as if it were deployed on a real chain.

```shell
ligo dry-run [options] SOURCE_LIGO_FILE MAIN_FUNCTION 'ENTRY_POINT(P)' 'STORAGE_STATE'
```

- **STORAGE_STATE** state of the storage when simulating the execution of the entry point
- **ENTRY_POINT(P)** entrypoint of the smart contract that is invoked 
  (parameter p of this entry point is specified between parentheses).

# Deploy and Invoke

## Deploy

A smart contract must be deployed on the blockchain in order to be invoked. 
When deploying a smart contract on the blockchain, one must specify the initial state of the storage.

Deployment of a smart contract in Tezos is called "**origination**".

Here is the syntax of the tezos command line to deploy a smart contract:

```shell
tezos-client originate contract CONTRACT_NAME for USER transferring AMOUNT_TEZ from FROM_USER \
             running MICHELSON_FILE \
             --init 'INITIAL_STORAGE' --burn-cap GAZ_FEE
```

where:
- **CONTRACT_NAME** name given to the contract
- **MICHELSON_FILE** path of the Michelson smart contract code (.tz file).
- **AMOUNT_TEZ** is the quantity of tez being transferred to the newly deployed contract. 
  If a contract balance reaches 0 then it is deactivated.
- **FROM_USER** account from which the tez are taken from (and transferred to the new contract).
- **INITIAL_STORAGE** is a Michelson expression. The --init parameter is used to specify initial state of the storage.
- **GAZ_FEE** it specifies the maximal fee the user is willing to pay for this operation (using the --burn-cap parameter).

## Invoke

Once the smart contract has been deployed on the blockchain (contract-origination operation baked into a block), 
it is possible to invoke an entry point of the smart contract using the command line.

Here is the syntax of the tezos command line to invoke a smart contract:

```shell
tezos-client transfer AMOUNT_TEZ from USER to CONTRACT_NAME --arg 'ENTRYPOINT_INVOCATION' --dry-run
```

where:
- **AMOUNT_TEZ** is the quantity of tez being transferred to the contract.
- **CONTRACT_NAME** name given to the contract
- **ENTRYPOINT_INVOCATION** is a Michelson expression of the entry point and the corresponding parameter. 
  The --arg parameter specifies an entry point call.

⚠️ Notice that the --dry-run parameter simulate the invocation of the entry point.

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

Same rules apply for parameters, as apply for translating LIGO storage values to Michelson. 
We will need to use `compile-parameter` to compile our action variant into Michelson, here's how:

```shell
ligo compile-parameter src/counter.ligo main 'Increment(5)'
// Outputs: (Right 5)
```

Now we can use `(Right 5)` which is a Michelson value, to invoke our contract via `tezos-client`

### Simulating

To dry-run the counter contract, 
we will provide the `main` function with a variant parameter of value `Increment (5)` 
and, an initial storage value of `3`.

```shell
ligo dry-run src/counter.ligo main "Increment(5)" 3
// tuple[   list[]
//          8
// ]
```

Our contract's storage has been successfully incremented to `8`.

### Deploy

Now that we have verified that our code compiles well 
and, was functional we can deploy our contract on the blockchain.

```shell
tezos-client originate contract counterContract for boostrap1 transferring 1 from boostrap2 \
             running code.tz \
             --init '0' --burn-cap 0.12525
```

> note that you can simulate the deployment by adding the `--dry-run` parameter to the above command.  
> note that boostrap1 and boostrap2 are users from the sandbox of tezos

### Invoke

Let's invoke the entrypoint `Increment(5)` of the smart contract.
Remember that the output of the `compile-parameter` of this entrypoint was `(Right 5)`

```shell
tezos-client transfer 5 from boostrap1 to counterContract --arg '(Right 5)'
```

> note that you can simulate the invocation by adding the `--dry-run` parameter to the above command.

### Accessing storage

You can access to the storage value with the following command:

```shell
tezos-client get contract storage for counterContract
```

