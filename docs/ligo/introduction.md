---
id: introduction
title: Introduction
slug: /ligo
authors: Maxime Sallerin, Benjamin Pilia and Frank Hillard
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NotificationBar from '../../src/components/docs/NotificationBar';

Tezos smart contracts are written in [Michelson](https://opentezos.com/michelson), which is a stack-based language and the lowest level of language for a Tezos smart contract. Michelson code can be deployed as-is on the Tezos network.

However, if reading or writing Michelson code is still easy for small smart contracts, it can become tedious for more complex smart contracts, as:
- there are no variables and functions are not easy to use
- there is some syntactic sugar to combine multiple instructions but stack manipulation remains painful
- Michelson code cannot be broken down into several files
- stack-based languages are not commonly used when it comes to web development

**LIGO offers an alternative.**

It is a high-level language for smart contract development.
Smart contracts can be written in LIGO, then compiled into a single Michelson code file. 
This Michelson file becomes the smart contract that will be deployed on a Tezos network.

![](../../static/img/ligo/intro_schema.svg)
<small className="figure">FIGURE 1: Contextualization of LIGO in the Tezos ecosystem</small>

LIGO currently offers four _flavours_ of syntaxes:

- **PascaLigo**, a syntax inspired by the Pascal language, provides an imperative developer experience.

- **CameLigo**, a syntax inspired from [OCaml](https://ocaml.org/), that allows to write in a functional style.

- **ReasonLigo**, a syntax inspired from [ReasonML](https://reasonml.github.io/), that builds on the strong points of OCaml but still aims to be familiar JavaScript developers.
  
- **JsLigo**, the latest syntax released, inspired by the popular JavaScript language.


<NotificationBar>
  <p>

**Imperative programming** is a programming paradigm that describes the operations in sequences of instructions executed by the computer to change the program's state.

**Functional programming** is a declarative programming paradigm that considers computation as an evaluation of mathematical functions.

  </p>
</NotificationBar>

Here is an example of a _Counter_ contract that handles a single integer `counter` value in storage and allows users to increment, decrement or reset this counter.

<Tabs
  defaultValue="pascaligo"
  values={[
  { label: 'PascaLigo', value: 'pascaligo', },
  { label: 'CameLigo', value: 'cameligo', },
  { label: 'ReasonLigo', value: 'reasonligo', },
  { label: 'JsLigo', value: 'jsligo', },
  ]
}>

<TabItem value="pascaligo">

```js
type storage is int

type parameter is
  Increment of int
| Decrement of int
| Reset

type return is list (operation) * storage

function main (const action : parameter; const store : storage) : return is
 ((nil : list (operation)),
  case action of
    Increment (n) -> store + n
  | Decrement (n) -> store - n
  | Reset         -> 0
 end)
```

</TabItem>
<TabItem value="cameligo">

```js
type storage = int

type parameter =
  Increment of int
| Decrement of int
| Reset

type return = operation list * storage

let main (action, store : parameter * storage) : return =
  ([] : operation list),
  (match action with
     Increment n -> store + n
   | Decrement n -> store - n
   | Reset       -> 0)
```

</TabItem>
<TabItem value="reasonligo">

```js
type storage = int;

type parameter =
  Increment (int)
| Decrement (int)
| Reset;

type return = (list (operation), storage);

let main = ((action, store): (parameter, storage)) : return => {
  (([] : list (operation)),
  (switch (action) {
   | Increment (n) => store + n
   | Decrement (n) => store - n
   | Reset         => 0}));
};
```

</TabItem>
<TabItem value="jsligo">

```js
type storage = int;

type parameter =
  ["Increment", int]
| ["Decrement", int]
| ["Reset"];

type return_ = [list<operation>, storage];

let main = ([action, store]: [parameter, storage]) : return_ => {
  return [
    list([]) as list<operation>,
    match(action, {
      Increment: (n: int) => store + n,
      Decrement: (n: int) => store - n,
      Reset:     ()       => 0
    })
  ];
};
```

</TabItem>
</Tabs>

## What's next
In the following chapter, we will develop smart contracts in LIGO, compile them and deploy them.

We chose to write this module in PascaLigo. The main difference between the syntaxes is that PascaLigo is more imperative while ReasonLigo and CameLigo are more functional. 

This module aims to teach developers the basics of LIGO by providing them with the essential skills to write and deploy their first smart contract onto the Tezos network. It will include the basics of the LIGO language, inspired from the [official LIGO documentation](https://ligolang.org/docs/language-basics/types), as well as detailed smart contract examples and a final exam to check your understanding.

