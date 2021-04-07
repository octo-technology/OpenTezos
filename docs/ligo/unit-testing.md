---
id: unit-testing
title: Unit Testing with PyTezos
---

## Unit Testing

Just like for any other programming language, writing Ligo code (which will be compiled into Michelson) is not the only task of a developper:
writing tests is as much as important as writing ligo code.

Writing tests takes extra time, but this effort is mitigated by some great benefits:
- a test helps to understand the code: a user or a new developer can easily understand the code behaviour.
  The test name should clearly describe what the code is checking;
  the test itself shows how the code should be handled.
- checking the good behaviour of the written code. It benefits both to the developer and the user of a smart contract:
  both of them want to be sure the smart contract behaves as it should be
- It also makes the code robust for future modifications, 
  i.e. code refactoring or new functionalities. 
  The tests make sure that the behavior has not changed, and if it did, clearly outlines where.
- test can be easily automated: they can be included in a CI/CD, which runs them after any push



There are different types of tests, as described below in the an automated testing strategy.
<br/>

![](../../static/img/ligo/pyramide_of_tests.svg)
<small className="figure">FIGURE 1: Pyramide of Tests</small>

Unit tests are the base of the pyramid and therefore the most important part.
<!---
Décrire les autres tests très succinctement
-->
**Unit testing** is performed at a very fine granularity 
by verifying the behavior of a portion of code totally 
or partially isolated from its dependencies.
It will then be simple to write and maintain. While an integration test aims to verify that several components work well together: 
it checks the assembly.

To go further, take a look at **Test Driven Development (TDD)** 
which is a development method emphasizing 
the writing of automated tests as a tool to guide the implementation of features.

Ligo does not provide a testing framework. But other languages, such as Python, do.
This chapter details how to write unit tests on Michelson code in Python.
Two modules are needed:
- the standard *unittest* module: used to write and run unit tests in Python
- the *pytezos* module: used to call the entrypoints of a smart contract, without deploying it.
This module is an interesting option because it is well-maintained and easy-to-use.

## PyTezos Installation

### Requirement

- Python 3
- Text editor
- Cryptographic dependencies, detailed here [link](https://pytezos.org/quick_start.html#requirements).

### Installation

#### Creation of a virtual environment
A virtual environment is a self-contained python installation, separated from the global Python installation.
It contains its own modules. Hence, it is useful when a specific module version is needed, without affecting the other modules.
Run this command to create a virtual environment:
```shell
python3 -m venv /path/to/env
```

#### Activating the environment

```shell
source /path/to/env/bin/activate
```

#### Installation of the necessary python libraries

Installation of **PyTezos**:

```shell
(venv) pip install pytezos
```

Verification of the installation:

```shell
(venv) python -c "import pytezos"
```

If the command returns nothing then the installation is successful.

You can find the official documentation here [https://pytezos.org/](https://pytezos.org/) and 
all the versions on the project github [https://github.com/baking-bad/pytezos](https://github.com/baking-bad/pytezos) in the [Releases part](https://github.com/baking-bad/pytezos/releases).

> The pytezos version used for the following example is `pytezos==3.1.0`.  
> You can check the version of your package with the `pip freeze` command.    
> You can install a specific version if needed with `pip install pytezos=={pytezos_version}`.

## Unittest (Python library)

*Unittest* is the standard unit testing framework for Python.
Before writing tests for smart contracts with **PyTezos**, 
you need to know how to use this test library.

Let's see how **Unittest** works through a simple example.

Consider a python file `calculator.py` with two functions: `multiply` and `divide`

```python
#calculator.py

def multiply(x, y):
    return x * y


def divide(x, y):
    if y != 0:
        return x / y
```

In order to test these two functions 
let's create a new test file beginning by **test_** : `test_calculator.py`.

In this file you will need to:
- import the unittest module
```python
import unittest
```  

- import the file you want with the functions you want to test: `import calculator`
```python
import unittest

import calculator
```  
- Create a test class that inherits from `unittest.TestCase`.  
  You can name this class whatever you want but try to keep it descriptive.

```python
import unittest
from unittestExample import calculator

class TestCalculator(unittest.TestCase):
  pass #keyword which tells the class to do nothing
```  
- Write your tests. Keep in mind these basic rules:
   - A test must check one behaviour at the time.
   - One test = one method
   - No magic number: all the values used must be declared in variables, with explicit names
   - There must not be useless variables to make the test pass. If a variable can be removed without making the test fail, it must be removed.
   - The method name must explicit. Anyone should understand what the test takes as input, what behaviour is checked and wha is expected.
   - A test can be divided into three parts (as implemented in the tests below):
      - GIVEN section: input declarations, expected results
      - WHEN section: the tested method is called with the declared inputs
      - THEN: assertions checks
  
With unittest, a test method must with `test_` otherwise it will not be considered as a test.

```python
class TestCalculator(unittest.TestCase):

  def test_multiplying_10_and_5_should_return_(self):
    # GIVEN
    x = 10
    y = 5
    expected_multiplication_result = 50
    # WHEN
    result = calculator.multiply(x, y)

    # THEN
    self.assertEqual(result, expected_multiplication_result)

  def test_dividing_7_and_3_should_return_a_floating_number_2_33333333(self):
    # GIVEN
    x = 7
    y = 3
    expected_division_result = 2.3333333333333335

    # WHEN
    result = calculator.divide(x, y)

    # THEN
    self.assertEqual(result, expected_division_result)
```

> At the beginning of this chapter, several benefits of unit testing have been raised. 
> This simple tests suite gives a good example:
>  - Reading the test name gives a clear idea about the code implementation. 
> For instance, the second test show that it is not an Euclidean division that is implemented
>  - The divide method could be the Euclidean division. The test checks that it returns a float number and not a int.
> If another developer was to change it into an Euclidean division, the test would fail and warn instantly the developer of a breaking change
> 

> Note that classe names are by convention in **CamelCase** 
> and test method names are in **snake_case**.

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

Note that the command has executed all the tests in the `test_calculator.py` file, 
but it is possible to only execute some specific tests.

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

This module is very interesting for smart contracts unit testing:
- it can test directly the Michelson code with Python scripts, without having to deploy it on a testnet.
- since it does not have to wait for transactions confirmations, the test are fast to run
- it can simulate any execution context (sender, amount, storage...)
- it gives total control on the storage: each test has its own initial storage, and the output storage can be checked.
- the tests are independant one from another. If the tests were run on a deployed smart contract, the initial storage of a test would be the output storage of the previous one.

In this section we will test entrypoints of a michelson script
from a smart contract which is compiled but not deployed.

For this we will need:

- The **Unittest** library which is the standard framework for writing tests in Python.
- Two very useful classes from **PyTezos**:
  - **ContractInterface**: allows interfacing with the entrypoints of a contract 
  and interact with them.
  - **MichelsonRuntimeError**: allows handling errors raised during execution.

To write the tests we will use the following template:

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

**PyTezos** expects the path to a file containing Michelson code `path_to_michelson_contract`.

The compiled contract is obtained with a command of this type:

```shell
ligo compile-contract file.ligo main > contract.tz
```

Remember to recompile after any modification of the contract.

### Equivalence between michelson type and python

**PyTezos** allows to interpret michelson code, so here are the equivalences:

| Michelson  |                  Python                  |
| :--------: | :--------------------------------------: |
| List, Set  |                    []                    |
|  Big_map   |                    ()                    |
|   String   |                  String                  |
|   Number   |                 Integer                  |
| mutez, tez | Interpreted as Integer by `.interpret()` |

### Counter Contract Example

Here is an example of **Counter contract** that handles an integer "counter" value, and an administrator address
as storage and allows the administrator **only** to increment or decrement this counter.

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
when the administrator performs the `Increment(5)` action.

- For the test a false address tz1 has been assigned to the administrator,
  you can generate false addresses [here](https://faucet.tzalpha.net/).
- In the `setUpClass` method we load the contract from the michelson source code stored in the **counter.tz** file,
  with the `ContractInterface.from_file()` method.
- Note that the name of the test accurately describes the testing intention.

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
- The incremented value is an `int`.

**WHEN**
- From our contract `self.counterContract` we can call an **entrypoint** and its **parameter** with `.increment(value)`.
- Then we can add a context with `.interpret()`.
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
  but this time the address of alice is specified in the context source variable: `source=alice`.
- Finally, the string message from the error is stored in the variable `error_message` 
  and it is compared with the original message written in the `failwith()` of the LIGO code. 
  

```shell
python -m unittest test_counter.TestCounterContract.test_should_failed_if_the_source_is_not_the_administrator
```

```shell
----------------------------------------------------------------------
Ran 1 test in 0.011s

OK

```

Now it's your turn to write tests! 
Try to do the same thing for the entrypoint `decrement` for example.  
The goal of writing tests is to have an optimal coverage of the whole code.  
This allows you to have a robust and high quality code. 
Moreover, future developers who will use your code will thank you very much.

