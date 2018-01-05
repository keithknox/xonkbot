var Twitter = require('twitter');
//var config = require('./config.js');
var T = new Twitter(consumer_key, consumer_secret, access_token_key, access_token_secret);

//Searching and liking "#NodeJS":
var twitterLikes = function(){
//set search params
  var params = {
    q: '#nodejs',
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };
//GET request:
  T.get('search/tweets', params, function (err, data, response) {
    if (!err) {
      //grab a tweet with the hastag "#nodejs":
      data.statuses.forEach(function (data) {
        let id = { id: data.id_str };
        T.post('favorites/create', id, function (err, response) {
          if (err) {
            console.log(err[0].message);
          } else {
            //find the user's screen name:
            let username = response.user.screen_name;
            //find the user's tweetId
            let tweetId = response.id_str;
            let date = new Date();
            console.log('Favorited: ', 'https://twitter.com/'+username+'/status/'+tweetId+'at    '+ date);
          }
        });
      });
    } else {
      console.log(err);
    }
  });
};
twitterLikes();
setInterval(twitterLikes, 1200000);
