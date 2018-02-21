var catFact = require('./bot_tweets/cat_fact.js');
var chuckJoke = require('./bot_tweets/chuck_joke.js');
var knockKnock = require('./bot_tweets/knock_knock.js');
var momJoke = require('./bot_tweets/mom_joke.js');
var byHashTag = require('./bot_likes/by_hash_tag.js');
var byUser = require('./bot_likes/by_user.js');
var reTweets = require('./bot_retweets/retweets.js');
var nasaPic = require('./bot_photos/nasa_pic.js');
var roboGifs = require('./bot_gifs/robots.js');

setInterval(catFact, 3800000);
setInterval(knockKnock, 3800000);
setInterval(momJoke, 3800000);
setInterval(chuckJoke, 1900000);
setInterval(byHashTag, 1800000);
setInterval(byUser, 1800000);
setInterval(reTweets, 1800000);
setInterval(nasaPic, (86400000 / 2));
setInterval(roboGifs, 7200000);

console.log('xonkbot is now live!');
