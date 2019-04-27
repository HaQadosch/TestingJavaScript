const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner

utils.getWinner = (pA, pB) => pA

const winner = thumbWar('Luigi', 'Mario')
assert.equal(winner, 'Luigi')

utils.getWinner = originalGetWinner