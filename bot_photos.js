var Twitter = require('twitter');
var config = require('./config.js');
var fs = require('fs');
var request = require('request');
var T = new Twitter(config);
