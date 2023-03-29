import { screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { errorHandlers } from '../../../../mocks/handlers';
import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';
import { ExcursionCardPage } from '../../../../pages/Card/CardPage';

import Excursion from '../../../../shared/models/excursion-model';
import ExcursionCardList from './ExcursionCardList';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a continent card list component', () => {
  describe('When the component loads and Api responds', () => {
    test('Then it should response with a article', async () => {
      const excursion: Excursion[] = [
        {
          imgExcursion: 'https://example.com/img1',
          nameExcursion: 'Excursion 1',
          date: new Date(),
          difficultyLevel: 'Easy',
          needEquipment: false,
          creator: 'John Doe',
        },
        {
          imgExcursion: 'https://example.com/img2',
          nameExcursion: 'Excursion 2',
          date: new Date(),
          difficultyLevel: 'Intermediate',
          needEquipment: true,
          creator: 'Jane Smith',
        },
      ];
      renderWithProviders(
        <MemoryRouter>
          <ExcursionCardList excursions={excursion} />
        </MemoryRouter>,
      );

      await waitFor(() => {
        const excursionList = screen.getAllByRole('article');

        expect(excursionList[1]).toBeInTheDocument();
      });
    });
  });
});

describe('When component loads and API responds with error', () => {
  test('Then it should show loading and after response should render the error message', async () => {
    server.use(...errorHandlers);
    renderWithProviders(
      <MemoryRouter>
        <ExcursionCardPage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      const errorMessage = screen.getByText('There is not excursions to show');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
