import styled from 'styled-components';

export const ExcursionCardPageStyled = styled.main`
  margin: auto;
  height: 100vh;
`;

export const ExcursionCreate = styled.button`
  background: #8a2be2;
  color: #00fa9a;
  padding: 1rem;

  position: absolute;
  margin: 1rem;
  border-radius: 35px;
  font-size: 1.2rem;
  font-weight: 700;
  border: 2px solid #333;
  right: 50px;
  top: 10px;
  :hover {
    background: #00fa9a;
    color: #8a2be2;
  }

  @media (min-width: 767px) {
    right: 67px;
  }
`;
