
const Client = require("bitcoin-core");
//const client = new Client({network: 'regtest'});
const client = new Client(
    {   
        username: 'admin',
        password: 'admin',
        port: '8332'
    }
);

client.getBlockchainInfo().then((help) => console.log(help));
client.getNewAddress().then((help) => console.log(help));

const balance = client.getBalance('*', 0);
console.log(balance);
client.sendToAddress("2MuZszSQBTmZHJJ7Poh8x35eygFyCTV2T1B",10).then((help)=>console.log(help));
client.listUnspent().then((help)=>console.log(help));
