// Description:
//   Provides awesome Game of Thrones entertainment!
//
// Commands:
//   miribot got fact please - gives a random Game of Thrones fact
//   Game of Thrones - gives a random Game of Thrones praise


// random Game of Thrones praise
var gotPraise = [
  'Game of Thrones is AWESOME',
  'Last Episode - mindblow, right?',
  'What is Hype may never die!',
  'http://www.reactiongifs.com/r/dink.gif',
  'OMG Game is the best TV series ever!',
  'I love Game of Thrones! Who doesn\'t, though.'
];


// random facts from Game of Thrones or A Song of Ice and Fire - advice: use spoilerfree facts!
var gotFacts = [
  'A really (really!) tenacious theory is that Benjen Stark is Daario Naharis. Or Euron Greyjoy. Or both.',
  'There’s a theory about Tyrion being the Stallion that Mounts the World and time traveling fetus. Yep, really.',
  'Some people believe the song "Roar by Katy Perry is about Jamie Lannister and in the video clip is a foreshadowing of Jamie as King.',
  'There\'s an analysis that proofs that the temperature of Dothrakis soup is about 1500°C. The meme "George ppls" was born that day.',
  'With the different timeline in the show, Balon Greyjoy actually won the War Of The Five Kings.',
  'Tommen is several years younger in the books. He wants to outlaw beets when he is the king',
  'In book 1, 2, 4 amd 5 a one-eared black tomcat is mentioned. The cat seems to be Balerion, who belonged to Rhaenys, Rhaegar Targaryen daughter, as a kitten.',
  '1981 GRRM said: "If I were really cynical I would start some medieval sword and sorcery thing, say it\'s a trilogy, then keep writing it for the rest of my life." Well trolled, George!',
  'The ancient throne of the Iron Islands is called "Seastone Chair" in the books, not "Salt Throne". Duh',
  'The Wall in Westeros has a counterpart in Essos: "The Five Forts are very old, older than the Golden Empire itself; some claim they were raised by the Pearl Emperor during the morning of the Great Empire to keep the Lion of Night and his demons from the realms of men" Sounds familiar, doesn\'t it?',
  'The direwolves are quiet small in the show. Acording to the books, they would look more like this: http://i.imgur.com/RGCR7Rs.png',
  'The dog that played Sansa’s direwolf Lady was adopted by Sophie Turner, the actress who plays Sansa. Awwwwwwww!',
  'George RR Martin types with one finger. Explains a lot. Try typing "Sir" and "Ser". Huh?',
  'One of Jorah Mormonts nickname is "Ser Friendzone". http://images-cdn.9gag.com/photo/awrPLnD_700b.jpg',
  'The appearance of Daario Naharis is KINDA diffrent from the books: "Daario keeps his beard cut in three prongs, all dyed blue. His eyes are blue and his curly hair is dyed blue. His mustachios are painted gold and he has a large, curving nose. He is lithe, smooth skinned, has a golden tooth and dresses in loud colors and finery."',
  'There is no chocolate or coffee in Westeros.',
  'Maester Aemon, maester at Castle Black, is the great-great-uncle of not only Daenerys Targaryen, but also of Stannis Baratheon and his brothers.',
  'The most hilarious character in ASOIAF is Eddison Tollet, better known as Dolorous Edd. That\s not an opinion, it\'s a fact! Really!',
  'In a theory known as "Bolt-on", some believe that Roose Bolton is an immortal being, possibly an Other, that steals and wears other people\'s skin.',
  '2015 George RR Martin said in an interview: "" There is this one character who is doomed since I introduced him, but I didn\'t how he is going to die. Since yesterday I know what to do." _sigh_',
  'The actor who plays Doran Martell played Lieutenant Julian Bashir in Star Trek: Deep Space Nine. (yeah, Star Trek!)',
  'Several actors from Game of Thrones also appeared in the Harry Potter movies.',
  'http://i.imgur.com/gwiW7.png',
  'Here\'s a live feed of GRRM\'s computer to watch his progress in real time: http://i.imgur.com/aBm9L.gif',
  'http://i.imgur.com/y6BRCLW.jpg',
  'http://imgur.com/9NLnlB4',
  'http://imgur.com/b13cDww'
];

var gotFactsCourtesy = [
  'You\'ve to say please!',
  'I didn\'t hear a "please".',
  'Say pretty please.',
  'No bot could say no to a "please"...',
  'Sorry, I didn\'t catch the "please".'
];

module.exports = function(robot) {
  robot.hear(/game of thrones/i, function(res) {
  res.send(res.random(gotPraise));
  });

  robot.respond(/.*got fact.*/i, function(res) {
    if (res.match[0].toLowerCase().indexOf('please') != -1) {
      res.send(res.random(gotFacts));
    } else {
      res.send(res.random(gotFactsCourtesy));
    }
  });
};
