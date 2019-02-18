import React from 'react';
import Nav from './Nav';
import logo from '../assets/images/BalkanBrothers-logo-white.svg';

const Header = () => {
  return (
    <header className="bb_header">
      <img src={logo} className="logo" alt="logo" />
      <Nav />
    </header>
  );
}

export default Header;