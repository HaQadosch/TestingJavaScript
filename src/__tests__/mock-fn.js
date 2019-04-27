const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((pA, pB) => pA)

  const winner = thumbWar('Luigi', 'Mario')
  expect(winner).toBe('Luigi')
  /**
   * The .mock.calls show that getWinner has been called twice, with which params each times.
   */
  expect(utils.getWinner.mock.calls).toEqual([['Luigi', 'Mario'], ['Luigi', 'Mario']])

  utils.getWinner = originalGetWinner
})
