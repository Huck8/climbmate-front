import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getNewUserTokenAsync, selectUser } from '../../user-slice';
import {
  ButtonFormStyled,
  InfoRegisterStyled,
  LoginFormStyled,
  Spiner,
  LoginStatusFeedBackError,
  LoginStatusFeedBackSuccess,
  LabelFormStyled,
  InputFormStyled,
} from './LoginFormStyled';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status, loginStatus, loginMessage } = useAppSelector(selectUser);
  const feedBackUser = () => {
    switch (loginStatus) {
      case 'error':
        return (
          <LoginStatusFeedBackError>{loginMessage}</LoginStatusFeedBackError>
        );

      case 'success':
        return (
          <LoginStatusFeedBackSuccess>
            {loginMessage}
          </LoginStatusFeedBackSuccess>
        );

      default:
        return <>{loginMessage}</>;
    }
  };
  return (
    <>
      <LoginFormStyled
        data-testid="login-form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(getNewUserTokenAsync(e.currentTarget));
        }}
      >
        <>
          <h2>CLIMB WITH NEW FRIENDS</h2>
          <LabelFormStyled htmlFor="Email">Email</LabelFormStyled>

          <InputFormStyled
            type="email"
            placeholder="Email"
            name="email"
            id="Email"
            required
          />
          <LabelFormStyled htmlFor="Password">Password</LabelFormStyled>
          <InputFormStyled
            type="password"
            placeholder="Password"
            name="password"
            id="Password"
            required
          />
          <ButtonFormStyled type="submit">LOGIN</ButtonFormStyled>
          <InfoRegisterStyled>
            <p>
              ¿Have no account?<span>Sign up</span>
            </p>
          </InfoRegisterStyled>
        </>

        {status === 'loading' ? (
          <>
            <Spiner className="spinner"></Spiner>
          </>
        ) : (
          feedBackUser()
        )}
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
