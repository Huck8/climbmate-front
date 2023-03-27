import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-util';
import ExcursionCardPage from './CardPage';

describe('Given a Card list page', () => {
  test('When the home is used, then it should render a div element', () => {
    renderWithProviders(
      <MemoryRouter>
        <ExcursionCardPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
