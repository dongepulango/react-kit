import React from 'react';
//styles
import styled from 'styled-components';
//components
import Nav from './Nav';
//assets
import logo from '../assets/images/BalkanBrothers-logo-white.svg';


//styled
const HeaderInner = styled.header`
  background-color: ${props => props.theme.pink};
  padding: 20px;
`;

const Header = () => {
  return (
    <HeaderInner>
      <img src={logo} className="logo" alt="logo" />
      <Nav />
    </HeaderInner>
  );
}

export default Header;