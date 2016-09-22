// Description:
//   Miribot says "Hi"! And some slackbot burn
//
// Commands:
//   Just mention "miribot"
//   Or slackbot mentions miribot....


// random hellos from miribot
var hellosFromMiribot = [
  'https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif',
  'https://media2.giphy.com/media/VZjeyzBLSn3uE/200_s.gif',
  'https://media.giphy.com/media/djRJNZqj508sE/giphy-facebook_s.jpg',
  'http://www.reactiongifs.com/r/dink.gif',
  'https://cdn.meme.am/instances/500x/58012475.jpg',
  'http://trollcats.com/wp-content/uploads/2010/07/la_la_la_i_cant_hear_you_trollcat-e1280290521584.jpg',
  'http://vampirediaries.com/files/2013/11/hello-there-gentle-viewers.gif',
  'That\'s me! :D',
  'Whaaaaaaaats up?! :nerdface:'
];

module.exports = function(robot) {
  robot.hear(/miribot/i, function(res) {
    res.send(res.random(hellosFromMiribot));
  });
};
