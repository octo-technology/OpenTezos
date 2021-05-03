---
id: write-contract-smartpy
title: Smart contract development with Smartpy
---

// Introduction du chapitre

## Get Started

The writing of this smart contract will be done entirely on the online editor proposed by SmartPy. 
It is of course possible to do the same thing on your ide and use the command lines (described in the previous chapter) 
to compile/test your contract.

### Create your contract

First of all, let's create a new contract in the online editor that we will name _Raffle Contract_.

![](../../static/img/smartpy/online_editor_create_contract.png)
<small className="figure">FIGURE 1: Online Editor Create Contract</small>

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

You can visualize the generated michelson code in the _Deploy Michelson Contract_ tab. 

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