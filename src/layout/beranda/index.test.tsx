import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from './index';

test('renders learn react link', () => {
    render(<Index />);
    const linkElement = screen.getByText(/This is a simple hero unit/i);
    expect(linkElement).toBeInTheDocument();
});
