---
id: using-blockchain
title: Using the blockchain
authors: Maxime Sallerin
---

## Checking status

Before continuing, you can verify things are working properly by entering into your browser:

```shell
http://<conainer_ip>:8732/chains/main/blocks/head
```

You should see some valid JSON being returned.

If not, try: 

```shell
http://localhost:8732/chains/main/blocks/head
```

If things are not working correctly, you can look at the contents of the docker file:

```shell
base-dir/baker.log
```

> Reminder: If you want to browse the file system inside your Docker container, you can run the command: `docker exec -it <container_name> bash`.


## Transferring token

Once the protocol is activated, you can play with the new chain. For example, you can transfer some tokens from one account to another using `tezos-client`.

### Importing a faucet account

We will use the alias 'alice' to refer to the `bootstrap_account` entry with these values:

```
Hash: tz1akcPmG1Kyz2jXpS4RvVJ8uWr7tsiT9i6A
Public Key: edpktezaD1wnUa5pT2pvj1JGHNey18WGhPc9fk9bbppD33KNQ2vH8R
Secret Key: unencrypted:edsk2vKVH2BNwKrxJrvbRvuHnu4FW17Jrs2Uy2TzR2fxipikTJJ1aG
```

```
docker exec <container_name> /base-dir/tezos-client \
  --addr <container_ip> --port 8732 \
  import secret key alice unencrypted:edpkubXzL1rs3dQAGEdTyevfxLw3pBCTF53CdWKdJJYiBFwC1xZSct
```

Account alice has 4,000,000 of XTZ. Check it out with this command:

```shell
docker exec <container_name> /base-dir/tezos-client \
  --addr <container_ip> --port 8732 \
  get balance for alice
```

> The secret keys used here are unencrypted. This is unsafe in general but useful for the simplicity of the examples. Consider not using them if you care about privacy (even in a private blockchain without real money).
> In order to encrypt bakers and genesis secret keys, you can provide an `--encrypted` flag to `fetch-binaries.sh` and `start-baker.sh` scripts.

### Generate new account

Let's generate a new account named bob:

```shell
docker exec <container_name> /base-dir/tezos-client \
  --addr <container_ip> --port 8732 \
  gen keys bob
```

You can acces to his address with this command:

```shell
docker exec <container_name> /base-dir/tezos-client \
  --addr <container_ip> --port 8732 \
  show address bob
```

```shell
Hash: tz1UQiBLRbiWAUfGjZNUpNWKLvQez95ZXy2K
Public Key: edpkvRZrUoDqw7PpZ5wLHeDDjSLx9e1WJt3tGJKWUbXNt4CQz7tzFA
```

Bob has 0 XTZ since we just created his account.

Now, let's transfer some XTZ from alice to bob with this command:

```shell
docker exec <container_name> /base-dir/tezos-client \
  --addr <container_ip> --port 8732 \
  --wait none transfer 100 from alice to bob --burn-cap 0.257
```
 
 Finally, you can check that bob has indeed received 100 XTZ

```shell
docker exec <container_name> /base-dir/tezos-client \
  --addr <container_ip> --port 8732 \
  get balance for bob
```

```shell
100 ꜩ
```

### Conclusion 

In conclusion we have seen how to create a private blockchain. This by generating a genesis block and bootstrapping at least two bakers. These two bakers will validate the first blocks allowing the realization of the first transactions of the blockchain.














