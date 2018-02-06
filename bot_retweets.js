var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

module.exports =
  function () {
    var params = {
      q: '#nodejs OR #NetNeutrality OR #dadjoke',
      count: 10,
      result_type: 'recent',
      lang: 'en'
    };

    T.get('search/tweets', params, function (err, data, response) {
      if (!err) {
        retweetId = data.statuses[0].id_str;
        T.post('statuses/retweet/' + retweetId, function(error, tweet, response) {
          if (!error) {
            let date = new Date();
            console.log('Retweet @ ' + date)
          }
        });
      } else {
        console.log(err);
      }
    });
  };
