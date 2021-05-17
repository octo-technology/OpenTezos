---
id: write-contract-smartpy
title: Smart contract development with SmartPy
authors: Maxime Sallerin
---

import NotificationBar from '../../src/components/docs/NotificationBar';

In this chapter, we will use _SmartPy_ to develop a smart contract based Raffle and cover the most important aspects of the framework. We will introduce new notions as they come along the contract. For a complete reference of _SmartPy_, please refer to the [Reference Manual](https://smartpy.io/reference.html).

## What is a smart contract?
First, let's recap what a smart contract is and what role _SmartPy_ plays in it.

Fig. 1 helps to contextualize the role of _SmartPy_ in the Tezos ecosystem.

_SmartPy_ is a development tool allowing for the production of smart contracts (scripts in Michelson), which can be deployed on the blockchain.

![](../../static/img/ligo/intro_schema.svg)
<small className="figure">FIGURE 1: _SmartPy_ contextualisation </small>

A Tezos smart contract is a piece of **code** written in Michelson language (a low-level stack-based Turing-complete language).

It defines all **entrypoints** (invocable functions) of the smart contract and its **storage**.

![](../../static/img/ligo/smart_contract.svg)
<small className="figure">FIGURE 2: Smart contract</small>

//TODO: Shouldn't this whole section be in the introduction instead? There are a lot of repetition with the introduction

### Storage
The storage is an allocated memory space associated with a smart contract. It is the permanent data store for the smart contract.

### Entrypoints
The entrypoints are the invocable functions of a smart contract. Executing an entrypoint takes some parameters and the current state of the storage returns a new modified storage and some operations. //TODO: what kind of operations? operations that have not be executed? or to be executed next? or what???

<NotificationBar>
  <p>
  
**An operation** results from the invocation of a smart contract and represents the side effects on the Tezos network.
The storage resulting from the invocation of a smart contract represents the side effects on the data related to the invoked contract.
If the execution of an entrypoint produces an operation (an ordered list of transactions) then they are sent and executed according to the order on the list.
//TODO: Unclear, I didn't understand a thing...

  </p>
</NotificationBar>

//TODO: I feel like all the section above should be in the introduction, or in another chapter.

## About the raffle contract
A raffle is a game of chance that distributes a winning prize.

The organizer is in charge of defining a jackpot and selling tickets that will either be winners or losers. In the case of our example, there is only one winning ticket.

Fig.3 represents our smart contract.

![](../../static/img/smartpy/raffle_schema.svg)
<small className="figure">FIGURE 3: Raffle contract</small>

Three entrypoints allow interaction with the contract:

- **open_raffle** can only be called by the administrator. During this call, he sends the amount of the jackpot to the contract, defines a closing date, indicates the number/identity of the winning ticket (in an encrypted way), and declares the raffle open.
- **buy_ticket** allows anyone to buy a ticket for 1 tez and take part in the raffle.
- **close_raffle** can only be called by the administrator. It closes the raffle and sends the jackpot to the winner.

### Get started
This section illustrates the coding of the smart contract in the [online editor](https://smartpy.io/ide) proposed by _SmartPy_. You can however use your favourite IDE instead as described above.

#### Create your contract
Create a new contract in the online editor and name it _Raffle Contract_.

![](../../static/img/smartpy/online_editor_create_contract.png)
<small className="figure">FIGURE 4: Online Editor Create Contract</small>

#### Template

Copy/paste the template below to get started:

```python
# Raffle Contract - Example for illustrative purposes only.

import smartpy as sp

class Raffle(sp.Contract):
    def __init__(self):
        self.init()

    @sp.entry_point
    def open_raffle(self):
        pass

if "templates" not in __name__:
    @sp.add_test(name = "Raffle")
    def test():
        r = Raffle()
        scenario = sp.test_scenario()
        scenario.h1("Raffle")
        scenario += r

    sp.add_compilation_target("Raffle_comp", Raffle())
```

//TODO: Why is the section below shown as a list? At least you should add context before showing a list, e.g. "the contracts consists of the following:"

- **A _SmartPy_ contract** consists of a state with one or several entry points. //TODO: is 'state' the right word here? Entrypoints are stored in the state? Is it the same as storage?

It is a class definition that inherits from `sp.Contract`. //TODO: What is a classe definition? What does inherit mean?

- **The _SmartPy_ storage** is defined into the constructor `__init__` which makes a call to `self.init()` that initializes fields and sets up the storage. //TODO: What are fields? What does setting up the storage mean? Is that setting values to null?

- **Entrypoints** are methods of a contract class that can be called from the outside. Entrypoints need to be marked with the `@sp.entry_point` decorator. //TODO: What is a decorator?

- **Tests and Scenarios** are good tools to make sure our smart contract is working correctly.
  - A new test is a method marked with the `sp.add_test` decorator.
  - A new scenario is instantiated by `sp.test_scenario`.
  - Scenarios describe a sequence of actions: originating contracts, computing expressions, calling entry points, etc. //TODO: Difference between a test and a scenario?
  - In the online editor of SmartPy.io, the scenario is computed and then displayed as an HTML document on the output panel.

We will explain in more details the use of all these concepts in the next sections.

Our code doesn't do much for now, but it can already be compiled by pressing the _run_ button. If there is no error, you should be able to visualize the generated Michelson code in the _Deploy Michelson Contract_ tab.

```js
parameter (unit %open_raffle);
storage   unit;
code
  {
    CDR;        # @storage
    # == open_raffle == # @storage
    NIL operation; # list operation : @storage
    PAIR;       # pair (list operation) @storage
  };
```

### The *open_raffle* entrypoint

`open_raffle` is the entrypoint that only the administrator can call. If the invocation is successful, then the raffle is open, the smart contract's storage will be updated with the jackpot amount and the hash of the winning ticket number.
//TODO: You should introduce earlier how the raffle works and a winnier is picked, it's the first time in the article you speak about a hash of a ticket. Is that the winning mechanism? No idea so far.

#### Link to referential manual

- [Init](https://smartpy.io/reference.html#_contracts)
- [Entrypoints](https://smartpy.io/reference.html#_entry_points)
- [Checking a Condition](https://smartpy.io/reference.html#_checking_a_condition)
- [Timestamps](https://smartpy.io/reference.html#_timestamps)
- [Test and Scenario](https://smartpy.io/reference.html#_tests_and_scenarios)
- [Typing](https://smartpy.io/reference.html#_typing)

#### Code

```python
# Raffle Contract - Example for illustrative purposes only.

import smartpy as sp


class Raffle(sp.Contract):
    def __init__(self, address):
        self.init(admin=address,
                  close_date=sp.timestamp(0),
                  jackpot=sp.tez(0),
                  raffle_is_open=False,
                  hash_winning_ticket=sp.bytes('0x')
                  )

    @sp.entry_point
    def open_raffle(self, jackpot_amount, close_date, hash_winning_ticket):
        sp.verify_equal(sp.source, self.data.admin, message="Administrator not recognized.")
        sp.verify(~ self.data.raffle_is_open, message="A raffle is already open.")
        sp.verify(sp.amount >= jackpot_amount, message="The administrator does not own enough tz.")
        today = sp.now
        in_7_day = today.add_days(7)
        sp.verify(close_date > in_7_day, message="The raffle must remain open for at least 7 days.")
        self.data.close_date = close_date
        self.data.jackpot = jackpot_amount
        self.data.hash_winning_ticket = hash_winning_ticket
        self.data.raffle_is_open = True


if "templates" not in __name__:
    alice = sp.test_account("Alice")
    admin = sp.test_account("Administrator")


    @sp.add_test(name="Raffle")
    def test():
        r = Raffle(admin.address)
        scenario = sp.test_scenario()
        scenario.h1("Raffle")
        scenario += r

        scenario.h2("Test open_raffle entrypoint")
        close_date = sp.timestamp_from_utc_now().add_days(8)
        jackpot_amount = sp.tez(10)
        number_winning_ticket = sp.nat(345)
        bytes_winning_ticket = sp.pack(number_winning_ticket)
        hash_winning_ticket = sp.sha256(bytes_winning_ticket)

        scenario.h3("The unauthorized user Alice unsuccessfully call open_raffle")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=alice.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin unsuccessfully call open_raffle with wrong close_date")
        close_date = sp.timestamp_from_utc_now().add_days(4)
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin unsuccessfully call open_raffle by sending not enough tez to the contract")
        close_date = sp.timestamp_from_utc_now().add_days(8)
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(5), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin successfully call open_raffle")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now())
        scenario.verify(r.data.close_date == close_date)
        scenario.verify(r.data.jackpot == jackpot_amount)
        scenario.verify(r.data.raffle_is_open)

        scenario.h3("Admin unsuccessfully call open_raffle because a raffle is already open")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)


    sp.add_compilation_target("Raffle_comp", Raffle(admin.address))
```

#### Storage definition

```python
def __init__(self, address):
    self.init(admin=address,
              close_date=sp.timestamp(0),
              jackpot=sp.tez(0),
              raffle_is_open=False,
              hash_winning_ticket=sp.bytes('0x')
              )
```

The definition of the storage is done in the constructor `__init__` and the different fields of the storage are declared as follows:  
`self.init( field1=value1, field2=value2, field3=value3)`

where:

- `field1`, `field2`, `field3` are the names of the variables and are accessible via `self.data` (e.g. `self.data.field1`)
- `value1`, `value2`, `value3` are initial values or variables passed as constructors like `__init__(self, value1)` as we did above for the `admin=address` field. (This can be useful if you want to initialize the storage with some specific values)

> Types are usually automatically inferred and not explicitly needed.
> But it is still possible to add constraints on types, see [Setting a type constraint in SmartPy](https://smartpy.io/reference.html#_setting_a_type_constraint_in_smartpy).

For the storage of the raffle contract, we have for the moment defined 5 fields:

- **admin** is the only authorized `address` to call the two entrypoints open_raffle and close_raffle.
- **close_date** is a `timestamp` to indicate the closing date of the raffle. The raffle must remain open for at least seven days.
- **jackpot** will be the amount in `tez` distributed to the winner.
- **raffle_is_open** is a `boolean` to indicate if the raffle is open or not.
- **hash_winning_ticket** is the hash of the winning ticket indicated by the admin.
  > As there is no possibility randomise, the hash solution has been chosen.  
  > **Reminder**, this example is for educational purposes and is not intended for deployment on the real Tezos network.

#### Entrypoint implementation

```python
@sp.entry_point
def open_raffle(self, jackpot_amount, close_date, hash_winning_ticket):
    sp.verify_equal(sp.source, self.data.admin, message="Administrator not recognized.")
    sp.verify(~ self.data.raffle_is_open, message="A raffle is already open.")
    sp.verify(sp.amount >= jackpot_amount, message="The administrator does not own enough tz.")
    today = sp.now
    in_7_day = today.add_days(7)
    sp.verify(close_date > in_7_day, message="The raffle must remain open for at least 7 days.")
    self.data.close_date = close_date
    self.data.jackpot = jackpot_amount
    self.data.hash_winning_ticket = hash_winning_ticket
    self.data.raffle_is_open = True
```

An entrypoint is a method of the contract class preceded by `@sp.entry_point`.
It can take several parameters.

In our case, the first entrypoint is called `open_raffle` and does the following:

- With `sp.verify()` or `sp.verify_equal()` we check 4 things and return an error message if necessary. See doc [Checking a Condition](https://smartpy.io/reference.html#_checking_a_condition).
  1. The address that calls the entrypoint must be the administrator one indicated in the storage. We compare here `sp.source` and `self.data.admin`.
     > `sp.sender` is the address that calls the current entrypoint.  
     > `sp.source` is the address that initiates the current transaction. It may or may not be equal to `sp.sender`, but in our case, it is.
  2. No raffle must be open. For this, we use the boolean `raffle_is_open` defined in the storage.
     > Note that `~` is the symbol used for logical negation.
  3. The amount `sp.amount` sent to the contract by the administrator during the transaction must be at least greater than the value specified in the `jackpot_amount` argument.
  4. The close date `close_date` passed as a parameter must be at least seven days in the future. (see doc [Timestamps](https://smartpy.io/reference.html#_timestamps)).
- Once all the conditions are passed we update the storage as follows:

```python
self.data.close_date = close_date
self.data.jackpot = jackpot_amount
self.data.hash_winning_ticket = hash_winning_ticket
self.data.raffle_is_open = True
```

#### Test and Scenario

The purpose of the test scenario is to ensure the proper functionment of the smart contract by testing the conditions
and checking the changes made to the storage.

With _SmartPy_ a test is a method of the class contract preceded by `@sp.add_test`.

Inside this method, you need to instantiate your class contract and your scenario to which you will add the contract instance and all the calls related you want to test.

```python
@sp.add_test(name="Raffle")
def test():
    r = Raffle(admin.address)
    scenario = sp.test_scenario()
    scenario.h1("Raffle")
    scenario += r
```

You can also organize your scenario by adding titles with `scenario.h1("My title")`, `scenario.h2("My subtitle")` etc.

An interesting point is the possibility to define test accounts for our scenario.

```python
alice = sp.test_account("Alice")
admin = sp.test_account("Administrator")
```

Test accounts can be defined by calling `sp.test_account(seed)` where the seed is a string.
A test account contains some fields: `account.address`, `account.public_key_hash`, `account.public_key`, and `account.secret_key`.

You can then simulate the calls to the entrypoints by specifying the different arguments, as follows:

```python
scenario.h3("The unauthorized user Alice unsuccessfully call open_raffle")
scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                          hash_winning_ticket=hash_winning_ticket) \
    .run(source=alice.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
         valid=False)
```

The run method and its parameters are optional, but it can help to add relevant context to the entrypoint call.  
You can specify the `source` of the transaction, the `amount` of tez sent, the transaction date with `now` etc.

> Note that the option `valid=False` allows you to indicate that the transaction is expected to fail here because Alice is not the administrator.

The result will then be displayed as an HTML document in the output panel of the online editor.

#### Run and watch the output

Let's run our code.

![](../../static/img/smartpy/online_editor_summary_contract.png)
<small className="figure">FIGURE 4: Online Editor Contract Summary</small>

On the right screen, we can see a summary of our smart contract with the following information:

- Address of the contract
- Balance in tez
- Storage
- Entry points

By clicking on the _Types_ tab, we have access to the types of the storage elements and the parameters of the entrypoints.

![](../../static/img/smartpy/online_editor_Types.png)
<small className="figure">FIGURE 5: Online Editor Types</small>

> As with Python, most of the time, it is not necessary to specify the type of an object in _SmartPy_.  
> But because the target language of SmartPy, Michelson, requires types.  
> Each _SmartPy_ expression, however, needs a type. This is why _SmartPy_ uses type inference to determine the type of each expression.  
> See doc [Typing](https://smartpy.io/reference.html#_typing).

By clicking on the _Deploy Michelson Contract_ tab, we have access to the codes compiled in Michelson for the storage (_Storage_ tab) and the smart contract (_Code_ tab).

The michelson code of our smart contract is for the moment the following:

```js
parameter (pair %open_raffle (timestamp %close_date) (pair (bytes %hash_winning_ticket) (mutez %jackpot_amount)));
storage   (pair (pair (address %admin) (timestamp %close_date)) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open))));
code
  {
    UNPAIR;     # @parameter : @storage
    SWAP;       # @storage : @parameter
    # == open_raffle ==
    # sp.verify(sp.pack(sp.set_type_expr(sp.source, sp.TAddress)) == sp.pack(sp.set_type_expr(self.data.admin, sp.TAddress)), message = 'Administrator not recognized.') # @storage : @parameter
    DUP;        # @storage : @storage : @parameter
    DUG 2;      # @storage : @parameter : @storage
    CAR;        # pair (address %admin) (timestamp %close_date) : @parameter : @storage
    CAR;        # address : @parameter : @storage
    PACK;       # bytes : @parameter : @storage
    SOURCE;     # @source : bytes : @parameter : @storage
    PACK;       # bytes : bytes : @parameter : @storage
    COMPARE;    # int : @parameter : @storage
    EQ;         # bool : @parameter : @storage
    IF
      {}
      {
        PUSH string "Administrator not recognized."; # string : @parameter : @storage
        FAILWITH;   # FAILED
      }; # @parameter : @storage
    SWAP;       # @storage : @parameter
    # sp.verify(~ self.data.raffle_is_open, message = 'A raffle is already open.') # @storage : @parameter
    DUP;        # @storage : @storage : @parameter
    DUG 2;      # @storage : @parameter : @storage
    GET 6;      # bool : @parameter : @storage
    IF
      {
        PUSH string "A raffle is already open."; # string : @parameter : @storage
        FAILWITH;   # FAILED
      }
      {}; # @parameter : @storage
    # sp.verify(sp.amount >= params.jackpot_amount, message = 'The administrator does not own enough tz.') # @parameter : @storage
    DUP;        # @parameter : @parameter : @storage
    GET 4;      # mutez : @parameter : @storage
    AMOUNT;     # @amount : mutez : @parameter : @storage
    COMPARE;    # int : @parameter : @storage
    GE;         # bool : @parameter : @storage
    IF
      {}
      {
        PUSH string "The administrator does not own enough tz."; # string : @parameter : @storage
        FAILWITH;   # FAILED
      }; # @parameter : @storage
    # sp.verify(params.close_date > sp.add_seconds(sp.now, 604800), message = 'The raffle must remain open for at least 7 days.') # @parameter : @storage
    NOW;        # @now : @parameter : @storage
    PUSH int 604800; # int : @now : @parameter : @storage
    ADD;        # timestamp : @parameter : @storage
    SWAP;       # @parameter : timestamp : @storage
    DUP;        # @parameter : @parameter : timestamp : @storage
    DUG 2;      # @parameter : timestamp : @parameter : @storage
    CAR;        # timestamp : timestamp : @parameter : @storage
    COMPARE;    # int : @parameter : @storage
    GT;         # bool : @parameter : @storage
    IF
      {}
      {
        PUSH string "The raffle must remain open for at least 7 days."; # string : @parameter : @storage
        FAILWITH;   # FAILED
      }; # @parameter : @storage
    SWAP;       # @storage : @parameter
    # self.data.close_date = params.close_date # @storage : @parameter
    UNPAIR;     # pair (address %admin) (timestamp %close_date) : pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)) : @parameter
    CAR;        # address : pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)) : @parameter
    DUP 3;      # @parameter : address : pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)) : @parameter
    CAR;        # timestamp : address : pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)) : @parameter
    SWAP;       # address : timestamp : pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)) : @parameter
    PAIR;       # pair address timestamp : pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)) : @parameter
    PAIR;       # pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open))) : @parameter
    SWAP;       # @parameter : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    # self.data.jackpot = params.jackpot_amount # @parameter : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    DUP;        # @parameter : @parameter : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    DUG 2;      # @parameter : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open))) : @parameter
    GET 4;      # mutez : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open))) : @parameter
    UPDATE 5;   # pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open))) : @parameter
    SWAP;       # @parameter : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    # self.data.hash_winning_ticket = params.hash_winning_ticket # @parameter : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    GET 3;      # bytes : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    UPDATE 3;   # pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    # self.data.raffle_is_open = True # pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    PUSH bool True; # bool : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    UPDATE 6;   # pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    NIL operation; # list operation : pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open)))
    PAIR;       # pair (list operation) (pair (pair address timestamp) (pair (bytes %hash_winning_ticket) (pair (mutez %jackpot) (bool %raffle_is_open))))
  };
```

By scrolling down a little, we have access to the test scenario's result, with each step a summary of the contract.

![](../../static/img/smartpy/online_editor_scenario_output.png)
<small className="figure">FIGURE 4: Online Editor Scenario Output</small>

### buy_ticket entrypoint

`buy_ticket` is an entrypoint that can be called by everyone who wants to participate in the raffle.
If the invocation is successful, the address of the sender will be added to the storage, and the player will now be eligible to win the jackpot

#### Link to referential manual

- [Sets](https://smartpy.io/reference.html#_sets)
- [Maps](https://smartpy.io/reference.html#_maps_and_big_maps)

#### Code

```python
# Raffle Contract - Example for illustrative purposes only.

import smartpy as sp


class Raffle(sp.Contract):
    def __init__(self, address):
        self.init(admin=address,
                  close_date=sp.timestamp(0),
                  jackpot=sp.tez(0),
                  raffle_is_open=False,
                  players=sp.set(),
                  sold_tickets=sp.map(),
                  hash_winning_ticket=sp.bytes('0x')
                  )

    @sp.entry_point
    def open_raffle(self, jackpot_amount, close_date, hash_winning_ticket):
        sp.verify_equal(sp.source, self.data.admin, message="Administrator not recognized.")
        sp.verify(~ self.data.raffle_is_open, message="A raffle is already open.")
        sp.verify(sp.amount >= jackpot_amount, message="The administrator does not own enough tz.")
        today = sp.now
        in_7_day = today.add_days(7)
        sp.verify(close_date > in_7_day, message="The raffle must remain open for at least 7 days.")
        self.data.close_date = close_date
        self.data.jackpot = jackpot_amount
        self.data.hash_winning_ticket = hash_winning_ticket
        self.data.raffle_is_open = True

    @sp.entry_point
    def buy_ticket(self):
        ticket_price = sp.tez(1)
        current_player = sp.sender
        sp.verify(self.data.raffle_is_open, message="The raffle is closed.")
        sp.verify(sp.amount == ticket_price,
                  message="The sender did not send the right tez amount (Ticket price = 1tz).")
        sp.verify(~ self.data.players.contains(current_player), message="Each player can participate only once.")
        self.data.players.add(current_player)
        ticket_id = abs(sp.len(self.data.players) - 1)
        self.data.sold_tickets[ticket_id] = current_player


if "templates" not in __name__:
    alice = sp.test_account("Alice")
    jack = sp.test_account("Jack")
    admin = sp.test_account("Administrator")


    @sp.add_test(name="Raffle")
    def test():
        r = Raffle(admin.address)
        scenario = sp.test_scenario()
        scenario.h1("Raffle")
        scenario += r

        scenario.h2("Test open_raffle entrypoint")
        close_date = sp.timestamp_from_utc_now().add_days(8)
        jackpot_amount = sp.tez(10)
        number_winning_ticket = sp.nat(345)
        bytes_winning_ticket = sp.pack(number_winning_ticket)
        hash_winning_ticket = sp.sha256(bytes_winning_ticket)

        scenario.h3("The unauthorized user Alice unsuccessfully call open_raffle")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=alice.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin unsuccessfully call open_raffle with wrong close_date")
        close_date = sp.timestamp_from_utc_now().add_days(4)
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin unsuccessfully call open_raffle by sending not enough tez to the contract")
        close_date = sp.timestamp_from_utc_now().add_days(8)
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(5), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin successfully call open_raffle")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now())
        scenario.verify(r.data.close_date == close_date)
        scenario.verify(r.data.jackpot == jackpot_amount)
        scenario.verify(r.data.raffle_is_open)

        scenario.h3("Admin unsuccessfully call open_raffle because a raffle is already open")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h2("Test buy_ticket entrypoint (at this point a raffle is open)")

        scenario.h3("Alice unsuccessfully call buy_ticket by sending a wrong amount of tez")
        scenario += r.buy_ticket().run(sender=alice.address, amount=sp.tez(3), valid=False)

        scenario.h3("Alice successfully call buy_ticket")
        scenario += r.buy_ticket().run(sender=alice.address, amount=sp.tez(1))
        alice_ticket_id = sp.nat(0)
        scenario.verify(r.data.players.contains(alice.address))
        scenario.verify_equal(r.data.sold_tickets[alice_ticket_id], alice.address)

        scenario.h3("Alice unsuccessfully call buy_ticket because she has already buy one")
        scenario += r.buy_ticket().run(sender=alice.address, amount=sp.tez(1), valid=False)

        scenario.h3("Jack successfully call buy_ticket")
        scenario += r.buy_ticket().run(sender=jack.address, amount=sp.tez(1))
        jack_ticket_id = sp.nat(1)
        scenario.verify(r.data.players.contains(jack.address))
        scenario.verify(r.data.players.contains(alice.address))
        scenario.verify_equal(r.data.sold_tickets[alice_ticket_id], alice.address)
        scenario.verify_equal(r.data.sold_tickets[jack_ticket_id], jack.address)


    sp.add_compilation_target("Raffle_comp", Raffle(admin.address))
```

#### Storage definition

```python
def __init__(self, address):
    self.init(admin=address,
              close_date=sp.timestamp(0),
              jackpot=sp.tez(0),
              raffle_is_open=False,
              players=sp.set(),
              sold_tickets=sp.map(),
              hash_winning_ticket=sp.bytes('0x')
              )
```

With the addition of this entrypoint we have defined two new fields in the storage:

- **players** is a `set` designed to receive the addresses of each new player who bought a raffle ticket.
- **sold_tickets** is a `map` designed to associate each player's address with a ticket number.

#### Entrypoint implementation

```python
@sp.entry_point
def buy_ticket(self):
    ticket_price = sp.tez(1)
    current_player = sp.sender
    sp.verify(self.data.raffle_is_open, message="The raffle is closed.")
    sp.verify(sp.amount == ticket_price,
              message="The sender did not send the right tez amount (Ticket price = 1tz).")
    sp.verify(~ self.data.players.contains(current_player), message="Each player can participate only once.")
    self.data.players.add(current_player)
    ticket_id = abs(sp.len(self.data.players) - 1)
    self.data.sold_tickets[ticket_id] = current_player
```

Three checks are made for this entrypoint:

1. The raffle must be open.
2. The amount of tez sent to the contract during the transaction must be equal to the ticket price which is `1tez`.
3. Each player is allowed to buy only one ticket.

If the conditions are met, then the storage is updated:

- By adding the address of the player to the set `self.data.players`.
- By associating a ticket id with the player's address in the map `self.data.sold_tickets`.
  > `ticket_id = abs(sp.len(self.data.players) - 1)` here the ticket id is incremented for each new participant and the `abs()` function which designates the absolute value, is used to ensure that the `ticket_id` is of type `sp.TNat`.

### close_raffle entrypoint

`close_raffle` is an entrypoint that can only be called on by the administrator.
If the invocation is successful, then the raffle will be closed and, the jackpot amount will be sent to the winner,
and the storage will be reset to the default values.

#### Link to referential manual

- [Bytes](https://smartpy.io/reference.html#_bytes)

### Full code

```python
# Raffle Contract - Example for illustrative purposes only.

import smartpy as sp


class Raffle(sp.Contract):
    def __init__(self, address):
        self.init(admin=address,
                  close_date=sp.timestamp(0),
                  jackpot=sp.tez(0),
                  raffle_is_open=False,
                  players=sp.set(),
                  sold_tickets=sp.map(),
                  hash_winning_ticket=sp.bytes('0x')
                  )

    @sp.entry_point
    def open_raffle(self, jackpot_amount, close_date, hash_winning_ticket):
        sp.verify_equal(sp.source, self.data.admin, message="Administrator not recognized.")
        sp.verify(~ self.data.raffle_is_open, message="A raffle is already open.")
        sp.verify(sp.amount >= jackpot_amount, message="The administrator does not own enough tz.")
        today = sp.now
        in_7_day = today.add_days(7)
        sp.verify(close_date > in_7_day, message="The raffle must remain open for at least 7 days.")
        self.data.close_date = close_date
        self.data.jackpot = jackpot_amount
        self.data.hash_winning_ticket = hash_winning_ticket
        self.data.raffle_is_open = True

    @sp.entry_point
    def buy_ticket(self):
        ticket_price = sp.tez(1)
        current_player = sp.sender
        sp.verify(self.data.raffle_is_open, message="The raffle is closed.")
        sp.verify(sp.amount == ticket_price,
                  message="The sender did not send the right tez amount (Ticket price = 1tz).")
        sp.verify(~ self.data.players.contains(current_player), message="Each player can participate only once.")
        self.data.players.add(current_player)
        ticket_id = abs(sp.len(self.data.players) - 1)
        self.data.sold_tickets[ticket_id] = current_player

    @sp.entry_point
    def close_raffle(self, selected_ticket):
        sp.verify_equal(sp.source, self.data.admin, message="Administrator not recognized.")
        sp.verify(self.data.raffle_is_open, message="The raffle is closed.")
        sp.verify(sp.now >= self.data.close_date,
                  message="The raffle must remain open for at least 7 days.")
        bytes_selected_ticket = sp.pack(selected_ticket)
        hash_selected_ticket = sp.sha256(bytes_selected_ticket)
        sp.verify_equal(hash_selected_ticket, self.data.hash_winning_ticket,
                        message="The hash does not match the hash of the winning ticket")
        number_of_players = sp.len(self.data.players)
        selected_ticket_id = selected_ticket % number_of_players
        winner = self.data.sold_tickets[selected_ticket_id]
        sp.send(winner, self.data.jackpot, message="winner contract not found.")
        self.data.jackpot = sp.tez(0)
        self.data.close_date = sp.timestamp(0)
        self.data.players = sp.set()
        self.data.sold_tickets = sp.map()
        self.data.raffle_is_open = False


if "templates" not in __name__:
    alice = sp.test_account("Alice")
    jack = sp.test_account("Jack")
    admin = sp.test_account("Administrator")


    @sp.add_test(name="Raffle")
    def test():
        r = Raffle(admin.address)
        scenario = sp.test_scenario()
        scenario.h1("Raffle")
        scenario += r

        scenario.h2("Test open_raffle entrypoint")
        close_date = sp.timestamp_from_utc_now().add_days(8)
        jackpot_amount = sp.tez(10)
        number_winning_ticket = sp.nat(345)
        bytes_winning_ticket = sp.pack(number_winning_ticket)
        hash_winning_ticket = sp.sha256(bytes_winning_ticket)

        scenario.h3("The unauthorized user Alice unsuccessfully call open_raffle")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=alice.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin unsuccessfully call open_raffle with wrong close_date")
        close_date = sp.timestamp_from_utc_now().add_days(4)
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin unsuccessfully call open_raffle by sending not enough tez to the contract")
        close_date = sp.timestamp_from_utc_now().add_days(8)
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(5), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h3("Admin successfully call open_raffle")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now())
        scenario.verify(r.data.close_date == close_date)
        scenario.verify(r.data.jackpot == jackpot_amount)
        scenario.verify(r.data.raffle_is_open)

        scenario.h3("Admin unsuccessfully call open_raffle because a raffle is already open")
        scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                                  hash_winning_ticket=hash_winning_ticket) \
            .run(source=admin.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
                 valid=False)

        scenario.h2("Test buy_ticket entrypoint (at this point a raffle is open)")

        scenario.h3("Alice unsuccessfully call buy_ticket by sending a wrong amount of tez")
        scenario += r.buy_ticket().run(sender=alice.address, amount=sp.tez(3), valid=False)

        scenario.h3("Alice successfully call buy_ticket")
        scenario += r.buy_ticket().run(sender=alice.address, amount=sp.tez(1))
        alice_ticket_id = sp.nat(0)
        scenario.verify(r.data.players.contains(alice.address))
        scenario.verify_equal(r.data.sold_tickets[alice_ticket_id], alice.address)

        scenario.h3("Alice unsuccessfully call buy_ticket because she has already buy one")
        scenario += r.buy_ticket().run(sender=alice.address, amount=sp.tez(1), valid=False)

        scenario.h3("Jack successfully call buy_ticket")
        scenario += r.buy_ticket().run(sender=jack.address, amount=sp.tez(1))
        jack_ticket_id = sp.nat(1)
        scenario.verify(r.data.players.contains(jack.address))
        scenario.verify(r.data.players.contains(alice.address))
        scenario.verify_equal(r.data.sold_tickets[alice_ticket_id], alice.address)
        scenario.verify_equal(r.data.sold_tickets[jack_ticket_id], jack.address)

        scenario.h2("Test close_raffle entrypoint (at this point a raffle is open and two players participated)")
        selected_ticket = sp.nat(345)

        scenario.h3("The unauthorized user Alice unsuccessfully call close_raffle")
        scenario += r.close_raffle(selected_ticket).run(sender=alice.address, valid=False)

        scenario.h3("Admin unsuccessfully call close_raffle because it was before the close_date")
        scenario += r.close_raffle(selected_ticket)\
            .run(sender=admin.address, now=sp.timestamp_from_utc_now(), valid=False)

        scenario.h3("Admin unsuccessfully call close_raffle because the hash of the selected ticket does not match with the winning one")
        selected_ticket = sp.nat(1234)
        scenario += r.close_raffle(selected_ticket)\
            .run(sender=admin.address, now=r.data.close_date, valid=False)

        scenario.h3("Admin successfully call close_raffle")
        selected_ticket = sp.nat(345)
        scenario += r.close_raffle(selected_ticket).run(sender=admin.address, now=r.data.close_date)
        scenario.verify_equal(r.data.jackpot, sp.tez(0))
        scenario.verify_equal(r.data.close_date, sp.timestamp(0))
        scenario.verify_equal(r.data.players, sp.set())
        scenario.verify_equal(r.data.sold_tickets, sp.map())
        scenario.verify(~ r.data.raffle_is_open)

        scenario.h3("Alice unsuccessfully call buy_ticket because the raffle is closed")
        scenario += r.buy_ticket().run(sender=alice.address, amount=sp.tez(1), valid=False)


    sp.add_compilation_target("Raffle_comp", Raffle(admin.address))
```

### Entrypoint implementation

The storage definition has not been modified with the adding of this entrypoint so we can directly explain its implementation

```python
@sp.entry_point
def close_raffle(self, selected_ticket):
    sp.verify_equal(sp.source, self.data.admin, message="Administrator not recognized.")
    sp.verify(self.data.raffle_is_open, message="The raffle is closed.")
    sp.verify(sp.now >= self.data.close_date,
              message="The raffle must remain open for at least 7 days.")
    bytes_selected_ticket = sp.pack(selected_ticket)
    hash_selected_ticket = sp.sha256(bytes_selected_ticket)
    sp.verify_equal(hash_selected_ticket, self.data.hash_winning_ticket,
                    message="The hash does not match the hash of the winning ticket")
    number_of_players = sp.len(self.data.players)
    selected_ticket_id = selected_ticket % number_of_players
    winner = self.data.sold_tickets[selected_ticket_id]
    sp.send(winner, self.data.jackpot, message="winner contract not found.")
    self.data.jackpot = sp.tez(0)
    self.data.close_date = sp.timestamp(0)
    self.data.players = sp.set()
    self.data.sold_tickets = sp.map()
    self.data.raffle_is_open = False
```

Four checks are made for this entrypoint:

1. Only the administrator is authorized to close the raffle.
2. The raffle must be open.
3. The closing date must be greater than or equal to the closing date indicated in the storage.
4. The hash of the ticket indicated as a parameter must be equal to the hash of the ticket indicated in the storage.
   > The administrator indicates in parameter a `sp.nat()` which must correspond to the number of the winning ticket (modulating the number of participants) then this natural integer is converted in `byte` then it is hashed with the `sha256` algorithm.

If the conditions are met, then:

- The jackpot is sent to the winner's address.
- The storage is reset to the default values.

### Run and watch the output

We are coming to the end of our smart contract.
Run it one last time and explore the result. Don't hesitate to read the test scenario to make sure your smart contract is working properly. You can, of course, modify the scenario or create new ones as you wish.

The final Michelson code generated for this smart contract is the following.

> Note that with the Michelson code you can also create a test coverage with PyTezos as described in the LIGO Module at the chapter [Unit Testing with PyTezos](ligo/unit-testing).

```js
parameter (or (unit %buy_ticket) (pair %open_raffle (timestamp %close_date) (pair (bytes %hash_winning_ticket) (mutez %jackpot_amount))));
storage   (pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))));
code
  {
    UNPAIR;     # @parameter : @storage
    IF_LEFT
      {
        DROP;       # @storage
        # == buy_ticket ==
        # sp.verify(self.data.raffle_is_open, message = 'The raffle is closed.') # @storage
        DUP;        # @storage : @storage
        GET 5;      # bool : @storage
        IF
          {}
          {
            PUSH string "The raffle is closed."; # string : @storage
            FAILWITH;   # FAILED
          }; # @storage
        # sp.verify(sp.amount == sp.tez(1), message = 'The sender did not send the right tez amount (Ticket price = 1tz).') # @storage
        PUSH mutez 1000000; # mutez : @storage
        AMOUNT;     # @amount : mutez : @storage
        COMPARE;    # int : @storage
        EQ;         # bool : @storage
        IF
          {}
          {
            PUSH string "The sender did not send the right tez amount (Ticket price = 1tz)."; # string : @storage
            FAILWITH;   # FAILED
          }; # @storage
        # sp.verify(~ (self.data.players.contains(sp.sender)), message = 'Each player can participate only once.') # @storage
        DUP;        # @storage : @storage
        GET 3;      # pair (mutez %jackpot) (set %players address) : @storage
        CDR;        # set address : @storage
        SENDER;     # @sender : set address : @storage
        MEM;        # bool : @storage
        IF
          {
            PUSH string "Each player can participate only once."; # string : @storage
            FAILWITH;   # FAILED
          }
          {}; # @storage
        # self.data.players.add(sp.sender) # @storage
        UNPAIR;     # pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket)) : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        SWAP;       # pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        UNPAIR;     # pair (mutez %jackpot) (set %players address) : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        UNPAIR;     # mutez : set address : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        SWAP;       # set address : mutez : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        PUSH bool True; # bool : set address : mutez : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        SENDER;     # @sender : bool : set address : mutez : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        UPDATE;     # set address : mutez : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        SWAP;       # mutez : set address : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        PAIR;       # pair mutez (set address) : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        PAIR;       # pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))
        SWAP;       # pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket)) : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        PAIR;       # pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        # self.data.sold_tickets[abs(sp.len(self.data.players) - 1)] = sp.sender # pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        DUP;        # pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        DUP;        # pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        GET 6;      # map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        SENDER;     # @sender : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        SOME;       # option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        PUSH nat 1; # nat : option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        DIG 4;      # pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))) : nat : option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        GET 3;      # pair mutez (set address) : nat : option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        CDR;        # set address : nat : option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        SIZE;       # nat : nat : option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        SUB;        # int : option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        ABS;        # nat : option address : map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        UPDATE;     # map nat address : pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        UPDATE 6;   # pair (pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket))) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
      }
      {
        SWAP;       # @storage : @parameter%open_raffle
        # == open_raffle ==
        # sp.verify(sp.pack(sp.set_type_expr(sp.source, sp.TAddress)) == sp.pack(sp.set_type_expr(self.data.admin, sp.TAddress)), message = 'Administrator not recognized.') # @storage : @parameter%open_raffle
        DUP;        # @storage : @storage : @parameter%open_raffle
        DUG 2;      # @storage : @parameter%open_raffle : @storage
        CAR;        # pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket)) : @parameter%open_raffle : @storage
        CAR;        # address : @parameter%open_raffle : @storage
        PACK;       # bytes : @parameter%open_raffle : @storage
        SOURCE;     # @source : bytes : @parameter%open_raffle : @storage
        PACK;       # bytes : bytes : @parameter%open_raffle : @storage
        COMPARE;    # int : @parameter%open_raffle : @storage
        EQ;         # bool : @parameter%open_raffle : @storage
        IF
          {}
          {
            PUSH string "Administrator not recognized."; # string : @parameter%open_raffle : @storage
            FAILWITH;   # FAILED
          }; # @parameter%open_raffle : @storage
        SWAP;       # @storage : @parameter%open_raffle
        # sp.verify(~ self.data.raffle_is_open, message = 'A raffle is already open.') # @storage : @parameter%open_raffle
        DUP;        # @storage : @storage : @parameter%open_raffle
        DUG 2;      # @storage : @parameter%open_raffle : @storage
        GET 5;      # bool : @parameter%open_raffle : @storage
        IF
          {
            PUSH string "A raffle is already open."; # string : @parameter%open_raffle : @storage
            FAILWITH;   # FAILED
          }
          {}; # @parameter%open_raffle : @storage
        # sp.verify(sp.amount >= params.jackpot_amount, message = 'The administrator does not own enough tz.') # @parameter%open_raffle : @storage
        DUP;        # @parameter%open_raffle : @parameter%open_raffle : @storage
        GET 4;      # mutez : @parameter%open_raffle : @storage
        AMOUNT;     # @amount : mutez : @parameter%open_raffle : @storage
        COMPARE;    # int : @parameter%open_raffle : @storage
        GE;         # bool : @parameter%open_raffle : @storage
        IF
          {}
          {
            PUSH string "The administrator does not own enough tz."; # string : @parameter%open_raffle : @storage
            FAILWITH;   # FAILED
          }; # @parameter%open_raffle : @storage
        # sp.verify(params.close_date > sp.add_seconds(sp.now, 604800), message = 'The raffle must remain open for at least 7 days.') # @parameter%open_raffle : @storage
        NOW;        # @now : @parameter%open_raffle : @storage
        PUSH int 604800; # int : @now : @parameter%open_raffle : @storage
        ADD;        # timestamp : @parameter%open_raffle : @storage
        SWAP;       # @parameter%open_raffle : timestamp : @storage
        DUP;        # @parameter%open_raffle : @parameter%open_raffle : timestamp : @storage
        DUG 2;      # @parameter%open_raffle : timestamp : @parameter%open_raffle : @storage
        CAR;        # timestamp : timestamp : @parameter%open_raffle : @storage
        COMPARE;    # int : @parameter%open_raffle : @storage
        GT;         # bool : @parameter%open_raffle : @storage
        IF
          {}
          {
            PUSH string "The raffle must remain open for at least 7 days."; # string : @parameter%open_raffle : @storage
            FAILWITH;   # FAILED
          }; # @parameter%open_raffle : @storage
        SWAP;       # @storage : @parameter%open_raffle
        # self.data.close_date = params.close_date # @storage : @parameter%open_raffle
        UNPAIR;     # pair (address %admin) (pair (timestamp %close_date) (bytes %hash_winning_ticket)) : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        UNPAIR;     # address : pair (timestamp %close_date) (bytes %hash_winning_ticket) : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        SWAP;       # pair (timestamp %close_date) (bytes %hash_winning_ticket) : address : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        CDR;        # bytes : address : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        DUP 4;      # @parameter%open_raffle : bytes : address : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        CAR;        # timestamp : bytes : address : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        PAIR;       # pair timestamp bytes : address : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        SWAP;       # address : pair timestamp bytes : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        PAIR;       # pair address (pair timestamp bytes) : pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        SWAP;       # pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : pair address (pair timestamp bytes) : @parameter%open_raffle
        # self.data.jackpot = params.jackpot_amount # pair (pair (mutez %jackpot) (set %players address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : pair address (pair timestamp bytes) : @parameter%open_raffle
        UNPAIR;     # pair (mutez %jackpot) (set %players address) : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair address (pair timestamp bytes) : @parameter%open_raffle
        CDR;        # set address : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair address (pair timestamp bytes) : @parameter%open_raffle
        DUP 4;      # @parameter%open_raffle : set address : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair address (pair timestamp bytes) : @parameter%open_raffle
        GET 4;      # mutez : set address : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair address (pair timestamp bytes) : @parameter%open_raffle
        PAIR;       # pair mutez (set address) : pair (bool %raffle_is_open) (map %sold_tickets nat address) : pair address (pair timestamp bytes) : @parameter%open_raffle
        PAIR;       # pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : pair address (pair timestamp bytes) : @parameter%open_raffle
        SWAP;       # pair address (pair timestamp bytes) : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        # self.data.hash_winning_ticket = params.hash_winning_ticket # pair address (pair timestamp bytes) : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        UNPAIR;     # address : pair timestamp bytes : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        SWAP;       # pair timestamp bytes : address : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        CAR;        # timestamp : address : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)) : @parameter%open_raffle
        DIG 3;      # @parameter%open_raffle : timestamp : address : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        GET 3;      # bytes : timestamp : address : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        SWAP;       # timestamp : bytes : address : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        PAIR;       # pair timestamp bytes : address : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        SWAP;       # address : pair timestamp bytes : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        PAIR;       # pair address (pair timestamp bytes) : pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))
        PAIR;       # pair (pair address (pair timestamp bytes)) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        # self.data.raffle_is_open = True # pair (pair address (pair timestamp bytes)) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        PUSH bool True; # bool : pair (pair address (pair timestamp bytes)) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
        UPDATE 5;   # pair (pair address (pair timestamp bytes)) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
      }; # pair (pair address (pair timestamp bytes)) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
    NIL operation; # list operation : pair (pair address (pair timestamp bytes)) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address)))
    PAIR;       # pair (list operation) (pair (pair address (pair timestamp bytes)) (pair (pair mutez (set address)) (pair (bool %raffle_is_open) (map %sold_tickets nat address))))
  };
```

## References

[1] https://smartpy.io/reference.html

[2] https://smartpy.io/ide
