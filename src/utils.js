export function getWinner(playerA, playerB) {
  const winningNbr = Math.random()

  return winningNbr < 1 / 3 ? playerA : winningNbr < 2 / 3 ? playerB : null
}
