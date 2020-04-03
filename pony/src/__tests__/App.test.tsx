import React from 'react'
import { render } from '@testing-library/react'
import { Counter } from '../Counter'
import { Provider } from 'react-redux'
import { store } from '../store/store'

test('renders sync', () => {
  const { getByText } = render(
    <Provider store={ store }>
      <Counter />
    </Provider>
  )
  const linkElement = getByText(/^sync/i)
  expect(linkElement).toBeInTheDocument()
})
