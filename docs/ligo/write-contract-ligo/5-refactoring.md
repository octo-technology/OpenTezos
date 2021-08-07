---
id: 5-refactoring
title: Refactoring
authors: Maxime Sallerin and Benjamin Pilia
---

import NotificationBar from '../../../src/components/docs/NotificationBar';

## Smart contract refactoring
Just as any other project, smart contracts will need refactoring during their development. In this part, the way the winner is chosen will be refactored. 

Everyone, by reading the code, can see that the winning ticket is `407 mod Set.size(store.players)`. By tampering with the number of bought tickets, it is easy for anyone to get the winning ticket. In this part, we will make it harder to guess the winning ticker number. However, **that method is not fully secured** as well. This refactoring is for educational purposes, to show some advanced features of LIGO and is NOT to be used in production.

This part is an opportunity to put the emphasis on two modules: `Bytes` and `Crypto`.

The `Bytes` module handles binary format for serialization, it converts Michelson structures into a binary format (and the reverse), concatenates two bytes. You can find a full reference [here](https://ligolang.org/docs/reference/bytes-reference/)

The `Crypto` module performs a few basic operations such as hashing and verifying signatures. You can find a full reference [here](https://ligolang.org/docs/reference/crypto-reference).

### Winner selection scheme

Here is the procedure:
1. The administrator will choose a large random number and keep it to himself. 
2. He hashes it and sends the hash when he calls the `OpenRaffle` entrypoint.
3. This hash is saved into the storage.
4. The administrator reveals his secret (random large number) when calling the `CloseRaffle` entrypoint.
5. The smart contract hashes this number and checks that it matches the storage hash. If it does, it uses this number to pick the winner just as before.
   
As warned above, this method is still filled with loopholes: 
- the administrator knows the secret number and can tamper with the number of bought tickets to get the winning one.
- everyone can try to brute-force the hash in order to find what number yielded this hash. 

This method only makes it a little harder to guess the number.

### Refactoring the OpenRaffle entrypoint

The `OpenRaffle` entrypoint expects a new input: the number hash, that should be saved into the storage. Both the storage and entrypoint have to be modified. The method is very similar to what has been done before:

1. Refactoring the storage: it must store a hash. According to the LIGO documentation, a hash has a `bytes` type:

```js
type storage is record [
    admin : address;
    close_date : timestamp;
    jackpot : tez;
    description : string;
    players : set (address);
    sold_tickets : map (nat, address);
    raffle_is_open : bool;
    winning_ticket_number_hash : bytes;
]
```

2. Adding the new input in the openRaffleParameter. The bytes type is added in the tuple:

```js
type openRaffleParameter is tez * timestamp * option(string) * bytes
```

3. Updating the entrypoint function header:

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const winning_ticket_number_hash : bytes; const store : storage) : returnType is
```

4. Refactoring the entrypoint logic. For this change, the only thing to do is to save the hash in the storage:

```js
function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const winning_ticket_number_hash : bytes; const store : storage) : returnType is
  block {
    if Tezos.source =/= store.admin then failwith("Administrator not recognized.")
    else {
      if not store.raffle_is_open then {
        if Tezos.amount < jackpot_amount then failwith("The administrator does not own enough tz.")
        else{
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
          winning_ticket_number_hash = winning_ticket_number_hash; // the hash is saved into the storage
          ];

          case description of
            Some(d) -> patch store with record [description=d]
          | None -> {skip}
          end
        }
      }
    } else {
        failwith("A raffle is already open.")
    }
  }
} with ((nil : list (operation)), store)
```

5. The new input has to be processed in the control flow:

```js
function main (const action : raffleEntrypoints; const store : storage): returnType is
block { 
    const return : returnType = case action of 
      OpenRaffle (param) -> open_raffle (param.0, param.1, param.2, param.3, store)
    | BuyTicket (param) -> buy_ticket(param, store)
    | CloseRaffle (param) -> close_raffle (param, store)
    end;
 } with return
```

You can compile the smart contract with:

```shell
$Ligocompile-contract raffle.ligo main
```

### Refactoring the CloseRaffle entrypoint
The method is the same here. So the step-by-step changes won't be detailed.

> Try to do this refactoring as an exercice. The LIGO documentation will tell you how to hash a number and compare it. Once you're done with your smart contract refactoring, you can compare it with our suggested version:

```js
type openRaffleParameter is tez * timestamp * option(string) * bytes
type buyTicketParameter is unit
type closeRaffleParameter is nat

type raffleEntrypoints is
OpenRaffle of openRaffleParameter
| BuyTicket of buyTicketParameter
| CloseRaffle of closeRaffleParameter

type storage is record [
    admin : address;
    close_date : timestamp;
    jackpot : tez;
    description : string;
    players : set (address);
    sold_tickets : map (nat, address);
    raffle_is_open : bool;
    winning_ticket_number_hash : bytes;
  ]

type returnType is list (operation) * storage

function open_raffle (const jackpot_amount : tez; const close_date : timestamp; const description : option (string); const winning_ticket_number_hash : bytes; const store : storage) : returnType is
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
            winning_ticket_number_hash = winning_ticket_number_hash; // the hash is saved into the storage
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

function close_raffle (const winning_ticket_number : nat; const store : storage) : returnType is
  block {
    const operations : list(operation) = nil;
    if Tezos.source =/= store.admin then failwith("administrator not recognized.")
    else {
      if store.raffle_is_open then {
        if Tezos.now < store.close_date then failwith("The raffle must remain open for at least 7 days.")
        else{
          const winning_ticket_number_bytes : bytes = Bytes.pack(winning_ticket_number);
          const winning_ticket_number_hash : bytes = Crypto.sha256(winning_ticket_number_bytes);
          if winning_ticket_number_hash =/= store.winning_ticket_number_hash then failwith("the hash does not match the hash of the winning ticket.")
          else{
            const number_of_players : nat = Set.size(store.players);
            const winning_ticket_id : nat = winning_ticket_number mod number_of_players;

            const winner : address = 
            case (store.sold_tickets[winning_ticket_id]) of
                Some (a) -> a
            | None -> (failwith ("winner address not found") : address)
            end;

            const receiver : contract (unit) =
            case (Tezos.get_contract_opt (winner) : option (contract (unit))) of
                Some (c) -> c
            | None -> (failwith ("winner contract not found.") : contract (unit))
            end;

            const op : operation = Tezos.transaction(unit, store.jackpot, receiver);
            const operations : list(operation) = list [ op; ];

            patch store with record [
            jackpot = 0tez;
            close_date = (0 : timestamp);
            description = ("raffle is currently closed" : string);
            raffle_is_open = False;
            players = (set[] : set(address));
            sold_tickets = (map[] : map (nat, address));
            ];
          }
        }
      } else {
        failwith("The raffle is closed.")
      }
    }
  } with (operations, store)

function main (const action : raffleEntrypoints; const store : storage): returnType is
block {
    const return : returnType = case action of
    OpenRaffle (param) -> open_raffle (param.0, param.1, param.2, param.3, store)
    | BuyTicket (param) -> buy_ticket(param, store)
    | CloseRaffle (param) -> close_raffle (param, store)
    end;
} with return
```

## Conclusion

LIGO is meant for smart contract development and always yields a Michelson code. The method for developing such smart contracts is pretty much always the same, and follows an order very close to the Michelson smart contract structure containing:

1. the **parameter** (or entrypoints): the entrypoints are defined into a variant, a type is defined for the input entrypoints. 
2. the **storage**: the storage is defined as a type, usually a record.
3. the **code**: the main function dispatches the actions using a pattern matching. The logic for each entrypoint is implemented in a function.

There needs to be a **main** function, which dispatches the actions of the smart contract.

LIGO syntax was designed to help developers build smart contracts by providing them with a syntax familiar to them: the main difference from other languages is the way the code is built and a few technical limitations due to the particularities of using a blockchain (randomness for instance).

LIGO is only a part of the tools that make the experience of smart contract development easier for developers. Another part, introduced later in this module, is unit testing.

## To go further

To learn more about LIGO, you can take a look at:
1. [The official Ligolang documentation](https://ligolang.org/docs/intro/introduction): a complete reference maintained by the developing team.
2. [Tezos Academy](https://tezosacademy.io/): a gamified interactive tutorial with 30 examples. 
