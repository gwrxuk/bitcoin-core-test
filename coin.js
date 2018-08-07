//引入bitcoin模組
const bitcoin = require("bitcoinjs-lib");


//選用regtest網路
const regtest = bitcoin.networks.testnet

//https://github.com/bitcoinjs/bip65 
const bip65 = require('bip65')

//輸入私鑰
var privateKey = "cNcvQphXWjAJ365Y8Tuhti5a6fCh9ftpR3GScZs5vdidBwQqpxT4";
const keyPair = bitcoin.ECPair.fromWIF(privateKey);

//產生付款位址
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })

const txb = new bitcoin.TransactionBuilder()
console.log(txb.version);

//用listunspent 取出最後一筆資料的txid
txb.addInput('c3acac43c6f0e83538fb5c82ed01379349f5dccf43a8af7bb5d8f0c60fb1fcfc', 0);

//用getnewaddress取得新的位址
txb.addOutput('2MxfNS8sB1GcCo3GBLmX2PUw277H9zvrn2L', 12)
txb.sign(0, keyPair)
