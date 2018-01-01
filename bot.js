var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

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
    //response once a response is returned:
    //(clean this up later with a forEach function.)
    //grab a tweet with the hastag "#nodejs":
    for (let i = 0; i < data.statuses.length; i++) {
      let id = { id: data.statuses[i].id_str };
      //then mark it as a favorite:
      T.post('favorites/create', id, function(err, response) {
        if (err) {
          console.log(err[0].message);
        } else {
          //find the user's screen name:
          let username = response.user.screen_name;
          //find the user's tweetId
          let tweetId = response.id_str;
          console.log('Favorited: ', 'https://twitter.com/${username}/status/${tweetId}');
        }
      });
    }
  } else {
    console.log(err);
  }
});
