import 'react-testing-library/cleanup-after-each'
import React from 'react'
import { render } from 'react-testing-library'
import * as emotion from 'emotion'
import CalculatorDisplay from '../calculator-display'
import { createSerializer } from 'jest-emotion'

expect.addSnapshotSerializer(createSerializer(emotion))

test('should mount', () => {
  const { container } = render(<CalculatorDisplay value='0' />)
  expect(container.firstChild).toMatchSnapshot()
})
