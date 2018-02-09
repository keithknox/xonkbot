var rp = require('request-promise');
var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);

module.exports = function () {
    return rp.get('http://api.icndb.com/jokes/random').then(
      function (response) {
        data = JSON.parse(response);
        T.post('statuses/update', { status: data.value.joke }, function (err, response) {
          if (err) {
            console.log(err[0].message);
          } else {
            let date = new Date();
            console.log('Status Updated with Chuck Joke @ : ' + date);
          }
        });
      }
    ).catch((error => console.log(error)));
  };
