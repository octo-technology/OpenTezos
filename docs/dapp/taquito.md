---
id: taquito
disable_pagination: true
title: Taquito
authors: Benjamin Pilia
---

Interacting with the Tezos blockchain can be done using to the Tezos CLI. However, it is not suitable for Dapps since it needs to be integrated into web interfaces.

Fortunately, the Tezos ecosystem offers libraries in several languages that enable developers to build efficient Dapps. _Taquito_ is one of these: it is a Typescript library developed and maintained by _ECAD Labs_. This library offers developers all of the everyday interactions with the blockchain: retrieving information about a Tezos network, sending a transaction, contract origination and interactions such as calling an entrypoint and fetching the storage, delegation, fetching metadata, etc.

All these wallets: ([AirGap](https://airgap.it/), [Galleon](https://cryptonomic.tech/galleon.html), [Kukai](https://wallet.kukai.app/), [Spire](https://spirewallet.com/), [Temple](https://templewallet.com/download/) ) use the _Taquito_ librairy to function.

A full reference is available [here](https://tezostaquito.io/docs/quick_start).

In this chapter we will use _Taquito_ to interact with the deployed _Raffle_ smart contract.

# Installation

The _Taquito_ library is made of several modules:
- [@taquito/taquito](https://www.npmjs.com/package/@taquito/taquito): High-level functionalities that build upon the other packages in the Tezos Typescript Library Suite.
- [@taquito/ledger-signer](https://www.npmjs.com/package/@taquito/ledger-signer): Provides ledger signing functionality.
- [@taquito/rpc](https://www.npmjs.com/package/@taquito/rpc): Provides low-level methods and types to invoke RPC calls from a Nomadic Tezos RPC node.
- [@taquito/utils](https://www.npmjs.com/package/@taquito/utils): Converts Michelson data and types into convenient JS/TS objects.
- [@taquito/michelson-encoder](https://www.npmjs.com/package/@taquito/michelson-encoder): Provides a JavaScript abstraction based on a Tezos Smart contracts code, parameters and storage.
- [@taquito/michel-codec](https://www.npmjs.com/package/@taquito/michel-codec): Michelson parser/validator/formatter.
- [@taquito/local-forging](https://www.npmjs.com/package/@taquito/local-forging): Provide local forging functionality.
- [@taquito/signer](https://www.npmjs.com/package/@taquito/signer): Provide signing functionality.

The main module is `@taquito/taquito`, it will be used for most actions. The other modules are used by the `@taquito/taquito` methods as complementary features.

Let's initialize a Typescript project and install taquito:

``` shell
$ mkdir taquito-poc
$ mkdir taquito-poc/src
$ touch taquito-poc/src/app.ts taquito-poc/main.ts
$ cd taquito-poc
$ yarn add @taquito/taquito
```

The `main.ts` file will import an `App` class from `src/app.ts` and run its `main` function:
``` typescript
import { App } from './src/app';

new App().main();

```

Let's create the `App` class with a `main` method. We import the `TezosToolkit` class to check if `@taquito/taquito` is indeed installed:

``` typescript
import { TezosToolkit } from '@taquito/taquito';
export class App {

    public async main() { }

}
```

Let's run it with:

``` shell
$ npx ts-node main.ts
```

If _Taquito_ is correctly installed, this should not raise any exception.

# Taquito configuration

We first need to configure _Taquito_ with an RPC URL (to communicate with a Tezos node). To do that we use the `TezosToolkit`: it is the "facade class that surfaces all of the libraries capability and allow its configuration". When created, it accepts an RPC URL. Here, we will use the _Florence testnet_ RPC URL offered for free by _smartpy.io_ at [https://florencenet.smartpy.io/](https://florencenet.smartpy.io/)

``` typescript
// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl);
    }

    public async main() { }
```

``` typescript
// main.ts
import { App } from './src/app';

const RPC_URL = "https://florencenet.smartpy.io/"

new App(RPC_URL).main();
```

# Interactions without an account

_Taquito_ is already ready for some actions: it can retrieve all the information about the Tezos network, the accounts, the smart contracts.

For instance, let's retrieve the balance of an account, with the `getBalance` method:
``` typescript
// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl);
    }

    public getBalance(address: string) : void {
    this.tezos.rpc
        .getBalance(address)
        .then(balance => console.log(balance))
        .catch(e => console.log('Address not found'));
    }

    public async main() { }
```

Every interaction with the Tezos network through _Taquito_  is handled via a Javascript `Promise`.

Let's call this method for the address: `tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC`

``` typescript
// main.ts
import { App } from './src/app';

const RPC_URL = "https://florencenet.smartpy.io/"
const ACCOUNT_TO_CHECK = "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC"

new App(RPC_URL).getBalance(ACCOUNT_TO_CHECK);

```

Let's run it:
``` shell
$ npx ts-node main.ts 
BigNumber { s: 1, e: 10, c: [ 53152138122 ] }
```

## Contract data

We can also retrieve the metadata and storage of a contract.

``` typescript
// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.tezos = new TezosToolkit(rpcUrl);
    }

    public getBalance(address: string) : void {
    this.tezos.rpc
        .getBalance(address)
        .then(balance => console.log(balance))
        .catch(e => console.log('Address not found'));
    }


    public getContractEntrypoints(address: string) {
        this.tezos.contract
            .at(address)
            .then((c) => {
                let methods = c.parameterSchema.ExtractSignatures();
                console.log(JSON.stringify(methods, null, 2));
            })
            .catch((error) => console.log(`Error: ${error}`));
    }

    public async main() { }
```

Let's run it for the simple `Counter` contract on _Florencenet_.

``` typescript
import { App } from './src/app';

const RPC_URL = "https://florencenet.smartpy.io/"
const ACCOUNT_TO_CHECK = "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC"
const COUNTER_CONTRACT = "KT1BEMULAGQ58C5NNdWQM3WYLjUtwgJ8X8aN"

new App(RPC_URL).getContractEntrypoints(COUNTER_CONTRACT);
```

The output is:

``` shell
$ npx ts-node main.ts 
[
  [
    "decrement",
    "int"
  ],
  [
    "increment",
    "int"
  ]
]
```

# Interactions with an account

_Taquito_ can also sign and send transactions, but it needs a private key to do that. Let's retrieve a faucet file from [ faucet.tzalpha.net/](https://faucet.tzalpha.net/) and put it in the project directory.

## Activating the account from _Taquito_

Every implicit address must be activated on a public network. Let's activate ours on _Florencenet_.

First, we need to install the `@taquito/signer` module, used to sign the transactions.

``` shell
$ yarn add @taquito/signer
```

We will use the `InMemorySigner`: it loads a private key in memory and uses it to sign transactions.

> Storing private keys in memory is suitable for development workflows but risky for production use-cases! Use the `InMemorySigner` appropriately given your risk profile.

You can find a complete reference [here](https://tezostaquito.io/docs/inmemory_signer), and find more _signers_ [here](https://tezostaquito.io/docs/tezbridge_signer) and [here](https://tezostaquito.io/docs/ledger_signer).

First, we need to set the signer of our _TezosToolkit_ using `setSignerProvider`. The signer will load a private key from our faucet using the `fromFundraiser` method.

``` typescript
// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
const faucet = require('../faucet.json');
export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')))
    }

    public async main() { }
```

We can now create an `activateAccount` method that uses the signer to activate our address.

``` typescript
// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
const faucet = require('../faucet.json');
export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')))
    }

    public async activateAccount() {
        const {pkh, secret} = faucet;

        try {
            const operation = await this.tezos.tz.activate(pkh, secret);
            await operation.confirmation();
        } catch (e) {
            console.log(e)
        }

    }

    public async main() { }
```

Let's call it from our `main.ts` file:

```typescript
import { App } from './src/app';

const RPC_URL = "https://florencenet.smartpy.io/"
const ACCOUNT_TO_CHECK = "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC"
const COUNTER_CONTRACT = "KT1BEMULAGQ58C5NNdWQM3WYLjUtwgJ8X8aN"

new App(RPC_URL).activateAccount();
```

You can now see your activated account on an explorer ([https://florence.tzstats.com/](https://florence.tzstats.com/) for instance).

## Sending a transaction

Now that _Taquito_ is configured with an activated account, we can send transactions. Let's send some Tez to another address.

Transactions can be sent with `this.tezos.contract.transfer`. It returns a `Promise<TransactionOperation>`. A `TransactionOperation` contains the information about this transaction. It also has a `confirmation` method. This method can wait for several confirmations on demand.

Let's create a `sendTz` method that sends an `amount` of Tez to the recipient `address`.

``` typescript
// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
const faucet = require('../faucet.json');

export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')))
    }

    public sendTz(address: string, amount: number) {

        console.log(`Transfering ${amount} ꜩ to ${address}...`);
        this.tezos.contract.transfer({ to: address, amount: amount })
            .then(op => {
                console.log(`Waiting for ${op.hash} to be confirmed...`);
                return op.confirmation(1).then(() => op.hash);
            })
            .then(hash => console.log(`${hash}`))
            .catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
    }
}
```

Let's call it from our `main.ts` file:

``` typescript
import { App } from './src/app';

const RPC_URL = "https://florencenet.smartpy.io/"
const ACCOUNT_TO_CHECK = "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC"
const COUNTER_CONTRACT = "KT1BEMULAGQ58C5NNdWQM3WYLjUtwgJ8X8aN"
const RECIPIENT = "tz1WD73bxtb3oeBBTU471Yz5gcy9NMzepfMJ"
const AMOUNT = 10
new App(RPC_URL).sendTz(RECIPIENT,AMOUNT);

```

Let's run it from the console:

``` shell
$ npx ts-node main.ts 
Transfering 10 ꜩ to tz1WD73bxtb3oeBBTU471Yz5gcy9NMzepfMJ...
Waiting for ooYGXazAECCMTehpfsPWo6JxavJs2a5KYP6a1i6eU5ofATWnHbH to be confirmed...
ooYGXazAECCMTehpfsPWo6JxavJs2a5KYP6a1i6eU5ofATWnHbH

```

We can now check the transaction on an explorer: [https://florence.tzstats.com/ooYGXazAECCMTehpfsPWo6JxavJs2a5KYP6a1i6eU5ofATWnHbH](https://florence.tzstats.com/ooYGXazAECCMTehpfsPWo6JxavJs2a5KYP6a1i6eU5ofATWnHbH)

## Making a contract call

_Taquito_ can call smart contracts as well. We will use the _Counter_ contract. If you need to know what are the available entrypoints, you can use the `getContractEntrypoints` defined in the [Contract data subsection](##contract-data).

Let's call the `increment` entrypoint. It takes a single _int_ as input.

To do so, we need:
1. to get the contract with `this.tezos.contract.at(contract)`. It returns a `Promise<ContractAbstraction<ContractProvider>>`.
2. get the entrypoints. For this `ContractAbstraction<ContractProvider>` has a `methods` property contraining the entrypoints `increment` and `decrement`.
3. get the increment entrypoint with `methods.increment(2)` to increment the counter by `2`.
4. send the contract call and inspect the transaction with `contract.methods.increment(i).send()`.
5. wait for a chosen number of confirmations, let's say `3`.

``` typescript
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
const faucet = require('../faucet.json');
export class App {

    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')))
    }


    public increment(increment: number, contract: string) {
        this.tezos.contract
            .at(contract) // step 1
            .then((contract) => {
                console.log(`Incrementing storage value by ${increment}...`);
                return contract.methods.increment(increment).send(); // steps 2, 3 and 4
            })
            .then((op) => {
                console.log(`Awaiting for ${op.hash} to be confirmed...`);
                return op.confirmation(3).then(() => op.hash); // step 5
            })
            .then((hash) => console.log(`Operation injected: https://florence.tzstats.com/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
    }
}
```

Let's call it from our `main.ts` file:

``` typescript
import { App } from './src/app';

const RPC_URL = "https://florencenet.smartpy.io/"
const ACCOUNT_TO_CHECK = "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC"
const COUNTER_CONTRACT = "KT1BEMULAGQ58C5NNdWQM3WYLjUtwgJ8X8aN"
const RECIPIENT = "tz1WD73bxtb3oeBBTU471Yz5gcy9NMzepfMJ"
const AMOUNT = 10
const INCREMENT = 5
new App(RPC_URL).increment(INCREMENT, COUNTER_CONTRACT);

```

The `send()` function can take an object with fields as an input, such as `amount` (which defines an amount sent with the contract call), `storageLimit`, etc.

## Sending several transactions

Let's consider this Dapp:

``` typescript
// src/app.ts
import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner } from '@taquito/signer';
const faucet = require('../faucet.json');

export class App {
    private tezos: TezosToolkit;

    constructor(rpcUrl: string) {
        this.rpcUrl = rpcUrl
        this.tezos = new TezosToolkit(rpcUrl);
        this.tezos.setSignerProvider(InMemorySigner.fromFundraiser(faucet.email, faucet.password, faucet.mnemonic.join(' ')))
    }

    public increment(increment: number, contract: string) {
        this.tezos.contract
            .at(contract) // step 1
            .then((contract) => {
                console.log(`Incrementing storage value by ${increment}...`);
                return contract.methods.increment(increment).send(); // steps 2, 3 and 4
            })
            .then((op) => {
                console.log(`Awaiting for ${op.hash} to be confirmed...`);
                return op.confirmation(3).then(() => op.hash); // step 5
            })
            .then((hash) => console.log(`Operation injected: https://florence.tzstats.com/${hash}`))
            .catch((error) => console.log(`Error: ${JSON.stringify(error, null, 2)}`));
    }

    public sendTz(address: string, amount: number) {
        console.log(`Transfering ${amount} ꜩ to ${address}...`);
        this.tezos.contract.transfer({ to: address, amount: amount })
            .then(op => {
                console.log(`Waiting for ${op.hash} to be confirmed...`);
                return op.confirmation(1).then(() => op.hash);
            })
            .then(hash => console.log(`${hash}`))
            .catch(error => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));
    }
}
```

This is basically a concatenation of the _Counter_ example and the _Transfer_ example. Now, let's consider a use-case where we need to send these two transactions at the same time (and maybe additional contract calls, originations or transfer transactions). One could be tempted to make those calls one after the other like this:

``` typescript
import { App } from './src/app';

const RPC_URL = "https://florencenet.smartpy.io/"
const ACCOUNT_TO_CHECK = "tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC"
const COUNTER_CONTRACT = "KT1BEMULAGQ58C5NNdWQM3WYLjUtwgJ8X8aN"
const RECIPIENT = "tz1WD73bxtb3oeBBTU471Yz5gcy9NMzepfMJ"
const AMOUNT = 10
const INCREMENT = 5

const app : App = new App(RPC_URL);
app.increment(INCREMENT, COUNTER_CONTRACT);
app.sendTz(RECIPIENT, AMOUNT);
```

We basically make a contract call then try to send some funds to an address. Here is the output:

``` shell
$ npx ts-node main.ts 
Transfering 10 ꜩ to tz1WD73bxtb3oeBBTU471Yz5gcy9NMzepfMJ...
Incrementing storage value by 5...
Waiting for opYNFzprpcnTCS2dWP9STdJJ8HUpcMGeJNcczmKnBK1SNpXQeoC to be confirmed...
Error: {
  "message": "Http error response: (500) [{\"kind\":\"temporary\",\"id\":\"failure\",\"msg\":\"Error while applying operation ongme9f4evozEpAAtP3MUeiU79emuc8KGyoaFGYxvPUUFR3TDUA:\\nbranch refused (Error:\\n                  Counter 334156 already used for contract tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC (expected 334157)\\n)\"}]\n",
  "status": 500,
  "statusText": "Internal Server Error",
  "body": "[{\"kind\":\"temporary\",\"id\":\"failure\",\"msg\":\"Error while applying operation ongme9f4evozEpAAtP3MUeiU79emuc8KGyoaFGYxvPUUFR3TDUA:\\nbranch refused (Error:\\n                  Counter 334156 already used for contract tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC (expected 334157)\\n)\"}]\n",
  "url": "https://florencenet.smartpy.io/injection/operation",
  "name": "HttpResponse"
}
opYNFzprpcnTCS2dWP9STdJJ8HUpcMGeJNcczmKnBK1SNpXQeoC
```

The meaningful part is `Counter 334156 already used for contract tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC`. Each transaction in our Dapp is performed asynchronously: the application makes the contract call to the `increment` entrypoint, but did not wait for the confirmation to made the transfer transaction. The contract call transaction was still in the mempool when the transfer transaction was sent. Thus, it failed. 

However, _Taquito_ offers a `batch` method, which enables Dapps to send several transactions at once.

To do so, we need to:
1. retrieve the contract that we want to call,
2. call the batch method,
3. use `withTransfer` and/or `withContractCall`,
4. send the transactions batch,
5. wait for their confirmation.

Here is an example:

``` typescript
    public async sendInBatch(contractAddress: string, recipientAddress : string) {
        const contract = await this.tezos.contract.at(contractAddress) //step 1

        const batch = this.tezos.contract.batch() // step 2
            .withTransfer({ to: recipientAddress, amount: 10 }) // step 3
            .withTransfer({ to: recipientAddress, amount: 100 }) // step 3
            .withTransfer({ to: recipientAddress, amount: 1000 }) // step 3
            .withContractCall(contract.methods.increment(10)) // step 3

        const batchOp = await batch.send(); // step 4

        await batchOp.confirmation(); // step 5
    }

```

[Here is its output on TzStats.](https://florence.tzstats.com/opNz4g3XTd9oAAyPe4jMiEqXLQ67EfPPTZkXhhvXje8DoMg5D5u/2402084)

Our three transfer transactions and our contract call are now indeed batched together in an operation.

# Conclusion

_Taquito_ facilitates developers' interactions with the Tezos network. It can read data from a blockchain, send transactions, originate a contract, etc.

However, Dapps require the ability to manage keys. In our example, there was only a single key to manage. In production Dapps, each user will want to use a key that they owns. That is where _wallets_ come into play. Most Tezos wallets are built upon _Taquito_ and make Dapps more user-friendly and accessible. Let's take a deeper look at wallets in the next chapter.

