import React, { useState, useEffect } from 'react';
//recoil
import { useRecoilValue, useSetRecoilState } from 'recoil';
//store
import { mobileNavState, mobileNavClose } from 'components/Store';
//router
import { Link } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import vars from 'components/styles/Vars';
import { rgba, rem } from 'polished';

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

  //recoil state
  const navState = useRecoilValue(mobileNavState);
  //recoil store
  const navClose = useSetRecoilState(mobileNavClose);

  //window width state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //window load & resize
  useEffect(() => {
    const windowResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 1200) {
        if(navState === true) {
          navClose();
        }
      }
    }
    window.addEventListener('resize', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  });

  return (
    windowWidth < 1200 ? (
      <MobileNavWrap active={navState}>
        <MobileNavInner>
          <MobileNavContent>
            <MobileNavLinks onClick={navClose}>
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