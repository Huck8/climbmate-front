import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  max-width: 500px;
  min-width: 400px;
  padding: 2rem;
  height: 350px;
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

export const LabelFormStyled = styled.label`
  color: #333;
  text-align: left;
  margin-bottom: 0.8rem;
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

// export const ButtonFormStyledHover = styled(ButtonFormStyled)`

// `;

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
