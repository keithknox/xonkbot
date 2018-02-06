var axios = require('axios');
var fs = require('fs');
var Twitter = require('twitter');
var config = require('./config');
var T = new Twitter(config);

module.exports = {
  nasaPic: function () {
    //getting the image
    axios.get('https://api.nasa.gov/planetary/apod?api_key='+config.nasa_key).then(function (response) {
        var imageSave = axios({
          method: 'get',
          url: response.data.url,
          responseType: 'stream'
        }).then(function(response){
          response.data.pipe(fs.createWriteStream('nasa.jpg'));
          console.log('File saved!');
        });

        //namting the title
        var title = response.data.title;

        //loading the image to tweet
        var image = fs.readFileSync('nasa.jpg');
        T.post('media/upload', { media: image }, function (error, media, response) {
          if (!error) {
            console.log('Image successfully loaded.');
            var status = {
              status: "Today's NASA Pic of the Day: " + title,
              media_ids: media.media_id_string // Pass the media id string
            };
          //taking the image, and tweet and posting the tweet
            T.post('statuses/update', status, function (error, tweet, response) {
              if (!error) {
                tweet;
              }
            });
          }
        });
      }).catch(function(error){
          console.log('Error: ' + error);
    });
    }
};
