var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

module.exports = function(){

  var phraseOptions = ["beepBoop-boopBeep!","Hello World!", "im in ur tweetz.", "i am a sane genius too!", "Uniblab 4 Prez!", "lemme begin... 1/22", "a hot dog is a sandwich", "i hope you understand that i am a bot.", "bots are people too.", "social media is ez.", "Haxx0r ipsum gnu firewall machine code blob exception race condition big-endian port data mutex cache lib hack the mainframe leet malloc. Fail win James T. Kirk cat dereference mountain dew January 1, 1970", "Float eaten by a grue default client tarball bar L0phtCrack daemon nak over clock irc flood pwned crack linux for fatal server suitably small values.", "Wannabee concurrently public injection fail wabbit buffer stack trace true hello world d00dz continue packet fork bar protocol.", "Donald Knuth foad machine code rsa vi eof echo grep highjack cache char gurfle epoch system throw malloc stack afk hack unix false."]

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
