const BigMapContract = artifacts.require("bigMapContract");
const {MichelsonMap} = require("@taquito/taquito");

const initialStorage = new MichelsonMap()

module.exports = (deployer, network) => {
    if (network === "development") {
        deployer.deploy(BigMapContract, initialStorage)
    }
};
