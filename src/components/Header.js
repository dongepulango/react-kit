import React, { useState } from 'react';
//router
import { Link } from 'react-router-dom'
//styles
import styled from 'styled-components';
import vars from './Vars';
//components
import Nav from './Nav';
import ContainerFluid from '../components/ContainerFluid';
//assets
import logo from '../assets/images/BalkanBrothers-logo-white.svg';

//styled
const HeaderInner = styled.header`
  background-color: ${vars.colors.textDark};
  padding-top: 20px;
  padding-bottom: 20px;
  transition: ${vars.transitions.hover1};
  &.active {
    background-color: #000;
  }
`;
const NavContainerFluid = styled(ContainerFluid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Header = () => {

  //State
  const [navState, setNavState] = useState({
    active: false
  });

  //set nav active
  const toggleNavActive = () => {
    setNavState({
      active: !navState.active,
    })
  }

  return (
    <HeaderInner className={navState.active ? 'active' : null}>
      <NavContainerFluid maxWidth={'1600px'}>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Nav
          navState={navState}
          toggleNavActive={toggleNavActive}
        />
      </NavContainerFluid>
    </HeaderInner>
  );
}

export default Header;