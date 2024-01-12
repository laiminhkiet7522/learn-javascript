'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//   console.log('I can drive');
// }


// LECTURE: Functions
// console.log("----------LECTURE: Functions----------");
// function logger() {
//   console.log('My name is Minh Kiet');
// }
// //Caling / Running / Invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// console.log(fruitProcessor(5, 0));

// const num = Number('23');
// console.log(typeof (num));

// console.log("1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'.Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'");
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}\n`;
// }

// console.log("2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console");
// const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
// const descGermany = describeCountry('Germany', 83, 'Berlin');
// const descFinland = describeCountry('Finland', 6, 'Helsinki');
// console.log(descPortugal, descGermany, descFinland);


// LECTURE: Function Declarations vs.Expressions
// console.log("----------LECTURE: Function Declarations vs.Expressions----------");

//Function Declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(2002);

//Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// }
// const age2 = calcAge2(2002);
// console.log(age1, age2);

// console.log("1. The world population is 7900 million people.Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents.For example, China has 1441 million people, so it's about 18.2% of the world population");
// console.log("2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100");
// console.log("3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console");
// console.log("4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations(can be the same populations) ");

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population){
//   return (population / 7900) * 100;
// }

// const percPortugal1 = percentageOfWorld1(10);
// const percChina1 = percentageOfWorld1(1441);
// const percUSA1 = percentageOfWorld1(332);
// console.log(percPortugal1, percChina1, percUSA1);

// const percPortugal2 = percentageOfWorld2(20);
// const percChina2 = percentageOfWorld2(1440);
// const percUSA2 = percentageOfWorld2(300);
// console.log(percPortugal2, percChina2, percUSA2);


// LECTURE: Arrow Functions
// console.log("----------LECTURE: Arrow Functions----------");

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2040 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearUntilRetirement(2002,'Kiet'));
// console.log(yearUntilRetirement(2003,'Meo'));

// console.log("1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'");
// const percentageOfWorld3 = population => (population / 7900) * 100;


//LECTURE: Functions Calling Other Functions
// console.log("----------LECTURE: Functions Calling Other Functions----------");
// function cutFruitPieces(fruit){
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} piece of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(5, 10));

// console.log("1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2 % of the world'");
// console.log("2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier");
// console.log("3. Call 'describePopulation' with data for 3 countries of your choice");

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   let percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//   console.log(description);
// }

// describePopulation('Portugal', 10);
// describePopulation('China', 1441);
// describePopulation('USA', 332);

// const calcAge = function (birthYear) {
//   return 2040 - birthYear;
// }

// const yearUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retired in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired ❤️`);
//     return -1;
//   }
//   // return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearUntilRetirement(2002, 'Minh Kiet'));
// console.log(yearUntilRetirement(1950, 'John'));