import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';
import user from "@testing-library/user-event";
import '@testing-library/jest-dom'
import { GreetingLoader } from "../greeting-loader-01-mocking";
import { loadGreeting as mockLoadGreeting } from "../api";
import { act } from "react-dom/test-utils";

jest.mock('../api')

describe('<GreetingLoader>', () => {
  test('loads greetings on click', async () => {
    mockLoadGreeting.mockResolvedValueOnce({ data: { greeting: 'TEST_GREETING' } })
    const { getByLabelText, getByText, container } = render(<GreetingLoader />)
    const nameInput = getByLabelText(/name/i)
    const loadButton = getByText(/load/i)

    user.type(nameInput, 'Anton')
    user.click(loadButton)

    expect(mockLoadGreeting).toHaveBeenCalledWith('Anton')
    expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(getByLabelText(/greeting/i)).toHaveTextContent('TEST_GREETING'), { container })

  })
})
