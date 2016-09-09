// Description:
//   Proves you right all the time.
//
// Commands:
//   secret symbole - says you're right. And the best!

var trigger = process.env.HUBOT_I_M_RIGHT_TRIGGER;
// nice try... i wouldn't post my trigger here, would I now?

var yourPraise = [
  'You\'re right!',
  'You\'re so smart!',
  'I totally agree!',
  'I totally agree!',
  'You\'re dead right!',
  'Wow. You totally got it!',
  'Yey, you\'re spot on!',
  'Exactly!',
  'Sounds about right. As always!',
  'Second!',
  'OMG you know everything!',
  'Is there something you\'ve ever been wrong about?!',
  'Look how smart you are!'
];


module.exports = function(robot) {
  robot.hear(new RegExp(trigger), function(res) {
    res.send(res.random(yourPraise));
  });
};
