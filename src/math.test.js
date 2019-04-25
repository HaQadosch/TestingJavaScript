/* globals test expect */
const { sumAsync, substractAsync } = require('./math')

test('sum adds number', async _ => {
  const result = await sumAsync(1, 2)
  const expected = 3
  expect(result).toBe(expected)
})

test('substract substracts number', async _ => {
  const result = await substractAsync(3, 2)
  const expected = 1
  expect(result).toBe(expected)
})
