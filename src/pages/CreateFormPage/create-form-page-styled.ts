import styled from 'styled-components';

export const CreateFormPageContainer = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url('/assets/redmountains.webp');
  padding: 2rem;

  height: 80vh;
  h1 {
    text-transform: Uppercase;
    letter-spacing: 1px;
    font-weight: 900;
    font-size: 3rem;
    margin-top: 1rem;
    text-align: center;
    font-family: sans-serif;
    color: whitesmoke;
  }
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
