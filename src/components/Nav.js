import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bb_nav">
      <ul>
        <li><NavLink to="/" exact={true}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;