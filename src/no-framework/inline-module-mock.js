function foo(implementation = () => { }) {
  const mockFoo = (...args) => {
    mockFoo.mock.calls.push(args)
    return implementation(...args)
  }

  mockFoo.mock = {
    calls: []
  }

  mockFoo.mockImplementation = newImpl => implementation = newImpl

  return mockFoo
}

const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: foo((pA, pB) => pA)
  }
}

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Luigi', 'Mario')
assert.equal(winner, 'Luigi')
assert.deepStrictEqual(utils.getWinner.mock.calls, [['Luigi', 'Mario'], ['Luigi', 'Mario']])

delete require.cache[utilsPath]