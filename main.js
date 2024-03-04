'use strict';

const rockPaperScissor = ['rock', 'paper', 'scissors'];


function computerChoice() {
  return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}



const h1Text = document.getElementById("header")


function rockInput() {
  const computer = computerChoice();
  if (rockPaperScissor[0] === computer) {
    return (h1Text.innerText = `It's a tie you both picked ${computer}`)
  } else if (rockPaperScissor[0] === 'rock' && computer === 'scissors') {
    return (h1Text.innerText = `You picked Rock computer picked ${computer} you win!`)
  } else if (rockPaperScissor[0] === 'rock' && computer === 'paper') {
    return ((h1Text.innerText = `You picked Rock computer picked ${computer} you Lose!`))
  }
}


function paperInput() {
  const computer = computerChoice();
  if (rockPaperScissor[1] === computer) {
    return (h1Text.innerText = `It's a tie you both picked ${computer}`)
  } else if (rockPaperScissor[1] === 'paper' && computer === 'rock') {
    return (h1Text.innerText = `You picked Paper computer picked ${computer} you win!`)
  } else if (rockPaperScissor[1] === 'paper' && computer === 'scissors') {
    return (h1Text.innerText = `You picked Paper computer picked ${computer} you Lose!`)
  }
}

function scissorsInput() {
  const computer = computerChoice();
  if (rockPaperScissor[2] === computer) {
    return (h1Text.innerText = `It's a tie you both picked ${computer}`)
  } else if (rockPaperScissor[2] === 'scissors' && computer === 'paper') {
    return (h1Text.innerText = `You picked Scissors computer picked ${computer} you win!`)
  } else if (rockPaperScissor[2] === 'scissors' && computer === 'rock') {
    return (h1Text.innerText = `You picked Scissors computer picked ${computer} you Lose!`)
  }
}


console.log(computerChoice())