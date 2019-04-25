import { sum, substract } from './math'

test('sum adds number', _ => {
  const result = sum(1, 2)
  const expected = 3
  expect(result).toBe(expected)
})

test('substract substracts number', _ => {
  const result = substract(3, 2)
  const expected = 1
  expect(result).toBe(expected)
})

function test (title, foo) {
  try {
    foo()
    console.info(`✔ ${title}`)
  } catch (error) {
    console.error(`💩 ${title}`)
    console.error(error)
  }
}

function expect (actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
