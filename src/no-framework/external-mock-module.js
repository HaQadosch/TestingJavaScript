require('../__no-framework-mocks__/utils')

const utilsPath = require.resolve('../utils')
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils')

require.cache[utilsPath] = require.cache[mockUtilsPath]

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Luigi', 'Mario')
assert.equal(winner, 'Luigi')
assert.deepStrictEqual(utils.getWinner.mock.calls, [['Luigi', 'Mario'], ['Luigi', 'Mario']])

delete require.cache[utilsPath]