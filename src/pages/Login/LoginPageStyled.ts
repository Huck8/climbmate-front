import styled from 'styled-components';

export const LoginPageStyled = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url('assets/redmountains.webp');
  height: 100vh;
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  width: 100vw;
  z-index: -1;

  @media (max-width: 767px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url('assets/redmountains.webp');
    height: 100vh;
    text-align: center;
    display: flex;
  }
`;
