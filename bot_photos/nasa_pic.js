var request = require('request');
var fs = require('fs');
var imgPath = './tmp/nasa.gif';
var Twitter = require('twit');
var config = require('./config.js');
var T = new Twitter(config);


function getNasaPic() {
  request.get('https://api.nasa.gov/planetary/apod?api_key='+config.nasa_key, function (err, res, data) {
    data = JSON.parse(data);
    savePhoto(data, imgPath);
  });
}

function savePhoto(data, fileName) {
  var file = fs.createWriteStream(fileName);
  request(data).pipe(file).on('close', function (err) {
    if (err) {
      console.log("Error: " + err.message);
    } else {
      console.log("Today's NASA Pic was saved.");
      var title = data.title;
      var date = data.date;
      var image = fs.createReadStream(fileName);
      uploadPhoto(title, date, image);
    }
  });
}

function uploadPhoto(title, date, image) {
  T.postMediaChunked({ file_path: imgPath }, function (err, media, res) {
    if (!err) {
      console.log(media);
      var status = {
        status: "Today's (" + date + ") NASA Pic of the day: " + title + '.',
        media_ids: media.media_id_string
      };
      T.post('statuses/update', status, function (err, tweet, res) {
        if (!err) {
          var date = new Date();
          console.log('Status Updated with NASA Pic @ : ' + date);
        }
      });
    } else {
      console.log("Error: " + err.message);
    }
  });
}

module.exports = getNasaPic;
