---
id: dexs
title: Decentralized Exchanges
---

An exchange is a marketplace where coins and tokens can be traded. The core function of an exchange is to ensure fair and orderly trading and the efficient dissemination of price information for any pair trading on that exchange. Exchanges give companies, traders, and just crypto-enthusiasts a platform from which to publicly sell and buy crypto-currencies.

## Types of exchanges

## Centralized exchanges and their order book
Before the DeFi movement, the order book model was the usual way of doing exchange. All centralized exchanges like Coinbase and Binance are still based on this model. This is also the way traditional stock exchanges such as NYSE or Nasdaq work.

Simply put, traders set buy and sell orders for an asset, and the order book orders them by their prices. You can therefore trade any asset as long as there are supply and demand for it. 

The oder book model is basically putting buyers and sellers in contact. Buyers try to buy the asset for the lowest possible price whereas sellers try to sell the asset for the highest possible price.

For a trade to happen, both buyers and sellers have to converge on a price, known as the mid-market price. This can happen by either a buyer bidding higher or a seller lowering their price.

![](../../static/img/defi/centralized-exchange.svg)
<small className="figure">FIGURE 1: Illustration of an Order Book. Buyers and sellers are meeting at the $4.80 price point.</small>

But what happens if the gap between sellers and buyers is too large to meet at a fair market price? And what if there are not enough coins on sell to meet your demand? This is where market makers intervene.

Market makers provides liquidity to the exchange by being always willing to buy or sell a the mid-market price. Market makers essentially act as wholesalers to satisfy the market. Market makers make money with the _spread_ which is the difference their selling price and their buying price. Spread is kept low by setting the market makers in competition with each other. Market makers also earn commissions from the exchange for providing liquidity.

## Decentralized Exchanges
### Order Book
Following the hacks of multiple centralized exchanges [1] people started to look for alternatives. If the blockchain is decentralized, shouldn't we also have decentralized exchanges? At first, developers tried to reproduce the order book model [2] into a smart contract. However this model relies heavily of market makers and their have to constantly adjust their buy and sell prices to meet the market. This results in a huge number of orders and order cancellations that are being sent to an exchange.

Tezos with a current throughput of 40 transactions per second and a 1 minute block time is not really a viable option for an order book exchange. On top of that, every interaction with a smart contract cost a gas fee, so market makers would go bankrupt by just updating their orders.

There was clearly a need for something new...

### Liquidity Pools and Automated Market Maker (AMM)



In its basic form, a single liquidity pool holds 2 tokens and each pool creates a new market for that particular pair of tokens. DAI/ETH can be a good example of a popular liquidity pool on Uniswap.

When a new pool is created, the first liquidity provider is the one that sets the initial price of the assets in the pool. The liquidity provider is incentivised to supply an equal value of both tokens to the pool. If the initial price of the tokens in the pool diverges from the current global market price, it creates an instant arbitrage opportunity that can result in lost capital for the liquidity provider. This concept of supplying tokens in a correct ratio remains the same for all the other liquidity providers that are willing to add more funds to the pool later.


When liquidity is supplied to a pool, the liquidity provider (LP) receives special tokens called LP tokens in proportion to how much liquidity they supplied to the pool. When a trade is facilitated by the pool a 0.3% fee is proportionally distributed amongst all the LP token holders. If the liquidity provider wants to get their underlying liquidity back, plus any accrued fees, they must burn their LP tokens.

Each token swap that a liquidity pool facilitates results in a price adjustment according to a deterministic pricing algorithm. This mechanism is also called an automated market maker (AMM) and liquidity pools across different protocols may use a slightly different algorithm.

![](../../static/img/defi/swap.svg)
<small className="figure">FIGURE 2: Illustration of a token Swap</small>

Basic liquidity pools such as those used by Uniswap use a constant product market maker algorithm that makes sure that the product of the quantities of the 2 supplied tokens always remains the same. On top of that, because of the algorithm, a pool can always provide liquidity, no matter how large a trade is. The main reason for this is that the algorithm asymptotically increases the price of the token as the desired quantity increases. The math behind the constant product market maker is pretty interesting, but to make sure this article is not too long, I’ll save it for another time.

The main takeaway here is that the ratio of the tokens in the pool dictates the price, so if someone, let’s say, buys ETH from a DAI/ETH pool they reduce the supply of ETH and add the supply of DAI which results in an increase in the price of ETH and a decrease in the price of DAI. How much the price moves depends on the size of the trade, in proportion to the size of the pool. The bigger the pool is in comparison to a trade, the lesser the price impact a.k.a slippage occurs, so large pools can accommodate bigger trades without moving the price too much.

Because larger liquidity pools create less slippage and result in a better trading experience, some protocols like Balancer started incentivising liquidity providers with extra tokens for supplying liquidity to certain pools. This process is called liquidity mining and we talked about it in our Yield Farming article.

The concepts behind liquidity pools and automated market making are quite simple yet extremely powerful as we don’t have to have a centralized order book anymore and we don’t have to rely on external market makers to constantly keep providing liquidity to an exchange.

![](../../static/img/defi/liquidity.svg)
<small className="figure">FIGURE 3: How liquidity providers are rewarded</small>

### Different Types of Liquidity Pools
The liquidity pools that we just described are used by Uniswap and they are the most basic forms of liquidity pools. Other projects iterated on this concept and came up with a few interesting ideas.

Curve, for example, realised that the automated market making mechanism behind Uniswap doesn’t work very well for assets that should have a very similar price, such as stable coins or different flavours of the same coin, like wETH and sETH. Curve pools, by implementing a slightly different algorithm, are able to offer lower fees and lower slippage when exchanging these tokens.

The other idea for different liquidity pools came from Balancer that realised that we don’t have to limit ourselves to having only 2 assets in a pool and in fact Balancer allows for as many as 8 tokens in a single liquidity pool.

### Risks

And of course, like with everything in DeFi we have to remember about potential risks. Besides our standard DeFi risks like smart contract bugs, admin keys and systemic risks, we have to add 2 new ones – impermanent loss and liquidity pool hacks – more on these in the next articles.

### AMM on Tezos

- [Dexter](https://dexter.exchange/)
- [Quipuswap](https://quipuswap.com/)

### Conclusion

[1] https://selfkey.org/list-of-cryptocurrency-exchange-hacks/

[2] https://thecontrol.co/a-comparison-of-decentralized-exchange-designs-1deef249f56a

[3] https://finematics.com/liquidity-pools-explained/
