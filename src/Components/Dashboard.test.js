import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

it('Dashboard component renders', () => {
    const component = render(<Dashboard/>);
    console.log(component.getByAltText);
  });