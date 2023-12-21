// LECTURE: Values and Variables
// console.log("----------LECTURE: Values and Variables----------");

// console.log("1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country(population in millions)");
// let country = "Viet Nam";
// let continent = "Asia";
// let population = "90 million people";

// console.log("2. Log their values to the console");
// console.log(country);
// console.log(continent);
// console.log(population);

// LECTURE: Data Types
// console.log("----------LECTURE: Data Types----------");

// let javascriptIsFun = true;

// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof 17);
// console.log(typeof true);
// console.log(typeof "Kiet");

// javascriptIsFun = 'YES';
// console.log(javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2023;
// console.log(year);
// console.log(typeof year);

// console.log("1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet");
// let isIsLand = "Viet Nam";
// population = 90;
// country = "Ho Chi Minh city";
// let language;

// console.log("2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console");
// console.log(typeof isIsLand);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// LECTURE: let, const and var
// console.log("----------LECTURE: let, const and var----------");

// let age = 21;
// age = 22;
// console.log(age);

// const birthDay = 20;
// // birthDay = 21;
// console.log(birthDay);

// var name = "Minh Kiet";
// name = "Kiet";
// console.log(name);

// console.log("1. Set the value of 'language' to the language spoken where you live(some countries have multiple languages, but just choose one)");
// language = "Vietnamese";

// console.log("2. Think about which variables should be const variables (which values will never change, and which might change?).Then, change these variables to const.");
// const valueNeverChange = "Never change";

// console.log("3. Try to change one of the changed variables now, and observe what happens");
// console.log("Error");
// valueNeverChange = "Changed";
// console.log(valueNeverChange);


// LECTURE: Basic Operators
// console.log("----------LECTURE: Basic Operators----------");

// //Math operators
// const now = 2023;
// const ageKiet = now - 2002;
// const ageLai = now - 2003;
// console.log(ageKiet, ageLai);

// console.log(ageKiet * 2, ageLai / 2, 2 ** 3);

// const firstName = "Lai";
// const lastName = "Kiet";
// console.log(firstName + ' ' + lastName);

// //Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

//Comparison operators
// console.log(ageKiet > ageLai); // >, <, >=, <=
// console.log(ageLai >= 20);

// const isFullAge = ageKiet >= 20;

// console.log(now - 2002 > now - 2003);

// console.log("1. If your country split in half, and each half would contain half the population,then how many people would live in each half?");
// let populations = 90000000;
// let resultpop = populations / 2;
// console.log(resultpop);

// console.log("2. Increase the population of your country by 1 and log the result to the console");
// populations++;
// console.log(populations);

// console.log("3. Finland has a population of 6 million. Does your country have more people than Finland?");
// console.log(populations > 6000000);

// console.log("4. The average population of a country is 33 million people. Does your country have less people than the average country?");
// console.log(populations < 33000000);

// console.log("5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'");
// let description = "Portuguese is in Europe, and its 11 million people speak portuguese";
// console.log(description);


// LECTURE: Basic Operators
console.log("----------LECTURE: Strings and Template Literals----------");

const firstName = "Lai Minh";
const lastName = "Kiet";
const job = "Programmer";
const birthYear = 2002;
const kiet = "I'm" + " " + firstName + " " + lastName + ", I was born in " + birthYear;
console.log(kiet);

const newKiet = `I'm ${firstName} ${lastName}, I was born in ${birthYear}`;
console.log(newKiet);

console.log("String with \nmultiple \nlines");


console.log("1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax?");
const description = "Hello, \nWorld!";
console.log(description);