---
id: economics-and-rewards
title: Economics and rewards
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---


## Transaction cost
Each transaction on Tezos has a cost. To account for this, the user includes a gas fee when he submits his transaction. Bakers will then choose transactions using a **minimal fee filter**. If the baker chooses a transaction, he will add the operation to the block and propagate it. The fee is therefore used to pay the bakers. They are calculated using the following formula [[1]](https://opentezos.com/tezos-basics/economics_and_reward#referencess):

Let:
- Minimal Fees: $\text{min}_{F}$
- Size of the operation (in bytes "$\text{B}$"): $\text{s}$  
  (The size "$\text{s}$" is the number of bytes in the complete serialized operation).
- Gas used for the operation (in gas unit "$\text{g}_u$"): $\text{g}$
- Minimal nano-tez per byte: $\text{min(nꜩ/B)}$
- Minimal nano-tez per gas unit: $\text{min(nꜩ/}\text{g}_u\text{)}$  
  Gas unit cost is defined by the protocol. It does not depend on the fee market conditions; it does not depend on arbitrary defaults in config files; etc [[2]](https://opentezos.com/tezos-basics/economics_and_reward#referencess)

Then:
$$
    \text{Fees}\geq\text{min}_{F}+\text{min(nꜩ/B)}\times\text{s}+\text{min(nꜩ/}\text{g}_u\text{)}\times\text{g}
$$

The transaction **default** values are:
- $\text{min}_{F}=\text{100 µꜩ}$
- $\text{min(nꜩ/B)}=\text{250,000 nꜩ/B}\text{ (250 µꜩ/B)}$
- $\text{min(nꜩ/}\text{g}_u)=\text{100 nꜩ/}\text{g}_u$ [[2]](https://opentezos.com/tezos-basics/economics_and_reward#referencess)

In a Tezos transaction, we can add additional information such as smart contracts deployment, smart contract call, etc. This information has a storage cost which is represented in tez per byte. Since the update of the *Delphi* protocol [[3]](https://opentezos.com/tezos-basics/economics_and_reward#referencess) this minimal cost has been reduced from 1ꜩ to 0.25 ꜩ per kilobyte (250 µꜩ/B). The minimal price of creating a new account has thus been lowered from 0.257 tez to 0.06425 tez (the cost of creating an account is important to protect the system from spams and Sybil attacks [[4]](https://opentezos.com/tezos-basics/economics_and_reward#referencess)).

On the Tezos blockchain, gas refers to the cost necessary to perform a transaction on the network. Bakers set the price **in** gas based on supply and demand for computational power on the network, needed to process smart contract calls and other transactions.

Gas is used to determine the complexity of the transaction execution and also to avoid infinite loops. It is one of the factors a baker considers before choosing transactions. Before including a transaction, the baker reviews the amount of gas required and its cost per unit. If this ratio is adequate, the baker selects the transaction.

Each *Delphi* transaction has a gas limit: 1,040,000 $\text{g}_u$. If the contract execution, or deployment, exceeds this limit, the contract is considered unusable. This limit is useful to guarantee that the bakers will be able to validate the block in a limited amount of time [[5]](https://opentezos.com/tezos-basics/economics_and_reward#referencess). The gas limit may seem relatively low, but its value is a network inclusion metric: any user should be able to run a node and bake a block within the allotted time. Even *slow* nodes can participate.

The *Delphi* update also increased the *number of computation per unit of gas*. The minimal amount of gas units to achieve operations has been reduced from 10,000 to 1,000. With this update, the execution cost of smart contracts decreased by approximately 75% [[6]](https://opentezos.com/tezos-basics/economics_and_reward#referencess). This evolution allowed more complex smart contracts' executions and was a demonstration of Tezos' adaptability.

Note that a baker also takes into account the gas limit **per block**. In *Delphi*, that limit is 10,400,000 $\text{g}_u$ (10 times the gas limit per operation). So, of course, it limits the number of transactions to include in a block. However, the storage cost isn't a fee that rewards a baker. Actually, this particular fee is "burned", meaning nobody receives it.

## Smart contract execution and optimization
The gas limit is an important parameter for the usability of the smart contract. But there is also a second major limit: each serialized operation has a maximum size of 16,384 bytes. It is impossible to upload a smart contract bigger than this limit.

One must therefore act on these two variables to optimize a contract:

1. The gas consumption  
   Many ways are possible [[7]](https://opentezos.com/tezos-basics/economics_and_reward#referencess). However, note that the majority of the gas is spent on conversions from byte sequences to protocol-specific typed representations (and vice versa). These conversions can be:
   - reading
   - deserialization
   - parsing of bytes
   - checking the correctness of types
   - conversion back to bytes
   
   Follow this [link](https://gitlab.com/morley-framework/morley/-/blob/1f4ad392173a49752f1326a9dd4a4d5b7f6c5e70/docs/gasConsumption.md) for more details on the cost of gas.

2. The contract size  
   The below formula calculates an approximation of a contract's size:

   Let:
   - An assumed constant value per instruction: $\alpha$
   - The number of instructions: $n_i$
   - The sum of the sizes of all variable-size constants (strings, bytes) in the contract: $S$

    Then the contract's size "$C_s$" is:

    $$
      C_s=\alpha\times n_i+S
    $$

    So, the size optimization comes down to decreasing the number of instructions and the variable-size constants. [[7]](https://opentezos.com/tezos-basics/economics_and_reward#referencess)

## Tezos reward
To maintain the network, Tezos needs bakers and endorsers. They stake their token and use their computing power to create blocks, manage transactions, vote and secure the network. In exchange for the completion of these tasks, bakers are rewarded with tokens from the transaction fees or tokens created by the network. Since the Carthage update [[8]](https://opentezos.com/tezos-basics/economics_and_reward#referencess), the reward system has been updated to make the network more robust against non-cooperative baking strategies. 


### Baking reward
When a baker bakes a block, he receives a reward composed of all the transaction fees contained in the block in addition to a network reward computed by this formula [[9]](https://opentezos.com/tezos-basics/economics_and_reward#referencess) :
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

[2]https://forum.tezosagora.org/t/psa-do-not-quote-gas-cost-in-tez/1618

[3]https://blog.nomadic-labs.com/delphi-changelog.html#lowered-storage-costs

[4]https://en.wikipedia.org/wiki/Sybil_attack

[5]https://blog.nomadic-labs.com/smarter-contracts-thanks-to-delphi-part-12.html

[6]https://tezos.foundation/delphi-upgrade/

[7]https://medium.com/tqtezos/how-to-minimize-transaction-costs-of-tezos-smart-contracts-9962347faf64

[8]https://blog.nomadic-labs.com/a-new-reward-formula-for-carthage.html

[9]https://tezos.gitlab.io/007/proof_of_stake.html#rewards