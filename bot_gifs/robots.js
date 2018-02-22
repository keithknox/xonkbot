var request = require('request');
var fs = require('fs');
var pathToGif = './tmp/robots.gif';
var mediaType = 'image/gif';
var mediaData = fs.readFileSync(pathToGif);
var mediaSize = fs.statSync(pathToGif).size;
var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);

function initUpload() {
  return makePost('media/upload', {
    command: 'INIT',
    total_bytes: mediaSize,
    media_type: mediaType,
  }).then(data => data.media_id_string);
}

function appendUpload (mediaId) {
  return makePost('media/upload', {
    command: 'APPEND',
    media_id: mediaId,
    media: mediaData,
    segment_index: 0
  }).then(data => mediaId);
}

function finalizeUpload(mediaId) {
  return makePost('media/upload', {
    command: 'FINALIZE',
    media_id: mediaId
  }).then(data => mediaId);
}

function makePost(endpoint, params) {
  return new Promise((resolve, reject) => {
    T.post(endpoint, params, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

function robotsGif() {
  request.get('http://api.giphy.com/v1/gifs/random?tag=robots&api_key='+ config.giphy_key, function(err, res, body) {
    body = JSON.parse(body);
    gif = body.data.images.fixed_height;
    console.log(body.data.images.fixed_height);
    saveGif(gif, pathToGif);
    initUpload()
    .then(appendUpload)
    .then(finalizeUpload)
    .then(mediaId => {
        var status = {
          status: "I'd like to share some family photos: ",
          media_ids: mediaId,
        };
        T.post('statuses/update', status, function (err, tweet, res) {
          if (!err) {
            var date = new Date();
            console.log('Status Updated with Robot GIF @ : ' + date);
          }
        });
      });
  });
}

function saveGif(data, fileName) {
  var file = fs.createWriteStream(fileName);
  request(data).pipe(file).on('close', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('A sweet robot GIF was saved.');
    }
  });
};

module.exports = robotsGif;
