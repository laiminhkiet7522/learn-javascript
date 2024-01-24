'use strict';
/*
const temp = document.querySelector('.message').textContent;
console.log(temp);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// Get the value in the input field
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
});