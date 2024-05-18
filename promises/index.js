const fs = require('fs');

// console.log(__dirname);

// fs.readFile(__dirname + '/a.txt', 'utf-8', (error, text) => {
//   console.log(text);
// });

// fs.readFile(__dirname + '/b.txt', 'utf-8', (error, text) => {
//   console.log(text);
// });

// fs.readFile(__dirname + '/c.txt', 'utf-8', (error, text) => {
//   console.log(text);
// });

// Callback hell
// Pyramid of doom
// fs.readFile(__dirname + '/a.txt', 'utf-8', (error, text) => {
//   console.log(text);

//   fs.readFile(__dirname + '/b.txt', 'utf-8', (error, text) => {
//     console.log(text);

//     fs.readFile(__dirname + '/c.txt', 'utf-8', (error, text) => {
//       console.log(text);
//     });
//   });
// });

// Promises
// 3 possible states - pending, resolved, reject
const aPromise = fs.promises.readFile(__dirname + '/a.txt', 'utf-8');
const bPromise = fs.promises.readFile(__dirname + '/b.txt', 'utf-8');
const cPromise = fs.promises.readFile(__dirname + '/c.txt', 'utf-8');

// pending state
console.log('my promise', aPromise);

// One Promise
// aPromise
//   .then(aFile => {
//     // resolved state
//     console.log(aFile);
//   })
//   .catch(error => {
//     // rejected state
//     console.log(error);
//   });

// Chaining Promises
const allMyPromises = Promise.all([aPromise, bPromise, cPromise]);

// aPromise
//   .then(aFile => {
//     // resolved state
//     console.log(aFile);
//     return bPromise;
//   })
//   .then(bFile => {
//     console.log(bFile);
//     return cPromise;
//   })
//   .then(cFile => {
//     console.log(cFile);
//     return allMyPromises;
//   })
//   .then(allValues => {
//     // console.log(allValues);
//     allValues.forEach(value => {
//       console.log(value);
//     });
//   })
//   .catch(error => {
//     // rejected state
//     console.log(error);
//   });

// Promise.all

// allMyPromises.then(allValues => {
//   console.log(allValues);
//   // allValues.forEach(value => {
//   //   console.log(value);
//   // });
// });

async function printTexts() {
  try {
    const aText = await aPromise;
    setTimeout(async () => {
      const cText = await cPromise;
      console.log(cText);
    }, 3000);
    const bText = await bPromise;

    console.log(aText);
    console.log(bText);
  } catch (error) {
    console.log(error);
  }
}

printTexts();
