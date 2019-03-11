import React from 'react';
//router
import { NavLink } from 'react-router-dom'
//styles
import styled from 'styled-components';

//styled
const NavInner = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      a {
        color: #fff;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavInner>
      <ul>
        <li><NavLink to="/" exact={true}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </NavInner>
  );
}

export default Nav;