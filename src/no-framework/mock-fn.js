const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function foo(implementation) {
  const mockFoo = (...args) => {
    mockFoo.mock.calls.push(args)
    return implementation(...args)
  }
  mockFoo.mock = {
    calls: []
  }
  return mockFoo
}

const originalGetWinner = utils.getWinner

utils.getWinner = foo((pA, pB) => pA)

const winner = thumbWar('Luigi', 'Mario')
console.log('mock-fn', { calls: utils.getWinner.mock.calls })
console.log('mock-fn', { calls: utils.getWinner.mock.calls })
assert.equal(winner, 'Luigi')
assert.deepStrictEqual(utils.getWinner.mock.calls, [['Luigi', 'Mario'], ['Luigi', 'Mario']])

utils.getWinner = originalGetWinner