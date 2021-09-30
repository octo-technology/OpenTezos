const {alice} = require('./scripts/sandbox/accounts');
const {mnemonic, secret, password, email} = require("./faucet.json");

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
        },
        carthagenet: {
            host: "https://carthagenet.smartpy.io",
            port: 443,
            network_id: "*",
            type: "tezos"
        },
        edonet: {
            host: "https://edonet.smartpy.io/",
            port: 443,
            network_id: "*",
            secret,
            mnemonic,
            password,
            email,
            type: "tezos"
        },
        mainnet: {
            host: "https://mainnet.smartpy.io",
            port: 443,
            network_id: "*",
            type: "tezos"
        },
        zeronet: {
            host: "https://zeronet.smartpy.io",
            port: 443,
            network_id: "*",
            type: "tezos"
        }
    }
};
