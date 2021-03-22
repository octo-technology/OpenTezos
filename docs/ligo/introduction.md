---
id: introduction
title: Introduction
slug: /ligo
---
//TODO(Remove imports)
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The goal of this module is to allow a developer to install LIGO transpiler on his operating system 
and give him TODO(the essentials) to write and deploy his first smart contract 
on the Tezos blockchain.

It will include the basics of LIGO //TODO(languages), 
inspired by the [official documentation](https://ligolang.org/docs/language-basics/types), 
as well as detailed smart contract examples. 
You will also be offered an exam to check your knowledge.

<br/>

![](../../static/img/ligo/intro_schema.svg)
<small className="figure">FIGURE 1: Ligo contextualisation </small>

<br/>

LIGO is a programming language for writing **[Tezos](https://tezos.com/) smart contracts**.
The diagram helps to contextualize the role of LIGO in the Tezos ecosystem.
LIGO takes action in the left part as a development tool allowing
the production of smart contracts (scripts in Michelson),
which can be deployed on the blockchain.
At the top, the Tezos network information through the nodes
in order to maintain an immutable common ledger (blockchain).

//TODO (replace previous sentence by "At the top, Tezos nodes broadcast information through the Tezos network in order to maintain an immutable common ledger (blockchain).")



By default, Tezos smart contracts are written in [Michelson](https://opentezos.com/michelson), but it is hard to learn low level //TODO(replace formal by stack-based) language. 

LIGO's syntax is **high level and transpiles to Michelson**.
//TODO(replace previous sentence by "LIGO transpiles scripts  written high-level **LIGO** syntax into a Michelson script.")

LIGO currently offers three syntaxes:

- **PascaLIGO**, a syntax inspired by Pascal which provides an imperative developer experience.

- **CameLIGO**, an [OCaml](https://ocaml.org/) inspired syntax that allows you to write in a functional style.

- **ReasonLIGO**, a [ReasonML](https://reasonml.github.io/) inspired syntax that builds on the strong points of OCaml. It aims to be familiar to those coming from JavaScript.

//TODO(here is an example of Counter contract that handle a single integer "counter" value as storage and allows users to increment decrement or reset this counter.)

<Tabs
  defaultValue="pascaligo"
  values={[
  { label: 'PascaLIGO', value: 'pascaligo', },
  { label: 'CameLIGO', value: 'cameligo', },
  { label: 'ReasonLIGO', value: 'reasonligo', },
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
</Tabs>

This LIGO contract accepts the following LIGO expressions:
`Increment(n)`, `Decrement(n)` and `Reset`. Those serve as
`entrypoint` identification.
