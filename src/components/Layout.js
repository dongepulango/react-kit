import React from 'react';
//styles
import styled from 'styled-components';
import vars from './Vars';
//components
import Footer from './Footer.js';

//styled
const Content = styled.section`
  position: absolute;
  overflow: hidden;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  width: 100%!important;
  min-height: 400px;
  padding-top: ${vars.navHeight};
`;

const ContentInner = styled.div``;

const Layout = (props) => {
  return (
    <Content>
      <ContentInner>
        {props.children}
      </ContentInner>
      <Footer />
    </Content>
  );
};

export default Layout;