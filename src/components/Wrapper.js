import React from 'react';
//styles
import styled from 'styled-components';
//components
import Header from './Header.js';
import Footer from './Footer.js';

//styled
const Wrap = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  &.fade-enter {
    transition: opacity 0.3s linear 0.15s;
    opacity: 0;
    &.fade-enter-active {
      opacity: 1;
    }
  }
  &.fade-exit {
    transition: opacity 0.15s linear;
    opacity: 1;
    &.fade-enter-active {
      opacity: 0;
    }
  }
`;

const WrapInner = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow: hidden;
  min-height: 100vh; //temp
`;

const Wrapper = (props) => {
  return (
    <Wrap>
      <WrapInner>
        <Header />
          <Content>
            {props.children}
          </Content>
        <Footer />
      </WrapInner>
    </Wrap>
  );
}

export default Wrapper;