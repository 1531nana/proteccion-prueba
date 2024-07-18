import React from 'react';
import { render, screen } from '@testing-library/react';
import { Fibonacci } from './Fibonacci';

describe('Fibonacci Component', () => {
  test('renders initial Fibonacci sequence with the 4 numbers', () => {
    render(<Fibonacci hour={{ minutes: '23', seconds: '02' }} />);
    expect(screen.getByText('2,')).toBeInTheDocument();
    expect(screen.getByText('3,')).toBeInTheDocument();
    expect(screen.getByText('5,')).toBeInTheDocument();
    expect(screen.getByText('8,')).toBeInTheDocument();
  });
});
