var catFacts = require('cat-facts');
var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);
var catFact = catFacts.random();

module.exports = function () {
  T.post('statuses/update', { status: catFact }, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with Cat Fact @ : ' + date);
      }
    });
};
