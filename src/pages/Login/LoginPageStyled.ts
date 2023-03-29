import styled from 'styled-components';

export const LoginPageStyled = styled.main`
  background-image: url('assets/redmountains.webp');
  height: 100vh;
  /* position: absolute; */
  display: flex;
  justify-content: flex-end;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  width: 100vw;
  z-index: -1;

  @media (max-width: 767px) {
    background-image: url('assets/abs.webp');
    height: 100vh;
  }
`;
