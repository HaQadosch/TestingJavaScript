// const assert = require('assert')
const { describe } = require('riteway')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Luigi', 'Mario')
// assert.equal(winner, 'Mario')

describe('thumbWar()', async assert => {
  assert({
    given: 'Luigi vs Mario',
    should: 'Mario win',
    actual: winner,
    expected: 'Mario'
  })
})