var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);
var knockKnock = require('knock-knock-jokes');
var kJoke = knockKnock();

module.exports = function () {
  T.post('statuses/update', { status: kJoke }, function (err, response) {
    if (err) {
      console.log(err[0].message);
    } else {
      let date = new Date();
      console.log('Status Updated with Knock-Knock joke @ : ' + date);
    }
  });
};