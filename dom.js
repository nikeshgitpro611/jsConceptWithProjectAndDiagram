import { randomNumber, belowTwenty, lossFn } from './common.js';
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
let guess = document.querySelector('.guess');
let GuessBtn = document.getElementById('onCheck');
let reset = document.getElementById('reset');
const getRandom = randomNumber();
let scoreVal = 20;
let highScoreVal = 0;

const displayTheMessage = (messagev) => {
  const messageofResult = (message.textContent = messagev);
  return messageofResult;
};

function resetGame() {
  scoreVal = 20;
  displayTheMessage('Start guessing...');
  score.textContent = scoreVal;
  guess.value = '';
  document.body.style.backgroundColor = 'brown';
}

// message.textContent = '🏆Correct guess..';
GuessBtn.addEventListener('click', function () {
  const valueget = Number(guess.value);
  console.log('getRandom : ', getRandom);
  console.log('NumberInWords : ', belowTwenty[valueget]);
  console.log('valueget : ', typeof valueget, valueget);

  if (!valueget) {
    displayTheMessage('❌ No Number Entered...');
  } else if (valueget === getRandom) {
    displayTheMessage('🏆 Wow You Win ...');
    number.textContent = getRandom;
    guess.value = '';
    document.querySelector('body').style.backgroundColor = 'green';

    if (scoreVal > highScoreVal) {
      highScoreVal = scoreVal;
      highscore.textContent = scoreVal;
    }
  } else if (valueget !== getRandom) {
    if (scoreVal > 1) {
      message.textContent =
        valueget > getRandom
          ? '🫸 Too High Number ...'
          : '👇 Too Low Number ...';
      scoreVal--;
      score.textContent = scoreVal;
    } else {
      displayTheMessage('🎮 You Lost Game ...');
      score.textContent = 0;
      guess.value = null;
    }
  }
});

// # Reset Value

reset.addEventListener('click', resetGame);
