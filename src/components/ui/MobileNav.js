import React, { useEffect, useContext } from 'react';
//context
import { GlobalContext } from 'components/context';
//router
import { NavLink } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import vars from 'components/styles/Vars';
import { rgba, rem } from 'polished';
//components
import Button from 'components/ui/Button';
//hooks
import { useWindowSize } from 'components/hooks/useWindowSize';

//styled
const MobileNavWrap = styled.nav`
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: ${vars.transitions.hover1};
  will-change: opacity;
  background-color: ${rgba('#fff', 0.95)};
  ${props => props.active && css`
    opacity: 1;
    pointer-events: auto;
  `}
`;

const MobileNavInner = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  padding-top: ${vars.navHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileNavContent = styled.div`
  position: relative;
  text-align: center;
  padding-top: ${vars.navHeight}px;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  transform: translateY(-${vars.navHeight}px);
  li {
    margin-bottom: 20px;
    > a {
      font-size: ${rem('22px')};
      font-weight: 500;
      color: ${rgba('#000', 0.7)};
      &:hover,
      &:focus,
      &:active {
        color: #000;
      }
      &.active {
        color: #000;
      }
    }
  }
`;

const MobileNav = () => {

  //use context
  const [context, setContext] = useContext(GlobalContext);
  //close nav
  const closeNav = () => {
    setContext({
      ...context,
      mobileNav: false
    });
  };
  //window size
  const windowSize = useWindowSize();

  //window load & resize
  useEffect(() => {
    const windowResize = () => {
      if (windowSize.width > 1200) {
        if(context.mobileNav === true) {
          closeNav();
        }
      }
    }
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });

  return (
    windowSize.width < 1200 ? (
      <MobileNavWrap active={context.mobileNav}>
        <MobileNavInner>
          <MobileNavContent>
            <MobileNavLinks onClick={closeNav}>
              <li className="nav-link">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-link">
                <NavLink exact to="/about" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-link">
                <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
              </li>
              <li className="nav-link">
                <Button sm>Log in</Button>
              </li>
            </MobileNavLinks>
          </MobileNavContent>
        </MobileNavInner>
      </MobileNavWrap>
    ) : null
  );
};

export default MobileNav;