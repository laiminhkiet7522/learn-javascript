"use strict";

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

// LECTURE: Function Declarations vs. Expressions
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

// LECTURE: Introduction to Arrays
// console.log("----------LECTURE: Introduction to Arrays----------");

// const friend1 = 'Phuc';
// const friend2 = 'Thong';
// const friend3 = 'Minh';

// const friends = ['Phuc', 'Thong', 'Minh'];
// console.log(friends);

// const year = new Array(2000, 2001, 2002);

// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[0] = 'Kiet';
// console.log(friends);

// const firstName = 'Kiet';
// const kiet = [firstName, 'Minh Lai', 2100 - 2002, 'Programmer', friends];
// console.log(kiet);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2050 - birthYear;
// }
// const year_arr = [1990, 2000, 2005, 2015];
// const age1 = calcAge(year_arr[0]);
// const age2 = calcAge(year_arr[1]);
// const age3 = calcAge(year_arr[2]);
// console.log(age1);
// console.log(age2);
// console.log(age3);

// const age = [calcAge(year_arr[0]), calcAge(year_arr[1]), calcAge(year_arr[2]), calcAge(year_arr[year_arr.length - 1])];
// console.log(age);

// console.log("1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'");
// console.log("2. Log to the console whether the array has 4 elements or not(true or false)");
// console.log("3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values");

// const populations = [10, 20, 30, 90];
// console.log(populations.length == 4);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// LECTURE: Basic Array Operations(Methods)
// console.log("----------LECTURE: Basic Array Operations(Methods)----------");

// //Add elements
// const friends = ['Phuc', 'Thong', 'Minh', 'Tuan', 'Hai'];
// friends.push('Kiet'); //Last
// console.log(friends);

// friends.unshift('John'); //First
// console.log(friends);

// //Remove elements
// friends.pop(); //Last
// const poped = friends.pop();
// console.log(poped);
// console.log(friends);

// friends.shift(); //First
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf('Thong'));
// console.log(friends.indexOf('Bob'));

// friends.push(22);
// console.log(friends.includes('Thong'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(22));

// if(friends.includes('Kiet')){
//   console.log("You have a friend called Kiet");
// }else{
//   console.log("You don't have a friend called Kiet");
// }

// console.log("1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'");
// console.log("2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array");
// console.log("3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array");
// console.log("4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'");
// console.log("5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.");

// const neighbours = ['Laos', 'Campuchia', 'China'];
// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')){
//   console.log("Probably not a central European country :D");
// }

// neighbours[neighbours.indexOf('China')] = "Republic of Sweden";
// console.log(neighbours);

// LECTURE: Introduction to Objects
// console.log("----------LECTURE: Introduction to Objects----------");

// const kietArray = [
//   'Lai Minh Kiet',
//   '22 years old',
//   'Programmer',
//   ['Phuc', 'Thong', 'Minh']
// ];
// console.log(kietArray);

// const kietInfo = {
//   fullname: 'Lai Minh Kiet',
//   age: '22 years old',
//   job: 'Programmer',
//   friend: ['Phuc', 'Thong', 'Minh']
// }

// console.log("1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language' 'population' and 'neighbours'(an array like we used in previous assignments)");

// const myCountry = {
//   country: 'Viet Nam',
//   capital: 'Ha Noi capital',
//   language: 'VietNamese',
//   population: '90 milion people',
//   neighbours: ['Laos','Campuchia','China']
// }

// LECTURE: Dot vs.Bracket Notation
// console.log("----------LECTURE: Dot vs.Bracket Notation----------");

// const kietInfo = {
//   firstName: 'Lai',
//   lastName: 'Minh Kiet',
//   age: '22 years old',
//   job: 'Programmer',
//   friend: ['Phuc', 'Thong', 'Minh']
// }
// console.log(kietInfo);

// console.log(kietInfo.firstName);
// console.log(kietInfo['lastName']);

// const nameKey = 'Name';
// console.log(kietInfo['first' + nameKey]);
// console.log(kietInfo['last' + nameKey]);

// // console.log(kietInfo.'last' + nameKey);

// const interestedIn = prompt("What do you want to know about Kiet? Choose between firstName, lastName, age, job, friends");

// if (kietInfo[interestedIn]) {
//   console.log(kietInfo[interestedIn]);
// } else {
//   console.log("Wrong request! Choose between firstName, lastName, age, job, friends");
// }

// kietInfo.location = 'Viet Nam';
// kietInfo['facebook'] = 'facebook.com/laiminhkiet7522';
// console.log(kietInfo);

// //Challenge
// //Minh Kiet has 3 friends, and his best friends is called Thong
// console.log(`${kietInfo.lastName} has ${kietInfo.friend.length} friends, and his best friends is called ${kietInfo.friend[1]}`);

// console.log("1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'");
// console.log("2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.");

// const myCountry = {
//   country: 'Viet Nam',
//   capital: 'Ha Noi capital',
//   language: 'VietNamese',
//   population: '90',
//   neighbours: ['Laos','Campuchia','China']
// }
// console.log(`${myCountry.country} has ${myCountry.population} milion finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

// LECTURE: Object Methods
// console.log("----------LECTURE: Object Methods----------");

// const kietInfo = {
//   firstName: 'Lai',
//   lastName: 'Minh Kiet',
//   birthYear: 2002,
//   job: 'Programmer',
//   friend: ['Phuc', 'Thong', 'Minh'],
//   hasDriversLicense: true,

//   // calcAge: function(birthYear){
//   //   return 2024 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2024 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function(){
//     return `${this.lastName} is a ${this.calcAge()}-year old programmer, and he has ${this.friend.length} friends. His best friends is called ${this.friend[1] }`;
//   },
// };
// // console.log(kietInfo.calcAge(2002));
// // console.log(kietInfo['calcAge'](2002));

// // console.log(kietInfo.calcAge());

// // console.log(kietInfo.calcAge());
// // console.log(kietInfo.age);

// console.log(kietInfo.getSummary());

// console.log("1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.");
// console.log("2. Call the 'describe' method");
// console.log("3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.");

// const myCountry = {
//   country: 'Finland',
//   capital: 'Helsinki',
//   language: 'finnish',
//   population: 6,
//   neighbours: ['Norway', 'Sweden', 'Russia'],

//   describe: function(){
//     console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
//   },

//   checkIsland: function(){
//     this.isIsland = this.neighbours.lenght == 0 ? true : false;

//     //Even simpler version (see why this works...)
//     // this.isIsland = !Boolean(this.neighbours.length);
//   }
// };
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// LECTURE: Iteration: The for Loop
// console.log("----------LECTURE: Iteration: The for Loop----------");

// // console.log("I love you 1 ❤️");
// // console.log("I love you 2 ❤️");
// // console.log("I love you 3 ❤️");
// // console.log("I love you 4 ❤️");
// // console.log("I love you 5 ❤️");
// // console.log("I love you 6 ❤️");
// // console.log("I love you 7 ❤️");
// // console.log("I love you 8 ❤️");
// // console.log("I love you 9 ❤️");
// // console.log("I love you 10 ❤️");

// for (let index = 1; index <= 10; index++) {
//   console.log(`I love you ${index} ❤️`);
// }

// console.log("1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console(for numbers 1 to 50): 'Voter number 1 is currently voting'");

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting🙋‍♂️`);
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// console.log("----------LECTURE: Looping Arrays, Breaking and Continuing----------");

// const kietArray = [
//   'Lai',
//   'Minh Kiet',
//   2099 - 2002,
//   'programmer',
//   ['Thong', 'Phuc', 'Minh']
// ];
// const type = [];

// for (let i = 0; i < kietArray.length; i++) {
//   //Reading from kietArray
//   console.log(kietArray[i], typeof kietArray[i]);

//   //Filling types array
//   // type[i] = typeof kietArray[i];
//   type.push(typeof kietArray[i]);
// }
// console.log(type);

// const years = [1990, 2000, 2010, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2099 - years[i]);
// }
// console.log(ages);

// //Continue and Break Statements
// console.log('---ONLY STRING---');
// for (let i = 0; i < kietArray.length; i++) {
//   if (typeof kietArray[i] !== 'string') {
//     continue;
//   }
//   console.log(kietArray[i], typeof kietArray[i]);
// }

// console.log('---BREAK WITH NUMBER---');
// for (let i = 0; i < kietArray.length; i++) {
//   if (typeof kietArray[i] === 'number') {
//     break;
//   }
//   console.log(kietArray[i], typeof kietArray[i]);
// }

// console.log("1. Let's bring back the 'populations' array from a previous assignment");
// console.log("2. Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier");
// console.log("3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is");

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [10, 1441, 332, 83];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages2.push(perc);
// }

// console.log(percentages2);

// LECTURE: Looping Backwards and Loops in Loops
// console.log("----------LECTURE: Looping Backwards and Loops in Loops----------");

// const kietArray = [
//   'Lai',
//   'Minh Kiet',
//   2099 - 2002,
//   'programmer',
//   ['Thong', 'Phuc', 'Minh']
// ];

// // 0, 1, 2,...n
// // n,..., 2, 1, 0

// for (let i = kietArray.length - 1; i >= 0; i--) {
//  console.log(i, kietArray[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---Starting exercise ${exercise}---`);
//   for(let rep =1 ; rep < 6; rep++) {
//     console.log(`Lifting weight repetition: ${rep} 🏋️`);
//   }
// }

// console.log("1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']]; ");
// console.log("2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country");
// console.log("3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway");

// const listOfNeighbours = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for(let i = 0; i < listOfNeighbours.length; i++){
//   for(let j = 0; j < listOfNeighbours[i].length; j++){
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

// LECTURE: The while Loop
// console.log("----------LECTURE: The while Loop----------");

// let rep = 1;
// while (rep <= 10) {
//   console.log(`I love you ${rep} ❤️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice != 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice == 6) {
//     console.log("Loop is about to end");
//     break;
//   }
// }

// console.log(
//   "1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop(call the array 'percentages3') "
// );
// console.log(
//   "2. Reflect on what solution you like better for this task: the for loop or the while loop ? "
// );

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [10, 1441, 332, 83];
// const percentages3 = [];

// let i = 0;
// while (i < populations.length) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentages3.push(perc);
//   i++;
// }
// console.log(percentages3);
