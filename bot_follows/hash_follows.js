var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);

function hashFollowers() {
  var params = {
    q: '#NodeJS',
    count: 10,
    result_type: 'recent',
    lang: 'en'
  };

  T.get('search/tweets', params, function (err, data, res) {
    var rando = Math.floor(Math.random() * (data.statuses.length));
    var hashFollowName = data.statuses[rando].user.screen_name;
    var date = new Date();
    var params = {
      screen_name: hashFollowName,
      following: true
    };
    T.post('friendships/create', params, function (err, data, res) {
        if (err) {
          console.log('Error: ' + err.message);
        } else {
          console.log('Followed: ' + hashFollowName + ' on ' + date);
        }

      });
  });
};

module.exports = hashFollowers;
