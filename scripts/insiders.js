// Description:
//   A special little thing about blanks
//
// Commands:
//   @benda

module.exports = function(robot) {
  robot.hear(/benda/i, function(res) {
    res.send('Du meinst doch BRENDA?!');
  });
};


module.exports = function(robot) {
  robot.hear(/Reminder: quack quack/i, function(res) {
    res.send('Quack Quack? Was besseres ist dir nicht eingefallen? Ich bin Ent-setzt!');
  });
};
