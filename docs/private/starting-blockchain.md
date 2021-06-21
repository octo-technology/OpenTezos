---
id: starting-blockchain
title: Starting the blockchain
authors: Maxime Sallerin
---


## Activating the procotol and starting the blockchain

Leave the second shell running as well, and open a third session. In the new shell, first get the names of the two containers that are now running via the command:

```shell
docker ps
```

### Modifying the parameter files

We also need to gather the public keys created from the two bakers started in the previous chapter. 

These public keys will need to be pasted into a JSON parameter file.

Two sample JSON files are provided, depending on the version of the network you plan to run:

- `./parameters/parameters_babylonnet.json`
- `./parameters/parameters_carthagenet.json`

In these files, `bootstrap_accounts` has information about account public keys that have access to tokens (4M of tez in these example files). 

Note that all bakers should have some tokens, thus, we need to add the public key for the baker just created into bootstrap_accounts.

- go to the `parameters` folder
- open the appropriate sample file
- add an entry in the `bootstrap_accounts` section for each of the two public key provided in the previous step.

The exisiting bootstrap accounts should remain in the file, and will be used later in this example.

### Copying the edited parameter files to Docker

docker cp my-parameters.json <container_name>:/parameters.json
docker cp my-parameters.json <container_name_1>:/parameters.json

where:
- `my-parameters.json` is the file you have just edited. 
- `<container_name>` and `<container_name_1>` can be retrieved by the command `docker ps`

### Starting the blockchain

The last step is to run the activation script for the running docker containers. 

For this step, choose the container name corresponding to the first container we created (select the one shown to have been started earliest).








