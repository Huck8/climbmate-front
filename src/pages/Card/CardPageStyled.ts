import styled from 'styled-components';

export const ExcursionHeroImageStyled = styled.div``;

export const ExcursionCardPageStyled = styled.main`
  margin: auto;
  display: flex;
  background: #f3f3f3;
  padding-bottom: 3rem;
  .hero {
    background-image: url('/assets/hero-image-climbmate.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 500px;
    z-index: 99;
  }
  ul {
    justify-content: space-evenly;
    width: 1300px;
    justify-contente: center;
    margin: 1rem auto 0;
  }

  ul li article {
    margin: 1rem 0;
  }
`;

export const ExcursionCreate = styled.button`
  background: #8a2be2;
  color: #00fa9a;
  padding: 1rem;

  position: absolute;

  border-radius: 35px;
  font-size: 1.2rem;
  font-weight: 700;
  border: 2px solid #333;
  right: 50px;

  top: 1.4rem;
  right: 18%;
  left: 18%;
  display: none;
  :hover {
    background: #00fa9a;
    color: #8a2be2;
  }

  @media (min-width: 1030px) {
    right: 0px;
    width: 200px;
    /* right: 25%;*/
    left: 77%;
  }
`;
