---
id: lending
title: Lending and Flash Loans
author: Aymeric Bethencourt
---

---

## STILL IN PROGRESS

---

Lending and borrowing is one of the most important element of any financial system. Most people at some point in their life are exposed to borrowing, usually by taking a student loan, a car loan or a mortgage. 

The whole concept is quite simple. Lenders a.k.a. depositors provide funds to borrowers in return for interest on their deposit. Borrowers or loan takers are willing to pay interest on the amount they borrowed in exchange for having a lump sum of money available immediately.

Traditionally, lending and borrowing is facilitated by a financial institution such as a bank or a peer-to-peer lender. 

When it comes to short term lending & borrowing, the area of traditional finance that specializes in it is called the money market. The money market provides access to multiple instruments such as CDs (certificates of deposits), Repos (repurchase-agreements), Treasury Bills and others. 

## Lending on Tezos
[Tezos Finance (aka "Tezfin")](https://tezos.finance/) is currently in development and will soon enable lending and borrowing of fungible Tezos crypto-assets, including tez (XTZ) and Tezos-based tokens built to the FA token standards.

DeFi lending allows users to become lenders or borrowers in a completely decentralized and permissionless way while maintaining full custody over their coins. 

TezFin works by creating money markets for particular tokens such as XTZ, stablecoins like kUSD and USDS or other tokens like wrapped BTC.

Users, who want to become lenders, supply their tokens to a particular money market and start receiving interest on their tokens according to the current supply APY (Annual Percentage Yield). 

The supplied tokens are sent to a smart contract and become available for other users to borrow. In exchange for the supplied tokens, the smart contract issues other tokens that represent the supplied tokens plus interest. These tokens are called fTokens in TezFin and they can be redeemed for the underlying tokens. 

It’s also worth mentioning that in DeFi, at the moment, pretty much all of the loans are overcollateralized. This means that a user who wants to borrow funds has to supply tokens in the form of collateral that is worth more than the actual loan that they want to take. 

At this point, you may ask the question: what’s the point of taking a loan if you have to supply tokens that are worth more than the actual amount of the loan taken. Why wouldn’t someone just sell their tokens in the first place? 

There are quite a few reasons for this. Mainly, the users don’t want to sell their tokens but they need funds to cover unexpected expenses. Other reasons include avoiding or delaying paying capital gain taxes on their tokens or using borrowed funds to increase their leverage in a certain position. 

So, is there a limit on how much can be borrowed? 

Yes. The amount that can be borrowed depends on 2 main factors. 

The first one: how much funds are available to be borrowed in a particular market. This is usually not a problem in active markets unless someone is trying to borrow a really big amount of tokens.

The second one: what is the collateral factor of supplied tokens. Collateral factor determines how much can be borrowed based on the quality of the collateral. kUSD and USDS, for example, have a collateral factor of 75% on TezFin. This means that up to 75% of the value of the supplied kUSD or USDS can be used to borrow other tokens. 

If a user decides to borrow funds, the value of the borrowed amount must always stay lower than the value of their collateral times its collateral factor. If this condition holds there is no limit on how long a user can borrow funds for.

If the value of the collateral falls below the required collateral level, the user would have their collateral liquidated in order for the protocol to repay the borrowed amount.

The interest that lenders receive and the interest, that borrowers have to pay are determined by the ratio between supplied and borrowed tokens in a particular market. 

The interest that is paid by borrowers is the interest earned by lenders, so the borrow APY is higher than the supply APY in a particular market.

The interest APYs are calculated per Tezos block. Calculating APYs per block means that DeFi lending provides variable interest rates that can change quite dramatically depending on the lending and borrowing demand for particular tokens. 

When it comes to borrowing, users lock their fTokens as collateral and borrow other tokens. Collateral earns interest, but users cannot redeem or transfer assets while they are being used as collateral. 

As we mentioned earlier the amount that can be borrowed is determined by the collateral factor of the supplied assets. There is also a smart contract that looks at all the collateral across user’s account and calculates how much can be safely borrowed without getting liquidated immediately. 

If a user decides to repay the borrowed amount and unlock their collateral, they also have to repay the accrued interest on their borrowed assets. The amount of accrued interest is determined by the borrow APY and it is also increased automatically with each Tezos block. 

## Flash loans

A flash loan is a feature that allows you to borrow any available amount of assets from a designated smart contract pool with no collateral. Flash loans are useful building blocks in DeFi as they can be used for things like arbitrage, swapping collateral and self-liquidation.

Flash loans are not yet available on Tezos but some implementations are in developments.

**A flash loan has to be borrowed and repaid within the same blockchain transaction.** 

The concept of a transaction on a blockchain such as Tezos is no different to the traditional definition of a transaction in computer science. 

### Transactions 
A transaction represents a set of operations that must be executed in an atomic way – either all the steps are executed or the transaction is rolled back and none of the steps take place. 

Let’s take a simple database transaction as an example. If you’re already familiar with this concept feel free to skip this part. 

Imagine a database table that represents users’ balances. 

Alice’s balance is $1000 and Bob’s balance is $500. Alice sends Bob $500. In this case, we, of course, have to subtract $500 from Alice’s balance and add $500 to Bob’s balance. So we start writing our database update statements. 

This is cool, but what happens if the first update executes but the second one fails for some reason? (maybe id=2 is not present in the system and we made a mistake thinking it’s Bob’s id)

If this happens we would end up in an inconsistent state with Alice’s balance equal to $500 and Bob’s balance also equal to $500. 

To avoid situations like this we have to use transactions. 

In the above situation, in SQL, we just need to wrap both statements with BEGIN; and COMMIT; keywords. Once we do that, we can safely assume that either both statements are executed correctly or none of them are – leaving Alice’s and Bob’s balances untouched. We often say that if different steps are a part of the same transaction they are atomic, hence indivisible – all or nothing. 

### Tezos Transaction
When it comes to Tezos, every common operation, such as sending XTZ, sending FA2 tokens and interacting with smart contracts are executed within a transaction scope. 

Transactions are grouped together and included in Tezos blocks. We can easily see all of the transactions that were included in a particular block on any popular block explorer, such as _tzstats_. 

One Tezos transaction can consist of multiple steps, for example, you could supply XTZ and borrow kUSD on TezFin, swap half of your borrowed kUSD for USDS on Dexter and provide liquidity to kUSD/USDS pool on Quipuswap, all in one single Tezos transaction. Of course, if any of these steps result in an error, the whole transaction will be rolled back and none of the steps will take place. Remember: you will still pay gas fees, even for failed contract executions.  

The number of steps in a single transaction is only bounded by the gas cost, so although, in theory, you could create a valid transaction with thousands of steps, realistically it’d be rejected because of the max gas cost limit per block. 

### Flash Loans  
Now, let’s dive a little bit deeper into flash loans. 

First of all, the most important part of executing a flash loan is to find a flash loan provider. Future flash loans projects on Tezos will allow DeFi users to borrow different coins from a designated pool under the condition that they are repaid within the same Tezos transaction. There is usually a fixed cost associated with using flash loans. TezFin contracts, for example, require the borrower to return the initial amount + an extra 0.09% of the borrowed amount. The fee is split between depositors, who provide the funds that can be borrowed, and integrators, who facilitate the use of TezFin’s flash loan API. A part of this fee is also swapped to TezFin tokens and burned. 

Once the amount is borrowed from the lending pool it can be used for any other arbitrary actions assuming that at the end of the chain of different steps, the initial flash loan is repaid.

Because the loan has to be repaid within one transaction, there is no risk of borrowers not repaying their borrowed amount. The only risk is the always present smart contract and platform risk. 

![](../../static/img/defi/flash-loan.svg)
<small className="figure">FIGURE 1: Operation flow of a flash loan in case of successful repayment (green arrows) or failed repayment (red arrows)</small>

### Use Cases
There are 3 most common use cases for flash loans. 

- Arbitrage. Flash loans can magnify the profit of executing a successful arbitrage opportunity.

Let’s imagine that there is a price discrepancy in the kUSD/USDS pools between Uniswap and Curve. You can trade 1 kUSD for 1 USDS on Curve, but you only need 0.99 kUSD to buy 1 USDS on Uniswap. Now you can try to execute the following arbitrage. 

Borrow 100,000 kUSD from TezFin via flash loan 
Swap 100,000 kUSD for USDS on Uniswap and receive 101,010 USDS
Swap 101,010 USDS for 101,010 kUSD on Curve 
Repay initial 100,000 kUSD + 0.09% fee = 100,090
Profit 920 kUSD 
This looks nice, but we have to take a few extra things into consideration:

**Network fees**. Arbitrage transactions with multiple steps can be quite expensive. Always take transaction fees into account when calculating your profits. 
  
**Price Slippage**. Always calculate how much price slippage you’ll experience while executing your order (a hint – it depends on the size of your order and the liquidity present in the liquidity pool)

**Frontrunning**. There is a high chance that someone else will spot the same opportunity and will manage to get their transaction mined ahead of you. On top of that, bots that monitor the mempool can pick up your profitable arbitrage opportunity and send the same transaction with a higher gas fee, profiting them instead of you, basically stealing your arb opportunity.

![](../../static/img/defi/arbitrage.svg)
<small className="figure">FIGURE 2: A typical arbitrage operation involving a flash loan.</small>

- The next use case for flash loans is a collateral swap. 

Let’s say you have borrowed kUSD from TezFin with XTZ as collateral. You can swap your collateral from XTZ to, for example, BAT in the following way:

Take a flash loan in kUSD to cover the amount of kUSD that was borrowed
Repay your TezFin loan with borrowed kUSD 
Withdraw your XTZ 
Swap your XTZ for BAT on Uniswap 
Supply BAT as collateral on TezFin 
Borrow kUSD against your BAT collateral 
Repay flash loan with borrowed kUSD + fee 
Congrats, you just swapped your collateral from XTZ to BAT and paid 0.09% of the borrowed amount for this. 

- The last but not least example is self-liquidation.

Imagine the following scenario: You have a loan in kUSD on TezFin with XTZ as collateral. The XTZ price keeps going down and you’re approaching the liquidation level. You also don’t have or don’t want to deposit more XTZ to decrease your liquidation level and you also don’t have the kUSD required to repay the loan. Now, instead of allowing the contract to liquidate your collateral and charge you the liquidation fee, you can take the following steps:

Take a flash loan for the amount of kUSD that you owe
Repay your kUSD loan and withdraw your XTZ
Swap enough XTZ to kUSD in order to repay the flash loan + fees 
Keep the rest of your XTZ 
These were the 3 most common use cases for flash loans. Of course, the concept of flash loans is quite new and there are still a lot of use cases to be discovered in the future. 

### Flash Loans and DeFi Hacks
Flash loans, similarly to crypto, can be used for both good and bad. When it comes to the latter, flash loans were used in most of the recent defi hacks and allowed hackers to magnify their potential profits as they do not require any upfront funds. 

One of the most famous hacks was the BzX hack where a flash loan was used to manipulate the Uniswap oracle price. As usual, the problem was not in the use of flash loans, but rather in some incorrect assumptions when it comes to using Uniswap as a price oracle.

Events like these are sometimes costly for the people affected by them, but they usually result in the strengthening of the whole defi ecosystem, making it more and more antifragile in the future.  

## References

[1] https://tezos.finance/

[2] https://medium.com/tezosfinance/tezos-finance-on-chain-lending-f59987fbb3de

[3] https://finematics.com/lending-and-borrowing-in-defi-explained/
