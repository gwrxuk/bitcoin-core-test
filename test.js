var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'admin',
  pass: 'admin'
});

client.getBlockchainInfo(function(err, info) {
  if (err) {
    return console.error(err);
  }

  console.log('Info: ' + JSON.stringify(info));
});



client.getDifficulty(function(err, difficulty) {
  if (err) {
    return console.error(err);
  }

  console.log('Difficulty: ' + difficulty);
});



client.getNewAddress(function(err, address) {
  if (err) {
    return console.error(err);
  }

  console.log('address ' + address);
});
