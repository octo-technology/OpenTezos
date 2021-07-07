---
id: history-of-amendments
title: History of amendments
authors: Thomas Zoughebi, Aymeric Bethencourt, and Maxime Fernandez
---

As presented in the [Governance on-chain chapter](/tezos-basics/governance-on-chain), the Tezos blockchain is constantly evolving, through new amendments. In this chapter, we will present an overview of past proposals and the reasons for their approval or disapproval.

![](../../static/img/tezos-basics/history_of_tezos_amendement.svg)
<small className="figure">FIGURE 1: History of Tezos amendments</small>

## [Athens](https://www.tezosagora.org/proposal/1) (Pt24m4xiP)
*Athens* was the first proposed protocol-amendment for Tezos. Two proposals - [Athens A](https://www.tezosagora.org/proposal/1) and [Athens B](https://forum.tezosagora.org/t/athens-b-psd1ynubh/33) - were proposed by [Nomadic Labs](https://blog.nomadic-labs.com/athens-our-proposals-for-the-first-voted-amendment.html) in February 2019.

Of the two proposals, _Athens A_ sought to increase the gas limit and reduce the required roll size for baking from 10,000 tez to 8,000 tez. _Athens B_ only sought to increase the gas limit. Athens A was voted with a _Super-majority_ and was autonomously [activated](https://twitter.com/TezosAgoraBot/status/1133901612790034432?s=20) into the protocol in May 2019.

For a full list of changes, be sure to read this corresponding blog [post](https://blog.nomadic-labs.com/athens-proposals-injected.html) from Nomadic Labs and [reflections](https://medium.com/tqtezos/reflecting-on-athens-the-first-self-amendment-of-tezos-4791ab3b1de1) by Jacob Arluck. 

## [Brest A](https://www.tezosagora.org/proposal/3) (PtdRxBHv)
*Brest A* was the first proposed amendment rejected during the _Exploration Period_. Submitted in June 2019, it received only 0.35% of the votes during the _Proposal Period_. But as it had no competition, the system promoted it. The amendment was then rejected in the _Exploration Period_ with only 0.26% of favourable votes. The 80% _Super-majority_ was not reached, neither was the minimum _Quorum_ required to validate it.

This proposal would of fixing a security breach linked to the rehashing push during the _Athens_ protocol change. Moreover, it would have facilitated the amendment's invoice tracking. But the invoice for this proposal, 8,000 tez, was much higher than the usual cost.

## [Babylon](https://www.tezosagora.org/proposal/5) (PsBABY5nk)
The *Babylon* proposal was composed of two proposals made in July/August 2019: [Babylon](https://www.tezosagora.org/proposal/4) and [Babylon 2](https://www.tezosagora.org/proposal/5). *Babylon 2* was built by Nomadic Labs, Cryptium Labs (Metastate), and Marigold, after receiving feedback on the first _Babylon_ proposal. The teams proposed a new tweaked version in the same proposal period.

Notable changes included a new variant of the consensus algorithm (`Emmy+`). There were new Michelson features and accounts rehaul to aid smart contract developers. The accounts rehaul enabled a clearer distinction between "_tz_" and "_KT_" addresses. Furthermore, there was a refinement of the Quorum formula and the addition of the 5% threshold.

Babylon was autonomously [activated](https://twitter.com/adrian_brink/status/1185137422432161792?s=20) into the protocol in October 2019.

For a full list of changes, be sure to read the corresponding blog posts from [Nomadic Labs](https://blog.nomadic-labs.com/babylon-proposal-injected.html), and [Cryptium Labs](https://medium.com/metastatedev/on-babylon2-0-1-58058d9d2106) (Metastate). 

## [Carthage](https://www.tezosagora.org/proposal/6) (PtCarthav)
*Carthage* was the first proposal to be rejected during the _Proposal Period_. Since the _Babylon_ change, it now took a minimum of 5% approval to move to the _Exploration Period_ and _Carthage_ only obtained 3.5%.

The purpose of this proposal was to increase the gas limit per block and per operation by 30% to improve the accuracy of the existing formula used for calculating baking, endorsing rewards, and to fix various minor issues.

## [Carthage 2.0](https://www.tezosagora.org/proposal/7) (PtCarthav)
*Carthage 2.0* was then proposed and overwhelmingly accepted in December 2019 partly due to the Nomadic Labs and Cryptium Labs (Metastate) contributions.

Notable changes included increasing the gas limit per block and per operation by 30%, improving the accuracy of the formula used to calculate baking and endorsing rewards, as well as several minor improvements to Michelson. The main difference with _Carthage_ was the new and more secure formula to calculate rewards.

*Carthage 2.0* was autonomously [activated](https://twitter.com/tezos/status/1235590757416751105?s=20) onto the protocol in March 2020.

For a full list of changes be sure to read the corresponding [changelog](https://tezos.gitlab.io/protocols/006_carthage.html#changelog) and blog posts from [Nomadic Labs](https://blog.nomadic-labs.com/carthage-changelog-and-testnet.html) and [Cryptium Labs](https://medium.com/metastatedev/updating-the-potential-carthage-proposal-and-resetting-the-carthagenet-test-network-f413a792571f) (Metastate). 

## [Delphi](https://www.tezosagora.org/proposal/8) (PsDELPH1K)
The *Delphi* proposal was a Nomadic Labs, Metastate, and Gabriel Alfour contribution, adopted in September 2020.

Notable changes included improving the performance of the Michelson interpreter, improving gas costs by adjusting the gas model, reducing storage costs by 4 times, and various minor fixes.

*Delphi* was autonomously [activated](https://twitter.com/tezos/status/1326877616322859009?s=20) into the protocol in November 2020.

For a full list of changes, be sure to read the corresponding [changelog](https://blog.nomadic-labs.com/delphi-changelog.html#007-delphi-changelog) and blog post from [Nomadic Labs](https://blog.nomadic-labs.com/delphi-official-release.html).

## [Edo](https://www.tezosagora.org/proposal/9) (PtEdoTezd)
The *Edo* proposal was adopted in November 2020 with Nomadic Labs, Metastate, and Gabriel Alfour contributions.

Edo added two major features to Tezos smart contracts:

* *Sapling*[[1]](/tezos-basics/history-of-amendments#references) and *BLS12-381*[[2]](/tezos-basics/history-of-amendments#references) to enable privacy-preserving smart contracts

* *Tickets*[[3]](/tezos-basics/history-of-amendments#references) for native on-chain permissions and assets issuance.

Among other features, Edo also updated the Tezos amendment process by lowering period length to 5 cycles and by adding a 5th *Adoption Period*. A full changelog is available [here](https://tezos.gitlab.io/protocols/008_edo.html).

## [Florence](https://www.tezosagora.org/proposal/11) (PsFLorena)
The *Florence* proposal was a joint effort from Nomadic Labs, Marigold, DaiLambda, and Tarides.

Florence's notable bug fixes and improvements are the:

* Increasing maximum operation size

* Improved gas consumption for the execution of more complex smart contracts

* Changing inter-contract calls to a depth-first serach[[4]](/tezos-basics/history-of-amendments#references) ordering, as opposed to breadth-first search[[5]](/tezos-basics/history-of-amendments#references) ordering

* The elimination of the test chain activation
  
*Bakings Accounts*[[6]](/tezos-basics/history-of-amendments#references) was also included in the feature set. However, ongoing testing uncovered some important and previously undocumented breaking changes in the proposal with *Baking Accounts*. Hence, the feature was postponed until a thorough audit of the functionality was completed or that an alternative implementation was produced. The version of *Florence* without *Baking Accounts* was considered a safer choice.

## What have we learned so far?
In this chapter, we went through the past proposals' history and how and why they were approved or rejected.

In the next chapter, we will see the details of operations costs and various rewards calculations.

## References 

[1] https://z.cash/upgrade/sapling/

[2] https://electriccoin.co/blog/new-snark-curve/

[3] https://medium.com/tqtezos/tickets-on-tezos-part-1-a7cad8cc71cd

[4] https://en.wikipedia.org/wiki/Depth-first_search

[5] https://en.wikipedia.org/wiki/Breadth-first_search

[6] https://midl-dev.medium.com/tezos-in-favor-of-baking-accounts-3886effa370c

https://wiki.tezosagora.org/learn/governance/past-tezos-amendments
