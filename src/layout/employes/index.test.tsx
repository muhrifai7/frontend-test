import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Index from './index';

import * as apis from '../../utils/userApis';
import { createMockedUsers } from '../../MockData/empoyes';
jest.mock('../../utils/userApis');
const mockedApis = apis as jest.Mocked<typeof apis>;
mockedApis.getRamdomUser.mockResolvedValue(createMockedUsers());

test('renders title', async () => {
    const { getByText } = render(<Index />);
    await waitFor(() => {
        expect(getByText("Personel List")).toBeInTheDocument();
    });
});

test('display a users upon first mounted', async () => {
    const { getByPlaceholderText, getByTitle } = render(<Index />);
    expect(getByTitle('Loading')).toBeInTheDocument();
    expect(mockedApis.getRamdomUser).toHaveBeenCalledTimes(0);
    fireEvent.change(getByPlaceholderText('Find Personel'), { target: { value: /\W/g } });
})