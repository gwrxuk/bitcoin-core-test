var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'admin',
  pass: 'admin'
});

client.getDifficulty(function(err, difficulty) {
  if (err) {
    return console.error(err);
  }

  console.log('Difficulty: ' + difficulty);
});
