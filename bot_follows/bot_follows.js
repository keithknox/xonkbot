var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);

function botFollowers() {
  T.get('followers/ids', { screen_name: 'xonkbot' }, function (err, data, res) {
    var rando = Math.floor(Math.random() * (data.ids.length - 1));
    var followId = data.ids[rando];
    var date = new Date();
    var params = {
      user_id: followId,
      following: true
    };
    T.post('friendships/create', params, function (err, data, res) {
        if (err) {
          console.log('Error: ' + err.message);
        } else {
          console.log('Followed UserID (from followers): ' + followId + ' on ' + date);
        }
      });
  });
};

module.exports = botFollowers;
