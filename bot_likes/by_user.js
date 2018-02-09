var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);

function userLikes() {
  var params = {
    screen_name: '@KeithKnoxKnox',
    count: 5
  };
  T.get('statuses/user_timeline', params, function (err, data, response)  {
    if (!err) {
      data.forEach(function (data) {
        let id = { id: data.id_str };
        T.post('favorites/create', id, function (err, response) {
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
  }
