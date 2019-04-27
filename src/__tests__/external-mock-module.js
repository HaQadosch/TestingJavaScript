const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils')

test('returns a winner', () => {
  const winner = thumbWar('Luigi', 'Mario')
  expect(winner).toBe('Luigi')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Luigi', 'Mario'],
    ['Luigi', 'Mario']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})
