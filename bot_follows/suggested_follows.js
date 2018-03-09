var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);

// Slugs:
// [ { size: 16, slug: 'sports', name: 'Sports' },
// { size: 13, slug: 'television', name: 'Television' },
// { size: 15, slug: 'music', name: 'Music' },
// { size: 15, slug: 'fashion', name: 'Fashion' },
// { size: 14, slug: 'entertainment', name: 'Entertainment' },
// { size: 12, slug: 'books', name: 'Books' },
// { size: 15, slug: 'gaming', name: 'Gaming' },
// { size: 9, slug: 'family', name: 'Family' },
// { size: 17, slug: 'food-drink', name: 'Food & Drink' },
// { size: 15, slug: 'funny', name: 'Funny' },
// { size: 10, slug: 'business', name: 'Business' },
// { size: 14, slug: 'government', name: 'Government' },
// { size: 18, slug: 'news', name: 'News' } ]


function suggestedFollowers() {
  var params = {
    slug: 'funny',
    lang: 'en'
  }

  T.get('users/suggestions/:slug', params, function (err, data, res) {
    var rando = Math.floor(Math.random() * (data.users.length - 1));
    var followName = data.users[rando].screen_name;
    var date = new Date();
    var params = {
      screen_name: followName,
      following: true
    };
    T.post('friendships/create', params, function (err, data, res) {
        if (err) {
          console.log('Error: ' + err.message);
        } else {
          console.log('Followed: ' + followName + ' on ' + date);
        }
      });
  });
};

module.exports = suggestedFollowers;
