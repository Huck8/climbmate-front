import { createBrowserRouter } from 'react-router-dom';
import { CardListPage } from '../pages/Card-list/CardListPage';
import { LoginPage } from '../pages/Login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/auth',
    element: <CardListPage />,
  },
]);

export default router;
