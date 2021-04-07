---
id: lending
title: Lending and Flash Loans
author: Aymeric Bethencourt
---

It is likely that in your life you have had to borrow some money, e.g. for a student loan, a car loan or a mortgage. Lending and borrowing are essential services in any financial system. Lenders such as banks provide you with a loan in exchange for a fee in the form of interest rates. Repaying the loan is enforced by legal contracts. 

Similar situations can be found on the blockchain as well. A borrower needs some money available immediately for some operation and a lender may agree to provide such loan in exchange for a fee. 

DeFi lending allows users to become lenders or borrowers in a completely decentralized and permissionless way while maintaining full custody over their coins. 

Users, who want to become lenders, supply their tokens to a particular money market and start receiving interest on their tokens according to the current supply APY (Annual Percentage Yield). 

But how do you enforce the repayment of a loan on the blockchain? 

Each loan on the blockchain need to be collateralized with another token. Even worse, as tokens as very volatile, blockchain loans are actually overcollateralized (often at 133%). For instance, if you want to borrow $1m in kUSD, you need to provide $1.33m in USDS as collateral. 

You may then wonder why would anyone take a loan if they need to provide even more as collateral?

There are multiple reasons:
- They may not want to sell their original tokens. In the example above, they may not want to sell their USDS tokens (but notice that if the loan is not repaid, their USDS will be automatically liquidated to repay the loan).
- Avoiding or delaying paying capital gain taxes on their tokens.
- Using borrowed funds to increase their leverage in a certain position. 

If a user decides to borrow funds, the value of the borrowed amount must always stay lower than the value of their collateral times its collateral factor. If this condition holds there is no limit on how long a user can borrow funds for.

If the value of the collateral falls below the required collateral level, the user would have their collateral liquidated in order for the protocol to repay the borrowed amount.

The interest that lenders receive and the interest, that borrowers have to pay are determined by the ratio between supplied and borrowed tokens in a particular market. 

The interest that is paid by borrowers is the interest earned by lenders, so the borrow APY is higher than the supply APY in a particular market.

The interest APYs are calculated per Tezos block. Calculating APYs per block means that DeFi lending provides variable interest rates that can change quite dramatically depending on the lending and borrowing demand for particular tokens. 

If a user decides to repay the borrowed amount and unlock their collateral, they also have to repay the accrued interest on their borrowed assets. The amount of accrued interest is determined by the borrow APY and it is also increased automatically with each Tezos block. 

### Lending on Tezos
[Tezos Finance (aka "Tezfin")](https://tezos.finance/) is currently in development and will soon enable lending and borrowing of fungible Tezos crypto-assets, including tez (XTZ) and Tezos-based tokens built to the FA token standards.

Tokens supplied by lenders to the smart contract become available for other users to borrow. In exchange for the supplied tokens, the smart contract issues other tokens that represent the supplied tokens plus interest. These tokens are called _fTokens_ in _TezFin_ and they can be redeemed for the underlying tokens. 

## Flash loans
Flash loans have been all the rage over the past few months as they allow to **borrow tokens without any collateral**.

### Flash loans on Tezos
Flash loans are not yet available on Tezos but works are in progress.


---
STILL UNDER DEVELOPMENT
---

A flash loan is a feature that allows you to borrow any available amount of assets from a designated smart contract pool with no collateral. Flash loans are useful building blocks in DeFi as they can be used for things like arbitrage, swapping collateral and self-liquidation.


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
