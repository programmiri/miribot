// Description:
//   Triggered
//
// Commands:
//   Just a few random triggers

const randomTriggerAnswer = [
  'https://i.imgflip.com/x9dke.jpg',
  'https://img.memesuper.com/ca334019156d8394cd0f0cbddcfe8198_evil-plotting-raccoon-meme-im-back-meme_600-391.jpeg',
  'http://m.memegen.com/f6kk6v.jpg'
];

module.exports = function(robot) {
  robot.hear(/welcome back miribot/i, function(res) {
    res.send(res.random(randomTriggerAnswer));
  });
};

/*
