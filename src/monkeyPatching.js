import {describe} from 'riteway'
import {thumbWar} from './thumbWar'

describe('thumbWar()', async assert => {
  assert({
    given: 'Luigi vs Mario',
    should: 'return Mario',
    actual: thumbWar('Luigi', 'Mario'),
    expected: 'Mario'
  })
})
