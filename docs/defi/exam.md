---
id: exam
title: Exam
author: Aymeric Bethencourt
---

import ExamForm from '../../src/components/docs/ExamForm';
import ExamCheckbox from '../../src/components/docs/ExamCheckbox';

<ExamForm moduleName="DeFi">

### Question 1

Why is DeFi often compared to _Money Bricks_ ?

<ExamCheckbox name="00" isCorrect="true">DeFi apps form layers that rely on other DeFi apps just like bricks with each other.</ExamCheckbox>
<ExamCheckbox name="01" isCorrect="true">DeFi apps respect common standards that allow them to interact with each other.</ExamCheckbox>
<ExamCheckbox name="02" isCorrect="false">DeFi apps rely on banks to perform KYCs.</ExamCheckbox>
<ExamCheckbox name="03" isCorrect="true">DeFi apps are often open-source, allowing developers to fork them and modify them to create their apps.</ExamCheckbox>

### Question 2

Consider a liquidity pool with 120,000 wXTZ and 4 BTCtz. I want to exchange 1 BTCtz. What is the marginal price for 1 BTCtz?

<ExamCheckbox name="10" isCorrect="false">20,000 wXTZ</ExamCheckbox>
<ExamCheckbox name="11" isCorrect="false">24,000 wXTZ</ExamCheckbox>
<ExamCheckbox name="12" isCorrect="true">30,000 wXTZ</ExamCheckbox>
<ExamCheckbox name="13" isCorrect="false">36,000 wXTZ</ExamCheckbox>

### Question 3

Consider a liquidity pool with 120,000 wXTZ and 4 BTCtz. I want to exchange 1 BTCtz. What is the effective swap price of my 1 BTCtz?

<ExamCheckbox name="20" isCorrect="false">20,000 wXTZ</ExamCheckbox>
<ExamCheckbox name="21" isCorrect="true">24,000 wXTZ</ExamCheckbox>
<ExamCheckbox name="22" isCorrect="false">30,000 wXTZ</ExamCheckbox>
<ExamCheckbox name="23" isCorrect="false">36,000 wXTZ</ExamCheckbox>

### Question 4

The FA2 token standards allow Tezos developers to:

<ExamCheckbox name="30" isCorrect="true">Create fungible tokens (equivalent to ERC-20 on Ethereum)</ExamCheckbox>
<ExamCheckbox name="31" isCorrect="true">Create non-fungible tokens (equivalent to ERC-721 on Ethereum)</ExamCheckbox>
<ExamCheckbox name="32" isCorrect="true">Create non-transferable tokens (equivalent to ERC-1238 on Ethereum)</ExamCheckbox>
<ExamCheckbox name="33" isCorrect="true">Create multi-asset contracts (equivalent to ERC-1151 on Ethereum)</ExamCheckbox>

### Question 5

A wrapped asset can be pegged to:

<ExamCheckbox name="40" isCorrect="true">a fiat currency</ExamCheckbox>
<ExamCheckbox name="41" isCorrect="true">a commodity</ExamCheckbox>
<ExamCheckbox name="42" isCorrect="true">a security</ExamCheckbox>
<ExamCheckbox name="43" isCorrect="true">a stock</ExamCheckbox>

### Question 6

All stablecoins are collateralized by a reserve:

<ExamCheckbox name="50" isCorrect="false">true</ExamCheckbox>
<ExamCheckbox name="51" isCorrect="true">false</ExamCheckbox>

### Question 7

Using an exchange is required to make an Atomic Swap:

<ExamCheckbox name="60" isCorrect="false">true</ExamCheckbox>
<ExamCheckbox name="61" isCorrect="true">false</ExamCheckbox>

### Question 8

Synthetics are wrapped tokens pegged to their original asset:

<ExamCheckbox name="70" isCorrect="false">true</ExamCheckbox>
<ExamCheckbox name="71" isCorrect="true">false</ExamCheckbox>

### Question 9

An oracle can:

<ExamCheckbox name="80" isCorrect="true">fetch price data</ExamCheckbox>
<ExamCheckbox name="81" isCorrect="true">fetch weather data</ExamCheckbox>
<ExamCheckbox name="82" isCorrect="true">process the data</ExamCheckbox>
<ExamCheckbox name="83" isCorrect="false">guarantee the fetched data is valid</ExamCheckbox>

### Question 10

If I do not repay a flash loan in the same block:

<ExamCheckbox name="90" isCorrect="false">the loan is postponed to the next block</ExamCheckbox>
<ExamCheckbox name="91" isCorrect="false">the loan is cancelled but all my other operation involving the borrowed money are still executed</ExamCheckbox>
<ExamCheckbox name="92" isCorrect="false">all my operations involving the borrowed money are cancelled and my gas fee is refunded</ExamCheckbox>
<ExamCheckbox name="93" isCorrect="true">all my operations involving the borrowed money are cancelled but my gas fee is not refunded</ExamCheckbox>

### Question 11

I can exchange an FA1.2 token against an FA2 token on DEXs:

<ExamCheckbox name="100" isCorrect="true">true</ExamCheckbox>
<ExamCheckbox name="101" isCorrect="false">false</ExamCheckbox>

</ExamForm>