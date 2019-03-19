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
  min-height: calc(100vh - 68px);
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