// Description:
//   slackbot memorial
//
// Commands:
//   It's our own fault, Jan

var slackbotResponses = [
  'Rewe Rewe Rewe Rewe!!!!',
  'You can\'t kill me!',
  'Nice try Jan, nice try!'
];


module.exports = function(robot) {
  return robot.listen(function(message) {
    return message.user.name == 'maxleistner';
  }, function(res) {
    return res.reply(res.random(slackbotResponses));
  });
};
