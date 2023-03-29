import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  max-width: 500px;
  /* width: 290px; */
  height: 550px;
  padding: 2rem;

  color: #333;
  display: flex;
  margin: 4rem auto;
  flex-direction: column;

  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  @media (min-width: 767px) {
    margin: 4rem 3rem;
    height: 500px;
  }
`;

export const Title = styled.h2`
  margin: 1rem 0px;
  color: aliceblue;
  text-shadow: rgba(10, 34, 32, 0.25) 2px 0px 5px;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 700;
  font-family: arial;
`;

export const Error = styled.p`
  max-width: 400px;
  color: violet;
  font-size: 0.8rem;
  border-radius: 10px;
  padding: 1rem 2rem;
`;

export const Success = styled.p`
  max-width: 500px;
  color: lime;
  font-size: 1rem;

  border-radius: 10px;
  padding: 1rem 2rem;
`;

export const LabelFormStyled = styled.label`
  color: #333;
  text-align: left;
  margin-bottom: 0.8rem;
  :focus-within {
    font-weight: bold;
    color: violet;
  }
`;

export const InputFormStyled = styled.input`
  background: white;
  color: #333;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  background: white;
  border: 2px solid lightgray;
  :focus-visible {
    outline: 2px solid greenyellow;
  }

  :focus {
    background-color: lightgreen;
  }
`;

export const ButtonFormStyled = styled.button`
  width: 100%;
  border-radius: 20px;
  margin: 1rem auto;
  background: mediumspringgreen;
  color: blueviolet;
  font-weight: 800;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  border: 0 solid transparent;
  :hover {
    background: blueviolet;
    color: mediumspringgreen;
  }
`;

export const LoginStatusFeedBackError = styled.div`
  color: white;
  text-align: center;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem;

  border-radius: 15px;
  background: #ff8158;
`;

export const LoginStatusFeedBackSuccess = styled.div`
  color: lightseagreen;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const Loading = styled.div`
  margin-top: 0.5rem;
  color: lime;
  text-align: center;
`;
