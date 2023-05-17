import styled from 'styled-components';
export const ExcursionFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: 'Nunito Sans', sans-serif;
  margin: 30px auto;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  padding: 0 30px;
  max-width: 400px;
  color: #444;
  background: mediumspringgreen;
  margin-top: 20px;
  border-radius: 30px;
  padding: 20px;
  label {
    margin-top: 10px;
  }
  input[type='text'] {
    font-family: 'Nunito Sans', sans-serif;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    width: 100%;
    height: 40px;
  }

  select {
    font-family: 'Nunito Sans', sans-serif;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    width: 100%;
    color: #777;
  }
  select {
    width: 100%;
  }
  fieldset {
    margin-top: 10px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  fieldset div {
    display: flex;
    -webkit-box-align: center;
    align-items: baseline;
  }
  legend {
    margin-bottom: 5px;
  }
  div {
    display: flex;
    align-items: center;
    input[type='radio'] {
      margin-right: 10px;
    }
  }

  input#imgExcursion {
    margin-top: rem;
  }

  button[type='submit'] {
    background-color: blueviolet;
    color: white;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 2rem;
    :hover {
      background: #333;
      color: blueviolet;
    }
  }
`;
