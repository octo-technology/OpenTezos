---
id: token-standards
title: Token Standards
author: Aymeric Bethencourt
---

import NotificationBar from '../../src/components/docs/NotificationBar';

`Tokens` are the basis of _Decentralized Finance_, just like _Fiat currencies_ (e.g. USD, EUR) are the basis of traditional finance. They represent a way to exchange value. However, contrarily to traditional finance, tokens can represent much more than a simple currency. Tokens can represent any type of virtual or physical asset or value. For instance, real-estate which has so far always been an illiquid market can now be tokenized and traded on exchanges. Tokens can also enclose collectables or luxury items such as art. They can enclose traditional finance products like equity, stocks, bonds, etc. In this chapter, we will see the implementation of tokens in Tezos and how they are the future of finance.

<NotificationBar>
  <p>"Everything will be tokenized and connected by a blockchain one day."
  <br />Fred Ehrsam (Co-founder of Coinbase)</p>
</NotificationBar>

## Fungible Tokens Vs. Non-Fungible Tokens
Today, [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/) on Ethereum is the most popular token standard. ERC-20 is an interface to build _Fungible Tokens_, i.e. a class of identical, interchangeable token. For instance, two XTZ tokens are identical to each other, like a US dollar is interchangeable to another US dollar. They are fungible: one is exactly the same as the other.

However, a concert ticket at the front row is obviously not equivalent to a concert ticket at the last row. These tickets are part of the same class (i.e. concert tickets) but they are not interchangeable: they are non-fungible. 

Two pieces of art are also non-fungible. The ownership of these assets can be enclosed in a _Non-Fungible Token_ (or _NFT_ for short) and bought, sold, exchanged, etc like any other token. NFTs are particularly interesting for collectables as their scarcity can be demonstrated by the blockchain (i.e. An owner can prove that he has the only copy that exists in the world.)

NFTs have additionally been used to represent the right to own, use, and exchange digital collectables, multimedia, in-game assets, permissions, insurance, and much more [[1]](/defi/token-standards#references). [ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/) on Ethereum is the most popular NFT token standard.

## Tokens on Tezos
Within Tezos, the latest token standard is [FA2](https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md) (standing for _Financial Application 2_) and it supports a wide range of token types: fungible, non-fungible, non-transferable, as well as multi-asset contracts. This standard is a successor to [FA1.2](https://assets.tqtezos.com/docs/token-contracts/fa12/1-fa12-intro/) that only supports fungible tokens, it is still widely used in the Tezos ecosystem.

![](../../static/img/defi/tokens.svg)
<small className="figure">FIGURE 1: Illustration of the multi-purposes aspect of the FA2 token standard.</small>

Many considerations weigh in on the implementer of a token contract. Tokens might be fungible or non-fungible. A variety of transfer permission policies can be used to define how many tokens can be transferred, who can perform a transfer, and who can receive tokens. A token contract can be designed to support a single token type (e.g. ERC-20 or ERC-721) or multiple token types (e.g. ERC-1155) to optimize batch transfers and atomic swaps of the tokens.

The _FA2_ standard aims to provide significant expressivity to contract developers to create new types of tokens while maintaining a common interface standard for wallet integrators and external developers.

A particular FA2 implementation may support either a single token type per contract or multiple tokens per contract, including hybrid implementations where multiple token kinds (fungible, non-fungible, non-transferable etc) can coexist (e.g. in a fractionalized NFT contract) [[2]](/defi/token-standards#references).

To learn more on how to implement FA2 tokens, please refer to the [official documentation](https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md).

## Resources
- **[tzNFT](https://github.com/tqtezos/nft-tutorial)**: a tutorial showing users how to originate and interact with the FA2 NFT contract implementation.
- **[TZIP-021](https://gitlab.com/tzip/tzip/-/blob/tzip-21-spec/proposals/tzip-21/tzip-21.md)**: an emerging contract multimedia metadata standard.
- **[Kalamint](https://kalamint.io/)**: A community owned NFT marketplace on Tezos.
- **[OpenMinter](https://github.com/tqtezos/minter)**: A reusable dApp that allows anyone to create and collect NFTs on Tezos.
- **[NyX Standard](https://gitlab.com/equisafe/nyx)**: A set of digital contracts standards, designed for issuers and buyers of financial instruments, to be used on the Tezos blockchain.

## To go further
Check out the article on [NFTs on Tezos Agora](https://wiki.tezosagora.org/learn/uses-of-tezos/nft) and about [Tokenization](https://wiki.tezosagora.org/learn/uses-of-tezos/tokenization) to learn more.

## References

[1] https://finematics.com/what-are-nfts-and-how-can-they-be-used-in-defi/

[2] https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md

[3] https://wiki.tezosagora.org/learn/uses-of-tezos/nft

[4] https://wiki.tezosagora.org/learn/uses-of-tezos/tokenization
