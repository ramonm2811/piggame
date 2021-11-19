'use strict';
//DOM Selectors
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Initial state
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hide');

//
let currentScore = 0;

//Buttons events
btnRoll.addEventListener('click', rollDice);

function rollDice() {
  //1. Generate a random number between 1 - 6
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  //2. Display dice
  dice.classList.remove('hide');
  dice.src = `dice-${diceNumber}.png`;
  //3. Check for rolled 1: if true changePlayer() else addCurrent
  if (diceNumber !== 1) {
    //Add dice to current score
    currentScore += diceNumber;
    current0.textContent = currentScore;
  } else {
    //switch to next player
  }
}

 