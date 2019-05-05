import { getFlyingSuperHeros } from '../super-hero'

test('should return superheros who can fly.', () => {
  const flyingHeros = getFlyingSuperHeros()
  expect(flyingHeros).toMatchSnapshot()
})
