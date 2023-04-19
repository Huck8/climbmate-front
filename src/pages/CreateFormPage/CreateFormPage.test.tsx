import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-util';
import { screen, waitFor } from '@testing-library/react';
import { server } from '../../mocks/server';

import CreateFormPage from './CreateFormPage';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a ExcursionForm component', () => {
  describe('When the user tries create his excursion', () => {
    test('Then the excursion should be created and it will be redirected to travel', async () => {
      globalThis.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({
          msg: 'Your excursion has been successfully created.',
        }),
      });
      renderWithProviders(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<CreateFormPage />}></Route>
            <Route path="/excursions" element={<h2>Excursions</h2>}></Route>
          </Routes>
        </MemoryRouter>,
      );

      const inputUserName = screen.getByLabelText('Name');
      await userEvent.type(inputUserName, 'Angel');
    });
  });
});

describe('When the user tries create a excursions with wrong data', () => {
  test('Then its should recived a error', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({
        msg: ' An error has occurred, try again.',
      }),
    });
    renderWithProviders(
      <MemoryRouter>
        <CreateFormPage />
      </MemoryRouter>,
    );
    const inputUserName = screen.getByText('Name');
    await userEvent.type(inputUserName, 'Angel');

    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      const errorMsg = screen.getByText('An error has occurred, try again.');
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
