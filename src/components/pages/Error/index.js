import React from 'react';
//styles
import styled from 'styled-components';
import { rem } from 'polished';
//components
import Layout from 'components/ui/Layout';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';

const ErrorWrap = styled.section`
  padding-top: ${rem('100px')};
  padding-bottom: ${rem('100px')};
  text-align: center;
`;

const Error = () => {
  return (
    <Layout>
      <ErrorWrap>
        <Container>
          <Heading>404: Page Not Found</Heading>
        </Container>
      </ErrorWrap>
    </Layout>
  );
};

export default Error;