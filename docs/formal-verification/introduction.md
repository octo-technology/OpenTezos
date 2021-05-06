---
id: introduction
title: Introduction
slug: /formal-verification
authors: Frank Hillard
---


The Tezos blockchain brings several improvements including the formal verification of smart contract.This section describes the overview of how Tezos smart contract can be formally verified.

### Overview

The Tezos blockchain implements smart contracts using the Michelson language (see module _Michelson_). Michelson is a low-level stack-based turing-complete language which have been proven; the proof of Michelson language is compiled in a library called *Mi-cho-coq*. 

Based on the Curry-Howard isomorphism which ensures the correspondence between a program and a theorem, Mi-cho-coq can be used in a proof assistant called *Coq* to translate a Michelson script into a theorem (i.e. its logical equivalent form). 

The formal verification of a smart contract is done by providing a proof for this theorem. *Coq* (the proof assistant) will perform the verification of a given proof (and its related theorem) based on the *Mi-cho-coq* (Michelson proof).

The proof consists of instructions in _Coq_ language (called Galina). Theses instructions called _tactics_ manipulate formal expressions (following logical laws (_Coq_ univers) and _Mi-cho-coq_) and logical implications in order to formally assert truth of a given theorem.

Before going deeper, let's sum up in the schema below representing the workflow of formal verification of Tezos smart contracts.

![](../../static/img/formal-verification/FormalVerification_overview.svg)

### Theorem

This ecosystem combines an assistant of proof (*Coq*) and the proof of the Michelson language (*Mi-cho-coq*) to formally verify the correctness of a theorem and its proof.

The theorem is based on 
- a Michelson script representing what the smart contract does.
- post-conditions representing the rules of the smart contract in a formal form.

Formal verification of a Tezos smart contract consists of verifying formally that the execution of the Michelson script satisfies specific post-conditions.

![](../../static/img/formal-verification/FormalVerification_theorem.svg)

The proof is a sequence of Coq tactics. Will see that part in the end of this section.

### Transaction execution (recall) WIP

storage + parameter (entrypoint) ----> new storage + list operation

So the theorem is

```
eval env vote fuel (storage..) = return (newstorage ... ) <=> post-conditions
```

### Post-conditions WIP

### Proof WIP


## Exemple Vote



