---
id: 2-launch-raffle
title: Launch raffle
authors: Maxime Sallerin and Benjamin Pilia
---

import NotificationBar from '../../../src/components/docs/NotificationBar';

## Smart Contract development: launch raffle entrypoint
> LIGO concepts used in this part: 
> We are going to add our first entrypoint. We will need to dispatch the control flow in the main function. We are also going to complexify the storage with new types. Finally, we are going to implement some logic, check the access rights, raise an exception if they are not respected, and interact with some part of the Tezos blockchain. We will use:
> - Record
> - Tuples
> - functions
> - Entrypoint
> - variant
> - pattern matching
> - if condition
> - failwith
> - types: addresses, timestamp
> - Tezos Module
 
Our LIGO code is compiling but is doing nothing: It has an empty storage, no parameter, and the smart contract returns an empty list of operations and an empty storage. As detailed in the previous chapter, the smart contract should perform three actions:
1. launch a raffle
2. sell tickets (i.e., a caller can buy a ticket)
3. close the raffle, and reward the winner

Each action will be coded into an entrypoint.

### LIGO concepts used in this part

#### Records
The `record` type is a structure that holds several variables: each variable is referenced thanks to a field name.

Records are used:
- for the storage definition 
- for any object that should hold different types of information.

For more details, see the [Ligolang `record` documentation](https://ligolang.org/docs/language-basics/maps-records#records)

#### Tuples

Tuples gather multiple fields into a single structure. A tuple data structure is ordered, which means we can access each tuple element by its position. Unlike `record` type, the tuple fields are unnamed.

Tuples are used:
- for the return type of the **main** function
- for ordered data structures 

For more details, see the [Ligolang `tuple` documentation](https://ligolang.org/docs/language-basics/sets-lists-tuples#tuples)

#### Conditional branching

There are two ways to write `if` conditions:

1. For a single expression:
```js
function isSmall (const n : nat) : bool is
if n < 10n then true else false
```

1. For more than a simple expression we use a `block` expression: 
```js
if x < y then {
  const z : nat = x;
  x := y; y := z
}
else skip;
```

For more details, see the [Ligolang `if` documentation](https://ligolang.org/docs/language-basics/boolean-if-else#conditionals)

#### Error handling

A smart contract can raise an exception that will stop the smart contract execution with the use of the keyword `failwith` (with an error message):

```js
failwith(<string_message>)
```

For more details, see the [Ligolang `failwith` documentation](https://ligolang.org/docs/language-basics/exceptions)

#### Interactions with a Tezos network: Tezos Module

The Tezos module is a set of LIGO instructions that query the state of the Tezos blockchain.

- `Tezos.balance`: Get the balance for the contract.
- `Tezos.amount`: Get the amount of Tez provided by the sender to complete this transaction.
- `Tezos.sender`: Get the address that initiated the current transaction.
- `Tezos.self_address`: Get the address of the currently running contract.
- `Tezos.source`: Get the originator (address) of the current transaction. That is, if a chain of transactions led to an execution, you get the address that began the chain. Not to be confused with `Tezos.sender`, which gives the address of the contract or user which directly caused the current transaction.
- `Tezos.chain_id`: Get the identifier of the chain to distinguish between main and test chains.
- `Tezos.transaction`: create a transaction that will be sent at the end of the contract execution.

For more details, see the [Ligolang `Tezos module` documentation](https://ligolang.org/docs/reference/current-reference)

#### Functions in ligo

LIGO functions are the basic building block of contracts. Each entrypoint of a contract executes a function and each smart contract must have at least one **main** function that dispatches the control flow to other functions.

When calling a function, LIGO makes a copy of the arguments but also of the environment variables.

Therefore, any modification to these will not be reflected outside the scope of the function and will be lost if they are not explicitly returned by the function.

There are two syntaxes for functions in PascaLIGO, _Block Functions_ and _Blockless Functions_.

##### Block functions

Block functions in PascaLIGO are defined using the following syntax:

```js
function <name> (<parameters>) : <return_type> is 
  block {
   <operations and instructions>
  } with <returned_value>
```

If a placeholder is needed, the instruction `skip` leaves the state unchanged. The rationale for `skip` instead of a genuinely empty block is that it prevents you from writing an empty block by mistake.

```js
function <name> (<parameters>) : <return_type> is 
  block {
   skip
  } with <returned_value>
```

##### Blockless functions

Functions containing all of their logic into a single expression can be defined without a block. The `add` function above can be re-written as a blockless function:

```js
function add (const a: int; const b : int) : int is a + b
```

For more details, see the [Ligolang `functions` documentation](https://ligolang.org/docs/language-basics/functions)

#### Dispatching the control flow in the main function

In LIGO, the design pattern is to have one `main` function that dispatches the control flow according to its parameters. The functions that can be invoked by those actions are called entrypoints. This is similar to the programming in _C_.

The parameter of the contract is then a `variant` type (described below), and depending on the constructors of that type, different functions in the contract are called. In other terms, the main function dispatches the control flow depending on a pattern matching the contract parameter.

##### Variant type

A variant type is a user-defined or built-in type (in case of `options`) that defines a type by cases. A number of cases are defined in the type definition. The value of a variable of this type must be included in these cases. The simplest variant type is equivalent to the enumerated types found in _Java_, _C++_, _JavaScript_, etc.

Here is how we define a `bit` as being either 1 or 0 (and nothing else):

```js
type bit is One | Zero
const closed_switch : bit = One
const open_switch : bit = Zero
```

Entrypoints are defined within a variant type:

```js
type entrypoints is
  <firstEntrypoint> of <firstEntrypointParameterType>
| <secondEntrypoint> of <secondEntrypointParameterType>
| ...
|  <nthEntrypoint> of <nthEntrypointParameterType>
```

##### Pattern Matching (Variant type handling)

Pattern matching can be used to route the program's control flow based on the value of a `variant`. It is similar to the `switch` construct of many other languages. Consider for instance the definition of a power switch that turns a light on or off.

```js
type bit is One | Zero

function power_switch (const b : bit) : bit is
  case b of
    One -> Zero
  | Zero -> One
  end
```

The control is performed this way:

```js
type entrypoints is
  <firstEntrypoint> of <firstEntrypointParameterType>
| <secondEntrypoint> of <secondEntrypointParameterType>
| ...
|  <nthEntrypoint> of <nthEntrypointParameterType>

function main (const action : entrypoints; const store : storage): returnType is
block {
    const return : returnType = case action of
      <firstEntrypoint> (param) -> <firstEntrypointFunctionName> (param.0, param.1, param.2, param.3, store)
    | <secondEntrypoint> (param) -> <secondEntrypointFunctionName>(param, store)
    | ...
    | <nthEntrypoint> (param) -> <nthEntrypointFunctionName> (param, store)
    end;
 } with return
```

### Customizing the Raffle storage

The first entrypoint of our Raffle smart contract illustrates the basics of PascaLIGO, covered above.

Before coding the logic of the first action (opening a raffle session), the storage has to be modified to hold such a raffle. The contract needs an **administrator**: he will launch a raffle session, and provide a **description**. When the raffle is **opened**, it should be clearly noted in the storage. This raffle will need a **reward** and will be ongoing for a given **time**.

So, five variables are needed:
- the raffle administrator
- a description of the raffle
- a raffle opened boolean
- the reward in tez
- the raffle end date

> What would be the types for each piece of information?

For each variable, the corresponding type is:
- raffle administrator: address
- raffle description: string
- raffle opened : boolean
- reward: tez
- raffle end date: timestamp

So far, the storage was empty, thanks to the `unit` type. The storage now needs to hold five variables of different types. Several values can be held in a `map`, but they must have the same type. Besides, `map` is not meant to keep the same number of elements.

The correct way to define a storage is to use the `record` type, as such:

```js
type storage is record [
    admin : address;
    close_date : timestamp;
    jackpot : tez;
    description : string;
    raffle_is_open : bool;
]
```

### Creating a raffle session: entrypoint definition

The contract storage can now hold a raffle session. The contract has to provide the users with a way of creating a raffle session. To do that, it needs an entrypoint that performs such an action: this new entrypoint should be named `OpenRaffle` and would allow the administrator to open a raffle.

So far, there is no entrypoint into this smart contract:

```js
type raffleEntrypoints is unit
```

Adding the OpenRaffle entrypoint means defining the raffle entrypoint as a `variant`:

```js
type raffleEntrypoints is OpenRaffle of unit
```

`raffleEntrypoints` is now a variant: `OpenRaffle` does not expect any argument (because of `of unit`).

In order to be exposed, `OpenRaffle` needs to be handled in a pattern matching, in the main function:

```js
function main (const action : raffleEntrypoints; const store : storage):  list (operation) * storage is
    case action of
        OpenRaffle -> ((nil: list(operation)), store)
    end;

```

> Notice that the contract **parameter** (_raffleEntrypoints_ variant) is requiring no parameter (`unit`).
> For now, this smart contract only has a single default entrypoint with no argument. 
> The _storage_ type is used as the second parameter of the _main_ function. 

Our smart contract now looks like this:

```js
type raffleEntrypoints is OpenRaffle of unit

type storage is record [
    admin : address;
    close_date : timestamp;
    jackpot : tez;
    description : string;
    raffle_is_open : bool;
    ]

type returnType is list (operation) * storage

function main (const action : raffleEntrypoints; const store : storage): returnType is
    case action of
        OpenRaffle -> ((nil: list(operation)), store)
    end;

```

Despite the definition of a more complex storage, the execution of the smart contract still does nothing. The smart contract should at least require some parameters and update its storage.

To open a raffle, several variables have to be sent: the reward, the closing date, and a raffle description. Let's define a type for these parameters:

```js
type openRaffleParameter is tez * timestamp * option(string)
```

It is declared as a tuple:
- `tez`: the amount of the reward
- `timestamp`: closing date
- `option(string)`: an optional description

The `OpenRaffle` entrypoint must expect these parameters:

```js
type openRaffleParameter is tez * timestamp * option(string)
type raffleEntrypoints is OpenRaffle of openRaffleParameter
```

Finally, the parameters must be added in the control flow in the main function:

```js
type openRaffleParameter is tez * timestamp * option(string)
type raffleEntrypoints is OpenRaffle of openRaffleParameter

type storage is record [
    admin : address;
    close_date : timestamp;
    jackpot : tez;
    description : string;
    raffle_is_open : bool;
    ]

type returnType is list (operation) * storage

function main (const action : raffleEntrypoints; const store : storage): returnType is
    case action of
        OpenRaffle (param) -> ((nil: list(operation)), store)
    end;

```

This outputs some Michelson code that does nothing, but there is a slight change in the parameter section:

```
{ parameter (pair (pair mutez timestamp) (option string)) ;
  storage int ;
  code { CDR ; NIL operation ; PAIR } }
```

The `openRaffleParameter` is expected in the parameter section.

### Adding the OpenRaffle logic

The last step is to implement the logic of this entrypoint, in a function, which will update the storage.

Let's create an empty function. This function expects the three needed parameters, and returns the standard list of operations and the updated store:

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option(string); const store : storage) : returnType is
    block { skip } with ((nil: list(operation)), store)
```

The first step is to check if the entrypoint is called by the administrator. If not, it should raise an exception. The check is performed by the association of an `if` condition and a `failwith`. The address calling the entrypoint should match the address in the storage. This is called access control.

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option(string); const store : storage) : returnType is
    block {
      if Tezos.source =/= store.admin then failwith("administrator not recognized")
      else {
        skip
      }
    } with ((nil: list(operation)), store)
```

A second check has to be performed: a raffle cannot be opened if the previous one has not yet closed. A boolean gives this value in the storage: `raffle_is_open`

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option(string); const store : storage) : returnType is
    block {
      if Tezos.source =/= store.admin then failwith("Administrator not recognized.")
      else {
        if not store.raffle_is_open then {
            skip
        } else {
          failwith("A raffle is already open.")
        }
      }
    } with ((nil: list(operation)), store)
```

A third check is performed on the reward: the funds sent must match the raffle reward.

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const store : storage) : returnType is
  block {
    if Tezos.source =/= store.admin
    then failwith ("Administrator not recognized.")
    else {
      if not store.raffle_is_open then {
        if Tezos.amount < jackpot_amount then failwith ("The administrator does not own enough tez.")
        else {
            skip
        }
      }
      else {
        failwith ("A raffle is already open.")
      }
    }
  } with ((nil : list (operation)), store)
```

One final check is performed on the raffle closing date: the raffle should last at least a week.

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const store : storage) : returnType is
  block {
    if Tezos.source =/= store.admin
    then failwith ("Administrator not recognized.")
    else {
      if not store.raffle_is_open then {
        if Tezos.amount < jackpot_amount then failwith ("The administrator does not own enough tez.")
        else {
          const today : timestamp = Tezos.now;
          const seven_day : int = 7 * 86400;
          const in_7_day : timestamp = today + seven_day;
          const is_close_date_not_valid : bool = close_date < in_7_day;
          if is_close_date_not_valid then failwith("The raffle must remain open for at least 7 days.")
          else {
            skip
          }
        }
      }
      else {
        failwith ("A raffle is already open.")
      }
    }
  } with ((nil : list (operation)), store)
```

We need to store the variables about the raffle: the reward, the closing date and the raffle description. In addition, the storage should indicate that there's an ongoing raffle. The storage needs to be updated with these variables. 

> Note how the description is added to the storage as an `option`.

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const store : storage) : returnType is
  block {
    if Tezos.source =/= store.admin
    then failwith ("Administrator not recognized.")
    else {
      if not store.raffle_is_open then {
        if Tezos.amount < jackpot_amount then failwith ("The administrator does not own enough tz.")
        else {
          const today : timestamp = Tezos.now;
          const seven_day : int = 7 * 86400;
          const in_7_day : timestamp = today + seven_day;
          const is_close_date_not_valid : bool = close_date < in_7_day;
          if is_close_date_not_valid then failwith("The raffle must remain open for at least 7 days.")
          else {
            patch store with record [
            jackpot = jackpot_amount;
            close_date = close_date;
            raffle_is_open = True;
            ];

            case description of
              Some(d) -> patch store with record [description=d]
            | None -> {skip}
            end
          }
        }
      }
      else {
        failwith ("A raffle is already open.")
      }
    }
  } with ((nil : list (operation)), store)
```

> Keep in mind:
> - check entrypoint inputs as much as possible
> - the storage can be updated in an entrypoint