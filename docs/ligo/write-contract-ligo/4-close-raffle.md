---
id: 4-close-raffle
title: Close raffle
authors: Maxime Sallerin and Benjamin Pilia
---

import NotificationBar from '../../../src/components/docs/NotificationBar';

## Smart Contract development: Close raffle entrypoint
> LIGO concepts used in this part: with this last entrypoint, you will learn how to use transactions to send the reward to the winner. In addition, this will be the opportunity to warn you about some limitations of the language.

The last step is to close the raffle, pick a winner and send the reward. This last entrypoint will show how to send a transaction from the contract and some collections manipulations

Five steps are required:
1. Check that the calling address is the administrator
2. Check that the closing date has been reached and that the raffle is still open
3. Pick a winner
4. Send the reward to the winner
5. Reset the storage

New variables won't be stored as the storage is not expected to be modified. However, the third step raises a problem: how should the winner be picked? There are 3 possibilities:
1. The administrator chooses the winner when calling the entrypoint. Participants are likely not to buy a ticket if the administrator can choose the winner himself.
2. The winner is randomly chosen when calling this entrypoint.
3. The winner is chosen at the beginning by the administrator, but this is only revealed at the end of the raffle.

### Optional values

The option type is a predefined variant type that is used to express whether there is a value of some type or none. This is especially useful when calling a partial function, that is, a function that is not defined for some inputs. In that case, the value of the option type would be None, otherwise Some (v), where v is some meaningful value of any type. An example in arithmetic is the division operation:

```js
let div = ([a, b]: [nat, nat]): option<nat> => {
  if(b == (0 as nat)){ 
    return (None() as option <nat>); 
  } else { 
    return (Some (a/b)); 
  };
};
```

### Transactions

You can transfer Tez to an account, and invoke a function from another smart contract. For this, use:

```js
Tezos.transaction (<parameter>, <mutez>, <contract>);
```

where:
- **parameter** is the entrypoint of another contract, or use `unit` if you are transferring to a wallet address,
- **mutez** is the amount to transfer,
- **contract** is the contract interface of the targeted contract. It can be retrieved with the `Tezos.get_contract_opt` built-in function from the address of the other contract or the wallet.
  
Here's an example of retrieving the contract interface from the _winner_ `address`:

```js
const receiver : contract (unit) = 
    case (Tezos.get_contract_opt (winner) : option (contract (unit))) of
          Some (c) -> c
        | None -> (failwith ("winner contract not found.") : contract (unit))
        end;

const op : operation = Tezos.transaction(unit, store.jackpot, receiver);
```

Notice that the `Tezos.get_contract_opt` built-in function call will return an `option (contract (unit))`, thus allowing us to verify that the _winner_ address is valid.

### About randomness in smart contracts
The second option is not easily implemented in smart contracts. In any classical programming language (_Python_, _C_, _Java_, ...), a **random** function is directly usable from the standard API. With smart contracts, it is not possible.

Indeed, each smart contract execution has to be verified by any node in the network. However, how could this execution be verified if there is a random variable (one that would change for every node)?

It might seem to be a good idea to use blockchain events (transaction hash, block timestamp, ...) as a source of randomness. However, in the end, bakers that create blocks could use this to their advantage.

The only solution is to be the use of an external source of randomness or a secure cryptographic scheme. This can be achieved using _Oracles_ but this topic goes well beyond the level of this course.

For educational purposes, we will at first hardcode a ticket id winner. Then, the smart contract will be refactored, using the `Bytes` and `Crypto` modules.

### Adding the CloseRaffle entrypoint

The smart contract needs to expose this last entrypoint. The method is the same that has been detailed for the first and second entrypoint:

1. Defining the type parameter. The type should be `unit`, since the administrator needs to close the raffle without any other piece of information:
   
```js
type closeRaffleParameter is unit
```

2. Adding the entrypoint in the variant:

```js
type raffleEntrypoints is
OpenRaffle of openRaffleParameter
| BuyTicket of buyTicketParameter
| CloseRaffle of closeRaffleParameter
```

3. Handling the new entrypoint in the control flow:

```js
function main (const action : raffleEntrypoints; const store : storage): returnType is
block {
    const return : returnType = case action of
    OpenRaffle (param) -> open_raffle (param.0, param.1, param.2, store)
    | BuyTicket (param) -> buy_ticket(param, store)
    | CloseRaffle (param) -> close_raffle (param, store)
    end;
} with return
```

### Implementing the CloseRaffle logic

Let's create an empty function for this entrypoint:

```js
  function close_raffle (const param: unit; const store : storage) : returnType is
    block { const operations : list(operation) = nil; } with (operations, store)
```

There is a slight difference with this entrypoint function: it has to return an operation. As a result, the list of operations won't be empty and will be filled with one operation from within the function block.

The usual checks have to be implemented:
1. only the administrator can close the raffle,
2. the closing date must have been reached,
3. the raffle must be open

The winner will be picked using an hardcoded value. However, even if there are only two participants, the raffle must have a winner. So, the number of participants must be known so that the winning id matches an id ticket. For this, a modulo will be used: `hardcoded_number mod number_of_participants`.

```js
function close_raffle (const param : unit; const store : storage) : returnType is
  block {
    const operations : list(operation) = nil;
    if Tezos.source =/= store.admin then failwith("Administrator not recognized.")
    else {
      if store.raffle_is_open then {
        if Tezos.now < store.close_date then failwith("The raffle must remain open for at least 7 days.")
        else{
          const number_of_players : nat = Set.size(store.players);
          const random_number : nat = 467n; // hardcoded number
          const winning_ticket_id : nat = random_number mod number_of_players; // modulo expression
        }
      } else {
        failwith("The raffle is closed.")
      }
    }
  } with (operations, store)
```

The winning ticket is now chosen. The next step is to find its owner from the `sold_tickets big_map`. Since a key might not exist in a big map, fetching the value always return an option. This option is handled with pattern matching as show below:

```js
function close_raffle (const param : unit; const store : storage) : returnType is
  block {
    const operations : list(operation) = nil;
    if Tezos.source =/= store.admin then failwith("Administrator not recognized.")
    else {
      if store.raffle_is_open then {
        if Tezos.now < store.close_date then failwith("The raffle must remain open for at least 7 days.")
        else{
          const number_of_players : nat = Set.size(store.players);
          const random_number : nat = 467n;
          const winning_ticket_id : nat = random_number mod number_of_players;

          const winner : address = 
          case (store.sold_tickets[winning_ticket_id]) of
            Some (a) -> a
          | None -> (failwith ("Winner address not found") : address)
          end;
        }
      } else {
        failwith("The raffle is closed.")
      }
    }
  } with (operations, store)
```

The winner has been found and now has to be rewarded. First, we need to check that this address does exist, then create a transaction which will be added to the operations list:

```js
function close_raffle (const param : unit; const store : storage) : returnType is
  block {
    const operations : list(operation) = nil;
    if Tezos.source =/= store.admin then failwith("Administrator not recognized.")
    else {
      if store.raffle_is_open then {
        if Tezos.now < store.close_date then failwith("The raffle must remain open for at least 7 days.")
        else{
          const number_of_players : nat = Set.size(store.players);
          const random_number : nat = 467n;
          const winning_ticket_id : nat = random_number mod number_of_players;

          const winner : address = 
          case (store.sold_tickets[winning_ticket_id]) of
            Some (a) -> a
          | None -> (failwith ("Winner address not found.") : address)
          end;

          const receiver : contract (unit) =
          case (Tezos.get_contract_opt (winner) : option (contract (unit))) of
            Some (c) -> c
          | None -> (failwith ("Winner contract not found.") : contract (unit))
          end;

          const op : operation = Tezos.transaction(unit, store.jackpot, receiver);
          const operations : list(operation) = list [ op; ];
        }
      } else {
        failwith("The raffle is closed.")
      }
    }
  } with (operations, store)
```

The operations variable is no longer empty. This entrypoint does return a transaction that will be sent by the smart contract.

Finally, the storage need to be reset. All the fields will be filled with empty values:

```js
function close_raffle (const param : unit; const store : storage) : returnType is
  block {
    const operations : list(operation) = nil;
    if Tezos.source =/= store.admin then failwith("administrator not recognized.")
    else {
      if store.raffle_is_open then {
        if Tezos.now < store.close_date then failwith("The raffle must remain open for at least 7 days.")
        else{
          const number_of_players : nat = Set.size(store.players);
          const random_number : nat = 467n;
          const winning_ticket_id : nat = random_number mod number_of_players;

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
          sold_tickets = (big_map[] : big_map (nat, address));
          ];
        }
      } else {
        failwith("The raffle is closed.")
      }
    }
  } with (operations, store)
```
