
/******   2 對 2 交易 **********/
//引入bitcoin模組
const bitcoin = require("bitcoinjs-lib");


//選用regtest網路
const regtest = bitcoin.networks.testnet

//https://github.com/bitcoinjs/bip65 
const bip65 = require('bip65')

//輸入私鑰，教學用，請勿隨意公開私鑰
var privateKeyA = "cNcvQphXWjAJ365Y8Tuhti5a6fCh9ftpR3GScZs5vdidBwQqpxT4";
var privateKeyB = "cSzQrcp2zoihasXYMAtkF6zwVG5875eERdQzaXAmwED9G1o1N7tK";

//產生公鑰跟私鑰
const keyPairA = bitcoin.ECPair.fromWIF(privateKeyA,regtest);
const keyPairB = bitcoin.ECPair.fromWIF(privateKeyB,regtest);

//產生付款位址
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })

const txb = new bitcoin.TransactionBuilder(regtest)

 txb.setVersion(1);
 
//用listunspent 取出最後一筆資料的txid
txb.addInput('c3acac43c6f0e83538fb5c82ed01379349f5dccf43a8af7bb5d8f0c60fb1fcfc', 0);
txb.addInput('27dc0a34d9e76fae02bf494b9501f6d1b43009cf8ffe0389a9ed8a670204a9fc', 0);

//用getnewaddress取得新的位址
txb.addOutput('2NC4RETzEwArF6X83j8xgVnBMTfC9tRrt9T', 12);
txb.addOutput('2NBQG5mqbxDgSNoMWWihGZ7e1BJMWEakKy4',10);

//交易簽名
txb.sign(0, keyPairA); //第一個位置的是上一筆交易中的第一個支出，第二個欄位是我們的公鑰與私鑰
txb.sign(0, keyPairA); 
//取得交易序號
const transaction_01 = txb.build().toHex(); 
console.log(transaction_01);
