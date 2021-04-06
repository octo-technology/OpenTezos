---
id: oracles
title: On-chain Oracles
author: Aymeric Bethencourt
---

With the rise of DeFi apps, the need to get trusted price data has grown substantially. The only issue is that by default, Tezos smart contracts cannot receive any data from outside the blockchain. **Oracles** offers to fetch data from off-chain sources. Oracles can aggregate data from multiple sources in order to guarantee the quality of the data. For instance, consider a Dapp that needs the exchange rate of XTZ/BTC. To get that exchange rate, the smart contract of the Dapp needs to contact an oracle that will provide this rate. The oracle can for example fetch the rate from Binance, but what if Binance get hacked? The Dapp would be compromised. The oracle can therefore fetch the price from multiple sources. e.g. Binance, CoinMarketCap, Dexter and Quipuswap, and exclude the rates that seems incorrect (far from the others). The chances that all 4 sources are compromised at the same time is very unlikely. The price provided to the Dapp is therefore very trustworthy and can be used for financially critical operations.

Note that Oracles are not limited to fetching price data. Any online API can be called by an Oracle, e.g payment data (Paypal, VISA), banks data, air traffic, IoT data, weather, etc. Some companies even provide on-chain insurances based entirely on real-world data fetched with oracles.

![](../../static/img/defi/oracles.svg)
<small className="figure">FIGURE 1: Illustration of Oracles providing online data to a smart contract.</small>


## Oracles on Tezos
On Tezos, [Harbinger oracles](https://github.com/tacoinfra/harbinger) provide this service as well as [Kaiko](https://www.kaiko.com/). A [Chainlink integration](https://www.coindesk.com/tezos-blockchain-chainlink-oracle-services) is expected in the near future by the SmartPy team. 

## References

[1] https://github.com/tacoinfra/harbinger

[2] https://medium.com/@Blockscale/introducing-harbinger-a-self-sustaining-price-oracle-for-tezos-7cab5c9971d

[3] https://www.kaiko.com/