// import { MemoryRouter } from 'react-router-dom';

// import { fireEvent, screen } from '@testing-library/react';

// import { renderWithProviders } from '../../../mocks/test-util';
// import { Header } from './Header';

// describe('Given a header component', () => {
//   test('When it renders it should show logo and 2 links', () => {
//     renderWithProviders(
//       <MemoryRouter>
//         <Header></Header>
//       </MemoryRouter>,
//     );

//     const logoElement = screen.getAllByRole('img');
//     const linksElement = screen.getAllByRole('link');

//     expect(logoElement.length).toEqual(2);
//     expect(linksElement.length).toEqual(3);
//   });

// }

//    test('When it renders it should show logo and 2 links', () => {
//     renderWithProviders(
//       <MemoryRouter>
//         <Header></Header>
//       </MemoryRouter>,
//     );

//     sessionStorage.setItem('accessToken', 'token');
//     const logoutButton=screen.getByTestId('Log out');
//     const handleLogout = jest.fn();
//     fireEvent.click(logoutButton, handleLogout);
//     expect(handleLogout).not.toHaveBeenCalled();
//     sessionStorage.clear();

// });

import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../mocks/test-util';
import { Header } from './Header';

describe('Given a header component', () => {
  test('When it renders it should show logo and 2 links', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logoElement = screen.getAllByRole('img');
    const linksElement = screen.getAllByRole('link');

    expect(logoElement.length).toEqual(2);
    expect(linksElement.length).toEqual(3);
  });

  test('When the user clicks on logout button, it should call the handleLogout function', () => {
    renderWithProviders(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    sessionStorage.setItem('accessToken', 'token');
    const logoutButton = screen.getByTestId('Log out');
    const handleLogout = jest.fn();
    fireEvent.click(logoutButton, handleLogout);
    expect(handleLogout).not.toHaveBeenCalled();
    sessionStorage.clear();
  });
});
