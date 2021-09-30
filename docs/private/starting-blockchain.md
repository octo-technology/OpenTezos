---
id: starting-blockchain
title: Starting the blockchain
authors: Maxime Sallerin
---


## Activating the procotol and starting the blockchain

Leave the second shell running of the [last chapter](/genesis).

Open a third shell and go to your workspace.

```
cd private-blockchain
```

Get the names of the two containers that are now running via the command:

```shell
docker ps
```

### Modifying the parameter files

We also need to gather the public keys created from the two bakers started in the previous chapter. 

These public keys will need to be pasted into a JSON parameter file.

Two sample JSON files are provided, depending on the version of the network you plan to run:

- `./parameters/parameters_babylonnet.json`
- `./parameters/parameters_carthagenet.json`

In these files, `bootstrap_accounts` has information about accounts (their public keys) that have access to tokens (4M of tez in these example files). 

Note that all bakers should have some tokens. We need to add the public key for the baker we just created into `bootstrap_accounts`.

1. go to the `parameters` folder
2. open the appropriate sample file
3. add an entry in the `bootstrap_accounts` section for each of the two public key provided in the previous step.

e.g. paste entries like this into the `bootstrap_accounts` section:

```shell
[
  "edpkvRTXYRCxCbWs4GF1shMxCab9nF3iNimPqqb2esiP5WyjAhT1dz",
  "4000000000000"
],
[
  "edpkum3W1vGfsF19uNNnjdThGvbTBXbBcKyCmEAuV5TPfensRxYyqA",
  "4000000000000"
],
```

The existing bootstrap accounts should remain in the file and will be used later in this example.

#### Copying the edited parameter files to Docker

```shell
docker cp my-parameters.json <container_name>:/parameters.json
docker cp my-parameters.json <container_name_1>:/parameters.json
```

where:
- `my-parameters.json` is the file you have just edited. 
- `<container_name>` and `<container_name_1>` can be retrieved by the command `docker ps`

### Starting the blockchain

The last step is the activation of the protocol.

For this step, choose the container name corresponding to the first container we created (select the one shown to have been started earliest).

```shell
docker exec <container_name> ./scripts/activate-protocol.sh \
  -A <container_ip> -P 8732 \
  --base-dir /base-dir --tezos-client /base-dir/tezos-client \
  --parameters /parameters.json
```

> If you want to browse the file system inside your Docker container, you can run the command: `docker exec -it <container_name> bash`.

The protocol is now activated! Let's see how to use our private blockchain in the next chapter.






