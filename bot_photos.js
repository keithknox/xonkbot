var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var giphy = require('giphy-wrapper')('trIEetB6DavObdvdZP4xgw5EgXjjc33e');

giphy.search('robots', 10, 0, 'g',function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(Object.values(data)[0].length);
});
