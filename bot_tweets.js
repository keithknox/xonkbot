var yoMomma = require('yo-mamma').default;
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

module.exports = function(){
  var joke = yoMomma();
    T.post('statuses/update', {status: joke}, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated @ : ' + date);
      }
    });
}
