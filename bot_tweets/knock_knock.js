var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);
var knockKnock = require('knock-knock-jokes');
var kJoke = knockKnock();

function knockKnockJoke() {
  T.post('statuses/update', { status: kJoke }, function (err, response) {
    if (err) {
      console.log(err.message);
    } else {
      let date = new Date();
      console.log('Status Updated with Knock-Knock joke @ : ' + date);
    }
  });
};

module.exports = knockKnockJoke;
