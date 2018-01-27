// http://api.icndb.com/jokes/random
const axios = require('axios');
const fetch = require('fetch');
const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);


const url = 'http://api.icndb.com/jokes/random';

let chuckJoke = function () {
  return axios.get(url).then(
    function (response) {
    T.post('statuses/update', { status: response.data.value.joke }, function (err, response) {
      if (err) {
        console.log(err[0].message);
      } else {
        let date = new Date();
        console.log('Status Updated with Chuck Joke @ : ' + date);
      }
    });
  }
  ).catch((error => console.log(error)));
};
chuckJoke();
