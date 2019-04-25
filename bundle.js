'use strict';

function sum (a, b) {
  return a + b
}

function substract (a, b) {
  return a - b
}

async function sumAsync (...params) {
  return Promise.resolve(sum(...params))
}

async function substractAsync (...params) {
  return Promise.resolve(substract(...params))
}

test('sum adds number', async _ => {
  const result = await sumAsync(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});

test('substract substracts number', async _ => {
  const result = await substractAsync(3, 2);
  const expected = 1;
  expect(result).toBe(expected);
});
