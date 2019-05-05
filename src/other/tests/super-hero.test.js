import { getFlyingSuperHeros } from '../super-hero'

test('should return superheros who can fly.', () => {
  const flyingHeros = getFlyingSuperHeros()

  expect(flyingHeros).toEqual([
    { 'name': 'Dynaguy', 'powers': ['disintegration ray', 'fly'] },
    { 'name': 'Apogee', 'powers': ['gravity control', 'fly'] },
    { 'name': 'Jack-Jack', 'powers': ['shapeshifting', 'fly'] }
  ])
})
