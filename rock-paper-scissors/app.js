const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
    updateScore();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber === 1) {
        computerChoice = 'rock';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    } else if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResults(){
    if(computerChoice === userChoice){
        result = 'DRAW';
    } 
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'YOU WIN :)'
        userScore++;
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'YOU LOSE :('
        computerScore++;
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'YOU WIN :)'
        userScore++;
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'YOU LOSE :('
        computerScore++;
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'YOU LOSE :('
        computerScore++;
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'YOU WIN :)'
        userScore++;
    }
    resultDisplay.innerHTML = result;
}

function updateScore() {
    computerScoreDisplay.innerHTML = computerScore;
    userScoreDisplay.innerHTML = userScore;
}