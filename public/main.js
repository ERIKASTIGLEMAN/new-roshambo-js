function main() {
  const player1choice = ''

  const player2choice = ''

  const winner = () => {
    if (player1choice !== '' && player2choice !== '') {
      let footer = document.querySelector('footer')

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
}

document.addEventListener('DOMContentLoaded', main)
