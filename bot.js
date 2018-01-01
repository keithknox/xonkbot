var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

//set search params
var params = {
  q:'#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}
