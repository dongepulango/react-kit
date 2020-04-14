import React from 'react';
//router
import { Link } from 'react-router-dom';
//styles
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import vars from 'components/styles/Vars';

//styled
const NavWrap = styled.nav`
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
          /* Current Page */
          &[aria-current="page"] {
            color: ${vars.colors.blue};
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

const Nav = (props) => {
  return (
    <NavWrap>
      <ul>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-toggle">
          <NavToggle active={props.mobileNavState} onClick={props.toggleMobileNav}>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
            <span className="nav-toggle-line"></span>
          </NavToggle>
        </li>
      </ul>
    </NavWrap>
  );
};

export default Nav;