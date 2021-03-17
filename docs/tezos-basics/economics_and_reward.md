---
id: economics_and_reward
title: Economics and reward
---


## Transaction cost

Each Tezos transaction has a cost. The user includes a gas fee when he submits his transaction. Bakers choose transactions with a minimal fee filter. If the baker chooses a transaction, he will add the operation to the block and will propagate it. These fees are used to pay the bakers. They are calculated with the following formula [1](https://opentezos.com/tezos-basics/economics_and_reward#references):
```
fees >= (minimal_fees + minimal_nanotez_per_byte * size + minimal_nanotez_per_gas_unit * gas)
```
The transaction default values are:
```
minimal_fees = 0.000 1ꜩ (100µꜩ)
minimal_nanotez_per_gas_unit = 100nꜩ/gu (0.000 000 1ꜩ/gu)
minimal_nanotez_per_byte = 250nꜩ/B (0.000 00025ꜩ/B)
```

The size is the number of bytes of the complete serialized operation.

In a Tezos transaction, we can add additional information such as smart contracts deployment, smart contract call, etc. This information has a storage cost which is represented with a `minimal_nanotez_per_byte`. Since the Delphy protocol update [2](https://opentezos.com/tezos-basics/economics_and_reward#references) this cost has been reduced from 1ꜩ to 0.25 ꜩ per kilobyte. The price to create a new account is thus lowered from 0.257 tez to 0.06425 tez (the cost to create an account is important to protect the system from spams and Sybil attacks [3](https://opentezos.com/tezos-basics/economics_and_reward#references)).

On the Tezos blockchain, gas refers to the cost necessary to perform a transaction on the network. Bakers set the price of gas based on supply and demand for the computational power of the network needed to process smart contract calls and other transactions.
It is used to determine the complexity of the transaction execution. Also, it is used to avoid infinite loops. `minimal_nanotez_per_byte` is the price of one unit of gas and it is selected by the user at the transaction creation. It is one of the baker's inputs before choosing his transactions. Before taking the transaction, the baker reviews the amount of gas required and its cost per unit. If this ratio is adequate, the baker selects the transaction. Each transaction has a gas limit : 1,040,000 gas units (gu). If the contract execution or deployment exceeds this limit the contract is unusable. This limit is useful to guarantee that the bakers will be able to validate the block in a limited amount of time [4](https://opentezos.com/tezos-basics/economics_and_reward#references). To be inclusive, all the users should be able to run a node and bake a block within the allotted time, which is why the Tezos network sets the limit so low, so that even slow nodes can participate.
However, the Delphi update increased the amount of computation per units of gas. The minimal gas cost in order to achieve operations has been reduced from 10,000 to 1,000 units of gas. With this update, the execution cost of smart contracts decreased by approximately 75% [5](https://opentezos.com/tezos-basics/economics_and_reward#references). This evolution allows more complex smart contracts to be executed and demonstrates Tezos’ adaptability.


## Smart contract execution and optimisation
The gas limit is an important parameter for the usability of the smart contract. There is also a second limit : each serialized operation can have at most 16,384 bytes. It is impossible to upload a smart contract bigger than this. 

It is therefore possible to act on these two variables to optimise a contract:
* The contract size
* The gas consumption

One method to optimise a contract is to use low-level programming languages such as the [Michelson](https://opentezos.com/michelson). Other Tezos smart contract languages (e.g. Ligo, SmartPy) are more high-level but are transpilers that generate Michelson code.

First we can  reduce the size of the contract. This formula computes the contract size:
```
size(contract) = α * n + s
```
α` is a constant value

`n` is the number of instructions

`s` is the sum of the sizes of all variable-size constants (strings, bytes) in the contract

So, the size optimization comes down to decreasing the number of instructions and the variable-size constants.

We can also focus on reducing the gas consumption. Many ways are possible [6](https://opentezos.com/tezos-basics/economics_and_reward#references). However notice that the majority of gas is spent on the conversion of byte sequences into a protocol-specific typed representation and vice versa. Those conversions can be : reading, deserialization, parsing of bytes, checking the correctness of types, and conversion back to bytes. Follow this [link](https://gitlab.com/morley-framework/morley/-/blob/1f4ad392173a49752f1326a9dd4a4d5b7f6c5e70/docs/gasConsumption.md) for more details on the cost of gas.

## Tezos reward 
To maintain the network, Tezos needs bakers and endorsers. They stake their token and use their computing power to create blocks, manage transactions, vote and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the Carthage update [7](https://opentezos.com/tezos-basics/economics_and_reward#references), the reward system has been updated to make the network more robust against non-cooperative baking strategies. 


### Baking reward
When a baker is partially random and bakes a block, he receives a reward composed of the all transaction fees contained in the block in addition to network reward computed by this formula [8](https://opentezos.com/tezos-basics/economics_and_reward#references) :
```	
e * BAKING_REWARD_PER_ENDORSEMENT
```
where `BAKING_REWARD_PER_ENDORSEMENT` = 1.250ꜩ if the baking priority is high or `BAKING_REWARD_PER_ENDORSEMENT` = 0.1875ꜩ if the baking priority is low. This Carthage update allows to focus the baker's efforts on the priority blocks.
 
`e` is the number of endorsements the block contains. 32 endorsements are required to validate a block.
Finally, with this formula, the network reward for a baked block is generally 32 X 1.25 = 40 ꜩ/block in addition of the transaction fee contain in the block.

### Endorser reward
Endorsers are also rewarded, they are also randomly selected. One block needs 32 endorsers slots. But one endorser can have more than one slot.
```	
e * ENDORSEMENT REWARD
```
Where `ENDORSEMENT_REWARD` = 1.250ꜩ if the block priority is high and `ENDORSEMENT_REWARD` = 0.833333 ꜩ if the block priority is low.

`e` Is the number of endorser slots attributed.

### Inflation
Each new block generates 80 new XTZ as a reward. A new block is created each minute witch generates 42 Million of XTZ per year (80ꜩ x 60 mins x 24 hours x 365 days). At the Tezos launch, the network was composed of 763 Millions of XTZ. 
Therefore the inflation rate of the XTZ token is 5.51% : 42 000 000 / 763 000 000 = 5.51%.


## References
[1]https://tezos.gitlab.io/protocols/003_PsddFKi3.html#baker

[2]https://blog.nomadic-labs.com/delphi-changelog.html#lowered-storage-costs

[3]https://en.wikipedia.org/wiki/Sybil_attack

[4]https://blog.nomadic-labs.com/smarter-contracts-thanks-to-delphi-part-12.html

[5]https://tezos.foundation/delphi-upgrade/

[6]https://medium.com/tqtezos/how-to-minimize-transaction-costs-of-tezos-smart-contracts-9962347faf64

[7]https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html

[8]https://tezos.gitlab.io/007/proof_of_stake.html#rewards
