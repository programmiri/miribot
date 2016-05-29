// Description:
//   Gives the number of the current week
//
// Commands:
//   miribot KW - number of the current week (ISO week)

var moment = require('moment');

module.exports = function(robot) {
  robot.respond(/KW/i, function(res) {
    res.reply('Aktuelle Kalenderwoche: ' + moment().isoWeek());
  });
};
