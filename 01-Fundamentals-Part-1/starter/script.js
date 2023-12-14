// LECTURE: Values and Variables
console.log("----------LECTURE: Values and Variables----------");

console.log("1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country(population in millions)");
let country = "Viet Nam";
let continent = "Asia";
let population = "90 million people";

console.log("2. Log their values to the console");
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
console.log("----------LECTURE: Data Types----------");

let javascriptIsFun = true;

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 17);
console.log(typeof true);
console.log(typeof "Kiet");

javascriptIsFun = 'YES';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(year);
console.log(typeof year);

console.log("1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet");
let isIsLand = "Viet Nam";
population = 90;
country = "Ho Chi Minh city";
let language;

console.log("2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console");
console.log(typeof isIsLand);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// LECTURE: let, const and var
console.log("----------LECTURE: let, const and var----------");

let age = 21;
age = 22;
console.log(age);

const birthDay = 20;
// birthDay = 21;
console.log(birthDay);

var name = "Minh Kiet";
name = "Kiet";
console.log(name);

console.log("1. Set the value of 'language' to the language spoken where you live(some countries have multiple languages, but just choose one)");
language = "Vietnamese";

console.log("2. Think about which variables should be const variables (which values will never change, and which might change?).Then, change these variables to const.");
const valueNeverChange = "Never change";

console.log("3. Try to change one of the changed variables now, and observe what happens");
valueNeverChange = "Changed";
console.log(valueNeverChange);