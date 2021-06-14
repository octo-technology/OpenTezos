---
id: exam
title: Exam
authors: Maxime Sallerin
---

import ExamForm from '../../src/components/docs/ExamForm';
import ExamCheckbox from '../../src/components/docs/ExamCheckbox';

<ExamForm moduleName="DeFi">

### Question 1

What notions are defined inside the smart contract?

<ExamCheckbox name="00" isCorrect="true">The type definition of the storage</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="false">The balance of the contract</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="false">The initial value of the storage</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="false">The value of the entrypoint and its related parameters</ExamCheckbox>
<ExamCheckbox name="04" isCorrect="true">The type definition of the entrypoint</ExamCheckbox>
<ExamCheckbox name="05" isCorrect="false">The size of the storage</ExamCheckbox>
<ExamCheckbox name="06" isCorrect="true">The code of the smart contract</ExamCheckbox>

### Question 2

What is returned by the execution of a smart contract?

<ExamCheckbox name="10" isCorrect="false">The current storage state when invoking the smart contract</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="true">The modified storage state after the invocation of the smart contract</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="false">The entrypoint that has been called (and its related parameters)</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="true">The list of emitted operations produced by the execution of the smart contract</ExamCheckbox>
<ExamCheckbox name="14" isCorrect="false">The balance of the contract</ExamCheckbox>
<ExamCheckbox name="15" isCorrect="false">The size of the storage</ExamCheckbox>
<ExamCheckbox name="16" isCorrect="false">The code of the smart contract</ExamCheckbox>
<ExamCheckbox name="17" isCorrect="false">The list of users allowed to call the smart contract</ExamCheckbox>

### Question 3

What can you do with the SmartPy online editor?

<ExamCheckbox name="20" isCorrect="true">Write, test and run your code</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="true">Visualize the generated Michelson code and storage. </ExamCheckbox>
<ExamCheckbox name="22" isCorrect="true">View the results of the tests as an HTML document. </ExamCheckbox>
<ExamCheckbox name="23" isCorrect="true">Access a panel of several smart contract templates.</ExamCheckbox>

### Question 4

What is a _SmartPy_ smart contract?

<ExamCheckbox name="30" isCorrect="false">It is a class of method called `main` taking as input a storage and parameters, returning a list of operations and a modified storage.</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="true">It is a class definition that inherits from `sp.Contract`. A SmartPy contract consists of a state with one or several entry points.</ExamCheckbox>

### Question 5

What is the correct way to add an integer `x` initialized to `0` to the storage?

<ExamCheckbox name="40" isCorrect="false">

```python
@sp.storage
def __init__(self):
    self.init(x = 0)
```
</ExamCheckbox>

<ExamCheckbox name="41" isCorrect="false">

```python
@sp.storage
def storage(self):
    self.x = 0
```
</ExamCheckbox>

<ExamCheckbox name="42" isCorrect="true">

```python
def __init__(self):
    self.init(x = 0)
```
</ExamCheckbox>

<ExamCheckbox name="43" isCorrect="false">

```python
def __init__(self):
    self.x = 0
```
</ExamCheckbox>

<ExamCheckbox name="44" isCorrect="false">

```python
def __storage__(self):
    self.init(x = 0)
```
</ExamCheckbox>

### Question 6

What is true about the definition of entrypoints with SmartPy?

<ExamCheckbox name="50" isCorrect="true">Entrypoints are methods of a contract class that can be called from the outside.</ExamCheckbox>
<ExamCheckbox name="51" isCorrect="false">Entrypoints are class definition that inherits from `sp.Contract`.</ExamCheckbox>
<ExamCheckbox name="52" isCorrect="false">Entrypoints return values in Michelson.</ExamCheckbox>
<ExamCheckbox name="53" isCorrect="true">Entrypoints need to be marked with the `@sp.entry_point` decorator.</ExamCheckbox>

### Question 7

What is true about tests and scenarios with SmartPy?

<ExamCheckbox name="60" isCorrect="true">A new test is a method marked with the `sp.add_test` decorator.</ExamCheckbox>
<ExamCheckbox name="61" isCorrect="true">A new scenario is instantiated by `sp.test_scenario`.</ExamCheckbox>
<ExamCheckbox name="62" isCorrect="true">Scenarios describe a sequence of actions: originating contracts, computing expressions, calling entry points, etc.</ExamCheckbox>
<ExamCheckbox name="63" isCorrect="true">SmartPy provides the possibility to generate test accounts with `sp.test_account(seed)` which contain the following fields: `account.address`, `account.public_key_hash`, `account.public_key`, and `account.secret_key`.</ExamCheckbox>

### Question 8

What is true about types with SmartPy?

<ExamCheckbox name="70" isCorrect="false">SmartPy expressions do not have a type.</ExamCheckbox>
<ExamCheckbox name="71" isCorrect="true">Just like in Python, most of the time, there is no need to specify the type of the object in SmartPy.</ExamCheckbox>
<ExamCheckbox name="72" isCorrect="true">SmartPy uses type inference to determine each expression's type.</ExamCheckbox>
<ExamCheckbox name="73" isCorrect="true">SmartPy types are all in the form `sp.T&lt;TypeName&gt;`.</ExamCheckbox>

### Question 9 and 10

For the next two questions let's consider the following piece of code:

```python
class Hello(sp.Contract):
    def __init__(self):
        self.init(x = 0)

    @sp.entry_point
    def set_x(newX):
        # Todo: set x from the storage to newX
```

What is the correct way to set x from the storage to `newX`.

<ExamCheckbox name="80" isCorrect="false">

```python
@sp.entry_point
def set_x(newX):
    self.x = newX
```
</ExamCheckbox>

<ExamCheckbox name="81" isCorrect="true">

```python
@sp.entry_point
def set_x(newX):
    self.data.x = newX
```
</ExamCheckbox>

<ExamCheckbox name="82" isCorrect="false">

```python
@sp.entry_point
def set_x(newX):
    x = newX
```
</ExamCheckbox>

<ExamCheckbox name="83" isCorrect="false">

```python
@sp.entry_point
def set_x(newX):
    newX = self.data.x
```
</ExamCheckbox>

What is the correct way to modify the code to check that `newX` is greater than 0 for the entrypoint `set_x`? (If not, we want the entrypoint invocation to fail and return an error message.)

<ExamCheckbox name="84" isCorrect="false">

```python
@sp.entry_point
def set_x(newX):
    verify(newX >= 0, message="x must be a positive number")
    self.data.x = newX
```
</ExamCheckbox>

<ExamCheckbox name="85" isCorrect="false">

```python
@sp.entry_point
def set_x(newX):
    sp.if(newX >= 0, message="x must be a positive number"):
        self.data.x = newX
```
</ExamCheckbox>

<ExamCheckbox name="86" isCorrect="true">

```python
@sp.entry_point
def set_x(newX):
    sp.verify(newX >= 0, message="x must be a positive number")
    self.data.x = newX
```
</ExamCheckbox>

<ExamCheckbox name="87" isCorrect="false">

```python
@sp.entry_point
def set_x(newX):
    sp.check(newX >= 0, message="x must be a positive number")
    self.data.x = newX
```
</ExamCheckbox>

</ExamForm>
