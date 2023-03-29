import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';

export const Header = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
  };
  return (
    <HeaderStyled>
      <div className="logo">
        <Link aria-label="Go to home page" to={''}>
          <img src="/assets/climb-solo.png" alt="logo" />
        </Link>
      </div>
      <div className="logodesk">
        <img src="/assets/climb-no-background.png" alt="logo" />
      </div>
      <nav>
        <Link aria-label="Go to home page" to={''}>
          <p>Home</p>
        </Link>
        <Link aria-label="Create your excursion" to={'/excursions'}>
          <p>Excursions</p>
        </Link>
        <Link
          to={'/'}
          onClick={() => handleLogout()}
          data-testid="Log out"
          reloadDocument
        >
          <img src="/assets/icons8-salida-48.png" alt="logo" />
        </Link>
      </nav>
    </HeaderStyled>
  );
};
