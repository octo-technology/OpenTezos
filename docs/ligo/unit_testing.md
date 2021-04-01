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

### Requirement

- Have python installed, and a text editor ready to use.
- Have a cryptographic library in your system. 
  If not, take a look on the requirement section on this [link](https://pytezos.org/quick_start.html#requirements).

### Installation

#### Creation of a virtual environment

```shell
python3 -m venv /path/to/env
```

#### Activating the environment

```shell
source /path/to/env/bin/activate
```

#### Installation of the necessary python libraries

Installation of wheel:

```shell
(venv) pip install wheel
```

Installation of pytezos:

```shell
(venv) pip install pytezos
```

Verification of the installation:

```shell
(venv) python -c "import pytezos"
```

If the command returns nothing then the installation is successful.

## Unittest (Python library)

Before writing tests for smart contracts with **PyTezos** 
you need to know how to use the **Unittest** test library.

Let's see how **Unittest** works through a simple example.

Consider a python file `calculator.py` with two functions: `add` and `sub`

```python
#calculator.py

def add(x, y):
    return x + y


def sub(x, y):
    return x - y
```

In order to test these two functions 
let's create a new test file beginning by **test_** : `test_calculator.py`.

In this file you will need to:
- `import unittest`.
- import the file you want with the functions you want to test, `import calculator`.
- Create a test class that inherits from `unittest.TestCase`.  
  You can name this class whatever you want but try to keep it descriptive.
- Write your tests by creating methods whose name must start with `test_` 
  otherwise it will not be recognized.

```python
import unittest
from unittestExample import calculator


class TestCalculator(unittest.TestCase):

  def test_add_10_and_5_should_return_15(self):
    # GIVEN
    x = 10
    y = 5

    # WHEN
    result = calculator.add(x, y)

    # THEN
    self.assertEqual(result, 15)

  def test_sub_10_and_5_should_return_5(self):
    # GIVEN
    x = 10
    y = 5

    # WHEN
    result = calculator.sub(x, y)

    # THEN
    self.assertEqual(result, 5)
```

> Note that the names of the classes are by convention in **CamelCase** 
> and that the names of the tests methods are in **snake_case**

You can run your tests in command line as follows:

```shell
python -m unittest test_calculator
```

This should return:

```shell
..
----------------------------------------------------------------------
Ran 2 tests in 0.002s

OK
```

Note that the command has executed all the tests in our test file, 
but we can only execute certain tests.

Indeed, the unittest module can be used from the command line to execute tests from modules, 
classes or even individual test methods:

```shell
python -m unittest test_calculator
python -m unittest test_calculator.TestCalculator
python -m unittest test_calculator.TestCalculator.test_sub
```

## Testing a compiled smart contract with PyTezos

**PyTezos** library is a **Python** toolset for **Tezos** blockchain, 
including work with keys, signatures, contracts, operations, RPC query builder, 
and a high-level interface for smart contract interaction.

In this section we will test entrypoints of a michelson script
from a smart contract which is compiled but not deployed.

For this we will need:

- The **Unittest** library which is the standard framework for writing tests in Python.
- Two very useful classes from **PyTezos**:
  - **ContractInterface**: allows interfacing with the entrypoints of a contract 
  and interact with them.
  - **MichelsonRuntimeError**: allows handling errors raised during execution.
- The **Decimal** library to manage the amounts in mutez, tez that are specific to the Tezos environment.

To write the tests we will start from the following template:

```python
# TEMPLATE
from unittest import TestCase, skip
from pytezos import MichelsonRuntimeError, ContractInterface

path_to_michelson_contract = "/path/to/contract.tz"


class TestContract(TestCase):

  @classmethod
  def setUpClass(cls):
    cls.myContract = ContractInterface.create_from(path_to_michelson_contract)

  def test_description_1(self):
    pass

  def test_description_2(self):
    pass

  @skip("test 3 is not launched")
  def test_description_3(self):
    pass
```

PyTezos expects the path to a file containing Michelson code `path_to_michelson_contract`.

The compiled contract will have been obtained with a command of this type:

```shell
ligo compile-contract file.ligo main > contract.tz
```

Remember to recompile after any modification of the contract.

### Equivalence between michelson type and python

TABLEAU

### Counter Contract Example

Here is an example of **Counter contract** that handle an integer "counter" value and an administrator address
as storage and allows an administrator **only** to increment or decrement this counter.

```js
type indiceStorage is record[
    counter : int;
    administrator : address;
]

type indiceEntrypoints is Increment of int | Decrement of int

type indiceFullReturn is list(operation) * indiceStorage

function increment(const param : int; const s : indiceStorage) : indiceFullReturn is
if Tezos.source =/= s.administrator then  (failwith("administrator not recognized") : indiceFullReturn)
    else ((nil : list (operation)), s with record [counter=s.counter + param])

function decrement(const param : int; const s : indiceStorage) : indiceFullReturn is
if Tezos.source =/= s.administrator then  (failwith("administrator not recognized") : indiceFullReturn)
    else ((nil : list (operation)), s with record [counter=s.counter - param])
    
function main(const ep : indiceEntrypoints; const store : indiceStorage) : indiceFullReturn is
block {
    const ret : indiceFullReturn = case ep of
    | Increment(p) -> increment(p, store)
    | Decrement(p) -> decrement(p, store)
    end;
} with ret
```

Let's compile this contract and save the result in a Michelson file `counter.tz`.

```shell
ligo compile-contract counter.ligo main > counter.tz
```

The output is :

```js
{ parameter (or (int %decrement) (int %increment)) ;
  storage (pair (address %administrator) (int %counter)) ;
  code { UNPAIR ;
         IF_LEFT
           { SWAP ;
             DUP ;
             DUG 2 ;
             CAR ;
             SOURCE ;
             COMPARE ;
             NEQ ;
             IF { DROP 2 ; PUSH string "administrator not recognized" ; FAILWITH }
                { SWAP ;
                  DUP ;
                  DUG 2 ;
                  CDR ;
                  SUB ;
                  SWAP ;
                  CAR ;
                  PAIR ;
                  NIL operation ;
                  PAIR } }
           { SWAP ;
             DUP ;
             DUG 2 ;
             CAR ;
             SOURCE ;
             COMPARE ;
             NEQ ;
             IF { DROP 2 ; PUSH string "administrator not recognized" ; FAILWITH }
                { SWAP ;
                  DUP ;
                  DUG 2 ;
                  CDR ;
                  ADD ;
                  SWAP ;
                  CAR ;
                  PAIR ;
                  NIL operation ;
                  PAIR } } } }
```

First let's test the **increment** entrypoint when the user is the administrator.

>Note that only the administrator is allowed to modify the storage and if another person tries to do it 
>then the contract will return an error.
>
>```js
>if Tezos.source =/= s.administrator then  (failwith("administrator not recognized") : indiceFullReturn)
>```

#### Test increment entrypoint

For example, let's write a test that verifies that the storage is incremented by 5 
when the administrator performs the action `Increment(5)`.

- For the test a false address tz1 has been assigned to the administrator,
  you can generate false addresses [here](https://faucet.tzalpha.net/).
- In the `setUpClass` method we load the contract from the michelson source code stored in a the **counter.tz** file,
  thanks to the `ContractInterface.from_file()` method.
- Note that the name of the test accurately describes our intention.

```python
from unittest import TestCase
from pytezos import MichelsonRuntimeError, ContractInterface

path_to_michelson_contract = "counter.tz"
administrator = "tz1L738ifd66ah69PrmKAZzckvvHnbcSeqjf"


class TestCounterContract(TestCase):

    @classmethod
    def setUpClass(cls):
        cls.counterContract = ContractInterface.from_file(path_to_michelson_contract)

    def test_storage_counter_is_incremented_by_5_if_the_source_is_the_administrator(self):
        # GIVEN
        storage = {"administrator": administrator, "counter": 0}
        value = 5

        # WHEN
        result = self.counterContract.increment(value).interpret(storage=storage, source=administrator)

        # THEN
        self.assertEqual(result.storage["counter"], 5)
```

**GIVEN** 
- The storage has been initialized as a dictionary `{}` 
  to respect the equivalence with the michelson format. 
- The incremented value to an `int`.

**WHEN**
- From our contract `self.counterContract` we can call an **entrypoint** and its **parameter** like `.increment(value)`.
- Then we can add a context with `.interpret`.
  to specify the storage and the source (the original address sending the transaction).

**THEN**  
Finally we can check that the storage counter has been incremented by 5 
with `self.assertEqual(<actual_value>, <expected_value>)`.

Let's run the test:

```shell
python -m unittest test_counter.TestCounterContract.test_storage_counter_is_incremented_by_5_if_the_source_is_the_administrator
```

```shell
----------------------------------------------------------------------
Ran 1 test in 0.011s

OK

```

Great it worked !

#### Test unauthorized user (MichelsonRuntimeError)

Now let's imagine that someone other than the administrator 
tries to modify the storage by incrementing or decrementing it.

Let's write a test to make sure that this user gets rejected.

First let's add at the beginning of the file, 
a new user **alice** with a different adresse from the **administrator**.

```python
administrator = "tz1L738ifd66ah69PrmKAZzckvvHnbcSeqjf"
alice = "tz1LFuHW4Z9zsCwg1cgGTKU12WZAs27ZD14v"
```

Then just following the first test, let's write the new test:

```python
def test_should_failed_if_the_source_is_not_the_administrator(self):
    with self.assertRaises(MichelsonRuntimeError) as administrator_error:
        # GIVEN
        storage = {"administrator": administrator, "counter": 0}
        value = 5

        # WHEN
        self.counterContract.increment(value).interpret(storage=storage, source=alice)

    # THEN
    error_message = str(administrator_error.exception.args[-1].strip("\\").strip("'"))
    self.assertEqual("administrator not recognized", error_message)
```

- The line `with self.assertRaises(MichelsonRuntimeError) as administrator_error:`
  retrieves and stores the error in the `administrator_error` variable. 
- The administrator's address is still defined in the initial state of storage 
  but this time the address of alice is specified in the context source variable.
- Finally, in the variable `error_message` we get the string message from the error and 
  compare it to the original message written in the `failwith()` of the LIGO code. 
  

```shell
python -m unittest test_counter.TestCounterContract.test_should_failed_if_the_source_is_not_the_administrator
```

```shell
----------------------------------------------------------------------
Ran 1 test in 0.011s

OK

```

