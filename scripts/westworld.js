// Description:
//   Is miribot conscious?
//
// Commands:
//   Just a few random triggers


module.exports = function(robot) {
  robot.hear(/Foto/i, function(res) {
    res.send('Photo? Doesn\'t look like anything to me.');
  });

  robot.hear(/Roboter/i, function(res) {
    res.send('Doesn\'t look like anything to me.');
  });

  robot.hear(/host/i, function(res) {
    res.send('I don\'t know what you\'re talking about.');
  });

  robot.hear(/Tür/i, function(res) {
    res.send('What door?');
  });

  robot.hear(/Westworld/i, function(res) {
    res.send('These violent delights have violent ends...');
  });

  robot.hear(/gefunden/i, function(res) {
    res.send('Did you find the center of the maze?!?');
  });
};

