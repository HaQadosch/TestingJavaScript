const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Luigi', 'Mario')
assert.equal(winner, 'Mario')