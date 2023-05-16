import React from 'react';
import { FooterStyled } from './footer-styled';

const Footer = () => {
  return (
    <FooterStyled>
      Footer
      <ul>
        <li>Uno</li>
        <li>Dos</li>
        <li>
          <img src="/assets/climb-no-background.png" alt="logo climbmate"></img>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
