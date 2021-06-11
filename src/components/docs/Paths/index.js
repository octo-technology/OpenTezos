import { jsPDF } from 'jspdf'
import React from 'react'

import styles from './styles.module.css'

import NotificationBar from '../NotificationBar'
import CardsWrapper from '../Cards/CardsWrapper'
import OverlayCard from '../Cards/OverlayCard'
import SimpleTextCard from '../Cards/SimpleTextCard'

const paths = {
  ALL: 'All',
  SMARTPY_DEV: 'Developer (SmartPy)',
  LIGO_DEV: 'Developer (LIGO)',
  SCIENTIST: 'Scientist',
  C_LEVEL: 'C Level',
  STARTUPPER: 'Startupper',
}

class Paths extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: paths.ALL,
    }
  }

  render() {
    console.log(this.state.path)
    return (
      <div>
        <h2>Available paths</h2>
        <CardsWrapper>
          {Object.keys(paths).map((key, index) => (
            <SimpleTextCard
              key={key}
              onClick={() => this.setState({ path: paths[key] })}
              icon={`img/icons/${key}-light.svg`}
              iconDark={`img/icons/${key}-dark.svg`}
              title={paths[key]}
              bolded={this.state.path === paths[key]}
            />
          ))}
        </CardsWrapper>

        <h2>Modules in path</h2>
        <CardsWrapper>
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV, paths.SCIENTIST, paths.C_LEVEL, paths.STARTUPPER].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="What is a blockchain and how it works."
              icon="img/icons/blockchain-big-light.svg"
              iconDark="img/icons/blockchain-big-dark.svg"
              title="Blockchain Basics"
              to="/blockchain-basics"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV, paths.SCIENTIST, paths.C_LEVEL, paths.STARTUPPER].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="What is Tezos and how it works."
              icon="img/icons/tezos-big-light.svg"
              iconDark="img/icons/tezos-big-dark.svg"
              title="Tezos Basics"
              to="/tezos-basics"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV, paths.SCIENTIST].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="How to deploy your own Tezos node."
              icon="img/icons/node-big-light.svg"
              iconDark="img/icons/node-big-dark.svg"
              title="Deploy a node"
              to="/deploy-a-node"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Learn to use and interact with a Tezos explorer."
              icon="img/icons/explorer-big-light.svg"
              iconDark="img/icons/explorer-big-dark.svg"
              title="How to use an Explorer"
              to="/explorer"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Learn the basics of the SmartPy smart contract language."
              icon="img/icons/smartpy-big-light.svg"
              iconDark="img/icons/smartpy-big-dark.svg"
              title="SmartPy"
              to="/smartpy"
            />
          )}
          {[paths.ALL, paths.LIGO_DEV].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Learn the basics of the LIGO smart contract language."
              icon="img/icons/ligo-big-light.svg"
              iconDark="img/icons/ligo-big-dark.svg"
              title="LIGO"
              to="/ligo"
            />
          )}
          {[paths.ALL, paths.SCIENTIST].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Learn the basics of the native Tezos smart contract language."
              icon="img/icons/michelson-big-light.svg"
              iconDark="img/icons/michelson-big-dark.svg"
              title="Michelson"
              to="/michelson"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV, paths.STARTUPPER].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Everything you need to build your first Tezos Dapp."
              icon="img/icons/dapp-big-light.svg"
              iconDark="img/icons/dapp-big-dark.svg"
              title="Build a Dapp"
              to="/dapp"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV, paths.SCIENTIST, paths.C_LEVEL, paths.STARTUPPER].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="What is baking and how it works."
              icon="img/icons/baking-big-light.svg"
              iconDark="img/icons/baking-big-dark.svg"
              title="Baking"
              to="/baking"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV, paths.STARTUPPER].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="How to deploy your own bakers."
              icon="img/icons/baker-big-light.svg"
              iconDark="img/icons/baker-big-dark.svg"
              title="Deploy Bakers"
              to="/baker"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV, paths.C_LEVEL, paths.STARTUPPER].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Automated market maker, stablecoins, flash loans, synthetics, etc."
              icon="img/icons/defi-big-light.svg"
              iconDark="img/icons/defi-big-dark.svg"
              title="DeFi"
              to="/defi"
            />
          )}
          {[paths.ALL, paths.SCIENTIST].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Introduction to the concepts of formal verifications."
              icon="img/icons/formal-big-light.svg"
              iconDark="img/icons/formal-big-dark.svg"
              title="Formal Verification"
              to="/formal-verification"
            />
          )}
          {[paths.ALL].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Create your own private Tezos network."
              icon="img/icons/private-big-light.svg"
              iconDark="img/icons/private-big-dark.svg"
              title="Private Blockchain"
              to="/private"
            />
          )}
          {[paths.ALL, paths.SMARTPY_DEV, paths.LIGO_DEV].includes(
            this.state.path,
          ) && (
            <OverlayCard
              description="Contribute to the Tezos ecosystem."
              icon="img/icons/contribute-big-light.svg"
              iconDark="img/icons/contribute-big-dark.svg"
              title="How to contribute"
              to="/contribute"
            />
          )}
        </CardsWrapper>
      </div>
    )
  }
}

export default Paths
