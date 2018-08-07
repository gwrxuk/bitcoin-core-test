/*************** 2 to 3 多個簽名交易 *********/

//引入bitcoin模組
const bitcoin = require("bitcoinjs-lib");


//選用regtest網路
const regtest = bitcoin.networks.testnet

//https://github.com/bitcoinjs/bip65 
const bip65 = require('bip65')

/*********
1. bitcoin-cli -regtest getnewaddress
2. bitcoin-cli -regtest validateaddress
以上步驟做三次取得public key
*********/
   const pubkeys = [
      '032826b8e8d862aeaf336530fb6163a29af156a8e533539bf9837b5d473858aeb3',
      '02a8609a21df186ff5d8d0933de78de07324c8f7c815c0ad53c1af706dd0c55fb3',
      '02486c6214fa52ad10109e619ff13c4f0e09fdee215c8958c246219104b336e928'
    ].map((hex) => Buffer.from(hex, 'hex'));
    
    //產生位址
    const { address } = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2ms({ m: 2, pubkeys })
    })
