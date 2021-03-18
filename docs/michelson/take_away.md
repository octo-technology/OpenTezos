---
id: takeaway
title: Take away
---


- Tezos smart contracts are implemented in Michelson language which is a stack-based strongly-typed language. 
- Michelson includes: 
  - stack manipulation instructions: DUP, DIP, SWAP, DROP, DIG, DUG, IF, LOOP, ITER, CAR, CDR, ADD, SUB, MUL, EDIV, COMPARE ...
  - instructions related to data structures: MEM, GET, UPDATE, MAP, SOME, NONE, SIZE, PAIR, UNPAIR ...
  - specific smart contract instructions: SELF_ADDRESS, CONTRACT, NOW, TRANSFER_TOKENS, SET_DELEGATE, CREATE_CONTRACT, BALANCE ...

- Entrypoints of a smart contract define the possible invocations of this smart contract.
- The storage of a smart contract is a persistent memory space associated to the smart contract and contains data of the smart contract.
- The code of a smart contract is a sequence of Michelson instructions that can be invoked. The execution of this sequence of instruction takes a parameter (entrypoint) and the actual storage and returns a new storage (and optionally some operations for other contracts).
- Invocation of a smart contract triggers the execution of the code of the smart contract and thus modifies the storage.
- The Tezos client allows to typecheck and simulate the execution of a Michelson script.




