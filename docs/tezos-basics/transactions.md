

# Tezos basics Introduction to Smart contracts (WIP)

## Généralités

Tezos is a blockchain (P2P, crypto, transactional system UTXO ?
)
- A transaction can contain transfer of amount of XTZ to an address
- A transaction can contain some code (called smart contract). Once this transaction is executed, the smart contract is considered as deployed and an address is associated to this smart contract.

A smart contract communicates only with in the Tezos network and thus can send transactions to other accounts or smart contracts.

During deployment, a persistent memory space (called *storage*) is allocated to this snippet of code.
Once deployed the smart contract can be invoked by anyone via a transaction to the contract address.

Tezos smart contract language is Michelson.

Michelson transpilers exists for several languages 
- Python : SmartPy
- Camel : Ligo
- Pascal : Ligo
- Morley : Morley
...

## Code of the smart contrat

code is
- possibles invocations
- storage data structure definition 
- a sequence of Michelson instruction 

See more detail in Michelson module



## The storage of the smart contract

One can use the CLI provided by tezos to inspect the storage state of a smart contract. The only required parameter is the address of the smart contract.

The growth of the storage (i.e; memory allocation of extra space) is paid as fees when the smart contract is invoked.
For more details see section [Fees and Reward]

## Invocation of the smart contract

A smart contract can be invoked by a person (implicit account) whose address starts with "tz1 .." or by a smart contract (account) whose address starts with a "KT1....".

Invocation of a smart contract is a transaction sent to the address of a smart contract. This transaction specifies which entrypoint is called and related 

One can use the CLI provided by tezos to interact with a node. The client application `tezos-client` allows anyone to deploy and invoke smart contracts.
The list of all commands are available at the Tezos Gitlab official website.


The RPC also provide a way to send a request via HTTP to a distant node. 
The list of all URIs are available at the Tezos Gitlab official website.

## Evolution d'un smart contract

Once deployed the code of smart contract is not meant to be modified, only the storage of the smart contract will be.

But we can forecast some possible evolutions of a smart contracts and thus implement in a way that some features can be upgraded.

- For data model extension one can use `map` data structures

- For changing business logic of a smart contract one can implement a "lambda" pattern (i.e. code the business logic of your smart contract in a lambda func inside the storage). So the business logic can be upgraded with a regular invocation of the smart contract (this invocation must specify the new business logic).

