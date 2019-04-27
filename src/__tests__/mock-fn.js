const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner

  const winner = thumbWar('Luigi', 'Mario')
  expect(winner).toBe('Luigi')

  utils.getWinner = originalGetWinner
})

