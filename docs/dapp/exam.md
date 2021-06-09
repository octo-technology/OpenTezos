---
id: exam
title: Exam
authors: Benjamin Pilia
---

### Question 1

What is _Truffle_ used for?

- [] Setting up a private Tezos network.
- [x] Smart contracts compilation and deployment.
- [ ] Writing smart contracts.
- [x] Testing smart contracts.
- [ ] Tezos network monitoring.

### Question 2

When retrieving a contract storage, _Taquito_ stores every type except:

- [ ] Lists
- [ ] Bytes
- [x] Big maps
- [ ] Mutez and tez
- [ ] Records


### Question 3

How can the user experience be improved?

- [ ] By restricting the whole application to authenticated users
- [x] By using a Wallet.
- [x] By displaying basic information from the storage without restrictions
- [x] By preventing the users from sending transactions that will fail
- [ ] By updating the storage information as soon as it changes


### Question 4

When writing a migration, some javascript types are directly able to be used in an initial storage, others are not. What are the types not directly usable in _Truffle_?

- [x] Bytes
- [ ] List
- [x] Big maps
- [ ] Tez and mutez
- [x] Maps
- [ ] Timestamp

### Question 5

What is one problem solved by an API call?

- [ ] A more efficient storage fetching
- [x] Retrieving keys of a big map
- [ ] Better support for protocol improvements
- [ ] Sending transactions in batch

### Question 6

Why is a Wallet required for dapps?

- [x] For ease and safety as the users can use their own address
- [ ] For network inspection
- [x] For sending transactions
- [ ] For contract inspection.
- [ ] For retrieving the storage information


### Question 7

Why should the user be prevented from sending transactions in a row?

- [x] Because there can still be transactions in the mempool
- [ ] The more transactions you send the higher the transaction fees will be 
- [ ] Sending too many transactions might slow the dapp down
- [ ] To prevent users from spending too many tz in the app

### Question 8

When should loadBalance and loadStorage be called?

- [x] When a new block is baked
- [ ] On a regular basis (every minute for instance)
- [x] When a transaction sent by the user is confirmed
- [ ] When the connected account changes

