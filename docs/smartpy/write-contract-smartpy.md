---
id: write-contract-smartpy
title: Smart contract development with Smartpy
---

In this chapter, the use of the SmartPy library will be taught, based on the development of a raffle smart contract. 
The most important aspects of the framework will be covered. 
This chapter focuses on the way to develop a smart contract, each new notion required will be introduced. 
For a full reference of SmartPy, see: [Reference Manual](https://smartpy.io/reference.html)

## What is a smart contract ?

First, let's define what a smart contract is and what role SmartPy plays in it.

The following schema helps to contextualize the role of SmartPy in the Tezos ecosystem.

SmartPy is active in the left part as a development tool allowing for the production of smart contracts (scripts in Michelson), which can be deployed on the blockchain.

![](../../static/img/ligo/intro_schema.svg)
<small className="figure">FIGURE 1: SmartPy contextualisation </small>

A Tezos smart contract is a piece of **code** written in Michelson language (a low-level stack-based Turing-complete language).

It also defines all **entrypoints** (invocable functions) of the smart contract.

It also defines the **storage** of the smart contract.

![](../../static/img/ligo/smart_contract.svg)
<small className="figure">FIGURE 2: Smart contract</small>

### Storage

The storage is an allocated memory space associated with a smart contract. 
It is the permanent data store for the smart contract.

### Entrypoints

Entrypoints are invocable function for a smart contract.
Executing an entrypoint takes some parameters and a current state of the storage and returns a new state of storage and some operations.

> **An operation** results from the invocation of a smart contract and represents the side effects on the Tezos network.
> The storage resulting from the invocation of a smart contract represents the side effects on the data related to the invoked contract.
> If the execution of an entrypoint produces operations (an ordered list of transactions)
> then they are sent and executed according to the order of the operations on the list.


# Raffle contract

// TODO: what is a raffle ? add a schema

// TODO: past full code here


## Get Started

The writing of this smart contract will be done entirely on the [online editor](https://smartpy.io/ide) proposed by SmartPy. 
It is of course possible to do the same thing on your ide and use the command lines (described in the previous chapter) 
to compile/test your contract.

### Create your contract

Now, let's create a new contract in the online editor that we will name _Raffle Contract_.

![](../../static/img/smartpy/online_editor_create_contract.png)
<small className="figure">FIGURE 3: Online Editor Create Contract</small>

### Template

Let's start with this template.

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

- **A SmartPy contract** consists of a state with one or several entry points.
  It is a class definition that inherits from `sp.Contract`.

- **The SmartPy storage** is defined into the constructor `__init__`
  which makes a call to `self.init()` that initializes fields and set up the storage.

- **Entrypoints** are methods of a contract class that can be called from the outside.
  Entrypoints need to be marked with the `@sp.entry_point` decorator.

- **Tests and Scenarios** are good tools to make sure our smart contract is working properly. 
  - A new test is a method marked with the `sp.add_test` decorator.
  - A new scenario is instantiated by `sp.test_scenario`.
  - Scenarios describe a sequence of actions: originating contracts, computing expressions, calling entry points, etc.
  - In the online Editor of SmartPy.io, the scenario is computed and then displayed as an html document on the output panel.

We will explain in detail the use of all these concepts later.

Our code doesn't do much for now, but it can already be compiled by pressing the _run_ button and if there is no error 
then you can visualize the generated michelson code in the _Deploy Michelson Contract_ tab.

```shell
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

## open_raffle entrypoint

`open_raffle` is an entrypoint that can only be called by the administrator. 
If the invocation is successful then the raffle will be opened, 
and the smart contract storage will be updated with the jackpot amount and the hash of the winning ticket number.

### Link to referential manual

- [Init](https://smartpy.io/reference.html#_contracts)
- [Entrypoints](https://smartpy.io/reference.html#_entry_points)
- [Checking a Condition](https://smartpy.io/reference.html#_checking_a_condition)
- [Timestamps](https://smartpy.io/reference.html#_timestamps)
- [Test and Scenario](https://smartpy.io/reference.html#_tests_and_scenarios)
- [Typing](https://smartpy.io/reference.html#_typing)

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

### Storage definition

The definition of the storage is done in the constructor `__init__` and the different fields of the storage are declared as follows:  
`self.init( field1=value1, field2=value2, field3=value3)`

where:
- `field1`, `field2`, `field3` are the names of the variables and are accessible via `self.data` (e.g. `self.data.field1`)
- `value1`, `value2`, `value3` are initial values or variables passed as constructors like `__init__(self, value1)` as we did above for the `admin=address` field.  (This can be useful if you want to initialize the storage with some specific values)

> Types are usually automatically infered and not explicitly needed.
> But it is still possible to add constraints on types, see [Setting a type constraint in SmartPy](https://smartpy.io/reference.html#_setting_a_type_constraint_in_smartpy).

For the storage of the raffle contract we have for the moment defined 5 fields:
- **admin** which is assigned to an `address` that will be the only one allowed to call the two entrypoints open_raffle and close_raffle.
- **close_date** which is a `timestamp` to indicate the closing date of the raffle. The raffle must remain open for at least 7 days.
- **jackpot** which will be the amount in `tez` distributed to the winner of the raffle.
- **raffle_is_open** which is a `boolean` to indicate if the raffle is open or not.
- **hash_winning_ticket** which is the hash of the winning ticket indicated by the admin at the opening of the raffle who will have to indicate the corresponding number at the closing to prove that his choice was made before.

> As there is no possibility to do random, the hash solution has been chosen.   
> **Reminder**, this example is for educational purposes and is not intended for deployment and use of this contract on the real Tezos network.

### Entrypoint implementation

An entrypoint is a method of the contract class preceded by `@sp.entry_point`. 
It can take several parameters in argument.

In our case the first entrypoint is called `open_raffle` and does the following:
- With `sp.verify()` or `sp.verify_equal()` we check 4 things and return an error message if necessary. See doc [Checking a Condition](https://smartpy.io/reference.html#_checking_a_condition).
  1. The address that called the entrypoint must be the administrator one indicated in the storage. We compare here `sp.source` and `self.data.admin`.
     >`sp.sender` is the address that called the current entrypoint.  
     `sp.source` is the address that initiated the current transaction. It may or may not be equal to `sp.sender`, but in our case it is.
  2. No raffle must be open, for this we use the boolean `raffle_is_open` defined in the storage. 
     > Note that `~` is the symbol used for logical negation.
  3. The amount `sp.amount` sent to the contract by the administrator during the transaction must be at least greater than the value specified in the `jackpot_amount` argument.
  4. The close date `close_date` passed as argument must be at least 7 days in the future. (see doc [Timestamps](https://smartpy.io/reference.html#_timestamps)).
- Once all the conditions are passed we update the storage as follows:
```python
self.data.close_date = close_date
self.data.jackpot = jackpot_amount
self.data.hash_winning_ticket = hash_winning_ticket
self.data.raffle_is_open = True
```

### Test and Scenario

The purpose of the test scenario is to ensure the proper functionality of the smart contract by testing the conditions 
and checking the changes made to the storage.

With SmartPy a test is a method of the class contract preceded by `@sp.add_test`.

Inside this method you need to instantiate your class contract, and your scenario to which you will add the contract instance and all the calls related to the instance you want to test.

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

Test accounts can be defined by calling `sp.test_account(seed)` where seed is a string. 
A test account account contains some fields: `account.address`, `account.public_key_hash`, `account.public_key`, and `account.secret_key`.

You can then simulate the calls to the entrypoints by specifying the different arguments, as follows:

```python
scenario.h3("The unauthorized user Alice unsuccessfully call open_raffle")
scenario += r.open_raffle(close_date=close_date, jackpot_amount=jackpot_amount,
                          hash_winning_ticket=hash_winning_ticket) \
    .run(source=alice.address, amount=sp.tez(10), now=sp.timestamp_from_utc_now(),
         valid=False)
```

The run method and its parameters are all optional, but here it helps to add relevant context to the entrypoint call.  
In fact, you can specify the `source` of the transaction, the `amount` of tez sent, the date of the transaction with `now` etc.

> Note that the option `valid=False` allows you to indicate that the transaction is expected to fail, here because Alice is not the administrator.

The result will then be displayed as an html document in the output panel of the online editor.

### Run and watch the output

Let's run our code.

![](../../static/img/smartpy/online_editor_summary_contract.png)
<small className="figure">FIGURE 4: Online Editor Contract Summary</small>

On the right screen we can see a summary of our smart contract with the following information:
- Address of the contract
- Balance in tez
- Storage
- Entry points

By clicking on the *Types* tab we have access to the types of the storage elements and the parameters of the entrypoints.

![](../../static/img/smartpy/online_editor_Types.png)
<small className="figure">FIGURE 5: Online Editor Types</small>

> As in Python, most of the time it is not necessary to specify the type of an object in SmartPy.  
> Because the target language of SmartPy, Michelson, requires types.  
>Each SmartPy expression, however, needs a type. This is why SmartPy uses type inference to determine the type of each expression.  
> See doc [Typing](https://smartpy.io/reference.html#_typing).

By clicking on the *Deploy Michelson Contract* tab we have access to the codes compiled in michelson for the storage (*Storage* tab) and for the smart contract (*Code* tab).

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

By scrolling down a little we have access to the result of the test scenario, with for each step a summary of the contract.

![](../../static/img/smartpy/online_editor_scenario_output.png)
<small className="figure">FIGURE 4: Online Editor Scenario Output</small>

## buy_ticket entrypoint

`buy_ticket` is an entrypoint that can be called by everyone who want to participate in the raffle.
If the invocation is successful the address of the sender will be added to the storage, and the player will now be eligible to win the jackpot

### Link to referential manual

- [Init](https://smartpy.io/reference.html#_contracts)
- [Entrypoints](https://smartpy.io/reference.html#_entry_points)
- [Checking a Condition](https://smartpy.io/reference.html#_checking_a_condition)
- [Timestamps](https://smartpy.io/reference.html#_timestamps)
- [Test and Scenario](https://smartpy.io/reference.html#_tests_and_scenarios)
- [Typing](https://smartpy.io/reference.html#_typing)

## References

[1] https://smartpy.io/reference.html

[2]