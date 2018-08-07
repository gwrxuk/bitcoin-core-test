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

    //輸入私鑰，教學用，請勿隨意公開私鑰
var privateKey = "cNcvQphXWjAJ365Y8Tuhti5a6fCh9ftpR3GScZs5vdidBwQqpxT4";

//產生公鑰跟私鑰
const keyPair = bitcoin.ECPair.fromWIF(privateKey,regtest);




const txb = new bitcoin.TransactionBuilder(regtest)


//用listunspent 取出最後一筆資料的txid
txb.addInput('c3acac43c6f0e83538fb5c82ed01379349f5dccf43a8af7bb5d8f0c60fb1fcfc', 0);

//用getnewaddress取得新的位址
txb.addOutput(address, 12)

//交易簽名
txb.sign(0, keyPair); //第一個位置的是上一筆交易中的第一個支出，第二個欄位是我們的公鑰與私鑰

//取得交易序號
const transaction_01 = txb.build().toHex(); 
console.log(transaction_01);
