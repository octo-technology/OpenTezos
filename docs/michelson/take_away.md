---
id: take-away
title: Take away
---

- Smart contracts in Tezos are implemented in the **Michelson** language which is a **stack-based strongly-typed** language. 
  
- Michelson includes: 
  - **stack manipulation instructions**: DUP, DIP, SWAP, DROP, DIG, DUG, IF, LOOP, ITER, CAR, CDR, ADD, SUB, MUL, EDIV, COMPARE ...
  - **instructions related to data structures**: MEM, GET, UPDATE, MAP, SOME, NONE, SIZE, PAIR, UNPAIR ...
  - **specific smart contract instructions**: SELF_ADDRESS, CONTRACT, NOW, TRANSFER_TOKENS, SET_DELEGATE, CREATE_CONTRACT, BALANCE ...

- The **entrypoints** of a smart contract define the possible invocations of this smart contract.
  
- The **storage** of a smart contract is a persistent memory space associated to the smart contract and contains the data of the smart contract.
  
- The **code** of a smart contract is a sequence of Michelson instructions that can be invoked. The execution of this sequence of instruction takes a parameter (entrypoint) and the actual storage, and returns a new storage (and optionally some operations for other contracts).

- **Invocation** of a smart contract triggers the execution of the code of the smart contract which can modify the storage.

- The _Tezos-client_ allows to **typecheck** and **simulate** the execution of Michelson scripts.




