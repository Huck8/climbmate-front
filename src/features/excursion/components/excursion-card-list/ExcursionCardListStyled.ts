import styled from 'styled-components';

export const TitleExcursionStyled = styled.h2`
  color: blueviolet;
  text-align: center;
  font-weight: 800;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1.8rem;
  background: mediumspringgreen;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    color: blueviolet;
    margin-bottom: 2rem;
  }

  @media (min-width: 500px) {
    margin-bottom: 2rem;
  }
`;

export const ExcursionListContainer = styled.article`
  width: 100%;
  height: 100vh;
  border: 1.5px solid #e4e4e4;
`;

export const ExcursionCardListContainerMain = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  flex-wrap: wrap;
`;

export const ExcursionCardListOne = styled.li``;

export const ExcursionStatusFeedBackLoading = styled.div`
  color: green;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const ExcursionStatusFeedBackError = styled.div`
  color: red;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;
