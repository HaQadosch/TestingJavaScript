import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../Counter';
import { Provider } from 'react-redux'
import { store } from '../store/store'

describe('Counter Elt', () => {
  test('renders a counter with 0', () => {
    const { getByText } = render(<Provider store={store}><Counter /></Provider>);
    const counterNumber = getByText('0');
    expect(counterNumber).toBeInTheDocument();
  });
  
  test('OK button increments the counter by 1', () => {
    const { container, getByText } = render(<Provider store={store}><Counter /></Provider>);
    const buttons = container.querySelectorAll('button');
    
    expect(buttons).toHaveLength(3);
    const incButton = [...buttons]
    .filter(btn => btn.querySelector('[aria-label="increment"]'))
    .map(btn => fireEvent.click(btn));
    const counter = getByText('1');
    expect(counter).toBeInTheDocument();
  });
  
  test('OK button decrements the counter by 1', () => {
    const { container, getByText } = render(<Provider store={store}><Counter /></Provider>);
    const buttons = container.querySelectorAll('button');

    expect(buttons).toHaveLength(3);
    const decButton = [...buttons]
      .filter(btn => btn.querySelector('[aria-label="decrement"]'))
      .map(btn => fireEvent.click(btn));
    const counter = getByText('0');
    expect(counter).toBeInTheDocument();
  });
});
