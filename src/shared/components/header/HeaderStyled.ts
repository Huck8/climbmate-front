import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background: blueviolet;
  display: flex;

  justify-content: space-between;
  align-items: center;

  .logo img {
    width: 80px;
    padding: 1rem;
  }

  .logodesk {
    display: none;
  }

  nav {
    /* margin-right: 1rem; */
    display: flex;
    text-decoration: none;
    align-items: center;
  }

  nav a {
    text-decoration: none;
    color: springgreen;
    font-size: 14px;
    font-weight: 500;
    padding: 0 0.5rem;
    :hover {
      color: gold;
    }
  }

  nav a img {
    width: 1.8rem;
    padding-top: 7px;
  }

  @media (min-width: 767px) {
    padding: 2rem 1rem;

    .logodesk {
      display: block;
    }
    .logodesk img {
      display: block;
      width: 200px;
      padding: 1rem;
    }

    .logo {
      display: none;
    }
  }
`;
