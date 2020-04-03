import React from 'react'
import { FavoriteNumber } from '../favorite-number';
import { render } from '@testing-library/react';
import user from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe('<FavoriteNumber />', () => {
  test('renders an input with a label "Favorite Number"', () => {
    const { getByLabelText } = render(<FavoriteNumber />)
    const input = getByLabelText(/Favorite Number/i)
    expect(input).toHaveAttribute('type', 'number')
  })

  test('entering an invalide value triggers an error message', () => {
    const { getByLabelText, getByRole, rerender, debug } = render(<FavoriteNumber />)
    const input = getByLabelText(/Favorite Number/i)
    user.type(input, '20')
    const alert = getByRole('alert')
    expect(alert).toHaveTextContent(/the number is invalid/i)
    debug()
    rerender(<FavoriteNumber max={30} />)
    debug()
  })
})
