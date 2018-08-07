//引入bitcoin模組
const bitcoin = require("bitcoinjs-lib");


//選用regtest網路
const regtest = bitcoin.networks.testnet

//https://github.com/bitcoinjs/bip65 
const bip65 = require('bip65')

   const pubkeys = [
      '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
      '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
      '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9'
    ].map((hex) => Buffer.from(hex, 'hex'));
    
    console.log(pubkeys);
    const { address } = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2ms({ m: 2, pubkeys })
    })
