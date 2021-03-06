## Start app to init wallet

```
npm run electron-dev
```

After initiating the wallet and setting your password close the app again.

## Start nodes via cli

```
btcd --txindex --simnet --rpcuser=kek --rpcpass=kek --datadir=data/btcd/data --logdir=data/btcd/logs

lnd --rpclisten=localhost:10009 --listen=localhost:10019 --restlisten=localhost:8009 --lnddir=data/lnd --debuglevel=info --bitcoin.simnet --bitcoin.active --bitcoin.node=btcd --btcd.rpcuser=kek --btcd.rpcpass=kek

lncli --rpcserver=localhost:10009 --lnddir=data/lnd unlock

lnd --rpclisten=localhost:10002 --listen=localhost:10012 --restlisten=localhost:8002 --lnddir=data/lnd2 --debuglevel=info --bitcoin.simnet --bitcoin.active --bitcoin.node=btcd --btcd.rpcuser=kek --btcd.rpcpass=kek --noencryptwallet
```

## Fund wallets addresses

```
lncli --rpcserver=localhost:10009 --lnddir=data/lnd newaddress np2wkh

lncli --rpcserver=localhost:10002 --lnddir=data/lnd2 newaddress np2wkh

btcd --txindex --simnet --rpcuser=kek --rpcpass=kek --datadir=data/btcd/data --logdir=data/btcd/logs --miningaddr=NEW_ADDRESS

btcctl --simnet --rpcuser=kek --rpcpass=kek generate 400
```

## Open channel and send payment

```
lncli --rpcserver=localhost:10009 --lnddir=data/lnd getinfo

lncli --rpcserver=localhost:10002 --lnddir=data/lnd2 getinfo

lncli --rpcserver=localhost:10009 --lnddir=data/lnd connect PUB_KEY@localhost:10012

lncli --rpcserver=localhost:10009 --lnddir=data/lnd openchannel --node_key=PUB_KEY --local_amt=16000000

btcctl --simnet --rpcuser=kek --rpcpass=kek generate 6

lncli --rpcserver=localhost:10009 --lnddir=data/lnd listchannels

lncli --rpcserver=localhost:10002 --lnddir=data/lnd2 addinvoice --amt=10000

lncli --rpcserver=localhost:10009 --lnddir=data/lnd sendpayment --pay_req=ENCODED_INVOICE
```
