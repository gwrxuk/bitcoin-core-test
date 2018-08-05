const bitcoin = require("bitcoinjs-lib");
//function rng () { return Buffer.from('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }
//const keyPair = bitcoin.ECPair.makeRandom({ rng: rng })

const keyPair = bitcoin.ECPair.makeRandom()

const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
console.log(keyPair);
console.log(address);
