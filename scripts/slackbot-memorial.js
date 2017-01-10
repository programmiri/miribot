// Description:
//   slackbot memorial
//
// Commands:
//   It's our own fault, Jan

var slackbotResponses = [
  'Rewe Rewe Rewe Rewe!!!!',
  'You can\'t kill me!',
  'Nice try, nice try!',
  'RIP slackbot...',
  'We\'ll never forget you, slackbot!',
  'Killing bots, aren\'t you?! Come at me bro!'
];


module.exports = function(robot) {
  return robot.listen(function(message) {
    return message.user.name == 'jan';
  }, function(res) {
    return res.reply(res.random(slackbotResponses));
  });
};
