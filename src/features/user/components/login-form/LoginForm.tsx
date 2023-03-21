import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getNewUserTokenAsync, selectUser } from '../../user-slice';
import {
  ButtonFormStyled,
  InfoRegisterStyled,
  LoginFormStyled,
  LoginStatusFeedBackError,
  LoginStatusFeedBackSuccess,
  LabelFormStyled,
  InputFormStyled,
  Loading,
  Title,
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
          <Title>CLIMB WITH NEW FRIENDS</Title>
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
          <ButtonFormStyled type="submit" disabled={status === 'loading'}>
            LOGIN
          </ButtonFormStyled>
          <InfoRegisterStyled>
            <p>
              ¿Have no account?<span>Sign up</span>
            </p>
          </InfoRegisterStyled>
        </>

        {status === 'loading' ? (
          <Loading className="loading">Loading...</Loading>
        ) : (
          feedBackUser()
        )}
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
