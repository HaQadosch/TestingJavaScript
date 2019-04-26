import { getWinner } from './utils'

export function thumbWar(playerA, playerB) {
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