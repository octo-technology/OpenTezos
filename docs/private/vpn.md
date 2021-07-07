---
id: vpn
title: VPN Configuration
authors: Maxime Sallerin
---

## Creating a peer-to-peer network

It is convenient to use a dedicated peer-to-peer network in order to run the private blockchain.

One way to do that is to use the [ZeroTier](https://www.zerotier.com/) service.

To create and use the peer-to-peer network, follow these steps:

1. Create a new ZeroTier account.
2. Download the ZeroTier VPN service for your OS.
3. Download and install the VPN service. Your machine will be associated with a Node ID (10-digit address).
4. Go to the Network section of ZeroTier Central and create a new network. The new network will be assotiated with a Network ID. In order to join the Zerotier network run `sudo zerotier-cli join <network-id>`. Then, ask participants to join. Use the Node IDs that were provided for your machine to add them to the network.
5. Ask other participants to also create a ZeroTier account and join the network you just created.

Once you have joined the network, you will be assigned an IP-address, that you can share with other participants.

To find this IP-address, simply run `ifconfig`, the name of ZeroTier network interface starts with `zt` prefix.