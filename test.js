
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

const balance = await new Client().getBalance('*', 0);
