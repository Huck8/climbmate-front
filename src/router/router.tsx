import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import CardPage from '../pages/Card/CardPage';

import { LoginPage } from '../pages/Login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'excursions',
        element: <CardPage />,
      },
    ],
  },
]);

export default router;
