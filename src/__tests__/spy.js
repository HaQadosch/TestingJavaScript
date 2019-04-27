const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Luigi', 'Mario')
  expect(winner).toBe('Luigi')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Luigi', 'Mario'],
    ['Luigi', 'Mario']
  ])

  // cleanup
  utils.getWinner.mockRestore()
})
