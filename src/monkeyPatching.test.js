'use strict'

var riteway = require('riteway')

function getWinner(playerA, playerB) {
  const winningNbr = Math.random()

  return winningNbr < 1 / 3 ? playerA : winningNbr < 2 / 3 ? playerB : null
}

function thumbWar(playerA, playerB) {
  const numberToWin = 2
  let playerAWins = 0
  let playerBWins = 0

  while (playerAWins < numberToWin && playerBWins < numberToWin) {
    const winner = getWinner(playerA, playerB)
    if (winner === playerA) {
      playerAWins++
    } else if (winner === playerB) {
      playerBWins++
    }
  }

  return playerAWins > playerBWins ? playerA : playerB
}

riteway.describe('thumbWar()', async assert => {
  assert({
    given: 'Luigi vs Mario',
    should: 'return Mario',
    actual: thumbWar('Luigi', 'Mario'),
    expected: 'Mario'
  })
})
