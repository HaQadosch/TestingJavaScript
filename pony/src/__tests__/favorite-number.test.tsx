import React from 'react'
import { FavoriteNumber } from '../favorite-number';
import { render } from '@testing-library/react';

describe('<FavoriteNumber />', () => {
  test('renders an input with a label "Favorite Number"', () => {
    const { getByText, container } = render(<FavoriteNumber />)
    getByText(/Favorite Number/)
    const input = container.querySelector('input')
    expect(input.type).toBe('number')
  })
})
