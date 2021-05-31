const BigRaffle = artifacts.require("bigRaffle");
const {MichelsonMap} = require("@taquito/taquito");
const web3 = require("web3");
const {pkh} = require("../faucet.json");

const admin = pkh
const closeDate = Date.now() + 10;
const jackpot = 100
const description = ""
const players = []
const soldTickets = new MichelsonMap()
const raffleIsOpen = true
const winningTicketHash = web3.utils.asciiToHex("").slice(2)

const initialStorage = {
    "contract_name": "Raffle smart contract with big map",
    "admin": admin,
    "close_date": closeDate.toString(),
    "jackpot": jackpot,
    "description": description,
    "players": players,
    "sold_tickets": soldTickets,
    "raffle_is_open": raffleIsOpen,
    "winning_ticket_number_hash": winningTicketHash
}

module.exports = deployer => {
    deployer.deploy(BigRaffle, initialStorage).then(e => e.buyTicket([["unit"]], {amount: 1}))
};
