import React from 'react';
//styles
import styled from 'styled-components';
//components
import Layout from '../Layout';

//styled
const ErrorWrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Error = () => {
  return (
    <Layout>
      <ErrorWrapper>
        <h1>404</h1>
        <p>Page not found.</p>
      </ErrorWrapper>
    </Layout>
  );
}

export default Error;