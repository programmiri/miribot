// Description:
//   Shames your team.
//
// Commands:
//   just write "shame on you"

var shamingTheTeam = [
  ':bell: Shame! :bell: Shame! :bell: Shame! :bell:',
  'http://www.reactiongifs.com/r/lkay.gif',
  'http://www.reactiongifs.com/wp-content/uploads/2012/09/smh-kid.gif',
  'http://www.reactiongifs.com/r/whid.gif',
  'https://media.giphy.com/media/ugBTbHrwSmqI0/giphy.gif',
  'https://media.giphy.com/media/eP1fobjusSbu/giphy.gif',
  'https://media.giphy.com/media/Db3OfoegpwajK/giphy.gif',
  'https://media.giphy.com/media/dJtDZzyjLF66I/giphy.gif',
  'https://media.giphy.com/media/xT5LMJEgNVGGYUTTGM/giphy.gif',
  'https://media.giphy.com/media/m6ljvZNi8xnvG/giphy.gif',
  'https://media.giphy.com/media/c2YyNySJ1CbFC/giphy.gif',
  'https://media.giphy.com/media/KhuIVfgMwQC6k/giphy.gif',
  'https://media.giphy.com/media/qXVtJdoWZYFtC/giphy.gif',
  'https://media.giphy.com/media/7kOVRvbEEVIXe/giphy.gif',
  'https://media.giphy.com/media/1ITtdVzH5XGNy/giphy.gif'
];

module.exports = function(robot) {
  robot.hear(/shame on you/i, function(res) {
    res.send(res.random(shamingTheTeam));
  });
};

