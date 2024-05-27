import { genratNumberBelowSix } from './common.js';
const scoreOnePlayer = document.getElementById('score-1');
const scoreTwoePlayer = document.getElementById('score-2');
const diseHide = document.querySelector('.dice');
const diseRoll = document.querySelector('.btn-roll');
const currentValOne = document.getElementById('current-1');

// # Creating defalt Zero
scoreOnePlayer.textContent = 0;
scoreTwoePlayer.textContent = 0;
let currentVal = 0

// #Hidden Dise
diseHide.classList.add('hidden');

// #roll and Display Dise
diseRoll.addEventListener('click', function () {
  let randomValue = genratNumberBelowSix();

  diseHide.classList.remove('hidden');
  diseHide.src = `./img/dice-${randomValue}.png`;

  if (randomValue != 6) {
    //add score
    currentVal += randomValue;
    currentValOne.textContent =  currentVal;
  } else {
    //Switch player
  }

});
