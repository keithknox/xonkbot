var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

module.exports = function(){
  
  var phraseOptions = ["beepBoop-boopBeep!","Hello World!", "im in ur tweetz.", "i am a sane genius too!", "Uniblab 4 Prez!", "lemme begin... 1/22", "a hot dog is a sandwich", "i hope you understand that i am a bot.", "bots are people too.", "social media is ez."]

  function choosePhrase(arr){
    return arr[Math.floor(Math.random() * arr.length)]
  }
  var phrase = choosePhrase(phraseOptions);

  T.post('statuses/update', {status: phrase}, function (err, response) {
    if (err) {
      console.log(err[0].message);
    } else {
      let date = new Date();
      console.log('Status Updated @ : ' + date);
    }
  });
}
