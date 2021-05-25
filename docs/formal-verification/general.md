---
id: general
title: Generalities
authors: Frank Hillard
---

Formal verification is a complex task but made possible and easier on Tezos smart contracts with proof assistant tools (such as _Coq_) and Michelson conception choices. 

### All about trust

The main trait of the blockchain is that it ensures the execution of transactions without a trusted third-party. The deployment of smart contracts re-introduces a trusted party (the one who wrote the smart contracts). Tests can be done but nothing ensures the completeness (all situations of execution) of these tests. 

A bug in a smart contract would destroy the trust.

The formal verification consists of proving mathematically that a smart contract possesses properties described in its formal specification.
The mathematical proof is formal so its correctness can be verified automatically.

The trust is based on the **existence of a proof** for a smart contract and the **understanding of the formal specifications** of the smart contracts. The formal specification of a smart contract describes without ambiguity the properties of the program.

### What is the formal verification on Tezos smart contract

The formal verification on Tezos smart contracts consist on:
- describing formal specifications of the expected behavior of the smart contract
- translate the smart contract, its formal specifications and specification of the language itself into a proof assistant language.
- In the proof assistant, one can manually (or assisted by solvers tools) produce a formal proof that the smart contract comply to the given specifications.
- publish this proof in order to allow anyone to verify automatically that the smart contract comply to its specifications.


### Formal verification made possible

Formal verification is a complex task but made possible on Tezos smart contracts with Michelson conception choices.

Indeed the Michelson language has been designed in order to take the formal verification into account. It is done by: 
- introducing typing system on a stack-based language for facilitating formal verification.
- preventing JUMP instructions which make the formal verification more complex
- prevent floating-point number (because of overflow and rounding)
- less execution error with explicit failure (e.g. EDIV by 0)

### Formal verification benefits

There is a real benefit to be able to prove the behavior of a smart contract, (i.e. to verify that a smart contract comply to some specifications). 

Generally speaking, smart contracts have specific characteristics making them more bound to be verified than other common programs:
- Due to the blockchain context, a smart contract is not intended to be modified (hard to modify once deployed), and thus can be proven once and for all.
- particularly relevant when financial transfers are at stake (bug causing the loss of a token).
- Proofs can be verified automatically without a trusted third-party. The proof process is aligned with the decentralization concept.
- smart contracts are short , thus it is not too hard to write a proof 
- smart contracts are executed in a well-defined context (protocol Tezos) which relatively separated, thus facilitating the formal verification.

> This compliance can be verified by anyone for a given smart contract and proof.

### Which tools

Many proof assistants can be used to translate a smart contract into a formal definition and formalize its specifications and its compliance to these specifications.

- Nomadic Labs provides Mi-Cho-Coq, a library for the _Coq_ proof assistant. 

- Archetype language integrates directly information concerning formal verification (based on Why3, may automatically produce the proof). specifications are written in the smart contract.

- K-Michelson is based on K-framework which is a generic tool for specifications and proofs languages.


#### Mi-Cho-Coq

Allow to directly verify smart contracts (Michelson scripts) in _Coq_

- it can verify smart contracts written in high-level languages (LIGO, SmartPy, Archetype) since ultimately they are compiled to Michelson.
- manual low-level approach (proof is manually written and Coq helps to build this proof).

Mi-Cho-Coq limitations are:
- data serialization/deserialization is not supported yet
- cryptographic functions are considered as a black box and used as such.
- gas model is not taken into account.

#### Archetype
section under development

#### K-Michelson
section under development


### Examples of famous proven smart contracts

There smart contracts that have already been proven such as Dexter thus providing trust on the _Dexter_ decentralized exchange platform.

Liquidity Baking smart contracts have also been proven.

