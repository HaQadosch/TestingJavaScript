import React from 'react'
import { render } from 'react-testing-library'
import loadable from 'react-loadable'
import Calculator from '../calculator'

test('renders', () => {
  loadable.preloadAll().then(() => {
    const { container, debug } = render(<Calculator />)
    debug(container)
  })
})
// test('renders', async () => {
//   await loadable.preloadAll()
//   const { container, debug } = render(<Calculator />)
//   debug(container)
// })
