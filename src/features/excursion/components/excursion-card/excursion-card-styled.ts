import styled from 'styled-components';

export const ExcursionCardContainer = styled.article`
  width: 300px;
  margin: 1rem;
  user-select: none;
  border-radius: 12px;
  border: 1.5px solid rgb(21 21 21);
  overflow: hidden;
  padding: 0;
  background: #333;

  :hover {
    -webkit-box-shadow: 10px 10px 0px 2px rgba(255, 0, 212, 1);
    -moz-box-shadow: 10px 10px 0px 2px rgba(255, 0, 212, 1);
    box-shadow: 10px 10px 0px 2px rgba(255, 0, 212, 1);
    border-radius: 0%;
    filter: drop-shadow(11px 8px 0px #000);
  }
`;
export const TitleExcursionStyled = styled.h2`
  background: blueviolet;
  text-align: center;
  text-transform: uppercase;
  color: #ff00d4;
  font-size: 1.2rem;
  padding: 1rem;
  max-height: 100px;
  text-shadow: 1px 2px 0px #ffde19;
`;

export const ImageExcursionStyled = styled.div`
  min-width: 100%;
  height: 300px;
  overflow: hidden;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const ButtonExcursionStyled = styled.button`
  width: 250px;
  background-color: blueviolet;
  border: none;
  box-sizing: border-box;
  padding: 1.2rem;
  font-size: 1.2rem;
  color: mediumspringgreen;
  border-radius: 20px;
  padding: 0.5rem;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  margin: 1rem 1.5rem;
  :hover {
    background: mediumspringgreen;
    color: blueviolet;
  }
`;

export const InfoExcursionStyled = styled.div`
  p {
    padding: 0.1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 1rem;
  height: 100px;
  font-weight: 700;
  text-transform: 2px;
  text-transform: capitalize;
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  background-color: mediumspringgreen;
`;
