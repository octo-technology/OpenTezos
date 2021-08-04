---
id: truffle_compilation_migration
title: Smart contract deployment with Truffle
authors: Benjamin Pilia
---

import NotificationBar from '../../src/components/docs/NotificationBar';

The first step to creating a Dapp is to deploy a smart contract onto a Tezos network, whether for testing or real-life use. There are several ways to do this, like using the Tezos CLI.  

However, during development, the smart contracts and the associated storage are likely to change: new field, field removal, structure change. For each change, a new deployment must be done. 

Thus, the way that the contract is deployed will change accordingly, especially the initial storage. A minimal change in the storage definition can make the next deployments tiresome when using the Tezos cli, especially if changes are made several times. 

Besides, there are situations where you need to deploy several smart contracts that will interact with one another. The deployment of a smart contract depends on the deployment of a previous one: its address. Instead of deploying one after the other the smart contracts and retrieveing their address, it should be possible to have an automated script that performs these actions. 

*Truffle*, developped and maintained by _ConsenSys Software Inc_, solves these difficulties. This tool uses scripts to perform smart contract deployments: thanks to a cli and a few configuration files, they are easier and faster.

In this chapter, we will deploy the Raffle smart contract, as developed in the [LIGO chapter](/docs/ligo/write-contracts-ligo.md), onto a testnet, with the use of _Truffle_.

# About The *Truffle* Suite

*Truffle* is part of a suite of tools that make it easier to deploy written smart contracts onto a blockchain, 
called *The Truffle Suite*.

* **Truffle**: smart contract compilation and deployment onto a network
* **Ganache**: easy blockchain network setup and configuration
* **drizzle**: is used to easily write front-end applications, which interact with a deployed smart contract.
* **Truffle teams**: is an integration and smart contracts monitoring tool

The *Truffle* Suite is not available for all blockchains. It supports:

* Ethereum
* Tezos
* Corda
* Quorum
* Hyperledger Fabric

Only *Truffle* and *Ganache* (still in beta) are available for Tezos.

*Truffle* can compile and deployLIGOor Smartpy scripts on any Tezos network with a single command.

# *Truffle* Installation

*Truffle* can be installed with a docker or npm. The easiest way is to use *Truffle* from the npm package.

You'll need to have NodeJS v8.9.4 or later on your machine.

Open a terminal and run:

`$ npm install -g truffle@tezos`

*Truffle* will be installed globally (-g option).

For the installation official documentation, refer to [https://www.trufflesuite.com/docs/tezos/truffle/quickstart#installing-truffle](https://www.trufflesuite.com/docs/tezos/truffle/quickstart#installing-truffle)
# Setting-up a *Truffle* project

As described below, *Truffle* is working with configuration files and scripts, which must be located in specific repositories. 
You can set up your *Truffle* project from scratch, but it is easier to use one of the two ways provided by *Truffle*:

1. Initializing an empty project
2. Using a *Truffle* Box

These two methods generate the project structure and the configuration files (with predefined settings like accounts, networks...): the _Truffle_ box comes with three smart contract examples.

## Initializing an empty project

Create a folder for your *Truffle* project, and run:

``` shell
$ mkdir tezos-example
$ cd tezos-example
$ truffle init
```

## Using a *Truffle* Box

A *Truffle* box is a project already set up, easily and quickly adjustable to the specific needs of a project.
They can be launched instantly and modified with little work. *Truffle* provides users with a global boxes repository:
[https://www.trufflesuite.com/boxes](https://www.trufflesuite.com/boxes)

A Tezos box is available here:
[https://www.trufflesuite.com/boxes/tezos-example](https://www.trufflesuite.com/boxes/tezos-example)

The `tezos-example` box is useful for the deployment of a decentralized application (dapp).

You can download this box with:

``` shell
$ mkdir tezos-example
$ cd tezos-example
$ truffle unbox tezos-example
```

The *Truffle* unbox command will not create a new tezos-example folder, but will unpack all the content in the current folder.

> You can find a *Truffle* box with *Smartpy* scripts here: [https://github.com/truffle-box/tezos-smartpy-example-box](https://github.com/truffle-box/tezos-smartpy-example-box)
# Using *Truffle*

Using *Truffle* can be divided into two steps:
1. Configuration: modifying scripts to define the way smart contracts are deployed.
2. Compilation and deployment, with the *Truffle Cli*

## Project Structure overview

A *Truffle* follows this structure:

* **build** (not present at the unpacking of the box): the folder containing the Michelson code, compiled by *Truffle*
  and used for the contract deployments
* **contract**: the folder containing all theLIGOsmart contracts that *Truffle* has to compile.
* **migrations**: the folder containing the *Truffle* migration scripts for the deployment of the contracts
* **node_modules**: the node modules used by the *Truffle* project
* **package.json**: contains a script command, which launches a sandbox with ganache
* **scripts**:
    * sandbox: contains two accounts to use on a sandbox environment.
* **test**: the folder containing Javascript tests
* **truffle-config.js**: configuration file which defines networks and accounts used for the deployment

The build folder will be created or compiled after any compilation command.

## Main *Truffle* commands

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
test      Run JavaScript tests
```

## Compiling smart contracts with *Truffle*

In this part, the `tezos-example` box is used as an example.

*Truffle* is mainly used for smart contract compilation and deployment. It can also launch tests, but other tools such as *pytezos* can be used for that.

Compiling smart contracts can be done with:

``` shell
$ truffle compile
```

Input: valid smart contracts (i.e compiling smart contracts), located in `contract` directory 

Output: *Truffle* artifacts, stored into the build/contracts directory.



### AboutLigosmart contracts

*Truffle* can compile LIGO smart contracts, using the installed LIGO compiler. But they MUST be stored in the *contract* folder.
*Truffle* considers eachLigofile as an independent smart contract. Thus, if a smart contract is split into severalLigofiles, *Truffle* will try to compile each file as a separate smart contract, resulting in a failed compilation. But there is a workaround for this behaviour:

1. Create a new folder in the project root directory, called `src` for instance.
2. Move all your smart contracts files into `src/`
3. Create aLigofile, importing the main file from `src/`

*Truffle* will successfully compile your smart contract.

### *Truffle* artifacts

For eachLigofile found in the contract, *Truffle* will yield an artifact in build/contracts.

An artifact is a json file, containing the compiled smart contract, theLigosource code, the deployment information...
This example is the artifact yielded for the `Counter.ligo` file:

``` json5
{
  "contractName": "Counter",
  "abi": [],
  "michelson": "<Michelson code as json>",
  "source": "<Content of theLigofile from contract>",
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

### Hand-ons: 

Let's create a truffle project for the Raffle Smart contract, and compile theLigocode into a Michelson code, with _Truffle_.
First, we will download the `tezos-example` box and then remove the example contracts.

``` shell
$ mkdir truffle-raffle
$ cd truffle-raffle
$ truffle unbox tezos-example
$ rm -rf contracts/* migrations/*
```

Let's put the [Raffle smart contract](/ligo/write-contracts-ligo#refactoring-the-closeraffle-entrypoint) into our Truffle project:

``` shell
$ touch contracts/Raffle.ligo
```

Let's copy and paste theLigocode into this file.

Everything is ready for the compilation:

``` shell
$ truffle compile
```

A new json file has been created in the `build/contracts/` directory.

## Deploying smart contracts with *Truffle*

At this point, the smart contract is compiled and ready to be deployed. However, *Truffle* needs to be configured: deployment on a given network, with a given account, a given initial storage, etc.

### Using an account for the deployment

Originating a contract costs some tz. Thus, an account holding funds is necessary. Accounts with funds on testnets (
delphinet, edonet...) can freely be retrieved as a json file here:
[https://faucet.tzalpha.net/]

### Adding a network
#### Defining accounts
The network configuration is handled in the `truffle-config.js` file. It can execute any javascript code needed for the configuration. Some networks are already defined (mainnet, localhost). However, as the tezos protocol is likely to evolve, new networks will probably have to be added. Each network is associated with an account.

There are two ways of importing an account:

- Importing an account into the `truffle-config.js` file:

```js
const {mnemonic, secret, password, email} = require("/path/to/faucet.json");
```

*Truffle* will activate this account before the contract origination.

- Setting **already activated** accounts in the scripts folder:
   Accounts can be defined according to the network. By default, a *sandbox* folder is present, with two defined accounts (
   these two accounts are found in any sandbox). New accounts can be defined by creating a new folder, named after the
   network name (convention), with an `accounts.js` file:

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



Of course, the faucet can be imported into the `accounts.js` file.


#### Defining networks
The networks are defined in the `truffle-config.js` file. It exports an object that defines networks.
Each key in *networks* sets a network, which requires:
- a host: An RPC node ([https://tezostaquito.io/docs/rpc_nodes/](https://tezostaquito.io/docs/rpc_nodes/)) or a local node (as shown in the development network)
- a port: running node port
- network_id: each Tezos network has an id. For instance, _Florencenet_ id is `NetXxkAx4woPLyu`. `*` matches any network. 
- type: network type
- A way to create transaction:
   - secretKey
   - secret, mnemonic, password, email

```js
module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  networks: {
      development: {
          host: "http://localhost",
          port: 8732,
          network_id: "*",
          secretKey: alice.sk,
          type: "tezos"
      }
  }
```

#### Hand-ons

We will deploy our raffle smart contract onto edonet. We'll need to add this network into the `truffle-config.js` file.
First, we need a faucet account. 
Let's download a faucet from [https://faucet.tzalpha.net/](https://faucet.tzalpha.net/) into our root project folder.

Let's define an "edonet" network, that will use  this faucet:

```js
const {alice} = require('./scripts/sandbox/accounts');
const {mnemonic, secret, password, email} = require("./faucet.json");

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



### Writing the migration scripts

Now that the smart contracts and the deployment network are ready, the next step is to write the deployment script. Such scripts are also called migrations: they usually update the storage structure or initial data and the smart contract code. These scripts are located in the *migrations* directory. 

Each migration is a javascript file, defining the deployment tasks. It can execute any javascript code. Each migration starts with a number, followed by a title: *Truffle* will run the migrations in an ascending order.
For instance, the `tezos-example` box comes with tree migrations:

```
1_initial_migration.js
2_deploy_simple_storage.js
3_deploy_counter.js
```

A migration script defines:

* the initial storage of the smart contract(s)
* the contract deployment steps: the order of deployment of smart contracts, networks, accounts

These migration scripts are used the same way whether you deploy your smart contract for the first time or you update a new version of a smart contract.

#### Importing the smart contract to deploy

The first step is to specify which smart contract is to be deployed:

```js
var myContract = artifacts.require("MyContract");
```

*Truffle* will look for a *MyContract.ligo* file in the *contract* directory. Thus, to import a contract, the filename of the contract (without the extension) is used (`artifacts` is a *Truffle* keyword). It is here possible to import several smart contracts:

```js
var firstContract = artifacts.require("FirstContract");
var secondContract = artifacts.require("SecondContract");
```

#### Defining the initial storage

A smart contract defines a storage. When originated, the initial storage must be set and the storage must
be compliant with the structure defined in the smart contract to be deployed: the names and types must be respected. The
initial storage is declared with a Javascript syntax. Two modules can come in handy:

```js
const {MichelsonMap} = require("@taquito/taquito"); // for Michelson maps
const web3 = require("web3"); // for bytes
```

Below is the matching table between Javascript and Ligo.

| LIGO            | Javascript                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------------- |
| List, Tuple     | [ ]                                                                                             |
| Big_map, Map    | const bigMap = new MichelsonMap() <br /> bigMap.set(key, values) <br /> *(from taquito module)* |
| string, address | string                                                                                          |
| bytes           | `web3.utils.asciiToHex(string_to_convert).slice(2)`                                             |
| int, nat, mutez | number                                                                                          |
| record          | Object { }                                                                                      |
| timestamp       | Date.now()                                                                                      |

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

Any type and structure change in theLIGOsmart contract storage must be mirrored here, in the `initialStorage` variable.
This way, the evolution of the storage used can be versioned.

#### Deployment

The last step of the migration is the deployment definition. It's a function export, which defines how the contract(s)
should be deployed. This function takes three arguments:

* `deployer`: truffle object which deploys a contract
* `network`: the network used
* `account`: the account used

##### Deployer

The `deployer` object deploys the code on the specified *network*. The deployer takes the `initialStorage` object (
and a few options) as input.

A minimal viable migration could be:

```js
var MyContract = artifacts.require("MyContract");
const initialStorage = {}
module.exports = (deployer, network, account) => {
    // deployment steps
    deployer.deploy(MyContract, initialStorage);
};
```

The execution returns some pieces of information, such as the contract address, the cost ...

##### Network
It can be useful to deploy a smart contract differently according to the network. For instance, if the storage holds an administator address, it's likely to be different on the mainnet and on testnet. The migration can be branched according to the network, like this:

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

The deployment changes according to the network used. Here, the storage is not the same.

##### Account

The account used for the migration can be handled during the migration.

```js
var MyContract = artifacts.require("MyContract");
const initialStorage = {admin: "tz1ibMpWS6n6MJn73nQHtK5f4ogyYC1z9T9z"}
module.exports = (deployer, network, account) => {
    deployer.deploy(MyContract, {...initialStorage, admin: account[0]});

};
```

This example sets the migration account as the contract administrator.

##### Migrating several contracts

A migration can deploy several contracts at the same time. This is useful when the migration data have to be used for the deployment of another contract.
Below, is an example with two contracts. The second contract needs to have the address of the first contract in its initial storage.

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

### Hand-ons
Let's create the migration file for our raffle contract: `1_deploy_raffle.js`

First, we need to import the contract (Step 1)

Second, we need to define the initial storage, which should have the following fields:
- admin: `address`
- close_date: `timestamp`
- jackpot: `mutez`
- description: `string`
- players: `address list`
- sold_tickets: `nat address big_map`
- raffle_is_open: `boolean`
- winning_ticket_number_hash: `bytes`

`taquito` and `web3` will be used for the `big_map` and `bytes` types. The initial storage that is defined contains an open raffle. (Step 2)

Finally, the deployment must be defined: the admin of the contract is the address used for the deployment (step 3).

```js
const Raffle = artifacts.require("Raffle"); // step 1
// step 2
const {MichelsonMap} = require("@taquito/taquito");
const web3 = require("web3");

const admin = ""
const closeDate = Date.now() + 10;
const jackpot = 100
const description = ""
const players = []
const soldTickets = new MichelsonMap()
const raffleIsOpen = true
const winningTicketHash = web3.utils.asciiToHex("ec85151eb06e201cebfbb06d43daa1093cb4731285466eeb8ba1e79e7ee3fae3").slice(2)

const initialStorage = {
    "admin": admin,
    "close_date": closeDate.toString(),
    "jackpot": jackpot,
    "description": description,
    "players": players,
    "sold_tickets": soldTickets,
    "raffle_is_open": raffleIsOpen,
    "winning_ticket_number_hash": winningTicketHash
}


// step 3
module.exports = (deployer, network, account) => {
    deployer.deploy(Raffle, {...initialStorage, admin: account[0]})
};
```

### Running a migration

Everything is now ready for deployment: the network and the migration account are set, the initial storage and the deployment step are defined.
From the project directory, you can run:
```
$ truffle migrate --network <network_name>
```

This command is broken down into two steps:
1. Verifying that the smart contracts are compiled. If they are not, it will launch a compilation
2. Deploying the smart contracts, following the migration scripts under the *migration* folder. Before the deployment, *Truffle* checks if the initial storage is compliant with its Michelson definition. If not, it will raise an exception.

Each migration generally takes up to 30 seconds. In the end, several pieces of information are displayed.
```
1_deploy_raffle.js
==================

   Replacing 'Raffle'
   ------------------
   > operation hash:      onoMN7C2YNwJPeXtkXFwTrcitD9udgEQNdBGTaZD2CHVjpNsTBQ
   > Blocks: 0            Seconds: 4
   > contract address:    KT1N3WFAwMUvqnKMJkNrLCnWBRkLTFvRw7Vk
   > block number:        206080
   > block timestamp:     2021-04-26T14:38:53Z
   > account:             tz1cGftgD3FuBmBhcwY24RaMm5D2UXLr5LHW
   > balance:             28390.642777
   > gas used:            11056
   > storage used:        2101 bytes
   > fee spent:           3.477 mtz
   > burn cost:           0.5895 tez
   > value sent:          0 XTZ
   > total cost:          0.592977 XTZ

   > Saving artifacts
   -------------------------------------
   > Total cost:            0.592977 XTZ


Summary
=======
> Total deployments:   1
> Final cost:          0.592977 XTZ

```
The most useful pieces of information are the contract address (to interact with it), the fees and cost of the origination and the transaction hash. 


You can find some of these pieces of information in the json file under the `build/contracts` folder:
```
{
"contractName": "Raffle",
"abi": [],
"michelson": "<michelson_code>",
"source": "<ligo_code>",
"sourcePath": "/path/to/contracts/Raffle.ligo",
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


## Interacting with a deployed contract

Once the migration is done, it can be convenient to quickly verify that the contract is deployed.
There are many tools for this: cli, libraries, explorers... In this section, we'll keep it simple with a GUI. 

[tzstats.com](https://tzstats.com/) provides information about any public Tezos network: transactions, accounts, contracts (origination, storage, entrypoints)...

Once a contract is deployed, it can be checked here (on edonet): https://edo.tzstats.com/<contract_address>.
You should see a "New Smart contract created by ..." line in the *Calls* section. The contract storage can also be inspected.


# Conclusion

The first step in developing a Dapp is to deploy the smart contracts. _Truffle_ takesLigocode, compiles it into Michelson code and deploys it onto any public or private network. 

Each migration needs an initial storage, that should be compliant with the storage section of the Michelson code. 

Thanks to its configuration and easily readable and versioned migration files, _Truffle_ is an essential tool throughout the development and deployment of a dapp.
