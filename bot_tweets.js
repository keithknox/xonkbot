var knockKnock = require('knock-knock-jokes');
var oneLinerJoke = require('one-liner-joke');
var yoMomma = require('yo-mamma').default;
var catFacts = require ('cat-facts');
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var kJoke = knockKnock();
var mJoke = yoMomma();
var oJoke = oneLinerJoke.getRandomJoke().body;
var catFact = catFacts.random();

module.exports = {
  momJoke: function() {
    T.post('statuses/update', {status: mjoke}, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with Mom Joke @ : ' + date);
      }
    });
  },
  catFact: function(){
    T.post('statuses/update', {status: catFact}, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with cat fact @ : ' + date);
      }
    });
  },
  knockKnock: function(){
    T.post('statuses/update', {status: kJoke}, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with knock-knock joke @ : ' + date);
      }
    });
  }
  }
};
