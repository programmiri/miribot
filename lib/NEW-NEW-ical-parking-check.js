// const ical = require('ical');
// const moment = require('moment');
// const calLinkParking1 = process.env.HUBOT_PARKING_ICAL_LINK1;
// const calLinkParking2 = process.env.HUBOT_PARKING_ICAL_LINK2;

// function isTimeInRange(time, start, end) {
//   return time.isBetween(start, end);
// }

// function isTimeLaterOnSameDay(timeToCheck, givenTime) {
//   return timeToCheck.isSame(givenTime, 'day') && timeToCheck.isSameOrAfter(givenTime);
// }


// //
// function checkParkingSlots() {

//   let now = moment();
//   //let now = moment('2017-11-15 09:30');
//   let isOccupiedNow = false;
//   let eventsLaterToday = [];
//   let events = [];

//   ical.fromURL(calLinkParking1, {}, function(err, data) {
//     for (let key in data) {
//       if (data.hasOwnProperty(key)) {
//         events.push(data[key]);
//       }
//     }

//     events.filter(function(event) {
//       return event.start;
//     }).filter(function(event) {
//       let eventStart = moment(event.start);
//       return eventStart.isSame(now, 'day');
//     }).forEach(function(event) {
//       let start = moment(event.start);
//       let end = moment(event.end);

//       if (isTimeInRange(now, start, end)) {
//         isOccupiedNow = true;
//       } else if (isTimeLaterOnSameDay(start, now)) {
//         eventsLaterToday.push(start);
//       }
//     });
//     if (isOccupiedNow) {
//       return 'besetzt';
//       //callback('ist besetzt');
//     } else if (eventsLaterToday.length > 0) {
//       return 'frei, später belegt';
//       //console.dir(eventsLaterToday);
//       //callback('ist frei, aber später belegt');
//     } else {
//       return 'ganzen tag frei';
//       //callback('ist ab jetzt den ganzen Tag frei.');
//     }
//   });
// }

// function test(callback) {
//   let res = checkParkingSlots(calLinkParking1);
//   callback('hu und ' + res);
// }

// module.exports = test;
