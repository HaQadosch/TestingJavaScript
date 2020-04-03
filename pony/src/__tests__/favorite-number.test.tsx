import React from 'react'
import { FavoriteNumber } from '../favorite-number';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('<FavoriteNumber />', () => {
  test('renders an input with a label "Favorite Number"', () => {
    const { getByLabelText } = render(<FavoriteNumber />)
    const input = getByLabelText(/Favorite Number/i)
    expect(input).toHaveAttribute('type', 'number')
  })
})
