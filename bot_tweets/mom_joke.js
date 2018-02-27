var yoMomma = require('yo-mamma').default;
var mJoke = yoMomma();
var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);

function momJoke() {
  T.post('statuses/update', { status: mJoke }, function (err, response) {
    if (err) {
      console.log(err[0].message);
    } else {
      var date = new Date();
      console.log('Status Updated with Yo Momma Joke @ : ' + date);
    }
  });
};

module.exports = momJoke;
