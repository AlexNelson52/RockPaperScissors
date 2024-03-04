'use strict';

const rockPaperScissor = ['rock', 'paper', 'scissors'];

function computerChoice() {
  return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}

const h1Text = document.getElementById("header")
const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
const drawScore = document.getElementById("drawScore")

function playerInput(playerChoice) {
  const computer = computerChoice();
  if (playerChoice === computer) {
    draws();
    return (h1Text.innerText = `It's a tie you both picked ${computer}`)
  }
  if (playerChoice === 'scissors' && computer === 'paper') {
    score();
    return (h1Text.innerText = `You picked Scissors computer picked ${computer} you WIN!`)
  }
  if (playerChoice === 'scissors' && computer === 'rock') {
    score2();
    return (h1Text.innerText = `You picked Scissors computer picked ${computer} you Lose!`)
  }
  if (playerChoice === 'rock' && computer === 'paper') {
    score2();
    return (h1Text.innerText = `You picked Rock computer picked ${computer} you Lose!`)
  }
  if (playerChoice === 'rock' && computer === 'scissors') {
    score();
    return (h1Text.innerText = `You picked Rock computer picked ${computer} you WIN!`)
  }
  if (playerChoice === 'paper' && computer === 'rock') {
    score();
    return (h1Text.innerText = `You picked Rock computer picked ${computer} you WIN!`)
  }
  if (playerChoice === 'paper' && computer === 'scissors') {
    score2();
    return (h1Text.innerText = `You picked Paper computer picked ${computer} you Lose`)
  }
}

function score() {
  let playerScoreNumber = Number(playerScore.innerText)
  playerScore.innerText = playerScoreNumber + 1
}

function score2() {
  let computerScores = Number(computerScore.innerText)
  computerScore.innerText = computerScores + 1

}

function draws() {
  let drawScores = Number(drawScore.innerText)
  drawScore.innerText = drawScores + 1
}