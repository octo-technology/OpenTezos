---
id: unit_testing
title: Unit Testing (PyTezos)
---

## Unit Testing

**Why write tests?**
- To check the correct operation of the code, 
  in our case for the developer and the user of the smart contract.
- It is also to make the code robust for future modifications, 
  i.e. a refactoring of the code or the addition of a breakable functionality 
  will be quickly detected.

There is an automated testing strategy, as described in the following figure.
<br/>

![](../../static/img/ligo/pyramide_of_tests.svg)
<small className="figure">FIGURE 1: Pyramide of Tests</small>

Unit tests represent the base of the pyramid and therefore the most important part.

**Unit testing** is performed at a very fine granularity 
by verifying the behavior of a portion of code totally 
or partially isolated from its dependencies.
It will then be simple to write and maintain.

While an integration test aims to verify that several components work well together: 
it checks the assembly.

To go further, take a look at **Test Driven Development (TDD)** 
which is a development method emphasizing 
the writing of automated tests as a tool to guide the implementation of features.


## PyTezos Installation




