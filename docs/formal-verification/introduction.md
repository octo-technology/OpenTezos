---
id: introduction
title: Introduction
slug: /formal-verification
---


The Tezos blockchain brings several improvements including the **formal verification of smart contract**.This section describes the overview of how Tezos smart contract can be formally verified. 

We will introduce some basic concepts of the Type theory such as GADT which sustains inductive types on the Calculus of Inductive Construction (CiC). The proof assistant _Coq_ which is based on the CiC is used for proving theorems. 

We will briefly introduce the Mi-Cho-Coq library (used by _Coq_) which allows formalizing a smart contract as a theorem. 

We will see how Coq and Mi-Cho-Coq are used to model the smart contract as a logical object (theorem). This theorem is formalized in Gallina (Term) language which follows the CiC principles. The script for proving the theorem is written in Gallina (Vernacular) which provides _tactics_ and will be executed by the inference engine (Coq).

The modeling of the theorem will be illustrated with a simple example (_Vote_ smart contract).




