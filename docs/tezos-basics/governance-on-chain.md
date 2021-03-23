---
id: governance-on-chain
title: Governance on-chain
---

Tezos is a self-amending blockchain network which incorporates an on-chain mechanism for proposing, selecting, testing, and activating protocol upgrades without having to hard fork. [[1]](/tezos-basics/governance-on-chain#references)

## What is self-amendment?
Tezos is a blockchain that can improve itself over time by having a formalized process for protocol upgrades. In practice, it is similar to the structure of a corporation, where shareholders get to vote on the future direction of the company.

Many other blockchains do not have this type of formal governance structure. Consequently, the direction of these projects are often decided by a small group of developers or by a foundation, which may not represent all stakeholders fairly.

## How it works?
The self-amendment process is split into 4 periods: the _Proposal Period_, the _Exploration Vote Period_, the _Testing Period_ and the _Promotion Vote Period_. Each of these four periods lasts eight baking cycles (i.e. 32,768 blocks or roughly 22 days and 18 hours), lasting almost three months from proposal to activation. The latest and current self-amendments are available on [tezosagora.org](https://www.tezosagora.org)

Should there be any failure in a given period, the whole process reverts to the _Proposal Period_, effectively restarting the whole process.

![](../../static/img/tezos-basics/Overview_of_the_Tezos_Governance_Mechanism.png)
<small className="figure">FIGURE 1: Overview of the governance Mechanism (Source: <a href="/tezos-basics/governance-on-chain#references">[1]</a>)</small>

## Super-majority and Quorum
_Exploration Vote Period_ and _Promotion Vote Period_ work the same way. During a vote a delegate can use a single ballot: `Yea`, `Nay` or `Pass`. A vote is successful if it has a super-majority and if the participation reaches the current quorum [[2]](/tezos-basics/governance-on-chain#references).

In Tezos, having the _Super-majority_ means that _Yea_ represents more than 80% of the total of _Yeas_ + _Nays_ votes. 

Example: With 90 votes = 75 _Yeas_ + 10 _Nays_ + 5 _Pass_, the total of _Yeas_ + _Nays_ is 85. 

The number of _Yeas_ required for the validation is 85 * 80% = 68 votes.

The number of _Yeas_ is high enough to validate the vote (68 < 75 _Yeas_).

A _quorum_ is the minimum number of voters required to deliberate. At the launch of the Tezos Mainnet, the defined quorum was 80%. The _participation_ is the ratio of all received votes, including _Pass_ votes. The quorum evolves over time with the following coefficients:

```
new quorum = old Quorum * 8/10 + current participation * 2/10
```

Example: New quorum = 80% * 80% +  90% * 20% = 82%, with old quorum = 80%  and current participation ratio = 90%.

Delegates’ votes are weighted proportionally to the number of rolls in their staking balance.

## Phase 1: Proposal period
The Tezos amendment process begins with the _Proposal Period_, during which delegates can submit proposals on-chain. The delegates submit the proposal by submitting the hash of the source code.

In each _Proposal Period_, delegates can submit up to 20 proposals. A proposal submission also counts as a vote, which is equivalent to the number of rolls in his staking balance when the period starts. Other delegates can then vote on the proposal up to 20 times during the _Proposal Period_. 

During this period a minimum of 5% of the bakers must vote for it to be validated. 

At the end of the _Proposal Period_, the network counts proposal votes and the most-upvoted proposal proceeds to the Exploration Vote Period. If no proposal has been submitted, if there is a tie between proposals or if less than 5% have voted, a new _Proposal Period_ begins.

## Phase 2: Exploration vote period

In the _Exploration Vote Period_, delegates may vote for the top-ranked proposal from the previous _Proposal Period_. Delegates get to vote either _Yea_, _Nay_ or _Pass_ on a specific proposal. Voting rules are explained in the _Super-majority_ and _Quorum_ section. If the voting participation fails to achieve the _Quorum_ or the 80% _Super-Majority_, the amendment process restarts from the beginning of the _Proposal Period_.

## Phase 3: Testing period
If the proposal is approved in the _Exploration Vote Period_, the _Testing Period_ begins with a testnet fork that runs in parallel of the main network for 48 hours. These forks have access to the standard library, but are sandboxed. 

The purpose of this fork is simply to verify that the migration from the old protocol to the new one works correctly. This 48 hours constant has been set conservatively in order to reduce the network risk to perceive the testnet fork as the main chain. However, 48 hours of testing is too short to determine whether a proposal would be a worthwhile and safe amendment or not. To find any security vulnerabilities, a testnet matching the amendment proposal is likely to run off-chain during the remaining ~7.3 cycles of the _Testing Period_, allowing stakeholders to evaluate and discuss the amendment as they gain better knowledge of its properties.

## Phase 4: Promotion vote period
At the end of the _Testing Period_, the _Promotion Vote Period_ begins. In this period, the network decides whether to adopt the amendment based on off-chain discussions and its behavior during the _Testing Period_ or not. The voting rules are identical to the exploration voting period and are explained in the _Super-Majority_ and _Quorum_ section.

At the end of the _Promotion Vote Period_, the network counts the number of votes. If the participation rate reaches the minimum quorum and a 80% _Super-Majority_ of non-passing delegates vote _Yeas_ then the proposal is activated in the new mainnet. If not, the process reverts back to the _Proposal Period_. The minimum vote participation rate is set based on past participation rates.

In return for their work on the proposal, some delegates put a symbolic self reward in the protocol. If the protocol is accepted, they will receive it. 

At of now (Marck 2021), 42 periods have passed. A total of 6 proposals have been made and 5 have been validated. 

This diagram sums up the self-amendment process :

![](../../static/img/tezos-basics/Governance_mechanism_uml.svg)
<small className="figure">FIGURE 2: Self-amendment process</small>

## Operations
### Proposal
A proposal operation can only be submitted during a _Proposal Period_.
```
Proposals : {
  source: Signature.Public_key_hash.t ;
  period: Voting_period_repr.t ;
  proposals: Protocol_hash.t list ; 
}
```
`source` is the delegate’s public key hash

`period` is the unique identifier of each voting period

`proposals` is a non-empty list of maximum 20 protocol hashes.

This operation [[3]](/tezos-basics/governance-on-chain#references) can be submitted more than once but only if the cumulative number of active proposals is less than 20. Duplicate proposals from the same delegate are counted for the maximum number of proposals for that delegate.

### Ballot
A ballot operation can only be submitted during the _Promotion Vote Period_ or the _Exploration Vote Period_, and only once per period.
```
Ballot : {
  source: Signature.Public_key_hash.t ;
  period: Voting_period_repr.t ;
  proposal: Protocol_hash.t ;
  ballot: Vote_repr.ballot ; 
}
```
`source` is the delegate’s public key hash

`period` is the unique identifier of each voting period

`proposal` is the selected protocol hash.

`ballot` is one of the possible ballot response: `Yea`, `Nay` or `Pass`

## Send a proposal
To send a proposal or a ballot, please refer to [CLI chapter](/tezos-basics/introduction_to_cli_and_rpc)

## References
[1] https://medium.com/tezos/amending-tezos-b77949d97e1e

[2] https://tezos.gitlab.io/007/voting.html#super-majority-and-quorum

[3] https://tezos.gitlab.io/007/voting.html#operations

[4] https://www.tezosagora.org

[5] https://www.tezosagora.org/learn

[6] https://blog.octo.com/tezos-une-blockchain-auto-evolutive-partie-1-3/
