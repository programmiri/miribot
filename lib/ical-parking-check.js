var ical = require('ical');
var moment = require('moment');

function isTimeInRange(time, start, end) {
  return time.isBetween(start, end);
}

function isTimeLaterOnSameDay(timeToCheck, givenTime) {
  return timeToCheck.isSame(givenTime, 'day') && timeToCheck.isSameOrAfter(givenTime);
}

function checkParkingSlot(calLinkParking, callback) {
  var now = moment();
  var isOccupiedNow = false;
  var eventsLaterToday = [];
  var events = [];

  ical.fromURL(calLinkParking, {}, function(err, data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        events.push(data[key]);
      }
    }

    events.filter(function(event) {
      return event.start;
    }).filter(function(event) {
      var eventStart = moment(event.start);
      return eventStart.isSame(now, 'day');
    }).forEach(function(event) {
      var start = moment(event.start);
      var end = moment(event.end);

      if (isTimeInRange(now, start, end)) {
        isOccupiedNow = true;
      } else if (isTimeLaterOnSameDay(start, now)) {
        eventsLaterToday.push(start);
      }
    });
    if (isOccupiedNow) {
      callback('ist besetzt');
    } else if (eventsLaterToday.length > 0) {
      callback('ist frei, aber später belegt');
    } else {
      callback('ist ab jetzt den ganzen Tag frei.');
    }
  });
}

module.exports = checkParkingSlot;
