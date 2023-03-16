import React from 'react';
import {
  ButtonFormStyled,
  InfoRegisterStyled,
  LoginFormStyled,
} from '../LoginFormStyled';
import { InputFormStyled } from '../LoginFormStyled';
import { LabelFormStyled } from '../LoginFormStyled';

const LoginForm = () => {
  // const handlerFormStyledHover = () => {

  // };
  return (
    <>
      <LoginFormStyled>
        <LabelFormStyled htmlFor="email">Email</LabelFormStyled>

        <InputFormStyled
          type="email"
          placeholder="Introduce tu email"
          name="email"
          id="email"
          required
        />
        <LabelFormStyled htmlFor="password">Contraseña</LabelFormStyled>
        <InputFormStyled
          type="password"
          placeholder="Introduce tu contraseña"
          name="password"
          id="password"
          required
        />
        <ButtonFormStyled type="submit">LOGIN</ButtonFormStyled>
        <InfoRegisterStyled>
          <p>
            ¿No tienes cuenta?<span>Regístrate</span>
          </p>
        </InfoRegisterStyled>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
