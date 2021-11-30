'use strict';
//DOM Selectors------------------------------------------------------------------------------------------
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Active Player------------------------------------------------------------------------------------------
let scores;
let currentScore;
let activePLayer;
let playing;

initGame();

//Rolling the Dice---------------------------------------------------------------------------------------
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random number between 1 - 6
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    //2. Display dice
    dice.classList.remove('hide');
    dice.src = `dice-${diceNumber}.png`;
    //3. Check for rolled 1: if true changePlayer() else addCurrent
    if (diceNumber !== 1) {
      //Add dice to current score
      currentScore += diceNumber;
      activePLayer === 0
        ? (document.getElementById('current--0').textContent = currentScore)
        : (document.getElementById('current--1').textContent = currentScore);
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

//Holding the score -----------------------------------------------------------------------------------------------------
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePLayer] += currentScore;
    activePLayer === 0
      ? (score0El.textContent = scores[activePLayer])
      : (score1El.textContent = scores[activePLayer]);

    //2. Check if player's score is >=100
    if (scores[activePLayer] >= 100) {
      playing = false;
      activePLayer === 0
        ? document.querySelector('.player--0').classList.add('player--winner')
        : document.querySelector('.player--1').classList.add('player--winner');
      player0.classList.remove('player--active');
      player1.classList.remove('player--active');
      dice.classList.add('hide');
    }
    //3. Switch to the next player
    switchPlayer();
  }
});

//New Game button--------------------------------------------------------------------------------------------------------------
btnNew.addEventListener('click', initGame);

//Funciones auxiliares------------------------------------------------------------------------------
function switchPlayer() {
  activePLayer === 0
    ? (document.getElementById('current--0').textContent = 0)
    : (document.getElementById('current--1').textContent = 0);
  activePLayer = activePLayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
}

function initGame() {
  //Initial state------------------------------------------------------------------------------------------
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add('hide');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  //Active Player------------------------------------------------------------------------------------------
  scores = [0, 0];
  currentScore = 0;
  activePLayer = 0;
  playing = true;
}
