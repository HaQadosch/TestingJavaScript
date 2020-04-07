import React from "react";
import { render, fireEvent } from '@testing-library/react';
import user from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { GreetingLoader } from "../greeting-loader-01-mocking";

describe('<GreetingLoader>', () => {
  test('loads greetings on click', async () => {
    const { debug, container, getByLabelText, rerender, getByText } = render(<GreetingLoader />)
    const nameInput = getByLabelText(/name/i)
    const loadButton = getByText(/load greeting/i)
    const greetDiv = getByLabelText(/greeting/i)

    // nameInput.value = 'test'
    // fireEvent.click(loadButton)
    user.type(nameInput, 'This is me')
    user.click(loadButton)

    rerender(<GreetingLoader />)
    debug(container)
  })
})