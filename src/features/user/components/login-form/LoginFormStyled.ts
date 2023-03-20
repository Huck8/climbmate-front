import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  max-width: 500px;
  min-width: 400px;
  padding: 2rem;
  height: 440px;
  color: #333;
  display: flex;
  margin: 4rem auto;
  flex-direction: column;

  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  @media (min-width: 1024px) {
    margin: 4rem 3rem;
  }
`;

export const Error = styled.p`
  max-width: 500px;
  color: tomato;
  font-size: 1rem;
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
  background: lightCoral;
  color: white;
  padding: 1rem;
  border: 0 solid transparent;
  :hover {
    background: teal;
    color: lime;
  }
`;

export const LoginStatusFeedBackError = styled.div`
  color: orangered;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 0;
`;

export const LoginStatusFeedBackSuccess = styled.div`
  color: lightseagreen;
  text-align: center;
  font-size: 1.5rem;
  margin-top: 3rem;
`;

export const Spiner = styled.div`
  .spinner {
    width: 4em;
    height: 4em;
    background: #a1a2a1;
    border-radius: 50%;
    margin: 5em auto;
    border: 0.3em solid transparent;
    animation: glow 1s ease infinite;
  }
  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 0.1em #a1a2a1;
      transform: rotate(360deg);
    }
    50% {
      border-top-color: #605556;
    }
    100% {
      box-shadow: 0 0 0 0.4em #a1a2a1, 0 0 0 3.6em transparent;
    }
  }
`;

export const InfoRegisterStyled = styled.div`
  color: gray;
  text-align: right;
  span {
    color: blueviolet;
    padding-left: 0.5rem;
    :hover {
      color: orange;
      cursor: pointer;
    }
  }
`;
