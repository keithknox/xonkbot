var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var giphy = require('giphy-wrapper')(config.giphy_key);

var giphyPost = giphy.search('robots', 100, 0, 'g',function (err, data) {
    if (err) {
        console.log(err)
    }
    var selectionArray = Object.values(data)[0];
    var selection = selectionArray[Math.floor(Math.random() * selectionArray.length)]
    // return selection.bitly_url;
    console.log(selection)
});

 // module.exports = function(){
 //  T.post('media/upload', {media: giphyPost}, function (err, response) {
 //    if (err) {
 //      console.log(err[0].message);
 //    } else {
 //      T.post('statuse/update', )
 //      let date = new Date();
 //      console.log('Status Updated @ : ' + date);
 //    }
 //  });
 // }
