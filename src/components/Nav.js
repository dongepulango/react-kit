import React, { useContext } from 'react';
//context
import { NavContext } from "./Header";
//router
import { NavLink } from 'react-router-dom'
//styles
import styled from 'styled-components';
import { rgba } from 'polished';
import vars from './Vars';

//styled
const NavInner = styled.nav`
  transition: ${vars.transitions.hover1};
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      &.nav-link {
        margin-right: 20px;
        &:nth-last-child(2) {
          margin-right: 0;
        }
        @media (max-width: ${vars.media.lgMax}) {
          display: none;
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
      &.nav-toggle {
        @media (min-width: ${vars.media.xlMin}) {
          display: none;
        }
        .toggle {
          display: block;
          transition: ${vars.transitions.hover1};
          color: ${rgba('#fff', 0.7)};
          cursor: pointer;
          &:hover {
            color: #fff;
          }
          &.active {
            color: ${vars.colors.blue};
          }
        }
      }
    }
  }
`;

const Nav = () => {

  //Use Context
  let [navState, setActive] = useContext(NavContext);
  
  //Toggle Active
  const toggleActive = () => {
    setActive(navState = !navState);
    //console.log(navState);
  }

  return (
    <NavInner>
      <ul>
        <li className="nav-link">
          <NavLink to="/" exact={true}>Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="nav-toggle">
          <span className={navState === true ? 'active toggle' : 'toggle'} onClick={toggleActive}>Menu</span>
        </li>
      </ul>
    </NavInner>
  );
}

export default Nav;