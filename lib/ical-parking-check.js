const ical = require('ical');
const moment = require('moment');


function isTimeInRange(time, start, end) {
  return time.isBetween(start, end);
}

function isTimeLaterOnSameDay(timeToCheck, givenTime) {
  return timeToCheck.isSame(givenTime, 'day') && timeToCheck.isSameOrAfter(givenTime);
}

function checkParkingSlot(calLinkParking, callback) {
  let now = moment();
  let isOccupiedNow = false;
  let eventsLaterToday = [];
  let events = [];

  ical.fromURL(calLinkParking, {}, function(err, data) {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        events.push(data[key]);
      }
    }

    events.filter(function(event) {
      return event.start;
    }).filter(function(event) {
      let eventStart = moment(event.start);
      return eventStart.isSame(now, 'day');
    }).forEach(function(event) {
      let start = moment(event.start);
      let end = moment(event.end);

      if (isTimeInRange(now, start, end)) {
        isOccupiedNow = true;
      } else if (isTimeLaterOnSameDay(start, now)) {
        eventsLaterToday.push(start);
      }
    });
    if (isOccupiedNow) {
      callback('ist besetzt');
    } else if (eventsLaterToday.length > 0) {
      let nextTimeOccupied = eventsLaterToday[0].format('HH.mm');
      callback('ist jetzt frei, aber ab ' + nextTimeOccupied + ' Uhr belegt.');
    } else {
      callback('ist ab jetzt den ganzen Tag frei.');
    }
  });
}

module.exports = checkParkingSlot;
