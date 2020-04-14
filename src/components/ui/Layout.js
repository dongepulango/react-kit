import React, { useEffect } from 'react';
//styles
import styled from 'styled-components';
import vars from 'components/styles/Vars';
//framer-motion
import { motion } from 'framer-motion';

//styled
const LayoutWrap = styled(motion.section)`
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
    <LayoutWrap
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        }
      }}
      exit={{ opacity: 0 }}
      >
      <ContentInner>
        {props.children}
      </ContentInner>
    </LayoutWrap>
  );
};

export default Layout;