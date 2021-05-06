---
id: stablecoins
title: Stablecoins
author: Aymeric Bethencourt
---

A **stablecoin** is a cryptocurrency whose price is fixed to another asset. Most stablecoins are pegged (fixed) to fiat currencies (currencies issued by a central bank) like the US Dollar. 

![](../../static/img/defi/stablecoin.svg)
<small className="figure">FIGURE 1: Illustration of a stablecoin volatility compared to his pegged asset (e.g. USD).</small>

Stablecoins have gained traction as they attempt to offer the best of both worlds: the instant processing, security and privacy of cryptocurrencies, and the **volatile free** stable valuations of fiat currencies.

## How it works?
Stablecoins achieve their price stability via **collateralization** (backing) or through **algorithmic mechanisms** of buying and selling the reference asset or its derivatives. There are three types of stablecoins:

### Fiat-Collateralized Stablecoins
#### Principle
Fiat-collateralized stablecoins are backed by centralized entities that guarantee an exchange rate at the same price as the asset (minus potential fees). They mint new stablecoins when they receive fiat and burn stablecoins when they giving back fiats. These centralised entities guarantees that you can always exchange 1 stable-USD against 1 USD, and the other way around. These entities are regularly audited to guarantee that they always have enough reserves to meet the demand. However, these entities are single points of failures and they are not decentralised.

#### Example
If Alice want wants 100 stable-USD, she needs to send 100 USD to the bank account of the entity. The entity will in turn mint 100 stable-USD and send it to Alice. Note that to exchange with these entities, you will need to pass a [KYC](https://en.wikipedia.org/wiki/Know_your_customer) (Know-Your-Customer) as illustrated in Fig. 2. Alice can then use the stable-USD for any operation such as sending them to Bob. Bob may then want to exchange the 100 stable-USD against some USD. Bob passes a KYC with the entoty and then send them the 100 stable-USD. The company burns the tokens and send 100 USD from their bank account to Bob's bank account.

#### Risks
An shown above, it is important that these entities keep as much USD in their bank account as they mint stable-USD. A malicious company could spend or invest the USD from the bank account and then not be able to pay back users in case of a massive exchange of stable-USD to USD. (Note that the problematic is similar to the practice of _fractional reserve banking_ as presented [in the first module](/blockchain-basics/introduction).)

![](../../static/img/defi/stablecoin-kyc.svg)
<small className="figure">FIGURE 2: Exchanging stable coins against fiat currencies (or the other way around) is secured by a KYC. Exchanging stable coins between users do not require a KYC (i.e. as long as its stays inside de crypto world)</small>

### Crypto-Collateralized Stablecoins
Crypto-collateralized stablecoins are backed by other cryptocurrencies. The stablecoins are minted or burned by automated smart contracts knowns as _Collateralized Debt Position_ (CDP). However, since the reserve cryptocurrency may also be prone to high volatility, such stablecoins are "over-collateralized", meaning a much larger value of tokens is maintained as reserve, compared to the provided stablecoin value. These are not capital efficient.

#### Example
Alice want 100 stable-USD. She opens a CDP. Consider that the CDP is backed by XTZ and that the current value of XTZ is 5 USD. Typical minimun CDP collaterization is 150%, meaning that Alice need to send at least $100 / 5 = 20$ XTZ to the CDP. In practice, Alice must send much more than that as if the price of XTZ sligthly moves downward, her collaterization would go below 150% and her CDP would be liquidated. To keep it safe, let's say that Alice sends 40 XTZ to the CDP, making her collateral worth $200.

Alice can now instruct the CDP to mint and transfer her 100 stable-USD. The CDP locks her XTZ until she repays the 100 stable-USD, thus the term **debt** in CDP. 

If XTZ goes up, the value of her collateral increases. She can either withdraw some XTZ from the CDP or mint some more stable-USD, as long as the collateral stays above 150%.

If XTZ goes below $150 / 40 = 3.75$ USD, her collateral goes below 150%. If Alice didn't send more XTZ to the CDP to compensante before reaching 150%, here CDP is liquidated, meaning that the contract is closed and here XTZ are sold publicly to other traders. Alice still has the 100 stable-USD but she just lost $150 worth of XTZ.

#### Risks
The greatest threat to a crypto-collateralized stablecoin is a massive crash of the collateral cryptocurrency [[4]](/defi/stablecoins#references). When a CDP gets liquidated, other traders must buy the XTZ to make up for the debt in stable-USD. They make a nice profit as they usually buy it just below 150% of valuation. Now if XTZ crashes so much and fast that liquidated CDPs' collateral goes below 100% of their debt, then nobody will want to buy them. This would utimatly make CDPs worthless and derail the stable-USD off his peg.

The most popular crypto-collateralized stablecoin is [DAI from MakerDAO](https://makerdao.com/) on Ethereum. Their white paper can be found [here](https://makerdao.com/whitepaper/DaiDec17WP.pdf)

### Non-Collateralized (algorithmic) Stablecoins
Non-collateralized stablecoins don’t use any reserve but rely on an algorithm that will automatically burn tokens when supply is high to increase the price, or mint new tokens when supply is low to decrease the price, much like central banks are doing to maintain valuations of a fiat currency. It can be achieved by implementing a smart contract on a decentralized platform that can run in an autonomous manner.


#### Example
For example, assume a stablecoin is priced at $1. When the price drops to $0.80, an algorithm recognizes the imbalance between supply and demand, and automatically sets a market buy order to push the price back. In case the price goes above $1, the algorithm sells assets to maintain the price on the predefined level that keeps the peg. 

#### Risks
When the price goes below $1, things get complicated. If the price is below a dollar, the algorithm must reduce supply. A common way for uncollateralized stablecoins to reduce supply is through to offer **bonds**.

These bonds are sold on an open market for less than $1. They are paid for in the stablecoin and promise to return 1 stablecoin at an unspecified time in the future. For example, a buyer pays .9 stable-USD for 1 Bond token. This lowers supply and should theoretically bring the price of the stablecoin back to $1.

The issue here is that buyers need to be confident that the bonds will pay out. Bonds are paid out when the supply increases (the stablecoin price goes above $1). Just as with the shares, the bonds rely on an increasing demand for the stablecoin. If demand growth slows or stops, bonds may not be paid out.

![](../../static/img/defi/stablecoin-types.svg)
<small className="figure">FIGURE 3: Recapitulation of the 3 types of stablecoins.</small>

## On Tezos
- [Kolibri (kUSD)](https://kolibri.finance/), currently only on the testnet.
  
- [Stably (USDS)](https://www.stably.io/), which is available on the mainnet and is fully backed by fiat reserves and regulated by _Prime Trust_, a Nevada-chartered trust company that also acts as the regulated administrator of USDS. 

There are currently no crypto-collateralized or algorithmic stablecoins on Tezos.

## References
[1] https://www.investopedia.com/terms/s/stablecoin.asp

[2] https://kolibri.finance/

[3] https://www.stably.io/

[4] https://medium.com/@MakerDAO/single-collateral-dai-source-code-and-security-reviews-523e1a01a3c8