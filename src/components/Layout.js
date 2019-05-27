import React from 'react';
//styles
import styled from 'styled-components';
//components
import Footer from './Footer.js';

//styled
const Content = styled.section`
  position: relative;
  min-height: 400px;
`;

const Layout = (props) => {
  return (
    <React.Fragment>
      <Content>
        {props.children}
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;