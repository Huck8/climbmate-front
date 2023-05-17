import React from 'react';
import { FooterStyled } from './footer-styled';

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li>About us</li>
        <li>Hire</li>
        <li>
          <img src="/assets/climb-no-background.png" alt="logo climbmate"></img>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
