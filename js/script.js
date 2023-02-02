let playerNameValue;
const playerName = document.querySelector('#playerName');
const displayName = document.querySelector('#displayName');
const displayPlayerChoice = document.querySelector('#displayPlayerChoice');
const displayComputerChoice = document.querySelector('#displayComputerChoice');
const displayPlayerScore = document.querySelector('#displayPlayerScore');
const displayComputerScore = document.querySelector('#displayComputerScore');
const displayResult = document.querySelector('#displayResult');

let startGame = document.querySelector('#startGame');
startGame.addEventListener('click', welcomePlayer)

function welcomePlayer(event) {
  event.preventDefault();
  playerNameValue = playerName.value;
  displayName.textContent = `Welcome, ${playerNameValue}!`;
  playerName.value = '';
}

const buttons = [...document.querySelectorAll('.choiceButtons')];
buttons.forEach(button => {
  button.addEventListener('click', () => play(button.id))
});

let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  displayPlayerChoice.textContent = `Player choice: ${playerChoice}`;
  const computerChoice = getComputerChoice();
  displayComputerChoice.textContent = `Computer choice : ${computerChoice}`;

  const result = getResult(playerChoice, computerChoice);
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }

  displayPlayerScore.textContent = `Player score : ${playerScore}`;
  displayComputerScore.textContent = `Computer score : ${computerScore}`;

  displayResult.textContent = `Result: ${result}`;

  if (playerScore === 3) {
    setTimeout(() => {
      alert(`${playerNameValue} wins!`);
      reset();
    }, 500);
  } else if (computerScore === 3) {
    setTimeout(() => {
      alert(`Computer wins!`);
      reset();
    }, 500);
  }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')) {
    return 'win';
  } else {
    return 'lose';
  }
}

function reset() {
  displayPlayerChoice.textContent = 'Player choice: ';
  displayComputerChoice.textContent = 'Computer choice: ';
  playerScore = 0;
  computerScore = 0;
  displayPlayerScore.textContent = `Player score: ${playerScore}`;
  displayComputerScore.textContent = `Computer score: ${computerScore}`;
  displayResult.textContent = '';
}