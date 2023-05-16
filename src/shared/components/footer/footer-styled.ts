import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background: #333;
  height: 150px;
  color: mediumspringgreen;
  font-weight: 600;
  padding: 3rem;

  ul {
    list-style: none;
    display: flex;
  }
  ul li {
    color: red;
    width: 33%;
    text-align: center;

    img {
      width: 150px;
    }
  }
`;
