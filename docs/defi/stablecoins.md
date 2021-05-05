---
id: stablecoins
title: Stablecoins
author: Aymeric Bethencourt
---

A **stablecoin** is a cryptocurrency whose price is fixed to another asset. Most stablecoins are pegged (fixed) to fiat currencies (currencies issued by a central bank) like the US Dollar. 

![](../../static/img/defi/stablecoin.svg)
<small className="figure">FIGURE 1: Illustration of a stablecoin volatility compared to his pegged asset (e.g. USD).</small>

Stablecoins have gained traction as they attempt to offer the best of both worlds: the instant processing, security and privacy of cryptocurrencies, and the 'volatile free' stable valuations of fiat currencies.

## How it works?
Stablecoins achieve their price stability via **collateralization** (backing) or through **algorithmic mechanisms** of buying and selling the reference asset or its derivatives. There are 3 types of stablecoins:

### Fiat-Collateralized Stablecoins
Fiat-collateralized stablecoins are backed by centralized entities that guarantee an exchange rate at the same price as the asset (minus potential fees). They mint new stablecoins when they receive fiat and burn stablecoins when they giving back fiats. In the case of Kolibri and Stably, they guarantee that you can always exchange 1 kUSD (respectively 1 USDS) against 1 USD, and the other way around. These entities are regularly audited to guarantee that they always have enough reserves to meet the demand. However, these entities are single points of failures and they are not decentralised.

Note that to exchange with these entities, you will have to pass a [KYC](https://en.wikipedia.org/wiki/Know_your_customer) (Know-Your-Customer) as illustrated in FIGURE 2.

![](../../static/img/defi/stablecoin-kyc.svg)
<small className="figure">FIGURE 2: Exchanging stable coins against fiat currencies (or the other way around) is secured by a KYC. Exchanging stable coins between users do not require a KYC (i.e. as long as its stays inside de crypto world)</small>

### Crypto-Collateralized Stablecoins
//TODO: this section needs more explanations. It's not clear for example, if such stablecoins are pegged on fiat, but rely on the fact that the other cryptocurrency volatility will stay within some reasonable margin, and are therefore only stable within some limits. Maybe this is not what it is at all, I shouldn't need to guess.

Crypto-collateralized stablecoins are backed by other cryptocurrencies. The stablecoins are minted or burned by automated smart contracts, making them fully decentralised. However, since the reserve cryptocurrency may also be prone to high volatility, such stablecoins are "over-collateralized", meaning a much larger number of cryptocurrency tokens is maintained as reserve, compared to the provided stablecoins. These are not capital efficient.

There are currently no Crypto-Collateralized Stablecoins in operation on Tezos but some are in development.

### Non-Collateralized (algorithmic) Stablecoins
Non-collateralized stablecoins don’t use any reserve but rely on an algorithm that will automatically burn tokens when supply is high to increase the price, or mint new tokens when supply is low to decrease the price, much like central banks are doing to maintain valuations of a fiat currency. It can be achieved by implementing a smart contract on a decentralized platform that can run in an autonomous manner.

There are currently no Algorithmic Stablecoins on Tezos.

![](../../static/img/defi/stablecoin-types.svg)
<small className="figure">FIGURE 3: Recapitulation of the 3 types of stablecoins.</small>

## Stablecoins on Tezos
Today, Tezos offers the [Kolibri (kUSD)](https://kolibri.finance/) stablecoin (currently only on the testnet) and the [Stably (USDS)](https://www.stably.io/) which is available on the mainnet and is fully backed by fiat reserves and regulated by _Prime Trust_, a Nevada-chartered trust company that also acts as the regulated administrator of USDS. 

//TODO: Again this needs more explanations. For example, how are tokens burnt, if they are in circulation? After reading this, I still have no idea how it works, just a hint of some principles such stablecoins work on.


## References
[1] https://www.investopedia.com/terms/s/stablecoin.asp

[2] https://kolibri.finance/

[3] https://www.stably.io/
