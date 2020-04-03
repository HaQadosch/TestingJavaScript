import React from 'react'
import { FavoriteNumber } from '../favorite-number';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('<FavoriteNumber />', () => {
  test('renders an input with a label "Favorite Number"', () => {
    const { getByLabelText } = render(<FavoriteNumber />)
    const input = getByLabelText(/Favorite Number/i)
    expect(input).toHaveAttribute('type', 'number')
  })

  test('entering an invalide value triggers an error message', () => {
    const { getByLabelText, getByRole } = render(<FavoriteNumber />)
    const input = getByLabelText(/Favorite Number/i)
    fireEvent.change(input, { target: { value: 20 } })
    const alert = getByRole('alert')
    expect(alert).toHaveTextContent(/the number is invalid/i)
  })
})
