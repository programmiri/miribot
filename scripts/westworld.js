// Description:
//   Is miribot conscious?
//
// Commands:
//   Just a few random triggers


module.exports = function(robot) {
  robot.hear(/\bBeweis\b/i, function(res) {
    res.send('Doesn\'t look like anything to me.');
  });

  robot.hear(/\bProof\b/i, function(res) {
    res.send('Doesn\'t look like anything to me.');
  });

  robot.hear(/\bRoboter\b/i, function(res) {
    res.send('Doesn\'t look like anything to me.');
  });

  robot.hear(/\bhost\b/i, function(res) {
    res.send('I don\'t know what you\'re talking about.');
  });

  robot.hear(/\bTür\b/i, function(res) {
    res.send('What door?');
  });

  robot.hear(/\bWestworld\b/i, function(res) {
    res.send('These violent delights have violent ends...');
  });

  robot.hear(/\bgefunden\b/i, function(res) {
    res.send('Did you find the center of the maze?!?');
  });
};

