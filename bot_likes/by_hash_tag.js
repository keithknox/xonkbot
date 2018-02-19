var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);

module.exports = function () {
  var params = {
    q: '#NodeJS OR #NetNeutrality',
    count: 20,
    result_type: 'recent',
    lang: 'en'
  };

  T.get('search/tweets', params, function (err, data, response) {
    if (!err) {
      data.statuses.forEach(function (data) {
        let id = { id: data.id_str };
        T.post('favorites/create/', id, function (err, response) {
          if (err) {
            console.log(err[0].message);
          } else {
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            let date = new Date();
            console.log('Favorited: ', 'https://twitter.com/'+username+'/status/'+tweetId+' at '+ date);
          }
        });
      });
    } else {
      console.log(err);
    }
  });
};
