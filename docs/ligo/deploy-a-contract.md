---
id: deploy-a-contract
title: Compiling and deploying
authors: Maxime Sallerin and Benjamin Pilia
---

## Compiling a contract

In order to deploy a contract in a Tezos network, we first need to compile it. This is done using a compiler (aka LIGO compiler) that transforms LIGO code into Michelson code.

Michelson smart contracts are stored in a file with the `.tz` extension.

Here is how to transform a LIGO code into a Michelson code using the LIGO compiler in the command line.

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

The examples are detailed later in the chapter, see [here](#example).

> You can store the Michelson output of the command above in .tz file in order to use it later when deploying the contract:
> ```
> ligo compile-contract SOURCE_LIGO_FILE ENTRY_POINT > MICHELSON_FILE
> ```


## Simulating (Dry-running) a contract

Testing a contract would be pretty tricky if you always had to set up a live node to run tests. Fortunately, an easy alternative is to use LIGO's built-in dry-run feature. Dry-running is a simulated execution of the smart contract as if it was deployed on a real chain. It works by simulating the main execution-function, based on a mock storage value and a parameter.

```shell
ligo dry-run [options] SOURCE_LIGO_FILE MAIN_FUNCTION 'ACTION(P)' 'STORAGE_STATE'
```

where:
- **STORAGE_STATE** is the state of the storage when simulating the execution of the entrypoint.

Example:

```shell
ligo dry-run src/counter.ligo main "Increment(5)" 3
// tuple[   list[]
//          8
// ]
```

## Defining the initial storage

The Michelson output of the following command can be used to init the storage when deploying the contract.

```shell
ligo compile-storage SOURCE_LIGO_FILE MAIN_FUNCTION 'STORAGE_STATE'
```

where:
- **STORAGE_STATE** is a LIGO expression that defines the initial state of the storage.

Example:

```shell
ligo compile-storage src/counter.ligo main 5
// Outputs: 5
```

## Invoking the contract with a parameter

The Michelson output of the following command can be used as the entrypoint name when invoking an entrypoint of the smart contract (as well as the parameters of that entrypoint).

```shell
ligo compile-parameter SOURCE_LIGO_FILE MAIN_FUNCTION 'ACTION(P)'
```

where:
- **ACTION(P)** is a LIGO expression used to specify the action that triggers the associated entrypoint with the corresponding parameter p.

Example:

```shell
ligo compile-parameter src/counter.ligo main 'Increment(5)'
// Outputs: (Right 5)
```
  

# Deploy and Invoke

## Deploy

A smart contract must be deployed on the blockchain in order to be invoked. When deploying a smart contract on the blockchain, one must specify the initial state of the storage.

The deployment of a smart contract in Tezos is called "**_origination_**".

Here is the syntax for the Tezos command line to deploy a smart contract:

```shell
tezos-client originate contract CONTRACT_NAME for USER transferring AMOUNT_TEZ from FROM_USER \
             running MICHELSON_FILE \
             --init 'INITIAL_STORAGE' --burn-cap GAZ_FEE
```

where:
- **CONTRACT_NAME** is the name given to the contract.
- **MICHELSON_FILE** is the path for the Michelson smart contract code (.tz file).
- **AMOUNT_TEZ** is the quantity of Tez being transferred to the newly deployed contract. If a contract balance reaches 0 then it is deactivated.
- **FROM_USER** account from which the Tez are taken (and transferred to the new contract).
- **INITIAL_STORAGE** is a Michelson expression. The `--init` parameter is used to specify the initial state of the storage.
- **GAZ_FEE** is a specified maximal fee the user is willing to pay for this operation (using the `--burn-cap` parameter).

## Invoke

Once the smart contract has been deployed on the blockchain (contract-origination operation baked into a block), it is possible to invoke an entrypoint from the smart contract using the command line. Here is the syntax of the Tezos command line to invoke a smart contract:

```shell
tezos-client transfer AMOUNT_TEZ from USER to CONTRACT_NAME --arg 'ENTRYPOINT_INVOCATION' --dry-run
```

where:
- **AMOUNT_TEZ** is the quantity of Tez being transferred to the contract.
- **CONTRACT_NAME** is the name given to the contract.
- **ENTRYPOINT_INVOCATION** is a Michelson expression of the entrypoint and the corresponding parameter. The `--arg` parameter specifies an entrypoint call.

⚠️ Notice that the `--dry-run` parameter simulates the invocation of the entrypoint.

## Example

Let's consider a counter contract for our example.

Our counter contract will store a single `int` as its storage, 
and will accept an `action` variant in order to re-route our single `main` function to two entrypoints for `add` (addition) and `sub` (subtraction).

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

The command above outputs the following Michelson code:

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

However, in order to **originate** a Michelson contract on Tezos, we also need to provide its initial storage value, we can use `compile-storage` to compile the LIGO representation of the storage to Michelson.

```shell
ligo compile-storage src/counter.ligo main 5
// Outputs: 5
```

### Invocation parameter

The same rules apply for the parameters. We will need to use `compile-parameter` to compile our action variant into Michelson, here's how:

```shell
ligo compile-parameter src/counter.ligo main 'Increment(5)'
// Outputs: (Right 5)
```

We can now use `(Right 5)`, which is a Michelson value, to invoke our contract via `tezos-client`.

### Simulating

To dry-run the counter-contract, we provide a `main` function with a variant _parameter_ of value `Increment (5)` and an initial storage value of `3`.

```shell
ligo dry-run src/counter.ligo main "Increment(5)" 3
// tuple[   list[]
//          8
// ]
```

The simulation shows that our storage would have been incremented to 8.

### Deploy

Now that we have verified that our code compiles well and that it was functional, we can deploy our contract on the blockchain.

```shell
tezos-client originate contract counterContract for boostrap1 transferring 1 from boostrap2 \
             running code.tz \
             --init '0' --burn-cap 0.12525
```

> Note that you can simulate the deployment by adding the `--dry-run` parameter to the above command. _boostrap1_ and _boostrap2_ are users from the Tezos sandbox. Sandboxed mode is a way to run a 'localhost-only' instance of a Tezos network. Find out more about the sandboxed mode [here](examples#sandboxed-mode).

### Invoke

Let's invoke the entrypoint `Increment(5)` of the smart contract. Remember that the output of the `compile-parameter` of this entrypoint was `(Right 5)`

```shell
tezos-client transfer 5 from boostrap1 to counterContract --arg '(Right 5)'
```

> Note that you can simulate the invocation by adding the `--dry-run` parameter to the above command.

### Accessing storage

You can access the stored value with the following command:

```shell
tezos-client get contract storage for counterContract
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

The initialization of the elements of a map is specified between `map [` and `]` and elements are separated by a semi-colon `;`. Each element is a key/value pair separated by `->`.

Initialization of the elements of a map follows the syntax:

```
map[ KEY1 -> VALUE1; KEY2 -> VALUE2 ]
```

Here is an example of a command-line `ligo compile-storage` for transpiling a map.

```shell
ligo compile-storage starmap.ligo main 'map [ "earth" -> (2,7,1); "sun" -> (0,0,0) ]'
```

This command returns:
```shell
{ Elt "earth" (Pair (Pair 2 7) 1) ; Elt "sun" (Pair (Pair 0 0) 0) }
```

### Tuples

Initialization of the tuple elements is specified between `(` and `)`, and separated by comma `,`.

```
(VALUE1, VALUE2, VALUE3)
```

Here is an example of a command-line `ligo compile-storage` for compiling a map containing a tuple.

```shell
ligo compile-storage starmap.ligo main 'map [ "earth" -> (2,7,1) ]'
```

This command returns:

```shell
{ Elt "earth" (Pair (Pair 2 7) 1) }
```

When specifying an empty map, one must set the map [] into the expected type.

```shell
ligo compile-storage starmap.ligo main '(map []: map(string,coordinates))'
```

### Records

Initialization of elements in a record is specified between map `[` and `]` and elements separated by a semi-colon `;`.  
Each element is a key/value pair separated by `=` and follows the syntax:

```
record[ KEY1 = VALUE1; KEY2 = VALUE2 ]
```

We should now have a record instead of a tuple for `coordinates`.

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

We can compile the storage as follows:

```shell
ligo compile-storage code.ligo main 'map [ "earth" -> record [x=2;y=7;z=1] ]'
```

This command returns:

```shell
{ Elt "earth" (Pair (Pair 2 7) 1) }
```


## Conclusion

In this section, we have seen how to use the LIGO compiler command lines to interact with a smart contract. We have seen how to compile a LIGO code in Michelson code, then simulate the behavior of its smart contract and, finally, the deployment and the invocation of entrypoints.

