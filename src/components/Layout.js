import React, { useEffect } from 'react';
//styles
import styled from 'styled-components';
import vars from './Vars';


//styled
const LayoutWrap = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding-top: ${vars.navHeight}px;
`;

const ContentInner = styled.div``;

const Layout = (props) => {

  //scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <LayoutWrap>
      <ContentInner>
        {props.children}
      </ContentInner>
    </LayoutWrap>
  );
};

export default Layout;