import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  background: #333;
  height: 150px;
  color: mediumspringgreen;
  font-weight: 600;
  padding: 2rem;

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    align-items: center;
  }
  ul li {
    color: red;
    width: 33%;
    text-align: center;

    img {
      width: 100px;
    }
  }
`;
