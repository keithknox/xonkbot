var catFacts = require('./cat_fact.js');
var chuckJoke = require('./chuck_joke.js');
var knockKnock = require('./knock_knock.js');
var momJoke = require('./mom_joke.js');

module.exports = function () {
  setInterval(catFacts, 3600000);
  setInterval(knockKnock, 3700000);
  setInterval(momJoke, 3800000);
  setInterval(chuckJoke, 1900000);
};
