import React, { useEffect, useContext } from 'react';
//context
import { GlobalContext } from 'components/context';
//router
import { Link } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import vars from 'components/styles/Vars';
import { rgba, rem } from 'polished';
//hooks
import { useWindowSize } from 'components/hooks/useWindowSize';

//styled
const MobileNavWrap = styled.nav`
  position: fixed;
  margin: auto;
  top: ${vars.navHeight}px;
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
  margin-top: ${vars.navHeight}px;
  height: calc(100vh - ${vars.navHeight}px);
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
    > a {
      font-size: ${rem('22px')};
      color: #000;
      /* Current Page */
      &[aria-current='page'] {
        color: ${vars.colors.blue};
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </MobileNavLinks>
          </MobileNavContent>
        </MobileNavInner>
      </MobileNavWrap>
    ) : null
  );
};

export default MobileNav;