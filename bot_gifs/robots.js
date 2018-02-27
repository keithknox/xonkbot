var request = require('request');
var fs = require('fs');
var pathToGif = './tmp/robots.gif';
var mediaType = 'image/gif';
var mediaData = fs.readFileSync(pathToGif);
var mediaSize = fs.statSync(pathToGif).size;
var Twitter = require('twit');
var config = require('../config.js');
var T = new Twitter(config);

function robotsGif() {
  request.get('http://api.giphy.com/v1/gifs/random?tag=robots&api_key='+ config.giphy_key, function (err, res, body) {
    body = JSON.parse(body);
    gif = body.data.images.fixed_height;
    console.log(body.data.images.fixed_height);
    saveGif(gif, pathToGif);
  });
}

function saveGif(data, fileName) {
  var file = fs.createWriteStream(fileName);
  request(data).pipe(file).on('close', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('A sweet robot GIF was saved.');
      uploadGif(pathToGif);
    }
  });
};

function uploadGif(pathToGif) {
  T.postMediaChunked({ file_path: pathToGif}, function (err, body, res) {
    if (err) {
      console.log(err);
    } else {
      var params = {
        status: 'Now time for a family pic: ',
        media_ids:body.media_id_string
      }
      postStatus(params);
    }
  });
}

function postStatus(params) {
  T.post('statuses/update', params, function (err, body, res) {
    if (err) {
      console.log(err);
    } else {
      var date = new Date();
      console.log('Status Updated with robot gif @ : ' + date);
    }
  });
}

module.exports = robotsGif;
