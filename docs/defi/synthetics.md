---
id: synthetics
title: Synthetics
author: Aymeric Bethencourt
---

Synthetics are contracts between two parties that both bet on the opposite outcome of the value of an asset and then split the difference in profit/loss. The actual asset is not purchased in this contract. Both parties simply bet on the opposite future value appreciation.

Example: Alice and John both send $100 in value to a contract, making the total value of the contract $200. Alice and John decided that the contract entails a BTC – USD value contract. This means that Alice bets that the BTC price goes up and John bets that the BTC price goes down (and that USD value is the safe bet). The period for which the bet is closed is decided on in advance. Since this is a synthetic, no actual BTC is bought. All they do, is take the current USD price of BTC as starting point in the contract.

If the value of BTC has gone up 20% in the set period of the bet, Alice should now have $120 in value and John still has $100 in value. As agreed on, they split the difference: which means that Alice earns half of $20, which is paid by John. This means that John will get $90 back instead of $100, and Alice will get $110 back. Simple as that. This is how you speculate on BTC value, without the need to buy BTC.

In the opposite situation, if BTC goes down 20%, Alice’s value results will be $80 and Johns’s value will be $100. Alice will get $90 out of the contract and John the remaining $110.

One advantage of synthetics is that you don’t actually need to purchase the asset. This could be interesting if you want to invest in assets that have very low liquidity, are hard to transact, or are simply not available to trade.

## Why is this a game changer on blockchain?
Without decentralized blockchain, synthetics are only enforceable by legal constructions. What else will guarantee that the counter-party pays, if you can’t legally claim your take. This means that it is expensive to set up these financial products. It’s a game primarily played by institutional players like banks and investment firms.

Legal constructions, bring expensive middlemen. Through decentralized smart contracts, we can cut out these middlemen. These traditionally expensive contracts, now are diminished to a transaction fee on a blockchain. Tezos’ transaction fees are on average 3,000 times cheaper than transaction fees Ethereum and 40 times cheaper than on Cardano.

Second point is accessibility. Traditionally only bigger players had access, but through decentralized exchanges on blockchain, anyone with access to the internet will be able to have access to synthetic investments.

## No wrapped/tokenized assets
The different approach has another advantage. The fact that through synthetics, since you don’t actually buy the asset, anything can be traded on blockchain without the need for wrapped, or tokenized assets. As long as you have an oracle that updates values for the asset that is part of the contract, the sky is the limit. You could have a synthetic for Apple or Tesla if the oracle can update values for the smart contract.

## Synthetics on Tezos
_SEXP_ is a synthetics exchange on Tezos launching soon. SEXP will make use of Harbinger, which is an oracle built on Tezos, and utilizes Tezos staking rewards to provide a fully free service. Harbinger has no utility token, just free price feeds. SEXP will also integrate Kolibri, which is a Stablecoin that is about to go live on Tezos.

Using both native applications, means that transaction costs are minimized.

Michelson is used for smart contracts, the token standard will be FA2, and the web app is going to work with all wallets that support Beacon.

## References

[1] https://www.publish0x.com/publish0x-posts/sexp-a-tezos-based-synthetic-exchange-xmkjjzq
