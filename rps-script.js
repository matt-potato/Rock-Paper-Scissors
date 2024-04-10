"use strict";
// randomly generate a string of either: rock, paper, or scissors
function getComputerChoice() {
    let gameChoices = ['rock', 'paper', 'scissors'];
    let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(`Computer Choice: ${computerChoice}`);
    return computerChoice;
}
// set / reset score
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;
// elements
const body = document.querySelector('body');
const divPlayerScore = document.querySelector('#player-score');
const divComputerScore = document.querySelector('#computer-score');
const message = document.querySelector('#message');
const btn = document.querySelector('.buttons');
const btnDisable = document.querySelectorAll('button');
const btnReset = document.querySelector('#reset');
// set player text to 0
divPlayerScore.textContent = playerScore;
divComputerScore.textContent = computerScore;
// play the game
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerChoice = playerSelection.target.id;

    if (playerChoice === 'rock' && computerSelection === 'scissors' || 
        playerChoice === 'paper' && computerSelection === 'rock' || 
        playerChoice === 'scissors' && computerSelection === 'paper') {
        playerScore++
        divPlayerScore.textContent = playerScore;
        message.textContent = `You win! ${playerChoice} beats ${computerSelection}`;
        message.classList.remove('cpu')
        message.classList.add('player');
        winner();
    }
    else if (computerSelection === 'rock' && playerChoice === 'scissors' || 
        computerSelection === 'paper' && playerChoice === 'rock' || 
        computerSelection === 'scissors' && playerChoice === 'paper') {
        computerScore++
        divComputerScore.textContent = computerScore;
        message.textContent = `You lose! ${computerSelection} beats ${playerChoice}`;
        message.classList.remove('player')
        message.classList.add('cpu');
        winner();
    }
    else {
        message.textContent = `Tie! ${playerChoice} ties with ${computerSelection}`;
        message.setAttribute('class', '');
    }            
}
// disable buttons when game over
function disable() {
    btnDisable.forEach((button) => {
        console.log(button);
        button.setAttribute('disabled','');
    });
}
// winner functionality: text / color change
function winner() {
    if(playerScore === 3) {
        message.textContent = "Player Wins!"
        body.classList.add('player');
        disable();
    }
    else if(computerScore === 3) {
        message.textContent = "Computer Wins!"
        body.classList.add('cpu');
        disable();
    }
}
// reset
function reset() {
    playerChoice = '';
    playerScore = 0;
    computerScore = 0;
    divPlayerScore.textContent = playerScore;
    divComputerScore.textContent = computerScore;
    message.textContent = 'Click to Play!';
    body.setAttribute('class', '');
    message.setAttribute('class', '');
    btnDisable.forEach((button) => {
        button.removeAttribute('disabled');
    });
}
btnReset.addEventListener('click', reset)
btn.addEventListener('click', playRound);