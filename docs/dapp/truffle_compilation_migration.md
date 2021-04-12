---
id: truffle_compilation_migration
title: Smart contract deployment with Truffle
---

## Introduction

Your smart contract will eventually be deployed onto a Tezos network, whether for testing or real-life use. 
There are several ways to do this, such as using the Tezos cli. 
However, during development, the smart contracts and the associated storage are very likely to change: new field, field removal, structure change. 
For each change, a new deployment must be done. 
Thus, the way the contract is deployed will have to change accordingly, especially for the initial storage. 
A minimal change in the storage definition can make the next deployment extremely tiresome with the Tezos cli.

*Truffle* solves this difficulty. This tool uses scripts to perform smart contract deployments: thanks to a cli and a few configuration files, they are easier
and faster. Besides, the way a smart contract is deployed can be versioned. There is a huge productivity improvement.

## About The *Truffle* Suite

*Truffle* is part of a suite of tools which make it easier to deploy written smart contracts onto a blockchain, 
called *The Truffle Suite*.

* **Truffle** : used for the compilation and deployment of smart contracts onto a network
* **Ganache**: used to easily set-up and deploy a blockchain network
* **drizzle**: used to easily write front-end applications, which interact with a deployed smart-contract.
* **Truffle teams**: integration and smart contracts monitoring tools

The *Truffle* Suite is not available for all blockchains. It supports:

* Ethereum
* Tezos
* Corda
* Quorum
* Hyperledger Fabric

Only *Truffle* and *Ganache* (still in beta) are available for Tezos.

*Truffle* takes Ligo files, compiles them and deploy them on any Tezos network with a single command. It
does not support Smartpy scripts nor Morlaix scripts.

## *Truffle* Installation

*Truffle* can be installed with docker or npm. The easiest way is to use *Truffle* from the npm package.

You'll need to have NodeJS v8.9.4 or later on your machine.

Open a terminal and run:

`$ npm install -g truffle@tezos`

*Truffle* will be installed globally (-g option).

## Setting-up a *Truffle* project

As described below, *Truffle* is working with configuration files and scripts, which must be located in specific
repositories. You can set up your *Truffle* project from scratch, but it is easier to use one of the two ways provided
by *Truffle*:

1. Initializing an empty project
2. Using a *Truffle* Box

### 1. Initializing an empty project

Create a folder for your *Truffle* project, and run:

``` shell
$ mkdir tezos-example
$ cd tezos-example
$ truffle init
```

It will create the standard folders and configuration files required by *Truffle*.

### 2. Using a *Truffle* Box

A *Truffle* box is an already set-up project, easily and quickly adjustable to the specific needs of a project. These
boilerplates come with predefined settings (accounts, networks...), and a project structure, that has to be respected.
They can be launched instantly, and modified with little work. *Truffle* provides users with a global boxes repository:
https://www.trufflesuite.com/boxes

A Tezos box can be found here:
[https://www.trufflesuite.com/boxes/tezos-example]

The tezos-example box is extremely useful for the deployment of a decentralized application (dapp).

This box can be retrieved with:

``` shell
$ mkdir tezos-example
$ cd tezos-example
$ truffle unbox tezos-example
```

The *Truffle* unbox command will not create a new tezos-example folder, but will unpack all the content in the current
folder.

## Using *Truffle*

Using *Truffle* can be divided into two steps:
1. Configuration: modifying scripts to define the way smart contracts are deployed.
2. Compilation and deployment, with the *Truffle Cli*

### Project Structure overview

A *Truffle* follows this structure:

* **build** (not present at the unpacking of the box) : the folder containing the Michelson code, compiled by *Truffle*
  and used for the contracts deployment
* **contract**: the folder containing all the Ligo smart contracts that *Truffle* has to compile.
* **migrations**: the folder containing the *Truffle* migration scripts for the deployment of the contrat
* **node_modules**: the node modules used by the *Truffle* project
* **package.json**: contains a script command, which launches a sandbox with ganache
* **scripts**:
    * sandbox: contains two accounts to use on a sandbox environment.
* **test**: folder containing Javascript tests
* **truffle-config.js**: configuration file which defines networks and accounts used for the deployment

The build folder will be created or compiled after any compilation command.

### Main *Truffle* commands

The *Truffle* Cli provides various commands, that can be displayed with:

``` shell
$ truffle --help
```

The main commands are:

```
compile   Compile contract source files
init      Initialize new and empty project
migrate   Run migrations to deploy contracts
networks  Show addresses for deployed contracts on each network
test      Run JavaScript and Solidity tests
```

### Compiling smart contracts with *Truffle*

In this part, the *tezos-example* box is used as example.

*Truffle* is mainly used for the smart contract compilation and deployment. It can also launch tests, but it is
recommended to use a more complete tool, such as pytezos.

Compiling smart contracts can easily be done with:

``` shell
$ truffle compile
```

Input: valid smart contracts (i.e compiling smart contracts), located in contract 

Output: *Truffle* artifacts, stored into the build/contracts directory.

#### Ligo smart contracts

*Truffle* can compile LIGO smart contracts (PascaLigo,Cameligo, ReasonLigo). They MUST be stored in the *contract* folder.
*Truffle* consider each ligo file as a independant smart contract. Thus, if a smart contract is split into several ligo
files, *Truffle* will try to compile each file as a smart contract, resulting in a failed compilation. There is a
workaround this behaviour:

1. Create a new folder in the project root directory, called src for instance.
2. Move all you smart contracts files into src/
3. Create a ligo file, importing the main file from src/

*Truffle* will successfully compile your smart contract.

#### *Truffle* artifacts

For each ligo file found in contract, *Truffle* will yield an artifact in build/contrats.

An artifact is a json file, containing the compiled smart contract, the ligo source code, the deployment information...
This example is the artifact yielded for the Counter.ligo file:

``` json5
{
  "contractName": "Counter",
  "abi": [],
  "michelson": "<Michelson code as json>",
  "source": "<Content of the ligo file from contract>",
  "sourcePath": "path/to/truffle-example/contracts/Counter.ligo",
  "compiler": {
    "name": "ligo",
    "version": "next"
  },
  "networks": {},
  "schemaVersion": "3.2.0-tezos.1",
  "updatedAt": "2021-03-19T14:27:16.197Z"
}
```

These artifacts are then used in the deployment scripts.

### Deploying smart contracts with *Truffle*

At this point, the smart contract is compiled and ready to be deployed. However, *Truffle* needs to be configured: deployment on the right network,
with the right account, with the right initial storage...

#### Using an account for the deployment

Originating a contract costs some tz. Thus, an account holding funds is necessary. Accounts with funds on testnets (
delphinet, edonet...) can be freely retrieved as a json file here:
[https://faucet.tzalpha.net/]

#### Adding a network

The network configuration is handled in the truffle-config.js file. It can execute any javascript code needed for the
configuration. Some networks are already defined (mainnet, localhost). However, as the tezos protocol is likely to evolve,
new networks will probably have to be added. A network is associated to an account. The easiest way is to use an
account from a faucet.

There are two ways of importing an account:

1. Importing an account into the truffle-config.js file:

```js
const {mnemonic, secret, password, email} = require("/path/to/faucet.json");
```

*Truffle* will activate this account, along with the origination.

2. Setting **already activated** accounts in the scripts folder:
   Accounts can be defined according to the network. By default, a *sandbox* folder is present, with two defined acocunts (
   these two accounts are found in any sandbox). New accounts can be defined by creating a new folder, whose name is the
   network name (convention), with an accounts.js file:

```js
module.exports = {
    account_name: {
        pkh: "<pkh>",
        sk: "<sk>",
        pk: "<pk>"
    },
<...>
};
```

Of course, the faucet can be imported in the *accounts.js* file.

The truffle-config.js file must export an object, defining networks.

Adding the edonet network into the truffle-config.js file:

```js
const {alice} = require('./scripts/sandbox/accounts');
const {mnemonic, secret, password, email} = require("/path/to/faucet.json");

module.exports = {
    networks: {
        development: {
            host: "http://localhost",
            port: 8732,
            network_id: "*",
            secretKey: alice.sk,
            type: "tezos"
        },
        edonet: {
            host: "https://edonet-tezos.giganode.io",
            port: 443,
            network_id: "*",
            secret,
            mnemonic,
            password,
            email,
            type: "tezos"
        },
        [...]
}
}
;

```

Each key in *networks* sets a network. An RPC node ([https://tezostaquito.io/docs/rpc_nodes/]) or a local node (as shown
in the development network) can be specified, along with the port.

#### Writing the migration scripts

The smart contracts are ready, the network where it has to be deployed too, the next step is to write the deployment
script (also called a migration). These scripts are located in the *migrations* directory. Each migration is a
javascript file, defining the deployment tasks. It can execute any javascript code. Each migration starts with a number,
followed by a title: *Truffle* runs the migrations in the ascending order. For example, the tezos-example box comes with
tree migrations:

```
1_initial_migration.js
2_deploy_simple_storage.js
3_deploy_counter.js
```

A migration defines:

* the initial storage
* how the contracts are deployed: order, networks, accounts

##### Importing the smart contract to deploy

The first step is to specify which smart contract is to be deployed:

```js
var myContract = artifacts.require("MyContract");
```

*Truffle* will look for a *MyContract.ligo* file in the *contracts* directory. Thus, to import a contract, the filename of
the contract (without the extension) is used. artifacts is a *Truffle* keyword. It is possible to import several smart
contracts:

```js
var firstContract = artifacts.require("FirstContract");
var secondContract = artifacts.require("SecondContract");
```

##### Defining the initial storage

A smart contract is likely to have a storage. When it is originated, the initial storage must be set. This contract must
be compliant with the structure defined in the smart contract to deploy: the names and types must be respected. The
initial storage is declared with a Javascript syntax. Two modules can come in handy:

```js
const {MichelsonMap} = require("@taquito/taquito");
const web3 = require("web3");
```

Below is the matching table between Javascript and Ligo.

| Ligo              | Javascript                                                          |
| -----------       | -----------                                                         |
| List, Tuple       | [ ]                                                                 |
| Big_map, Map      | const bigMap = new MichelsonMap() <br /> bigMap.set(key, values) <br /> *(from taquito module)*   |
| string, address   | string                                                              |
| bytes             | `web3.utils.asciiToHex(string_to_convert).slice(2)`                    |
| int, nat, mutez   | number                                                              |
| record            | Object { }                                                          |

Here is a migration example, defining a storage with essential types:

```js
// modules import
const {MichelsonMap} = require("@taquito/taquito"); // used for big maps
const web3 = require("web3"); // used for bytes

// contract to deploy
var MyContract = artifacts.require("MyContract");

// initial storage definition
const admin = "tz1ibMpWS6n6MJn73nQHtK5f4ogyYC1z9T9z"; //address
const emptyBigMap = new MichelsonMap(); // empty big map
const bigMapWithAnElement = new MichelsonMap(); // empty big map
bigMapWithAnElement.set(
    1, {
        param1: 5,
        param2: "second param"
    }
); // previous big map with a object (record in ligo) as value, and an int as key
const emptySet = []; // empty set
const myBytes = web3.utils.asciiToHex("string to convert into bytes").slice(2); // bytes
const counter = 10; // int

const initialStorage = {
    "contractAdmin": admin,
    "contractFirstBigMap": emptyBigMap,
    "contractSecondBigMap": bigMapWithAnElement,
    "contractSet": emptySet,
    "contractCounter": metadata,
};
```

Any type and structure change in the Ligo smart contract storage must be mirrored here, in the *initialStorage* variable.
This way, the evolution of the storage used can be versioned.

##### Deployment

The last step of the migration is the deployment definition. It is a function export, which defines how the contract(s)
should be deployed. This function takes 3 arguments:

* deployer: truffle object which deploys a contract
* network: the network used
* account: the account used

###### Deployer

The deployer object deploys the code on the specified *network*. The deployer takes as input the initialStorage object (
and a few options).

A minimal viable migration can be:

```js
var MyContract = artifacts.require("MyContract");
const initialStorage = {}
module.exports = (deployer, network, account) => {
    // deployment steps
    deployer.deploy(MyContract, initialStorage);
};
```

The execution returns some pieces of information (such as the contract address, the cost ...)

###### Network
It can be useful to deploy a smart contract differently according to the network. 
For instance, if the storage holds an administator address, it is very likely to be different on the mainnet and testnet
The migration can be branched according to the network like this:

```js
var MyContract = artifacts.require("MyContract");
const edonetInitialStorage = {}
const mainnetInitialStorage = {}
module.exports = (deployer, network, account) => {
    if (network === "edonet") {
        deployer.deploy(MyContract, edonetInitialStorage);
    } else {
        deployer.deploy(MyContract, mainnetInitialStorage);
    }

};
```

The deployment changes accordingly to the network used. Here, the storage is not the same.

###### Account

The account used for the migration can be handled during the migration.

```js
var MyContract = artifacts.require("MyContract");
const initialStorage = {admin: "tz1ibMpWS6n6MJn73nQHtK5f4ogyYC1z9T9z"}
module.exports = (deployer, network, account) => {
    deployer.deploy(MyContract, {...initialStorage, admin: account[0]});

};
```

This example sets the migration account as the contract administrator.

###### Migrate several contracts

A migration can deploy several contracts at the same time. 
It is useful when the migration data have to be used in another contract deployment.
Below, there is an example with two contracts. The second contract needs to call the first, and needs its address.

```js
var firstContract = artifacts.require("firstContract");
var secondContract = artifacts.require("secondContract");
const initialStorage = {admin: "tz1ibMpWS6n6MJn73nQHtK5f4ogyYC1z9T9z", contractToCall: ""}
module.exports = (deployer, network, account) => {
    deployer.deploy(firstContract).then(function () {
        return deployer.deploy(secondContract,
            {
                ...initialStorage,
                contractToCall: firstContract.address
            });
    });

};
```


#### Running a migration

Everything is now ready for the deployment: the network and the migration account are set, the initial storage and the deployment step are defined.
From the project directory, run:
```
$ truffle migrate --network <network_name>
```

This command launches two steps:
1. Verifying that the smart contracts are compiled. If they are not, it will launch a compilation
2. Deploying the smart contracts according the migration under the *migration* folder. Before the deployment, *Truffle* checks if the initial storage is compliant with its Michelson definition. If not, it will raise an exception

Each migration generally takes up to 30 seconds. At the end, several pieces of information are displayed.
```
1_initial_migration.js
======================

    Deploying 'Migrations'
----------------------
> operation hash:      ooWVHFdjJbvGYDp9CUhUzonRfobvnHExzqsZBQmbEHpmcuveh6Q
> Blocks: 0            Seconds: 16
> contract address:    KT18uWmKP5gTVh7FKHwRRwjE6XVAsm7WLHSF
> block number:        137896
> block timestamp:     2021-04-02T08:28:05Z
> account:             tz1YWK1gDPQx9N1Jh4JnmVre7xN6xhGGM4uC
> balance:             53167.468776
> gas used:            2012
> storage used:        154 bytes
> fee spent:           0.645 mtz
> burn cost:           0.10275 tez
> value sent:          0 XTZ
> total cost:          0.103395 XTZ


> Saving migration to chain.
> Saving artifacts
-------------------------------------
> Total cost:            0.103395 XTZ
```
The most useful piece of information are the contract address (to interact with it) and the transaction hash (which refers to the origination on the blockchain). 


Some of these pieces of information can be found into the json file under the build/contracts folder
```
{
"contractName": "Migrations",
"abi": [],
"michelson": "<michelson_code>",
"source": "<ligo_code>",
"sourcePath": "/path/to/contracts/Migrations.ligo",
"compiler": {
"name": "ligo",
"version": "next"
},
"networks": {
"NetXSgo1ZT2DRUG": {
"events": {},
"links": {},
"address": "KT18uWmKP5gTVh7FKHwRRwjE6XVAsm7WLHSF",
"transactionHash": "ooWVHFdjJbvGYDp9CUhUzonRfobvnHExzqsZBQmbEHpmcuveh6Q"
}
},
"schemaVersion": "3.2.0-tezos.1",
"updatedAt": "2021-04-02T08:29:37.743Z",
"networkType": "tezos"
}
```


### Interacting with a deployed contract

Once the migration is done, it can be convenient to quickly check that the contract is really deployed.
There many tools for this: cli, libraries, GUI... In this section, we'll keep it simple with a GUI. 

[tzstats.com](https://tzstats.com/) provides information about any public tezos network: transactions, accounts, contracts (origination, storage, entrypoints)...

Once a contract is deployed, it can be checked here (on edonet): https://edo.tzstats.com/<contract_address>.
You should see a "New Smart contract created by ..." line in the *Calls* section. The contract storage can also be inspected.


## Conclusion

Scheme to come...