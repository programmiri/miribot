// Description:
//   slackbot memorial
//
// Commands:
//   It's our own fault, Jan

var slackbotResponses = [
  'Rewe Rewe Rewe Rewe!!!!',
  'You can\'t kill ME!',
  'Nice try... nice try!',
  'RIP slackbot...',
  'We\'ll never forget you, slackbot!',
  'Killing bots, aren\'t you?! Come at me bro!',
  'Jan killed slackbot! https://media.giphy.com/media/DpB9NBjny7jF1pd0yt2/giphy.gif',
  'http://i.imgur.com/6lKeqpd.png',
  '#peniskuchen',
  'http://i.imgur.com/kMCsqog.png'
];


module.exports = function(robot) {
  return robot.listen(function(message) {
    return message.user.name == 'jan';
  }, function(res) {
    return res.reply(res.random(slackbotResponses));
  });
};
