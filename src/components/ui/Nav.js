import React, { useContext } from 'react';
//context
import { GlobalContext } from 'components/context';
//router
import { NavLink } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import vars from 'components/styles/Vars';
//components
import Button from 'components/ui/Button';
//hooks
import { useWindowSize } from 'components/hooks/useWindowSize';

//styled
const NavWrap = styled.nav`
  transition: ${vars.transitions.hover1};
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    li {
      &.nav-link {
        &:not(:last-child) {
          margin-right: 30px;
        }
        > a {
          color: ${rgba('#fff', 0.7)};
          &.active {
            color: #fff;
          }
          &:hover,
          &:focus,
          &:active {
            color: #fff;
          }
        }
      }
    }
  }
`;

const NavToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 22px;
  padding: 2px 0;
  overflow: hidden;
  position: relative;
  transition: ${vars.transitions.hover1};
  color: ${vars.colors.textDark};
  cursor: pointer;
  &:hover {
    .nav-toggle-line {
      opacity: 0.8;
      &:nth-child(2) {
        transform: translateX(10px);
      }
    }
  }
  .nav-toggle-line {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background-color: #fff;
    transition: ${vars.transitions.hover1};
  }
  ${props => props.active && css`
    .nav-toggle-line {
      background-color: #fff;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      &:nth-child(1) {
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(45deg);
      }
    }
  `}
`;

const Nav = () => {

  //use context
  const [context, setContext] = useContext(GlobalContext);
  //close nav
  const toggleNav = () => {
    setContext({
      ...context,
      mobileNav: !context.mobileNav
    });
  };
  //window size
  const windowSize = useWindowSize();

  return (
    <NavWrap>
      {
        windowSize.width < 1200 ? (
          <NavToggle active={context.mobileNav} onClick={toggleNav}>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
          </NavToggle>
          ) : (
          <ul>
            <li className="nav-link">
              <NavLink to="/"  className={({isActive}) => (isActive ? 'active' : null)}>Home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : null)}>About</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : null)}>Contact</NavLink>
            </li>
            <li className="nav-link">
              <Button sm>Log in</Button>
            </li>
          </ul>
        )
      }
    </NavWrap>
  );
};

export default Nav;