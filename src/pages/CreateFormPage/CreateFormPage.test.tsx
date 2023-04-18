import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from '../../mocks/test-util';
import { CreateFormPageStyled } from './create-form-page-styled';

describe('Given a home page', () => {
  test('When the home is used, then it should render a div element', () => {
    renderWithProviders(
      <MemoryRouter>
        <CreateFormPageStyled />
      </MemoryRouter>,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
