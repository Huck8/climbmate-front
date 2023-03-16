import React from 'react';
import LoginForm from '../../features/users/LoginForm';
import { LoginPageStyled } from './LoginPageStyled';

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
