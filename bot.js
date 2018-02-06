var botLikes = require('./bot_likes.js');
var botTweets = require('./bot_tweets.js');
var botReTweets = require('./bot_retweets.js');
var botPhotos = require('./bot_photos.js');

setInterval(botLikes.hashTagLikes, 1800000);
setInterval(botLikes.userLikes, 1800000);
setInterval(botReTweets, 1800000);
setInterval(botTweets.catFact, 3600000);
setInterval(botTweets.knockKnock, 3700000);
setInterval(botTweets.momJoke, 3800000);
setInterval(botTweets.chuckJoke, 1900000);
// setInterval(botPhotos.nasaPic, 86400000);
console.log("xonkbot is now live!");
