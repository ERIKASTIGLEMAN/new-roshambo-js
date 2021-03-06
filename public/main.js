// const { doc } = require('prettier')
let player1choice = ''
let player2choice = ''

const winner = () => {
  if (player1choice !== '' && player2choice !== '') {
    const footer = document.querySelector('.results-display')
    if (player1choice === 'paper' && player2choice === 'paper') {
      footer.textContent = 'Draw!'
      console.log('Draw!')
    }
    if (player1choice === 'rock' && player2choice === 'rock') {
      footer.textContent = 'Draw!'
      console.log('Draw!')
    }
    if (player1choice === 'scissors' && player2choice === 'scissors') {
      footer.textContent = 'Draw!'
      console.log('Draw!')
    }
    if (player1choice === 'scissors' && player2choice === 'rock') {
      footer.textContent = 'Player 2 WINS!'
    }
    if (player1choice === 'scissors' && player2choice === 'paper') {
      footer.textContent = 'Player 1 WINS!'
    }
    if (player1choice === 'rock' && player2choice === 'scissors') {
      footer.textContent = 'Player 1 WINS!'
    }
    if (player1choice === 'rock' && player2choice === 'paper') {
      footer.textContent = 'Player 2 WINS!'
    }
    if (player1choice === 'paper' && player2choice === 'scissors') {
      footer.textContent = 'Player 2 WINS!'
    }
    if (player1choice === 'paper' && player2choice === 'rock') {
      footer.textContent = 'Player 1 WINS!'
    }
  }
}

// click on player 1 & 2 - need const to hold click value
const clickedOnPlayer1Rock = () => {
  document.querySelector('.playerOne').classList.add('choice-made')
  player1choice = 'rock'
  console.log(player1choice)
  // winner()
}
const clickedOnPlayer1Paper = () => {
  document.querySelector('.playerOne').classList.add('choice-made')
  player1choice = 'paper'
  console.log(player1choice)
  // winner()
}
const clickedOnPlayer1Scissor = () => {
  document.querySelector('.playerOne').classList.add('choice-made')
  player1choice = 'scissors'
  console.log(player1choice)
  // winner()
}
const clickedOnPlayer2Rock = () => {
  document.querySelector('.playerTwo').classList.add('choice-made')
  player2choice = 'rock'
  console.log(player2choice)
  winner()
}
const clickedOnPlayer2Scissor = () => {
  document.querySelector('.playerTwo').classList.add('choice-made')
  player2choice = 'scissors'
  console.log(player2choice)
  winner()
}
const clickedOnPlayer2Paper = () => {
  document.querySelector('.playerTwo').classList.add('choice-made')
  player2choice = 'paper'
  console.log(player2choice)
  winner()
}

// query selectors and event listeners
const main = () => {
  const player1Rock = document.querySelector('#playerOneR')
  player1Rock.addEventListener('click', clickedOnPlayer1Rock)

  const player1Paper = document.querySelector('#playerOneP')
  player1Paper.addEventListener('click', clickedOnPlayer1Paper)

  const player1Scissors = document.querySelector('#playerOneS')
  player1Scissors.addEventListener('click', clickedOnPlayer1Scissor)

  const player2Rock = document.querySelector('#playerTwoR')
  player2Rock.addEventListener('click', clickedOnPlayer2Rock)

  const player2Paper = document.querySelector('#playerTwoP')
  player2Paper.addEventListener('click', clickedOnPlayer2Paper)

  const player2Scissors = document.querySelector('#playerTwoS')
  player2Scissors.addEventListener('click', clickedOnPlayer2Scissor)
}

console.log(winner(player1choice, player2choice))
document.addEventListener('DOMContentLoaded', main)
