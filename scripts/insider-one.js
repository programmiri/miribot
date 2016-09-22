// Description:
//   A special little thing about blanks
//
// Commands:
//   @benda

module.exports = function(robot) {
  robot.hear(/@benda/i, function(res) {
    res.send('Du meinst doch BENDA?!');
  });
};

