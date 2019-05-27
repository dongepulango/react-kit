import React from 'react';
//styles
import styled from 'styled-components';
import { between } from 'polished';
import vars from '../Vars';
//components
import Layout from '../Layout';
import ContainerFluid from '../ContainerFluid';
import Heading from '../Heading';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const HomeWrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: ${vars.media.lgMax}) {
    padding-top: ${between('60px', '100px')};
    padding-bottom: ${between('60px', '100px')};
  }
  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <ContainerFluid>
          <Heading>Home</Heading>
          <Row>
            <Col md={6}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi voluptate accusantium deserunt error fuga, nemo, perspiciatis facilis eum illo aperiam unde delectus facere. Sint sequi earum alias tenetur magnam, totam vitae commodi accusamus quod ullam ducimus tempora consequatur laudantium aliquid, numquam ad blanditiis est dolorum. Ab repellat consectetur perferendis aliquam deserunt vero ipsum quas sequi neque beatae eveniet aut, suscipit dolor porro sapiente voluptas recusandae eius quaerat minima illum doloribus exercitationem? Eaque labore vero quo, delectus veritatis sint nostrum tempore ad, odio deleniti laborum molestias modi saepe aut reprehenderit ab vel veniam. Nisi dolor placeat esse impedit voluptatem perspiciatis.</p>
            </Col>
            <Col md={6}>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perferendis expedita fugit enim quidem aliquam deleniti asperiores ullam blanditiis adipisci. Id, mollitia. Eius earum nobis quis velit, necessitatibus voluptatem ad minus aspernatur ducimus eaque quas molestias exercitationem provident quod voluptatibus fugiat rerum non iste natus aliquid accusamus porro nisi architecto! Ipsa dignissimos impedit, incidunt distinctio, voluptas cupiditate facilis iure voluptatem adipisci mollitia architecto obcaecati dolorum nisi? Dolorem necessitatibus totam pariatur deserunt tempore illum aliquid doloribus minima. Unde reiciendis minima, eligendi numquam nobis placeat adipisci sapiente autem ipsam sint cumque nemo quibusdam quis accusantium doloremque aperiam? Quasi esse quaerat nostrum sapiente.</p>
            </Col>
          </Row>
        </ContainerFluid>
      </HomeWrapper>
    </Layout>
  );
}

export default Home;