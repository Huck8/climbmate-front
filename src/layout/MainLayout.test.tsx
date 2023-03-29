import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../mocks/test-util';
import MainLayout from './MainLayout';
import { screen } from '@testing-library/react';

describe('Given a main layout page', () => {
  test('When teh main layout is used, then should render a main element', () => {
    renderWithProviders(
      <MemoryRouter>
        <MainLayout></MainLayout>
      </MemoryRouter>,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
