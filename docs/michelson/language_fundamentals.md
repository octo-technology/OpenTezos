---
id: language_fundamentals
title: Language fundamentals
---

The Michelson language is the reference language for Tezos smart contracts. It is a low-level **stack-based** language. It is also a **Turing-complete** language, i.e. it has basic operations allowing to read / write / compare values in-memory, has infinite memory and allows conditional operators (e.g. _if_, _switch_ instructions)

A persistent memory space (called **storage**) is associated with a Tezos smart contract. This storage is stored on the blockchain.

A smart contract provides a list of entry points (invocable functions of the smart contract) and a sequence of Michelson instructions for each entry points.

The invocation of a smart contract must specify which entry point is called and its related parameters.

The execution of an entry point produces a modified state of the storage and a list of operations (i.e. transactions to other contracts or to implicit accounts).

A smart contract must be deployed on the blockchain so as to be invocable.

## Gas model
A cost in "gas" (i.e. the money that must be paid in order to execute instructions) is associated with the execution of a Michelson instruction. This "gas" modeling prevents the execution to end up in an infinite loop. 

It also represents the work that bakers have to endure in order to validate a transaction. This work is rewarded in XTZ (the Tezos native currency).

Adding more memory space to the storage of a smart contract also has a cost (for each bytes allocated).

## Static typing

Michelson is a strongly typed language. It introduces multiple data structures and type definitions.

The Michelson language provides basic type support on numbers, sequence of character, logical expressions and timestamps:
- `nat` represents a natural integer (e.g. 0, 3, 15)
- `int` represents a integer (e.g. -10, 2, 3)
- `string` represents a sequence of characters (e.g. "Hello")
- `bool` represents a boolean value (e.g. True, False)
- `timestamp` represents a duration (e.g. NOW, 1571659294, "2019-09-26T10:59:51Z"; i.e. a string following the RFC3339 standard)

Michelson also provides composite types for grouping properties:
- `set` represents an unordered collection of element. It preserves uniqueness of elements inside the collection (e.g. { 2; 4; 5; 7})
- `list` represents an ordered collection of elements of the same type (e.g. { 2; 4; 5; 3; 5 })
- `map` represents an associative array formed of key-value elements (e.g. { Elt "Hello" 1 }) 
- `big_map` is another representation of associative array but can handle larger amount of data
- `pair` represents a tuple of two elements (e.g. Pair "World" 1).
- `option` is a predefined variant type that is used to express whether there is a value of some type or _none_.
- `or` is a variant type which can handle elements of different types.

Michelson also provides specific types for smart contract modeling:
- `address` represents an identifier for a user account or a deployed smart contract (e.g. "tz1faswCTDciRzE4oJ9jn2Vm2dvjeyA9fUzU")
- `mutez` represents the smallest quantity of the Tezos crypto-currency (1 tez = 1,000,000 mutez)
- `key` is a byte sequence representing a public key (e.g. "edpkuBknW28nW72KG6RoH..." )
- `key_hash` represents an hashed key using a standard hashing functions such as SHA512 (e.g. "tz1KqTpEZ7Yob7QbPE4Hy..."; i.e. a string in base58 encoded form)
- `signature` is a byte sequence representing a message signed by a public key (e.g. "spsig1PPUFZucuAQybs5w...)
- `chain_id` represents the network identifer (e.g. 0x7a06a770, "NetXynUjJNZm7wi")
- `operation` represents a transaction
- `contract` represents a contract interface used for contract interaction

## Atomic computation

The Michelson language provides basic operations on these types. For example:  
- numbers: addition `ADD`, subtraction `SUB`, multiplication `MUL`, euclidean division `EDIV`
- string: split, concatenation
- crypto: standard hash function

An exhaustive list of instruction for each type is described in the "instructions" section.

## Explicit failure

When invoking a smart contract, the execution of the sequence of instructions may terminate. In this case the transaction is considered finalized. If the execution of the sequence of instructions throws an exception, the transaction is considered as rejected. The `FAILWITH` Michelson instruction is responsible for throwing an error. 
