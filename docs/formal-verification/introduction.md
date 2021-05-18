---
id: introduction
title: Introduction
slug: /formal-verification
authors: Frank Hillard
---


The Tezos blockchain has several advantages over its concurrents. One of them is the **formal verification of smart contract**. This module shows a brief overview of how Tezos smart contracts can be formally verified. 

//TODO: One phase here about what is formal verification.

We will first introduce some basic concepts of the _Type theory_ such as _GADT_ which allows inductive types on the _Calculus of Inductive Construction_ (CiC). The proof assistant _Coq_, which is based on the CiC, is then used for proving theorems. 

We will also introduce the _Mi-Cho-Coq_ library (used by _Coq_) to formalize a smart contract as a theorem. 

Finally, we will see how to use _Coq_ and _Mi-Cho-Coq_ to model the smart contract as a logical object (theorem). This theorem is formalized in _Gallina_ (Term) language, which follows the CiC principles. The script for proving the theorem is written in _Gallina_ (Vernacular), which provides _tactics_ and will be executed by the inference engine (Coq).

The modeling of the theorem will be illustrated with a simple example: a _Vote_ smart contract.

//TODO: Small introductive schema/figure that recaps all that text above



