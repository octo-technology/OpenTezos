---
id: language-basics
title: Language Basics
authors: Frank Hillard
---

The Michelson language is the reference language for Tezos smart contracts. It is a low-level **stack-based** language and is also a **Turing-complete** language. This means it has basic operations allowing to read/write/compare values in-memory, has infinite memory, and allows conditional operators (e.g. _if_, _switch_ instructions)

## Smart contract

The main goal of the Michelson language is to model smart contracts, i.e. to model complex data structures and to design complex processes on these data. Once a smart contract is deployed on the Tezos network, it can be invoked and trigger modifications of the data of the smart contract. 

A persistent memory space (called **storage**) is associated with a Tezos smart contract and holds the data of the smart contract. This storage is stored on the blockchain.

A smart contract must provide a list of invocable functions of the smart contract (called **entrypoints**) and instructions (that modifies the storage) for each entrypoint.

These concepts of _storage_ and _entrypoint_ are described in the "Smart contract" section.

## Gas model
A cost in "gas" (i.e. the money that must be paid in order to execute instructions) is associated with the execution of a Michelson instruction. This "gas" modeling prevents the execution from ending up in an infinite loop. 

It also represents the work that bakers have to endure in order to validate a transaction. This work is rewarded in XTZ (the Tezos native currency).

Adding more memory space to the storage of a smart contract also has a cost (for each allocated byte).

## Static typing

The Michelson language is a strongly typed language. It means that all data inserted into the stack must be typed and operators manipulating these data must respect the typing rules.

The Michelson language introduces primitive types for modeling data and composite types allowing complex data structure definitions. It also introduce very specific types for smart contract modeling.

The Michelson language provides basic type support on numbers, sequence of characters, logical expressions, and timestamps:
- `nat` represents a natural integer (e.g. 0, 3, 15)
- `int` represents a integer (e.g. -10, 2, 3)
- `string` represents a sequence of characters (e.g. "Hello")
- `bool` represents a boolean value (e.g. True, False)
- `bytes` represents a sequence of bytes (octet)
- `unit` represents a non-specified type.
- `timestamp` represents a duration (e.g. NOW, 1571659294, "2019-09-26T10:59:51Z"; i.e. a string following the RFC3339 standard)

Michelson also provides composite types for grouping properties:
- `set` represents an unordered collection of elements. It preserves the uniqueness of elements inside the collection (e.g. { 2; 4; 5; 7})
- `list` represents an ordered collection of elements of the same type (e.g. { 2; 4; 5; 3; 5 })
- `map` represents an associative array formed of key-value elements (e.g. { Elt "Hello" 1 }) 
- `big_map` is another representation of an associative array but can handle larger amounts of data
- `pair` represents a tuple of two elements (e.g. Pair "World" 1).
- `option` is a predefined variant type that is used to express whether there is a value of some type or _none_.
- `or` is a variant type which can handle elements of different types.

Michelson also provides specific types for smart contract modeling:
- `address` represents an identifier for a user account or a deployed smart contract (e.g. "tz1faswCTDciRzE4oJ9jn2Vm2dvjeyA9fUzU")
- `mutez` represents the smallest quantity of the Tezos crypto-currency (1 tez = 1,000,000 mutez)
- `key` is a byte sequence representing a public key (e.g. "edpkuBknW28nW72KG6RoH..." )
- `key_hash` represents a hashed key using a standard hashing function such as SHA512 (e.g. "tz1KqTpEZ7Yob7QbPE4Hy..."; i.e. a string in base58 encoded form)
- `signature` is a byte sequence representing a message signed by a public key (e.g. "spsig1PPUFZucuAQybs5w...)
- `chain_id` represents the network identifer (e.g. 0x7a06a770, "NetXynUjJNZm7wi")
- `operation` represents a transaction
- `contract` represents a contract interface used for contract interaction

The usage of these types are illustrated in the "Tutorial" and "Instructions" sections.

## Atomic computation

The Michelson language provides basic operations on these types:  
- numbers: addition, subtraction, multiplication, euclidean division, comparison
- string: split, concatenation, comparison
- crypto: standard hash function
- collection: standard collection manipulation (create, insert, remove, access, modification) 
- currency: standard operations on XTZ crypto-currency
- smart contract: contract interactions, transfer, invocation of smart contracts, delegation

A description of some of these operators is provided in the "Tutorial" section.

An exhaustive list of instructions for each type is described in the "Instructions" section.

These instructions introduce basic programming concepts such as:
- conditional branching: `IF` instruction family.
- repetitive processing: `LOOP`, `ITER`, `MAP` instructions.
- "Lambda" functions: `LAMBDA` instruction.
- structuring data: `PAIR`, `UNPAIR`, `CAR`, `CDR`, `LEFT`, `RIGHT` instructions, and `list`, `map`, `set` composite types.
- contract communication: `CONTRACT`, `TRANSFER_TOKENS` instructions. 



## Explicit failure

When invoking a smart contract, the execution of the sequence of instructions may terminate. In this case the transaction is considered finalized. If the execution of the sequence of instructions throws an exception, the transaction is considered to be rejected. The following sections will introduce the `FAIL` Michelson instruction which is responsible for throwing an error. 
