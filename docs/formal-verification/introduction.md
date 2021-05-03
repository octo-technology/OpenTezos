---
id: introduction
title: Introduction
slug: /formal-verification
---


The Tezos blockchain brings several improvements including the formal verification of smart contract.This section describes the overview of how Tezos smart contract can be formally verified. 

We will introduce some basic concepts of the Type theory and in particular the GADT which sustains inductive types on the Calculus of Inductive Construction (CiC). The proof assistant _Coq_ used for verifying smart contracts is based on the CiC. 

We will see how Coq is used to model the smart contract as a logical object (theorem). This theorem is formalized in Gallina (Term) language which follows the CiC principles. The script for proving the theorem is written in Gallina (Vernacular) which provides _tactics_ and will be executed by the inference engine (Coq).

The modeling of the theorem will be illustrated with a simple example (_Vote_ smart contract).




