var knockKnock = require('knock-knock-jokes');
var yoMomma = require('yo-mamma').default;
var catFacts = require('cat-facts');
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var catFact = catFacts.random();
var kJoke = knockKnock();
var mJoke = yoMomma();

module.exports = {
  momJoke: function () {
    T.post('statuses/update', { status: mJoke }, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with Mom Joke @ : ' + date);
      }
    });
  },

  catFact: function () {
    T.post('statuses/update', { status: catFact }, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with cat fact @ : ' + date);
      }
    });
  },

  knockKnock: function () {
    T.post('statuses/update', { status: kJoke }, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with knock-knock joke @ : ' + date);
      }
    });
  },
};