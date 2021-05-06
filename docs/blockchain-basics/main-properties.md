---
id: main-properties
disable_pagination: true
title: Main properties of the first "blockchain"
authors: Thomas Zoughebi
---

In this chapter, we will dig deeper into the main properties of the Bitcoin protocol, its developers, its P2P network and a few basics of the economy it uses.

## Open-Source
Most, if not all, public blockchain developments are made open-source. Anyone can verify the code, correct it, and make proposals. This openness is essential in an environment that is essentially trustless. It is common to hear community members say: "*Don't trust, verify!*".

The most commited blockchain developers also go by the catch phrase "[*Code is law*](https://en.wikipedia.org/wiki/Code_and_Other_Laws_of_Cyberspace)", meaning that the strict code defines not only the validation rules of all the transactions and their interactions, but also people's conduct. This code is also used to create the software that runs on the network, and how data is recorded, explored, and so on.

There are different implementations of the Bitcoin protocol, on different operating systems and devices. There are implementations in almost every programming language (e.g. _C++, Python, Java, Go, Scala_...).

The original implementation from _Satoshi Nakamoto_ is in C++ and is called [_Bitcoin Core_](https://bitcoincore.org/). Most of the nodes of the network use this version.

The openness of the code, the permissionless access to the network, the free software, all bring intoxicating freedom and appeal to the community. Note however that this induces a transfer of responsibility to the user. Not all developers in the community are driven by the best intentions and many blockchain application are pure scams. To prevent this, we encourage users to always check the sources of applications and blockchain they use.

## Peer-to-Peer network and shared ledger
Developers have a lot of power but the rules they code still have to be accepted and used. The Bitcoin P2P network, like most of blockchains, has a mesh design spread all over the planet (and space[[1]](/blockchain-basics/main-properties#references)). The more nodes enforcing the rules, the more the protocol is distributed and secured.

There are different types of nodes, but for the sake of simplicity, let's only quickly describe two categories: _Full nodes_ and _Lightweight nodes_.

- _Full nodes_ enforce the rules no matter what happens and validate transactions. They _usually_ [[2]](/blockchain-basics/main-properties#references) also record all transactions in a distributed ledger. This ledger is shared by all the full nodes of the network.

- _Lightweight nodes_ are used for devices with limited space capacity, calculating speed, or connectivity (e.g. smartphones, tablets, IoT, etc.). They don't record transactions in the ledger and ask full nodes for informations when needed.

From now on, "node" refers to a *full node*. 

### Chained Data-structure
The ledger's structure has to be very special to meet the following constraints:

- The ledger is distributed over the planet, and everyone should be able to agree on its state at the same time (minus latency)
  
- Transactions are grouped inside packages named "**blocks**" to ease management. Blocks shouldn't be too small, nor too big, to have smooth and regular transmissions.
  
- The history must not be modified (immutability) so the difficulty to attack the network and modify the ledger must increase over time (as computers become more powerful)
  
- Verifying the history, or picking a specific information inside the ledger has to be fast (e.g. check a balance)
  
- The part of the community validating the blocks (i.e. the "*miners*", as we'll see) must be rewarded in a fair way

The data-structure which permits all of the above is a chain of blocks aka "blockchain".

Valid transactions are grouped and enclosed inside a block. Every 10 minutes on Bitcoin, a new block must be mined. The number of transactions inside a block is only limited by its available space which is currently (2021) around 2 MB (comparatively "_Bitcoin Cash_" blockchain has around 32 MB block size).

Each new block is linked to the previous one: they are chained. The more blocks there are, the more difficult it is to modify anything in the ledger. They are cryptographically chained. That means, that if you want to cheat (e.g. make a double-spend or spend money you don't have), you would need to modify everything until the first block ever created (called the "_Genesis Block_"). This is like *Matryoshka dolls* with an enormous number of dolls.
This is achieved through [Cipher Block Chaining (CBC)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_block_chaining_(CBC)), where instead of a _XOR_ function, the _SHA256_ function is used. Twice:

![Chain of blocks](../../static/img/blockchain-basics/blocks-chain.svg "Chain of blocks")

More on that in the [next chapter on Proof-of-Work](/blockchain-basics/proof-of-work).

### Introduction to Mining
The blocks validators are called the **miners**. They put valid transactions inside a block, and then try to validate that block. When the block is found valid, they get two types of rewards:
- Fees in bitcoins from each transaction, that each **sender** chose
- **Pre-determined** quantity of bitcoins for the valid block found (called the coinbase)

The fees are simply **the sum of the transactions values** ($S_v$) minus **the sum of the amounts really sent** ($S_a$).

For $T$ *transactions* in a block, let $v$ be a transaction *value*, and $a$ be the *amount* really sent:

$$
\text{Fees} = \sum_{i=1}^{T} v_i - \sum_{i=1}^{T} a_i
$$

Or more simply:

$$
\text{Fees} = S_v - S_a
$$

Senders actually choose the fee they want to pay. The more they give, the faster the transaction is included in a block. As block size is limited, miners obviously promote transactions with the highest fees. A transaction could actually have zero fee, but it would take months or years until a miner decides to include it in a block (if ever). 

The block reward is sent through a special transaction called a "_Coinbase Transaction_" directly to the miner. It's always the first transaction of a validated ("*mined*") block.

To get these two rewards, a miner basically plays a lottery, a game of chance. This game is to find a binary number lesser than a target (called "_Target_") with the specific hash function _SHA256_. The fact is a miner can't guess in advance the result of this function. He **must** try values (by [*Brute Force*](https://en.wikipedia.org/wiki/Brute-force_attack)). He must *hash* the previous block header (twice) with the number of the attempt called the "*nounce*".

The more a miner tries values (the more he has lottery tickets), the more he uses energy to make his computers work.

When a miner finds a number that is valid, he finally finds a valid block. His node tells to the network its discovery with the final _nounce_ (so anyone can verify it).

If two miners find a valid number at the same time (within lag and network propagation delays), then two valid blocks are possible. Miners are then split in two groups: those mining from the block of the first miner, and those mining from the block of the second miner. If someone finds a block following the second miner's block, then both of them become the "winners" as they form "the longest chain" (actually, the chain with *the most of work*) [[3]](/blockchain-basics/main-properties#references).

More details on that in the [next chapter on Proof-of-Work](/blockchain-basics/proof-of-work).

## Account Unit and Economy Basics
Miners use their computational power and electricity to mine. That's why they are rewarded for it. The rewards are in the account unit. Bitcoin uses bitcoins, while Ethereum uses ethers.

To get these rewards they must _work_, and then _proove they worked_. In Bitcoin, they work using electricity. So to make this activity profitable, miners have to find efficient calculators, and low-cost electricity.

Over time, miners group more and more powerful machines together, and more people begin this activity. This increases the number of attempts (the number of lottery tickets) of the global network to find a valid block. Because the function used for that is a **hash** function (_SHA256_), this network efficiency is called "**hashing power**".

While the network gains more hashing power, constraints stay the same. Each block still has to appear around every 10 minutes. To maintain this and adapt, the protocol calculates the _Difficulty_. If the hashing power is too high, the _Difficulty_ increases. If the hashing power is too low, the _Difficulty_ decreases.

The _Difficulty_ modifies the binary _Target_. To increase the difficulty for miners to find a valid block, the _Target_ becomes smaller and smaller. This means the leading zeros of this binary number are more and more.

The _Difficulty_ is calculated every 2016 blocks (~2 weeks).

Economically, it is more and more difficult to get rewards. This is also the sign that more and more people try to find bitcoins, so the *demand* increases.

Bitcoin relies on the simple free market of *supply* and *demand*. It is intrinsically **deflationary**. The more bitcoins are hard to get, the higher their price. The rarest they are, the hardest they are to find. And vice versa.

The total *theoric* limited *supply* of bitcoins is pre-determined and hardcoded in the protocol at 21 millions [[4]](/blockchain-basics/main-properties#references).

## Consensus: Nakamoto and the Proof-of-Work's account units issuance

### What is a consensus?
"**Consensus**" comes from Latin *cōnsēnsus* ("agreement, accordance, unanimity").  
It is the mean independent validators reach a common agreement on a decision.  
*Examples*: Democracy, Dictatorship, Compromises, Aeronautical Standards...

In IT, a consensus algorithm is a computer program allowing users to reach common agreements on data states in a distributed network.  
*Examples*: Distributed Calculation, Distributed Database...

### Agreement on *Deflation*

Relying only on supply and demand, Bitcoin  wouldn't be deflationary.

Another rule is coded in the Bitcoin protocol that increases scarcity of bitcoins. Its name is the _Halving_. Every 210,000 blocks (~4 years), the block reward (coinbase) is simply cut in half.

At the very beginning (2008 / 2009), the block reward was 50 bitcoins. These days (2021), the reward is 6.25 bitcoins and will stay the same until 2024[[5]](/blockchain-basics/main-properties#references).

Block reward is how the currency's issuance is produced. So the _Halving_ has a strong economical impact. Usually, this event leads to an increasing price phase, namely "Bull Market"[[5]](/blockchain-basics/main-properties#references). It's worth noting that it is also an event that federates the community, the adoption, and in return, makes the network stronger, and the price higher[[6]](/blockchain-basics/main-properties#references).

The numbers chosen by Satoshi Nakamoto for the total supply and the _Halving_ are inspired by _gold mining_. The more you dig to find gold, the less there is, and the harder it is to dig. That's exactly why the blocks validators are called the "Miners".

The _Nakamoto Consensus_, which Bitcoin is based on, is driven by:
- The decentralization
- The Proof-of-Work
- A probabilistic solution to the Byzantin General Problem
- The _MAD_ property (defined below)

In the Bitcoin mesh network, the rewards make it possible to support up to 50% of bad actors (1/2). The network is said to be "Byzantin Fault Tolerant" (BFT). Probabilistically, Bitcoin's solution is more efficient than the main mathematical solution: The actual main solution requires less than one third (1/3) of bad actors.

The _**M**utual **A**ssured **D**estruction_ (**_MAD_**) property reinforce this BFT solution:  

_It is more profitable to earn bitcoins participating to the protocol than to attack it. If you want to attack it, you'd have to invest an unreasonable amount of resources. Even in the improbable case that your attack would be successful, you'd still loose money on your investment..._

You would also face the community, which can detect the attack and adapt.

## What have we learned so far?
In this chapter, we described the pillars of the Bitcoin protocol, and how they articulate around the Nakamoto Consensus. You understand that the Nakamoto Consensus integrates the Proof-of-Work consensus algorithm, and a form of *social* consensus based on simple Economy principles and the MAD property.

In the next chapter, we'll dig into the the Proof-of-Work consensus to understand how it actually works.

## References
[1] https://blockstream.com/satellite/

[2] https://bitcoin.org/en/release/v0.12.0#wallet-pruning

[3] https://learnmeabitcoin.com/technical/longest-chain

[4] More precisely 20,999,999,9769: https://en.bitcoin.it/wiki/Controlled_supply

[5] http://bitcoinhalvingdates.com/

[6] https://www.bitcoinhalving.com/