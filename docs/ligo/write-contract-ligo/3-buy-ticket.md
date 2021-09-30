---
id: 3-buy-ticket
title: Buy ticket
authors: Maxime Sallerin and Benjamin Pilia
---

import NotificationBar from '../../../src/components/docs/NotificationBar';

## Smart Contract development: Buy ticket entrypoint
> LIGO concepts used in this part: 
> with this second entrypoint, we will need to register players and map a raffle ticket to each player. Thus, we will learn how to use collections.
> It will also be the opportunity for you to review functions and checks

The second entrypoint can be freely called by everyone who wants to buy a ticket. In our use case, each address can only buy one ticket, which costs 1 Tez.

Two additional variables have to be stored:
1. who is taking part in the raffle
2. who owns a ticket

The storage has to be modified. Collections are going to come in handy for the modification of the storage

### LIGO concepts used in this part: collections

#### Lists

Lists are **linear collections of elements of the same type**. Linear means that in order to reach an element in a list, all the elements before have to be browsed (sequentially accessed). Elements can be repeated as only their order in the collection matters. The first element is called the `head`, and the sub-list after the head is called the `tail`.

Lists are used for returning operations from a smart contract's main function and to store the same values several times in a collection

For more details, see the [Ligolang `list` documentation](https://ligolang.org/docs/reference/list-reference)

#### Sets

_Sets_ are **unordered collections of values of the same type** (as opposed to lists which are ordered collections).
Like the mathematical _sets_ and _lists_, _sets_ can be empty and, if not, elements of _sets_ in LIGO are unique, even though they can be repeated in a _list_.

For more details, see the [Ligolang `set` documentation](https://ligolang.org/docs/reference/set-reference)

#### Maps

A _Map_ is a data structure that associates a value to a key, thus creating a key-value binding. All keys have the same type and all values have the same type. An additional requirement is that the type of the keys must be comparable.

> Maps load their entries into the environment, which is fine for small maps, but for maps holding millions of entries, the cost of loading them would be too expensive. For this we use `big_maps`. Their syntax is the same as for regular maps, but they are optimized for a huge number of entries.

For more details, see the [Ligolang `map` documentation](https://ligolang.org/docs/language-basics/maps-records#maps) and [Ligolang `big map` documentation](https://ligolang.org/docs/language-basics/maps-records#big-maps) 

### Customizing the Raffle storage

Thanks to these collections, the second entrypoint of the Raffle smart contract can be implemented. A list of participants must be stored, as well as the ticket/owner pair.

Two new variables will be stored in the contract storage.

> What collection should be used for:
> 1. the participants (who can only buy one ticket)?
> 2. the tickets and their owner?

For the first point, two collections could be used: a list and a set. Since the participants can only buy one ticket, a `set` is the right choice (since each element cannot appear twice).

For the second point, each ticket should be mapped to its owner. The number of participants is not limited: there might be millions of them, so a `big map` seems the right choice.

The set of participants should a have set of addresses, while the big map should map a ticket id (a nat) to an address. The new storage is:

```js
type storage is record [
    admin : address;
    close_date : timestamp;
    jackpot : tez;
    description : string;
    raffle_is_open : bool;
    players : set (address);
    sold_tickets : big_map (nat, address);
  ]
```

### Adding the BuyTicket entrypoint

The smart contract needs to expose an entrypoint to buy tickets. The method is the same as the one detailed for the first entrypoint:

1. Define the type parameter. This type should be `unit` since the buyer does not get to choose the ticket id:
   
```js
type buyTicketParameter is unit
```

2. Adding the entrypoint in the variant:
   
```js
type raffleEntrypoints is
OpenRaffle of openRaffleParameter
| BuyTicket of buyTicketParameter
```

3. Handling the new entrypoint in the control flow:
   
```js
function main (const action : raffleEntrypoints; const store : storage): returnType is
block {
    const return : returnType = case action of
    OpenRaffle (param) -> open_raffle (param.0, param.1, param.2, store)
    | BuyTicket (param) -> buy_ticket(param, store)
    end;
} with return
```

### Implementing the BuyTicket logic

The last step is to implement the logic of this entrypoint. Just as for the first entrypoint, this logic will be implemented in a function, `buy_ticket`:

```js
  function buy_ticket (const param: unit; const store : storage) : returnType is
    block { skip } with ((nil : list (operation)), store)
```

Two variables have to be checked:
1. is the buyer sending enough funds?
2. has the buyer not already bought a ticket?

For the first point, this is the same check that is done for the first entrypoint. Checking if an address is calling the entrypoint for the first time (= a buyer cannot buy more than one ticket) means checking if the calling address is already in the payers `set`.

```js
function buy_ticket (const param: unit; const store : storage) : returnType is
  block {
    if store.raffle_is_open then {
      const ticket_price : tez = 1tez;
      const current_player : address = Tezos.sender;
      if Tezos.amount = ticket_price then failwith("The sender does not own enough tz to buy a ticket.")
      else {
        if store.players contains current_player then failwith("Each player can participate only once.")
        else {
            skip
        }
      }
    } else {
      failwith("The raffle is closed.")
    }
  } with ((nil : list (operation)), store)
``` 

Once these two checks have been performed, the buyer can receive a ticket. For this, the entrypoint needs to:
1. register the address of a participant. The address must be added into the players set from the storage.
2. create a raffle ticket id. Since each participant can only buy a single ticket, the size of the participants set gives the new ticket id.
3. associate the ticket with its owner. The new ticket id will be a map to the buyer in the `sold_tickets` big map.

These three steps use the methods described in the collections section.

```js
function buy_ticket (const param: unit; const store : storage) : returnType is
  block {
    if store.raffle_is_open then {
      const ticket_price : tez = 1tez;
      const current_player : address = Tezos.sender;
      if Tezos.amount = ticket_price then failwith("The sender does not own enough tz to buy a ticket.")
      else {
        if store.players contains current_player then failwith("Each player can participate only once.")
        else {
          const ticket_id : nat = Set.size(store.players);
          store.players := Set.add(current_player, store.players);
          store.sold_tickets[ticket_id] := current_player;
        }
      }
    } else {
      failwith("The raffle is closed.")
    }
  } with ((nil : list (operation)), store)
``` 

Our contract now is:

```js
type openRaffleParameter is tez * timestamp * option(string)
type buyTicketParameter is unit

type raffleEntrypoints is
OpenRaffle of openRaffleParameter
| BuyTicket of buyTicketParameter

type storage is record [
    admin : address;
    close_date : timestamp;
    jackpot : tez;
    description : string;
    raffle_is_open : bool;
    players : set (address);
    sold_tickets : big_map (nat, address);
    ]

type returnType is list (operation) * storage

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

function buy_ticket (const param: unit; const store : storage) : returnType is
  block {
    if store.raffle_is_open then {
      const ticket_price : tez = 1tez;
      const current_player : address = Tezos.sender;
      if Tezos.amount = ticket_price then failwith("The sender does not own enough tz to buy a ticket.")
      else {
        if store.players contains current_player then failwith("Each player can participate only once.")
        else {
          const ticket_id : nat = Set.size(store.players);
          store.players := Set.add(current_player, store.players);
          store.sold_tickets[ticket_id] := current_player;
        }
      }
    } else {
      failwith("The raffle is closed.")
    }
  } with ((nil : list (operation)), store)

function main (const action : raffleEntrypoints; const store : storage): returnType is
block {
    const return : returnType = case action of
    OpenRaffle (param) -> open_raffle (param.0, param.1, param.2, store)
    | BuyTicket (param) -> buy_ticket(param, store)
    end;
} with return
```
