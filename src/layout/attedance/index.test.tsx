import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from './index';

test('renders learn react link', () => {
    render(<Index />);
    const linkElement = screen.getByText(/Attedance Page/i);
    expect(linkElement).toBeInTheDocument();
});
