// Description:
//   Gives the number of the current week
//
// Commands:
//   miribot weeknum - number of the current week (ISO week)

var moment = require('moment');

module.exports = function(robot) {
  robot.respond(/miribot weeknum/i, function(res) {
    res.reply('Current weeknumber: ' + moment().isoWeek());
  });
};
