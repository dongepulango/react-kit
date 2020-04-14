import React, { useContext } from 'react';
//context
import { GlobalContext } from 'components/Contex';
//router
import { Link } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import vars from 'components/styles/Vars';
import { rgba } from 'polished';

//styled
const MobileNavWrap = styled.section`
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transform: translate3d(0, -100%, 0);
  transition: ${vars.transitions.hover5};
  will-change: transform;
  background-color: ${rgba('#000', 0.95)};
  ${props => props.active && css`
    transform: translate3d(0, 0, 0);
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
      font-size: ${vars.rems.f22};
      color: #fff;
      /* Current Page */
      &[aria-current='page'] {
        color: ${vars.colors.blue};
      }
    }
  }
`;

const MobileNav = () => {

  //use Context
  const [context, setContext] = useContext(GlobalContext);

  //close mobile nav
  const closeMobileNav = () => {
    setContext({
      ...context,
      mobileNav: false,
    });
  };

  return (
    <MobileNavWrap active={context.mobileNav}>
      <MobileNavInner>
        <MobileNavContent>
          <MobileNavLinks onClick={closeMobileNav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </MobileNavLinks>
        </MobileNavContent>
      </MobileNavInner>
    </MobileNavWrap>
  );
};

export default MobileNav;