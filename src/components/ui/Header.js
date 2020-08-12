import React from 'react';
//router
import { Link } from 'react-router-dom';
//styles
import styled from 'styled-components';
import vars from 'components/styles/Vars';
//components
import Nav from 'components/ui/Nav';
import ContainerFluid from 'components/ui/Container';
//assets
import logo from 'assets/images/BalkanBrothers-logo-white.svg';

//styled
const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  background-color: ${vars.colors.textDark};
  padding-top: 20px;
  padding-bottom: 20px;
  transition: background-color 0.3s ease-in-out;
  will-change: background-color;
  height: ${vars.navHeight}px;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
const NavContainerFluid = styled(ContainerFluid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <NavContainerFluid maxWidth={'1600px'}>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Nav />
      </NavContainerFluid>
    </HeaderWrap>
  );
}

export default Header;