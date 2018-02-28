var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);

function reTweet () {
  var params = {
    q: '#nodejs OR #NetNeutrality',
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };

  T.get('search/tweets', params, function (err, data, response) {
    if (!err) {
      data.statuses.forEach(function(data){
        retweetId = data.id_str;
        T.post('statuses/retweet/' + retweetId, function(error, tweet, response) {
          if (!error) {
            let date = new Date();
            console.log('Retweet @ ' + date)
          }
        });
      });
    } else {
      console.log(err.message);
    }
  });
};

module.exports = reTweet;
