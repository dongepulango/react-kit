import React, { useContext, useState, useEffect } from 'react';
//context
import { GlobalContext } from 'Context';
//router
import { Link } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import vars from 'components/Vars';
//components
import Nav from 'components/Nav';
import ContainerFluid from 'components/Container';
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
  ${props => props.active  && css`
    background-color: transparent;
  `}
`;
const NavContainerFluid = styled(ContainerFluid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {

  //use Context
  const [context, setContext] = useContext(GlobalContext);

  //toggle mobile nav state
  const toggleMobileNav = () => {
    setContext({
      ...context,
      mobileNav: !context.mobileNav,
    });
  };

  //close modal
  const closeMobileNav = () => {
    setContext({
      ...context,
      mobileNav: false,
    });
  };

  //window width state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //window resize
  useEffect(() => {
    const windowResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 1200) {
        if(context.mobileNav === true) {
          closeMobileNav();
        }
      }
    }
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });
  
  return (
    <HeaderWrap active={context.mobileNav}>
      <NavContainerFluid maxWidth={'1600px'}>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Nav mobileNavState={context.mobileNav} toggleMobileNav={toggleMobileNav} />
      </NavContainerFluid>
    </HeaderWrap>
  );
}

export default Header;