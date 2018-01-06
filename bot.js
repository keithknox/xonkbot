var botLikes = require('./bot_likes.js');
var botTweets = require('./bot_tweets.js');
botLikes();
botTweets();
setInterval(botLikes, 1200000);
setInterval(botTweets, 3600000);
