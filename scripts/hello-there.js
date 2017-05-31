// Description:
//   Miribot says "Hi" like a good bot!
//
// Commands:
//   Just wait until someone says hello to miribot

// random hellos from miribot
var hellosFromMiribot = [
  'https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif',
  'https://media.giphy.com/media/F1unFvakdEyqs/giphy.gif',
  'https://media.giphy.com/media/djRJNZqj508sE/giphy-facebook_s.jpg',
  'http://www.reactiongifs.com/r/dink.gif',
  'https://cdn.meme.am/instances/500x/58012475.jpg',
  'http://trollcats.com/wp-content/uploads/2010/07/la_la_la_i_cant_hear_you_trollcat-e1280290521584.jpg',
  'http://vampirediaries.com/files/2013/11/hello-there-gentle-viewers.gif',
  'That\'s me! :D',
  'https://cdn.meme.am/instances/37564810.jpg',
  'http://hydra-media.cursecdn.com/sto.gamepedia.com/a/a3/User_Zutty_Hello.png',
  'huhu :blush:'
];

module.exports = function(robot) {
  robot.hear(/hallo miribot|hello miribot|hey miribot|hi miribot/i, function(res) {
    res.send(res.random(hellosFromMiribot));
  });
};
