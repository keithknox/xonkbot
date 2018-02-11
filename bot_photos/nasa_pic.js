var request = require('request');
var rp = require('request-promise');
var fs = require('fs');
var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);


function getPhoto() {
  request.get('https://api.nasa.gov/planetary/apod?api_key='+config.nasa_key, function (err, res, data) {
    data = JSON.parse(data);
    console.log("it worked!");
    //savePhoto(data, './nasa.jpg');
  });
}

function savePhoto(data, fileName) {
  var file = fs.createWriteStream(fileName);
  request(data).pipe(file).on('close', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Today's NASA Pic was saved.");
      var title = data.title;
      var date = data.date;
      var image = fs.createReadStream('./nasa.jpg');
      uploadPhoto(title, date, image);
    }
  });
}

function uploadPhoto(title, date, image) {
  T.post('media/upload', { media: image }, function (err, media, res) {
    if (!err) {
      console.log(media);
      var status = {
        status: "Today's (' + date + ') NASA Pic of the day: " + title + '.',
        media_ids: media.media_id_string
      };
      T.post('statuses/update', status, function (err, tweet, res) {
        if (!err) {
          var date = new Date();
          console.log('Status Updated with NASA Pic @ : ' + date);
        }
      });
    }
  });
}

module.exports = getPhoto();
