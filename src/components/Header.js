import React, { useState, createContext } from 'react';
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
  padding-top: 15px;
  padding-bottom: 15px;
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

//Create Context
export const NavContext = createContext([false, () => {}]);

const Header = () => {

  //State
  let [navState, setActive] = useState(false);

  return (
    <HeaderInner className={navState === true ? 'active' : null}>
      <NavContext.Provider value={[navState, setActive]}>
        <NavContainerFluid maxWidth={'1600px'}>
          <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
          <Nav />
        </NavContainerFluid>
      </NavContext.Provider>
    </HeaderInner>
  );
}

export default Header;