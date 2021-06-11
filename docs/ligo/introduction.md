---
id: introduction
title: Introduction
slug: /ligo
authors: Maxime Sallerin, Benjamin Pilia and Frank Hillard
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NotificationBar from '../../src/components/docs/NotificationBar';

Tezos smart contracts are written in [Michelson](https://opentezos.com/michelson), which is a stack-based language and the lowest level of language for a Tezos smart contract. The Michelson code can be deployed as-is on the Tezos network.

However, if reading or writing Michelson code is still easy for small smart contracts, it can become tedious for more complex smart contracts, as:
- there are no variables or functions (//TODO ben en fait on  peux faire des LAMBDA, donc function possible en Michelson)
- there are no syntactic sugar (//TODO Michelson est bourré de sucre syntaxique, ... CADAADADDDAR, CMPLE )
- the Michelson code cannot be broken down into several files
- stack-based languages are not commonly used when it comes to web development

**LIGO solves these issues.**

It is a high-level language for smart contract development.
Smart contracts can be written in Ligo, then compiled into a single Michelson code file. 
This Michelson file becomes the smart contract that will be deployed on a Tezos network.

![](../../static/img/ligo/intro_schema.svg)
<small className="figure">FIGURE 1: Contextualisation of LIGO in the Tezos ecosystem</small>

LIGO currently offers four _flavours_ of syntaxes:

- **PascaLIGO**, a syntax inspired by the Pascal language, provides an imperative developer experience.

- **CameLIGO**, a syntax inspired from [OCaml](https://ocaml.org/), that allows to write in a functional style.

- **ReasonLIGO**, a syntax inspired from [ReasonML](https://reasonml.github.io/), that builds on the strong points of OCaml but still aims to be familiar JavaScript developers.
  
- **JsLIGO**, the latest syntax released, inspired by the popular JavaScript language.


<NotificationBar>
  <p>

**Imperative programming** is a programming paradigm that describes the operations in sequences of instructions executed by the computer to change the program's state.
**Functional programming** is a declarative programming paradigm that considers computation as an evaluation of mathematical functions.

  </p>
</NotificationBar>

Here is an example of a _Counter_ contract that handles a single integer `counter` value as storage and allows users to increment, decrement or reset this counter.

<Tabs
  defaultValue="pascaligo"
  values={[
  { label: 'PascaLIGO', value: 'pascaligo', },
  { label: 'CameLIGO', value: 'cameligo', },
  { label: 'ReasonLIGO', value: 'reasonligo', },
  { label: 'JsLIGO', value: 'jsligo', },
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

We chose to write this module in PascaLIGO. The main difference between the syntaxes is that PascaLIGO is more imperative while ReasonLIGO and CameLIGO are more functional. 
Moreover, 'for' and 'while' loops are only implemented in PascalIGO, which is why we chose it for this module.

This module aims to teach developers the basics of LIGO by providing them with the essential skills to write and deploy their first smart contract onto the Tezos network. It will include the basics of the LIGO language, inspired from the [official LIGO documentation](https://ligolang.org/docs/language-basics/types), as well as detailed smart contract examples and a final exam to check your understanding.

