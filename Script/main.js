let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBodyStyle = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ Please input a number!');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      updateScore(--score);
    } else {
      displayMessage('💥 You Lost the Game!');
      changeBodyStyle('#ff02027a');
      updateScore(0);
    }
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number! You Won.');
    document.querySelector('.number').textContent = secretNumber;
    changeBodyStyle('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  updateScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  changeBodyStyle('#222');
  document.querySelector('.number').style.width = '15rem';
});
