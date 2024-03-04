'use strict';

const rockPaperSissor = ['rock', 'paper', 'sissors'];

const computerChoice = rockPaperSissor[Math.floor(Math.random() * rockPaperSissor.length)];

// const playerChoice = prompt("Pick Rock, Paper, or Sissors")

const h1Text = document.getElementById("header")


function rockInput() {
  if (rockPaperSissor[0] === computerChoice) {
    return (h1Text.innerText = `It's a tie you both picked ${computerChoice}`)
  } else if (rockPaperSissor[0] === 'rock' && computerChoice === 'sissors') {
    return (h1Text.innerText = `You picked Rock computer picked ${computerChoice} you win!`)
  } else {
    return ((h1Text.innerText = `You picked Rock computer picked ${computerChoice} you Lose!`))

  }
}

function paperInput() {
  if (rockPaperSissor[1] === computerChoice) {
    return (h1Text.innerText = `It's a tie you both picked ${computerChoice}`)
  } else if (rockPaperSissor[1] === 'paper' && computerChoice === 'rock') {
    return (h1Text.innerText = `You picked Paper computer picked ${computerChoice} you win!`)
  } else {
    return (h1Text.innerText = `You picked Paper computer picked ${computerChoice} you Lose!`)

  }
}

function sissorsInput() {
  if (rockPaperSissor[2] === computerChoice) {
    return (h1Text.innerText = `It's a tie you both picked ${computerChoice}`)
  } else if (rockPaperSissor[2] === 'sissors' && computerChoice === 'paper') {
    return (h1Text.innerText = `You picked Sissors computer picked ${computerChoice} you win!`)
  } else {
    return ((h1Text.innerText = `You picked Sissors computer picked ${computerChoice} you Lose!`))

  }
}



// console.log(rockPaperSissor[0])
// // function game() {

// //   if (!playerChoice) {
// //     return "You cancelled the prompt.";
// //   }


// //   if (!rockPaperSissor.includes(playerChoice.toLowerCase())) {
// //     return "Invalid choice. Please pick Rock, Paper, or Scissors.";
// //   } if (playerChoice.toLowerCase() === computerChoice) {
// //     return (h1Text.innerText = `It's a tie you both picked ${computerChoice.toUpperCase()}`)
// //   } else if (
// //     (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') ||
// //     (playerChoice.toLowerCase() === 'sissors' && computerChoice === 'paper') ||
// //     (playerChoice.toLowerCase() === 'rock' && computerChoice === 'sissors')
// //   ) {
// //     return (h1Text.innerText = `You picked ${playerChoice} computer picked ${computerChoice} you win!`)
// //   } else {
// //     return (h1Text.innerText = `You picked ${playerChoice.charAt(0).toUpperCase(0)} computer picked ${computerChoice} you win!`)
// //   }
// // }

// document.get



// console.log(game())