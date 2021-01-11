import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';
import Index from './index';

import * as apis from '../../utils/userApis';
jest.mock('../../utils/userApis');
const mockedApis = apis as jest.Mocked<typeof apis>;

test('renders title', async () => {
    const { getByText } = render(<Index />);
    await waitFor(() => {
        expect(getByText("Personel List")).toBeInTheDocument();
    });
});

test('display a users upon first mounted', async () => {
    expect(mockedApis.getRamdomUser).toHaveBeenCalledTimes(0);
})