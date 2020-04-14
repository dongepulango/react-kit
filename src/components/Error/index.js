import React from 'react';
//styles
import styled from 'styled-components';
//components
import Layout from 'components/ui/Layout';

//styled
const ErrorWrap = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: center;
`;

const Error = () => {
  return (
    <Layout>
      <ErrorWrap>
        <h1>404</h1>
        <p>Page not found.</p>
      </ErrorWrap>
    </Layout>
  );
};

export default Error;