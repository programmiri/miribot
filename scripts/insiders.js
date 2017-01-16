// Description:
//   Triggered
//
// Commands:
//   Just a few random triggers

const randomTriggerAnswer = [
  'http://i3.kym-cdn.com/photos/images/original/000/882/132/346.jpg',
  'http://i1.kym-cdn.com/photos/images/newsfeed/000/933/165/048.png',
  'https://blueollie.files.wordpress.com/2014/12/triggered.jpg',
  'https://pbs.twimg.com/profile_images/757591075640999936/O1V6BFvj.jpg',
  'http://www.mememaker.net/static/images/memes/4536155.jpg'
];

module.exports = function(robot) {
  robot.hear(/trigger/i, function(res) {
    res.send(res.random(randomTriggerAnswer));
  });
};

