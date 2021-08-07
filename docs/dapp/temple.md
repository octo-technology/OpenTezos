---
id: temple
disable_pagination: true
title: Temple Wallet
authors: Benjamin Pilia
---

Dapp users need to sign transactions on the Dapp without disclosing their private keys. They want to be able to securely store their private keys, easily use and manage their addresses, and easily use the different Dapps. All of this can be performed by **wallets**. These can be desktop applications, browser extensions, hardware dongles or smart contracts themselves.

In the case of Dapps, the best option is to opt for a browser wallet. These are easy to find and to install. They provide developers with a library that can be used in their Dapp to connect with the user wallet.

The most common wallets are:
- [Temple](https://templewallet.com/download/)
- [AirGap](https://airgap.it/)
- [Galleon](https://cryptonomic.tech/galleon.html)
- [Kukai](https://wallet.kukai.app/)
- [Spire](https://spirewallet.com/)

In this chapter, we will use the _Temple Wallet_ as an example, developed and maintained by _Madfish solutions_. This first part is a tutorial about how to install and use the wallet.

## Installation

The _Temple wallet_ browser extension can be downloaded from [templewallet.com](https://templewallet.com/download).

Choose your browser and add _Temple_ to your extensions. You will have the choice to import an existing wallet, or to create a new one.

Let's create a new wallet, choose a password and save the mnemonic phrase.

You'll get to the main page:

![](../../static/img/dapp/temple1.png "Temple main page")

## Faucet import

Let's import a faucet for the _Florence_ network. First, download a faucet JSON from [faucet.tzalpha.net](https://faucet.tzalpha.net/).

Then, open the Temple Wallet. Click on the network dropdown bar (1), select _Florence_ network. Then click on your account thumbnail (2), then "Import account" and finally "Faucet file". You can load your JSON file here.

Once the activation is confirmed, you will automatically be redirected to the _Temple_ main page with your activated account.

![](../../static/img/dapp/temple2.png "Temple main page")

## Send a transaction

Now that you have an account with some funds from the faucet, let's send some of them to our first account. Click on "Send".

![](../../static/img/dapp/temple3.png "Temple send page")

You can send funds to any address by manually filling the recipient, or you can choose from one of your addresses by clicking on the list at the bottom of the page (third spot)

Send 100 Tez (or another amount) to your first account. A confirmation page will pop up. You can review some information on this page: transaction amount, receiver and fees.

![](../../static/img/dapp/temple4.png "Temple send page")

All the transaction information can be found under the "Raw" tab:

```json
{
  "branch": "BMBg53qGc5xM42Dd3ymNV6pV1KJCJmL73T6aGfmdEmrBL6ajnfS",
  "contents": [
    {
      "kind": "reveal",
      "source": "tz1cLMENL1FJYMBJ3WPg5UQAEFobdVPFrdpH",
      "fee": "1420",
      "counter": "162232",
      "gas_limit": "10600",
      "storage_limit": "0",
      "public_key": "edpkvVNoJuAADKX3pYskzfXLpn8gBAnQjjcGQjQf22Amf9Kh4kfbnx"
    },
    {
      "kind": "transaction",
      "source": "tz1cLMENL1FJYMBJ3WPg5UQAEFobdVPFrdpH",
      "fee": "507",
      "counter": "162233",
      "gas_limit": "1527",
      "storage_limit": "257",
      "amount": "100000000",
      "destination": "tz1beoZXxjqsXGoZnwW4TZD3MWGFpLHRxeFN"
    }
  ]
}
```

Once the transaction is confirmed, you can switch to your first account (by clicking on the top-right thumbnail) and observe that your account balance has indeed increased to 100 Tez.

## Conclusion
_Temple_ is a user-friendly wallet for Tezos. Within a few clicks, a transaction can be sent to any address. Another benefit of using a wallet is the possibility to interact directly with Dapps. This will be detailed in the next chapter.
