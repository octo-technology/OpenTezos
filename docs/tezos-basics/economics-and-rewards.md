---
id: economics-and-rewards
title: Economics and rewards
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---


## Transaction cost

Each transaction on Tezos has a cost. To account for this, the user includes a gas fee when he submits his transaction. Bakers will then choose transactions using a minimal fee filter. If the baker chooses a transaction, he will add the operation to the block and propagate it. The fee is therefore used to pay the bakers. They are calculated using the following formula [[1]](https://opentezos.com/tezos-basics/economics_and_reward#referencess):

Let:
- Size of the operation in bytes: $\text{s}$
- Gaz used for the operation in gaz unit: $\text{g}$
- Minimal Fees: $\text{min}_{F}$
- Minimal nano-XTZ per byte: $\text{min(nꜩ/B)}$
- Minimal nano-XTZ per gaz unit: $\text{min(nꜩ/}\text{g}_u\text{)}$

Then:
$$
    \text{Fees}\geq\text{min}_{F}+\text{min(nꜩ/B)}\times\text{s}+\text{min(nꜩ/}\text{g}_u\text{)}\times\text{g}
$$

The transaction default values are:
- $\text{min}_{F}=\text{100 µꜩ}$
- $\text{min(nꜩ/B)}=\text{250 nꜩ/B}$
- $\text{min(nꜩ/gu)}=\text{100 nꜩ/}\text{g}_u$

The size is the number of bytes in the complete serialized operation.

In a Tezos transaction, we can add additional information such as smart contracts deployment, smart contract call, etc. This information has a storage cost which is represented with a `minimal_nanotez_per_byte`. Since the update of the Delphy protocol [[2]](https://opentezos.com/tezos-basics/economics_and_reward#referencess) this cost has been reduced from 1ꜩ to 0.25 ꜩ per kilobyte. The price of creating a new account is thus been lowered from 0.257 tez to 0.06425 tez (the cost of creating an account is important to protect the system from spams and Sybil attacks [[3]](https://opentezos.com/tezos-basics/economics_and_reward#referencess)).

On the Tezos blockchain, gas refers to the cost necessary to perform a transaction on the network. Bakers set the price of gas based on supply and demand for computational power on the network, needed to process smart contract calls and other transactions.
It is used to determine the complexity of the transaction execution and also to avoid infinite loops. `minimal_nanotez_per_byte` is the price of one unit of gas and is selected by the user at the transaction creation. It is one of the factors a baker considers before choosing his transactions. Before taking the transaction, the baker reviews the amount of gas required and its cost per unit. If this ratio is adequate, the baker selects the transaction. Each transaction has a gas limit: 1,040,000 gas units (gu). If the contract execution or deployment exceeds this limit the contract is considered unusable. This limit is useful to guarantee that the bakers will be able to validate the block in a limited amount of time [[4]](https://opentezos.com/tezos-basics/economics_and_reward#referencess). This is to make the process more inclusive, as all the users should be able to run a node and bake a block within the allotted time, which is why the Tezos network sets the limit so low, so that even slow nodes can participate.
However, the Delphi update increased the amount of computation per units of gas. The minimal gas cost to achieve operations has been reduced from 10,000 to 1,000 units of gas. With this update, the execution cost of smart contracts decreased by approximately 75% [[5]](https://opentezos.com/tezos-basics/economics_and_reward#referencess). This evolution allows more complex smart contracts to be executed and was a demonstration of Tezos' adaptability.


## Smart contract execution and optimisation
The gas limit is an important parameter for the usability of the smart contract. But there is also a second major limit: each serialized operation can have a maximum 16,384 bytes. It is impossible to upload a smart contract bigger than this. 

One must therefore act on these two variables to optimise a contract:
* The contract size
* The gas consumption

One method to optimise a contract is to use low-level programming languages such as [Michelson](https://opentezos.com/michelson). As other Tezos smart contract languages (e.g. Ligo, SmartPy) are more high-level but are transpilers that generate Michelson code.

First we can  reduce the size of the contract. This formula computes the contract size:
```
size(contract) = α * n + s
```
`α` is a constant value

`n` is the number of instructions

`s` is the sum of the sizes of all variable-size constants (strings, bytes) in the contract

So, the size optimization comes down to decreasing the number of instructions and the variable-size constants.

We can also focus on reducing gas consumption. Many ways are possible [[6]](https://opentezos.com/tezos-basics/economics_and_reward#referencess). However, we should note that the majority of the gas is spent on the conversion of byte sequences into a protocol-specific typed representation and vice versa. Those conversions can be : reading, deserialization, parsing of bytes, checking the correctness of types, and conversion back to bytes. Follow this [link](https://gitlab.com/morley-framework/morley/-/blob/1f4ad392173a49752f1326a9dd4a4d5b7f6c5e70/docs/gasConsumption.md) for more details on the cost of gas.

## Tezos reward 
To maintain the network, Tezos needs bakers and endorsers. They stake their token and use their computing power to create blocks, manage transactions, vote and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the Carthage update [[7]](https://opentezos.com/tezos-basics/economics_and_reward#referencess), the reward system has been updated to make the network more robust against non-cooperative baking strategies. 


### Baking reward
When a baker bakes a block, he receives a reward composed of all the transaction fees contained in the block in addition to a network reward computed by this formula [[8]](https://opentezos.com/tezos-basics/economics_and_reward#referencess) :
```	
e * BAKING_REWARD_PER_ENDORSEMENT
```
`BAKING_REWARD_PER_ENDORSEMENT` = 1.250ꜩ if the baking priority is high or `BAKING_REWARD_PER_ENDORSEMENT` = 0.1875ꜩ if the baking priority is low. This Carthage update allows to focus the baker's efforts on the priority blocks.
 
`e` is the number of endorsements the block contains. 32 endorsements are required to validate a block.
Finally, with this formula, the network reward for a baked block is generally 32 X 1.25 = 40 ꜩ/block in addition to the transaction fee contain in the block.

### Endorser reward
Endorsers are also rewarded, when they are also randomly selected. One block needs 32 endorsers slots. But one endorser can have more than one slot.
```	
e * ENDORSEMENT REWARD
```
Where `ENDORSEMENT_REWARD` = 1.250ꜩ if the block priority is high and `ENDORSEMENT_REWARD` = 0.833333 ꜩ if the block priority is low.

`e` Is the number of endorser slots attributed.

### Inflation
Each new block generates 80 new XTZ as a reward. A new block is created each minute witch generates 42 Million of XTZ per year (80ꜩ x 60 mins x 24 hours x 365 days). At the Tezos launch, the network was composed of 763 Millions XTZ. 
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
