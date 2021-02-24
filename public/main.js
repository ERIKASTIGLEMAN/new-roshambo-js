// const { doc } = require('prettier')

const player1choice = ''

const player2choice = ''

function main() {
  const winner = () => {
    if (player1choice !== '' && player2choice !== '') {
      const footer = document.querySelector('footer')

      if (player1choice === 'paper' && player2choice === 'paper') {
        footer.textContent = 'Draw!'
      }

      if (player1choice === 'rock' && player2choice === 'rock') {
        footer.textContent = 'Draw!'
      }

      if (player1choice === 'scissors' && player2choice === 'scissors') {
        footer.textContent = 'Draw!'
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
  // click on player 1 - need const to hold click value

  const clickedOnPlayer1 = event => {
    document.querySelector('.playerOne').classList.add('madeChoice')
    player1choice = 'rock'
    console.log(player1choice)
    console.log(player2choice)
    winner()
  }

  const clickedOnPlayer1Paper = event => {
    document.querySelector('.playerOne').classList.add('madeChoice')
    player1choice = 'paper'
    winner()
  }

  const clickedOnPlayer1Scissor = event => {
    document.querySelector('.playerOne').classList.add('madeChoice')
    player1choice = 'scissor'
    winner()
  }

  const clickedOnPlayer2 = event => {
    document.querySelector('.playerTwo').classList.add('madeChoice')
    player2choice = 'rock'
    winner()
  }
  const clickedOnPlayer2Scissor = event => {
    document.querySelector('.playerTwo').classList.add('madeChoice')
    player2choice = 'scissor'
    winner()
  }

  const clickedOnPlayer2Paper = event => {
    document.querySelector('.playerTwo').classList.add('madeChoice')
    player2choice = 'paper'
    winner()
  }

  const main = () => {
    const player1Rock = document.querySelector('.playerOne #playOneR')
    player1Rock.addEventListener('click', clickedOnPlayer1)

    const player1Paper = document.querySelector('.playerOne #playOneP')
    player1Paper.addEventListener('click', clickedOnPlayer1Paper)

    const player1Scissors = document.querySelector('.playerOne #playOneS')
    player1Scissors.addEventListener('click', clickedOnPlayer1Scissors)

    const player2Rock = document.querySelector('.playerTwo #playTwoR')
    player2Rock.addEventListener('click', clickedOnPlayer2)

    const player2Paper = document.querySelector('.playerTwo #playTwoP')
    player2Paper.addEventListener('click', clickedOnPlayer2Paper)

    const player2Scissors = document.querySelector('.playerTwo #playTwoS')
    player2Scissors.addEventListener('click', clickedOnPlayer2Scissors)
  }

  document.addEventListener('DOMContentLoaded', main)
}
