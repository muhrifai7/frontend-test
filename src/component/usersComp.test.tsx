import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserResut from './usersComp';
import { createMockedUsers } from '../MockData/empoyes';



test('informs user that user is not available', async () => {
    const { queryByText } = render(<UserResut dataUser={null} />);
    expect(queryByText('User Not Found')).toBeInTheDocument();
});

test('displays users', () => {
    const [user] = createMockedUsers();
    const { queryByText } = render(<UserResut dataUser={user} />);

    expect(queryByText('Name')).toBeInTheDocument();
});
