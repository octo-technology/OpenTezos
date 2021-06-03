---
id: exam
title: Exam
authors: Maxime Sallerin
---

### Question 1

What notions are defined inside the smart contract?

- [x] The type definition of the storage
- [ ] The balance of the contract
- [ ] The initial value of the storage
- [ ] The value of the entrypoint and its related parameters
- [x] The type definition of the entrypoint
- [ ] The size of the storage
- [x] The code of the smart contract

### Question 2

What is returned by the execution of a smart contract?

- [ ] The current storage state when invoking the smart contract
- [x] The modified storage state after the invocation of the smart contract
- [ ] The entrypoint that has been called (and its related parameters)
- [x] The list of emitted operations produced by the execution of the smart contract
- [ ] The balance of the contract
- [ ] The size of the storage
- [ ] The code of the smart contract
- [ ] The list of users allowed to call the smart contract

### Question 3

What can you do with the SmartPy online editor?

- [x] Write, test and run your code
- [x] Visualize the generated Michelson code and storage. 
- [x] View the results of the tests as an HTML document. 
- [x] Access a panel of several smart contract templates.

### Question 4

What is a _SmartPy_ smart contract?

- [ ] It is a class of method called `main` taking as input a storage and parameters, returning a list of operations and a modified storage.
- [x] It is a class definition that inherits from `sp.Contract`. A SmartPy contract consists of a state with one or several entry points.

### Question 5

What is the correct way to add an integer `x` initialized to `0` to the storage?

- [ ] 
```python
@sp.storage
def __init__(self):
    self.init(x = 0)
```

- [ ] 
```python
@sp.storage
def storage(self):
    self.x = 0
```

- [x] 
```python
def __init__(self):
    self.init(x = 0)
```

- [ ] 
```python
def __init__(self):
    self.x = 0
```

- [ ] 
```python
def __storage__(self):
    self.init(x = 0)
```

### Question 6

What is true about the definition of entrypoints with SmartPy?

- [x] Entrypoints are methods of a contract class that can be called from the outside.
- [ ] Entrypoints are class definition that inherits from `sp.Contract`.
- [ ] Entrypoints return values in Michelson.
- [x] Entrypoints need to be marked with the `@sp.entry_point` decorator.

## Question 7

What is true about tests and scenarios with SmartPy?

- [x] A new test is a method marked with the `sp.add_test` decorator.
- [x] A new scenario is instantiated by `sp.test_scenario`.
- [x] Scenarios describe a sequence of actions: originating contracts, computing expressions, calling entry points, etc.
- [x] SmartPy provides the possibility to generate test accounts with `sp.test_account(seed)` which contain the following fields: `account.address`, `account.public_key_hash`, `account.public_key`, and `account.secret_key`.

### Question 8

What is true about types with SmartPy?

- [ ] SmartPy expressions do not have a type.
- [x] Just like in Python, most of the time, there is no need to specify the type of the object in SmartPy.
- [x] SmartPy uses type inference to determine each expression's type.
- [x] SmartPy types are all in the form `sp.T<TypeName>`.

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

- [ ] .

```python
@sp.entry_point
def set_x(newX):
    self.x = newX
```

- [x] .

```python
@sp.entry_point
def set_x(newX):
    self.data.x = newX
```

- [ ] .

```python
@sp.entry_point
def set_x(newX):
    x = newX
```

- [ ] .

```python
@sp.entry_point
def set_x(newX):
    newX = self.data.x
```

What is the correct way to modify the code to check that `newX` is greater than 0 for the entrypoint `set_x`? (If not, we want the entrypoint invocation to fail and return an error message.)

- [ ] 
```python
@sp.entry_point
def set_x(newX):
    verify(newX >= 0, message="x must be a positive number")
    self.data.x = newX
```

- [ ] 
```python
@sp.entry_point
def set_x(newX):
    sp.if(newX >= 0, message="x must be a positive number"):
        self.data.x = newX
```

- [x] 
```python
@sp.entry_point
def set_x(newX):
    sp.verify(newX >= 0, message="x must be a positive number")
    self.data.x = newX
```

- [ ] 
```python
@sp.entry_point
def set_x(newX):
    sp.check(newX >= 0, message="x must be a positive number")
    self.data.x = newX
```
