const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

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

function sypOn(obj, prop) {
  const originalValue = obj[prop]
  obj[prop] = foo()
  obj[prop].mockRestore = () => (obj[prop] = originalValue)
}

sypOn(utils, 'getWinner')
utils.getWinner.mockImplementation((pA, pB) => pA)

const winner = thumbWar('Luigi', 'Mario')
assert.equal(winner, 'Luigi')
assert.deepStrictEqual(utils.getWinner.mock.calls, [['Luigi', 'Mario'], ['Luigi', 'Mario']])

utils.getWinner.mockRestore()