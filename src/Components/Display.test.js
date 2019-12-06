import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';

it('Display component renders', () => {
  const component = render(<Display/>);
  console.log(component.getByAltText);
});

test('button clicks increment count and rollover at point caps', () => {
    const { getByTestId } = render(<Display/>)
    //ball button increment and rollover
    expect(getByTestId('ball-count').textContent).toBe('0')
    fireEvent.click(getByTestId('ball-button'))
    expect(getByTestId('ball-count').textContent).toBe('1')
    fireEvent.click(getByTestId('ball-button'))
    fireEvent.click(getByTestId('ball-button'))
    fireEvent.click(getByTestId('ball-button'))
    expect(getByTestId('ball-count').textContent).toBe('0')
    //strike button increment and rollover
    expect(getByTestId('strike-count').textContent).toBe('0')
    fireEvent.click(getByTestId('strike-button'))
    expect(getByTestId('strike-count').textContent).toBe('1')
    fireEvent.click(getByTestId('strike-button'))
    fireEvent.click(getByTestId('strike-button'))
    expect(getByTestId('strike-count').textContent).toBe('0')
    //foul button increment and stop at cap
    fireEvent.click(getByTestId('foul-button'))
    expect(getByTestId('strike-count').textContent).toBe('1')
    fireEvent.click(getByTestId('foul-button'))
    fireEvent.click(getByTestId('foul-button'))
    expect(getByTestId('strike-count').textContent).toBe('2')
    //hit button reset all
    fireEvent.click(getByTestId('hit-button'))
    expect(getByTestId('strike-count').textContent).toBe('0')
    expect(getByTestId('ball-count').textContent).toBe('0')
});