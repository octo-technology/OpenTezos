---
id: main-properties
disable_pagination: true
title: Main properties of the first "blockchain"
authors: Thomas Zoughebi
---

In this chapter, we will dig deeper into the main properties of the Bitcoin protocol, its developers, its P2P network, and a few basics of its economic structure.

## Open-Source
Most, if not all, of the public blockchain developments, are made open-source. Anyone can verify the code, correct it, and make proposals. This openness is fundamental in an essentially trustless environment. It is common to hear community members say: "*Don't trust, verify!*".

The most committed blockchain developers also go by the catchphrase "[*Code is law*](https://en.wikipedia.org/wiki/Code_and_Other_Laws_of_Cyberspace)", meaning that the strict code defines not only the validation rules of all the transactions and their interactions but also people's conduct. This code is also used to create the software that runs on the network and how data is recorded, explored, etc.

There are different implementations of the Bitcoin protocol on other operating systems and devices. A large variety of programming languages is used (e.g., _C++, Python, Java, Go, Scala_...).

The original implementation from _Satoshi Nakamoto_ is in C++ and is called [_Bitcoin Core_](https://bitcoincore.org/). Most of the nodes of the network use this version.

The openness of the code, the permissionless access to the network, the free software all bring intoxicating freedom and appeal to the community. Note, however, that this induces a transfer of responsibility to the user. The best intentions do not drive all developers in the community, and many blockchain applications are pure scams. To prevent this, we encourage users to check the sources of applications and the blockchain they use.

## Peer-to-Peer network and shared ledger
Developers have a lot of power, but their code still has to be accepted and used. The Bitcoin P2P network, like most blockchains, has a mesh design spread all over the planet (and space[[1]](/blockchain-basics/main-properties#references)). The more nodes enforcing the rules, the more the protocol is distributed and secured.

There are different types of nodes, but for the sake of simplicity, let's only quickly describe two categories: _Full nodes_ and _Lightweight nodes_.

- _Full nodes_ enforce the rules no matter what happens and validate the transactions. They _usually_ [[2]](/blockchain-basics/main-properties#references) also record all transactions in a distributed ledger. This ledger is shared by all the full nodes of a network.

- _Lightweight nodes_ are used for devices with limited space capacity, calculating speed, or connectivity (e.g., smartphones, tablets, IoT, etc.). They don't record transactions in the ledger but ask the full nodes for required information.

From now on, "node" refers to a *full node*. All these full nodes communicate with each other using a [*Gossip Protocol*](https://academy.bit2me.com/en/what-is-gossip-protocol/).

### Chained Data-structure
The ledger's structure has to be very special to meet the following constraints:

- The ledger is distributed over the planet, and everyone should be able to agree on its state at the same time (minus latency): This is an asynchronous network. Transactions (transfers of bitcoins) are grouped inside packages named "**blocks**" to ease management. The size of the blocks impacts the transmission speed. If blocks are relatively small, more blocks circulate on the network. If blocks are relatively big, fewer of them circulate in the same amount of time. Almost every node (computers) of the network has to check each block for roughly the same time. So, in an asynchronous network, to assure maximum participation in the reconciliation ([the finding of the consensus on the replicated, shared, and synchronized digital information](/blockchain-basics#terminology)), the size of a block is a key factor. Finding a good size allows for smooth and regular transmissions.
  
- The ledger's history of transactions must not be modifiable (immutability)
  
- Verifying the history or picking and verifying the presence of specific information inside the ledger has to be fast (e.g., check a balance)
  
- The part of the community validating the blocks (i.e., the "*miners*", as we will see) must be rewarded in a fair way

The data structure which permits all of the above is a chain of blocks, a.k.a. "blockchain".

Valid transactions are grouped and enclosed inside a block. On average, every 10 minutes with Bitcoin, a new block should be mined. The number of transactions inside a block is only limited by the available space, which is currently (2021) around 2 MB per block (comparatively, the "_Bitcoin Cash_" blockchain has a block size of around 32 MB).

Each new block is linked to the previous one: they are chained. The more blocks there are, the more difficult it is to modify anything in the ledger. They are cryptographically chained. This means that if you want to cheat (e.g., make a double-spend or spend money you don't have), you would need to modify everything from the first block ever created (called the "_Genesis Block_").

The reference to the previous block is inside the new block's *header*. This reference is made with the *SHA256* [hash function](https://en.wikipedia.org/wiki/Hash_function) applied on the previous block's header (more on that in the [next chapter on Proof-of-Work](/blockchain-basics/proof-of-work)).  
This process is achieved through the [Cipher Block Chaining (CBC)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_(CBC)) principle from 1976, where instead of a _XOR_ function (plain text additions will match [*nonce*](https://en.wikipedia.org/wiki/Cryptographic_nonce) additions in the next chapter), the _SHA256_ function is used. Twice:

![Chain of blocks](../../static/img/blockchain-basics/blocks-chain.svg "Chain of blocks")

More on that in the [next chapter on Proof-of-Work](/blockchain-basics/proof-of-work).

### Introduction to Mining
The blocks validators are called the **miners**. They put valid transactions inside a block, and then try to validate that block. When the block is found valid, the miner who created it receives two types of rewards:
- A fee in bitcoin for each included transaction, **chosen** and sent by the **author** of that transaction
- And a **pre-determined** quantity of newly created bitcoins for the valid block found (called the _coinbase_)

The fees are **the sum of the transactions values** ($S_v$) minus **the sum of the amounts sent** ($S_a$).

For $T$ *transactions* in a block, let $v$ be a transaction *value*, and $a$ be the *amount* really sent:

$$
\text{Fees} = \sum_{i=1}^{T} v_i - \sum_{i=1}^{T} a_i
$$

Or more simply:

$$
\text{Fees} = S_v - S_a
$$

Senders choose the fee they want to pay. The more they give, the faster the transaction is included in a block. As block size is limited, miners prioritize transactions with the highest fees. A transaction could have zero fees, but it would take months or years until a miner decides to include it in a block (if ever). 

The block reward is sent through a particular transaction called a "_Coinbase Transaction_" directly to the miner. It's always the first transaction of a validated ("*mined*") block.

To get these two rewards, a miner basically plays a lottery, a game of chance. This game is to find a binary number lesser than a specified value (called "_Target_") with the specific hash function _SHA256_. The fact is a miner can't guess in advance the result of this function. He **must** try values (by [*Brute Force*](https://en.wikipedia.org/wiki/Brute-force_attack)). He must *hash* the previous block header (twice) with a random number called the *nonce* (details in the ["*Proof-of-Work*"](/blockchain-basics/proof-of-work) chapter).

The more a miner tries values (the more he has lottery tickets), the more energy he uses.

When a miner finds a valid number, he finally produces a valid block. His node spreads this new block to the network. The final *nonce* is then included in the block so that anyone can verify it.

If two miners find a valid number simultaneously (within lag and network propagation delays), then two valid blocks are possible. Miners are then split into two groups:
- those mining from the block of the first miner,
- and those mining from the block of the second miner

If someone finds a block following the second miner's block, then these two blocks form "the longest chain" (actually, the chain with *the most work*[[3]](/blockchain-basics/main-properties#references)) and become the "winners".

More details on that in the [next chapter on Proof-of-Work](/blockchain-basics/proof-of-work).

## Account Unit and Economy Basics
Miners use their computational power and electricity to mine. That's why they are rewarded for it. The rewards are in the account unit. Bitcoin uses bitcoins, while Ethereum uses ethers.

To get these rewards, they must _work_, and then _proove they have worked_. In Bitcoin, they work by using up electricity and computing time. So to make this activity profitable, miners have to find efficient calculators and low-cost electricity.

Over time, miners have grouped to use more and more powerful machines together as more people began this activity. This increases the number of attempts (the number of lottery tickets) of the global network to find a valid block. Because the function used for that is a **hash** function (_SHA256_), this network efficiency is called "**hashing power**".

While the network gains more hashing power, constraints stay the same. Each block still has to appear around every 10 minutes. To maintain this and adapt, the protocol calculates the _Difficulty_. If the hashing power is too high, the _Difficulty_ increases. If the hashing power is too low, the _Difficulty_ decreases.

The _Difficulty_ modifies the binary _Target_. To increase the difficulty, the _Target_ becomes smaller and smaller. This means that this binary number has more and more leading zeros.

A new _Difficulty_ is calculated every 2016 blocks (~2 weeks).

Economically, it becomes more and more challenging to get rewards. A sign that more and more people are trying to find bitcoins, so the *demand* increases.

Bitcoin's value relies on the simple free market of *supply* and *demand*. But its model is intrinsically **deflationary**. The more bitcoins are hard to mine, the higher their price.

The total *theoric* limited *supply* of bitcoins is pre-determined and hardcoded in the protocol at 21 million [[4]](/blockchain-basics/main-properties#references).

## Consensus: Nakamoto and the Proof-of-Work's account-units issuance

### What is a consensus?
"**Consensus**" comes from Latin *cōnsēnsus* ("agreement, accordance, unanimity").  
It is the point where independent actors reach a common agreement on a decision.  

In IT, a consensus algorithm is a computer program allowing users to reach common **agreements** on the states of data in a distributed network.  
For example, consensus algorithms are used in Distributed Calculation, Distributed Database, etc.

### Agreements and *Deflation*

There are two more elements we need to introduce to have a better general picture of Bitcoin. The *Nakamoto Consensus* is both the engine and the binder of the Bitcoin components and relies on them. In the above sections, you learned about the Bitcoin open-source development, the distributed ledger and its network, and some basics about the mining and economics of Bitcoin. In the next chapter, you'll learn technical details about "*Proof-of-Work*". First, we need to know about the "*Halving*" and the "*MAD Property*":

Relying only on supply and demand, Bitcoin wouldn't be deflationary.

Another rule is coded in the Bitcoin protocol that increases the scarcity of bitcoins. Its name is the _Halving_. Every 210,000 blocks (~4 years), the block reward is simply cut in half.

At the very beginning (2008 / 2009), the block reward was 50 bitcoins. These days (2021), the reward is 6.25 bitcoins and will stay the same until 2024[[5]](/blockchain-basics/main-properties#references).

Block reward is how the currency's issuance is produced. So the _Halving_ has a strong economic impact. Usually, this event leads to a phase of increasing price, namely "Bull Market"[[5]](/blockchain-basics/main-properties#references). It's worth noting that it is also an event that federates the community, the adoption, and in return, makes the network stronger, and the price higher[[6]](/blockchain-basics/main-properties#references).

The numbers chosen by Satoshi Nakamoto for the total supply and the _Halving_ are inspired by _gold mining_. The more you dig to find gold, the less there is, and the harder it is to dig. That's precisely why the blocks validators are called the "Miners".

To recap, the _Nakamoto Consensus_, which Bitcoin is based on, is driven by:
- Decentralization
- Proof-of-Work and mining economics
- A probabilistic solution to the [Byzantine General Problem](https://en.wikipedia.org/wiki/Byzantine_fault) (a quick word on that below)
- The _MAD_ property (defined below)

In the Bitcoin mesh network, the **rewards** make it possible to sustain up to 50% of bad actors ($\frac{1}{2}$). The network uses "Byzantine Fault Tolerance" (BFT). Probabilistically, Bitcoin's solution is more efficient than the main mathematical solution: The actual main solution requires less than one-third of bad actors($\frac{1}{3}$).

The _**M**utual **A**ssured **D**estruction_ (**_MAD_**) property reinforces this BFT solution:  

_It is more profitable to earn bitcoins by participating in the protocol than to attack it. If you want to attack it, you'd have to invest an unreasonable amount of resources. Even in the improbable case that your attack is successful, you'd still lose money on your investment..._

You would also face the community, which can detect the attack and adapt.

In conclusion, the distributed network's parameters allow for anyone to agree asynchronously on the data states. Anyone is also able to verify the rules or even code them through the open-source frame. The Proof-of-Work permits good actors to be miners, to prove their work and get rewarded for securing transactions. The probabilistic solution to the Byzantine General Problem and the MAD property assure the robustness of the network. The protocol evolves and adapts with the Halving and the Difficulty to mimic gold mining and assure deflation.

## What have we learned so far?
This chapter described some of the pillars of the Bitcoin protocol and how they are articulated around the Nakamoto Consensus. You now understand that the Nakamoto Consensus integrates the Proof-of-Work consensus algorithm and a form of *social* consensus based on simple Economy principles.

In the next chapter, we'll dig into the Proof-of-Work consensus mechanism to understand how it works in details.

## References
[1] https://blockstream.com/satellite/

[2] https://bitcoin.org/en/release/v0.12.0#wallet-pruning

[3] https://learnmeabitcoin.com/technical/longest-chain

[4] More precisely 20,999,999,9769: https://en.bitcoin.it/wiki/Controlled_supply

[5] http://bitcoinhalvingdates.com/

[6] https://www.bitcoinhalving.com/
