import React from 'react';
//styles
import styled from 'styled-components';
import { between } from 'polished';
import vars from 'components/styles/Vars';
//components
import Layout from 'components/ui/Layout';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const AboutWrap = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: ${vars.media.lgMax}) {
    padding-top: ${between('60px', '100px')};
    padding-bottom: ${between('60px', '100px')};
  }
`;

const About = () => {
  return (
    <Layout>
      <AboutWrap>
        <Container>
          <Heading>About</Heading>
          <Row>
            <Col md={4}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit placeat doloribus, laboriosam atque consequuntur ad iste, optio alias, quas provident temporibus a nemo dignissimos assumenda officia animi quaerat iure ipsam est ipsa vel sapiente expedita eos. Voluptatum, maiores suscipit. Accusamus vel ducimus obcaecati. Quos debitis dicta, ratione, suscipit minima quod perspiciatis excepturi inventore nostrum eligendi doloremque enim necessitatibus, libero cupiditate asperiores obcaecati consectetur culpa at. Labore repellat facere a dolores quos ut, aut laborum animi expedita doloribus tempora nesciunt incidunt alias ratione repudiandae itaque ex culpa! Voluptas dolore velit tenetur voluptatem ipsum sequi, tempora, qui dicta libero explicabo, voluptatibus laudantium.</p>
            </Col>
            <Col md={4}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit placeat doloribus, laboriosam atque consequuntur ad iste, optio alias, quas provident temporibus a nemo dignissimos assumenda officia animi quaerat iure ipsam est ipsa vel sapiente expedita eos. Voluptatum, maiores suscipit. Accusamus vel ducimus obcaecati. Quos debitis dicta, ratione, suscipit minima quod perspiciatis excepturi inventore nostrum eligendi doloremque enim necessitatibus, libero cupiditate asperiores obcaecati consectetur culpa at. Labore repellat facere a dolores quos ut, aut laborum animi expedita doloribus tempora nesciunt incidunt alias ratione repudiandae itaque ex culpa! Voluptas dolore velit tenetur voluptatem ipsum sequi, tempora, qui dicta libero explicabo, voluptatibus laudantium.</p>
            </Col>
            <Col md={4}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit placeat doloribus, laboriosam atque consequuntur ad iste, optio alias, quas provident temporibus a nemo dignissimos assumenda officia animi quaerat iure ipsam est ipsa vel sapiente expedita eos. Voluptatum, maiores suscipit. Accusamus vel ducimus obcaecati. Quos debitis dicta, ratione, suscipit minima quod perspiciatis excepturi inventore nostrum eligendi doloremque enim necessitatibus, libero cupiditate asperiores obcaecati consectetur culpa at. Labore repellat facere a dolores quos ut, aut laborum animi expedita doloribus tempora nesciunt incidunt alias ratione repudiandae itaque ex culpa! Voluptas dolore velit tenetur voluptatem ipsum sequi, tempora, qui dicta libero explicabo, voluptatibus laudantium.</p>
            </Col>
          </Row>
        </Container>
      </AboutWrap>
    </Layout>
  );
};

export default About;