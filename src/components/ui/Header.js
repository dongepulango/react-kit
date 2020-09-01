import React, { useContext, useRef, useEffect } from 'react';
//context
import { GlobalContext } from 'components/context';
//router
import { Link } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import vars from 'components/styles/Vars';
//components
import Nav from 'components/ui/Nav';
import ContainerFluid from 'components/ui/Container';
//headeroom
import Headroom from 'react-headroom';
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
  height: ${vars.headerHeight}px;
  z-index: 99999;
  transition: ${vars.transitions.hover1};
  @media (max-width: ${vars.media.lgMax}) {
    height: ${vars.headerHeightSm}px;
  }
  /* scrolled */
  ${props => props.scrolled && css`
    height: ${vars.headerHeightSm}px;
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

  let browserWindow = {}
  if (typeof window !== 'undefined') {
    browserWindow = window;
  };

  //set header scrolled
  const setHeaderScrolled = (state) => {
    setContext({
      ...context,
      headerScrolled: state,
    });
  };

  //scroll Y ref
  const prevScrollY = useRef(0);

  //scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = browserWindow.scrollY;
      if (currentScrollY > vars.headerHeight) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
      prevScrollY.current = currentScrollY;
    };
    browserWindow.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      browserWindow.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Headroom>
      <HeaderWrap scrolled={context.headerScrolled}>
        <NavContainerFluid maxWidth={'1920px'}>
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <Nav />
        </NavContainerFluid>
      </HeaderWrap>
    </Headroom>
  );
}

export default Header;