import { createBrowserRouter } from 'react-router-dom';
import CardPage from '../pages/Card/CardPage';

import { LoginPage } from '../pages/Login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/auth',
    element: <CardPage />,
  },
]);

export default router;
