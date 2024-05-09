const zodiac = require('zodiac-signs')('en');
const pokemon = require('pokemon');

console.log('Hello, World! This is my first node app!');

// Returns the zodiac sign's info for today
console.log(zodiac.getSignByDate());

// Returns the zodiac sign info of my birthday
console.log(zodiac.getSignByDate({ day: 5, month: 4 }));

// console.log(pokemon.all());
console.log(pokemon.random());
