import React from 'react';
//router
import { Link } from 'react-router-dom';
//styles
import styled from 'styled-components';
import vars from './Vars';
import { rgba } from 'polished';
//react modal
import ReactModal from 'react-modal';

//styled
const MobileNavInner = styled.section`
  position: relative;
`;

const MobileNavWrap = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
  background-color: ${rgba('#000', 0.95)};
  padding-top: ${vars.navHeight};
`;

const MobileNavContent = styled.div`
  position: relative;
  text-align: center;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


//modal styles override
const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    backgroundColor: 'transparent'
  },
  content: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: 'auto',
    maxWidth: '100%',
    margin: 'auto',
    border: 'none',
    background: 'none',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none',
    padding: '0'
  }
}

//Root element
ReactModal.setAppElement('#root');

const MobileNav = (props) => {

  return (
    <MobileNavInner>
      <ReactModal isOpen={props.openModal} onRequestClose={props.closeMobileNav} contentLabel="Modal" closeTimeoutMS={300} style={style}>
        <MobileNavWrap>
          <MobileNavContent>
            <MobileNavLinks onClick={props.closeMobileNav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </MobileNavLinks>
          </MobileNavContent>
        </MobileNavWrap>
      </ReactModal>
    </MobileNavInner>
  );
};

export default MobileNav;