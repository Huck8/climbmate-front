import styled from 'styled-components';

export const CreateFormPageStyled = styled.main`
  background-image: url('assets/redmountains.webp');

  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url('assets/redmountains.webp');

  padding: 2rem;
  height: 100vh;
`;

export const ExcursionFormStatusFeedBackError = styled.div`
  color: red;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const ExcursionFormStatusFeedBackSuccess = styled.div`
  color: green;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;
