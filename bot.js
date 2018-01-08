var botLikes = require('./bot_likes.js');
var botTweets = require('./bot_tweets.js');
setInterval(botLikes, 1800000);
// setInterval(botTweets.catFact, 1800000);
// setInterval(botTweets.knockKnock, 3700000);
// setInterval(botTweets.momJoke, 3800000);
botTweets.catFact();
botTweets.knockKnock()
botTweets.momJoke();
