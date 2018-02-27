var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);

function byUser () {
  var params = {
    screen_name: '@KeithKnoxKnox',
    count: 5
  };
  T.get('statuses/user_timeline', params, function (err, data, res)  {
    if (!err) {
      data.forEach(function (data) {
        var id = { id: data.id_str };
        T.post('favorites/create', id, function (err, res) {
          if (err) {
            console.log(err[0].message);
          } else {
            var username = data.user.screen_name;
            var tweetId = data.id_str;
            var date = new Date();
            console.log('Favorited: ', 'https://twitter.com/'+username+'/status/'+tweetId+' at '+ date);
          }
        });
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = byUser;
