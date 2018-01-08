var botLikes = require('./bot_likes.js');
var botTweets = require('./bot_tweets.js');
setInterval(botLikes, 1800000);
setInterval(botTweets.catFact, 3600000);
setInterval(botTweets.knockKnock, 3700000);
setInterval(botTweets.momJoke, 3800000);
console.log("xonkbot is now live!");
