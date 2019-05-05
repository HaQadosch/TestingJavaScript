import { getFlyingSuperHeros } from '../super-hero'

test('should return superheros who can fly.', () => {
  const flyingHeros = getFlyingSuperHeros()
  console.log({ flyingHeros })

  expect(flyingHeros).toEqual([
    { 'name': 'Dynaguy', 'powers': ['disintegration ray', 'fly'] },
    { 'name': 'Apogee', 'powers': ['gravity control', 'fly'] }
  ])
})
