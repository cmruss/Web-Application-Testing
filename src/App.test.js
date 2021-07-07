import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('App renders without crashing', () => {
  const component = render(<App/>);
  console.log(component.getByAltText);
})

it('both balls and strikes are rendered', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
  getByText(/strikes/i);
});
