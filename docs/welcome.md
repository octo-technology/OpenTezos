---
id: welcome
disable_pagination: true
sidebar_label: Home
title: Welcome to OpenTezos
hide_title: true
slug: /
---

import NotificationBar from '../src/components/docs/NotificationBar';
import CardsWrapper from '../src/components/docs/Cards/CardsWrapper';
import OverlayCard from '../src/components/docs/Cards/OverlayCard';

<h1 className="p">Welcome Tezos Developers</h1>

<NotificationBar>
  <p>
    Under construction!
  </p>
</NotificationBar>

### Modules

<CardsWrapper>
  <OverlayCard
    description=""
    icon="img/icons/document.svg"
    iconDark="img/icons/document-dark.svg"
    title="Blockchain Basics"
    to="/docs/core/overview"
  />
  <OverlayCard
    description=""
    icon="img/icons/document.svg"
    iconDark="img/icons/document-dark.svg"
    title="Tezos Basics"
    to="/docs/node/overview"
  />
  <OverlayCard
    description=""
    icon="img/icons/document.svg"
    iconDark="img/icons/document-dark.svg"
    title="How to deploy a Tezos node"
    to="/docs/wallet-app/overview"
  />
  <OverlayCard
    description=""
    icon="img/icons/document.svg"
    iconDark="img/icons/document-dark.svg"
    title="How to interact with a Tezos explorer"
    to="/docs/merchant/overview"
  />
  <OverlayCard
    description=""
    icon="img/icons/document.svg"
    iconDark="img/icons/document-dark.svg"
    title="SmartPy"
    to="/docs/move/overview"
  />
</CardsWrapper>
