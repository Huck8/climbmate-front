import React from 'react';
import LoginForm from '../../features/user/components/login-form/LoginForm';
import { LoginPageStyled } from './LoginPageStyled';

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
