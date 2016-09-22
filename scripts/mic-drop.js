// Description:
//   Miribot lets the mic drop for users
//
// Commands:
//   Only works if a special user want it
//   and declares she's out!


// random hellos from miribot
var randomMicDrops = [
  'https://media.giphy.com/media/3o7qDSOvfaCO9b3MlO/giphy.gif',
  'https://media.giphy.com/media/5V5gCfO0xWD4I/giphy.gif',
  'https://media.giphy.com/media/i6TQUuiT5hjSU/giphy.gif'
];

var slackbotBurn = [];

module.exports = function(robot) {
  return robot.listen(function(message) {
    return message.user.name === 'mirjam.b' && message.text === '/Mirjam out/';
  }, function(res) {
      return res.send(randomMicDrops);
  });
};

