'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//   console.log('I can drive');
// }


function logger() {
  console.log('My name is Minh Kiet');
}
//Caling / Running / Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const num = Number('23');
console.log(typeof (num));