'use strict';

///////////////////////////////////////
// Scoping in Practice
/*
function caclAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //CREATE NEW VARIABLE WITH THE SAME NAME AS OUTER SCOPE'S VARIABLE
      const firstName = 'Steven';

      //REASSIGNING OUTER SCOPE'S VARIABLE
      output = `NEW OUTPUT`;

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Kiet';
caclAge(1990);
// console.log(age);
*/

///////////////////////////////////////
// Hoisting and TDZ in Practice

/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Kiet';
let job = 'teacher';
const year = 1999;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

//Example
if (!numProducts) {
  deleteShoppingCart();
}
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x=1;
let y=2;
const z=3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

///////////////////////////////////////
// The this Keyword in Practice

/*
console.log(this);

const caclAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
caclAge(1991);
// console.log(age);
// console.log(this);

const caclAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
caclAgeArrow(1995);
// console.log(age);
// console.log(this);

const kiet = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }
}
kiet.calcAge();

const matilda = {
  year: 2017
}

matilda.calcAge = kiet.calcAge;
matilda.calcAge();

const f = kiet.calcAge;
f();
*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

/*
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

///////////////////////////////////////
// Objects vs. primitives

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

///////////////////////////////////////
// Primitives vs. Objects in Practice

/*
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
*/