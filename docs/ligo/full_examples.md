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

Once your node is running, open a new terminal and initialize the “sandboxed” client data in a temporary directory:

```shell
eval `./src/bin_client/tezos-init-sandboxed-client.sh 1`
```

then run:

```shell
tezos-activate-alpha
```

> Find out more about sandboxed mode [here](https://tezos.gitlab.io/user/sandbox.html)

