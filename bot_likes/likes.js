var byHashTag = require('by_hash_tag.js');
var byUser = require('by_user.js');

module.exports = function() {
  setInterval(byHashTag, 1800000);
  setInterval(byUser, 1800000);
}
