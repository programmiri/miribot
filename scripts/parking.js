// Description:
//   Checks if a parking slot (google cal) is available.
//
// Commands:
//   miribot parking

var parkingcheck = require('../lib/ical-parking-check');
var calLinkParking1 = process.env.HUBOT_PARKING_ICAL_LINK1;
var calLinkParking2 = process.env.HUBOT_PARKING_ICAL_LINK2;

module.exports = function(robot) {
  robot.respond(/parking/i, function(res) {
    parkingcheck(calLinkParking1, function(result) {
      res.reply('Parking space 1 ' + result);
    });

    parkingcheck(calLinkParking2, function(result) {
      res.reply('Parking space 2 ' + result);
    });
  });
};
