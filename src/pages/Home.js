import React from 'react';
//styles
import styled from 'styled-components';
import { between } from 'polished';
import vars from '../components/Vars';
//components
import Wrapper from '../components/Wrapper';
import ContainerFluid from '../components/ContainerFluid';
import Button from '../components/Button';
import Card from '../components/Card';
import { Heading } from '../components/Heading';
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

//data
const data = [
  {
    id: 1,
    heading: 'Heading 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente neque ad sequi deleniti architecto.',
  },
  {
    id: 2,
    heading: 'Heading 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente neque ad sequi deleniti architecto.',
  },
  {
    id: 3,
    heading: 'Heading 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente neque ad sequi deleniti architecto.',
  },
];

const Home = () => {
  return (
    <Wrapper>
      <HomeWrapper>
        <ContainerFluid>
          <Row>
            <Col md={6}>
              <Heading size={40} mb={'20px'} lh={1.2}>Heading 1</Heading>
              <Heading as={'h2'} heading2>Heading 2</Heading>
              <Heading as={'h3'} heading3>Heading 3</Heading>
              <Heading as={'h4'} heading4>Heading 4</Heading>
              <Heading as={'h5'} heading5>Heading 5</Heading>
              <Heading as={'h6'} heading6>Heading 6</Heading>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente neque ad sequi deleniti architecto accusantium porro consequuntur.</p>
              <br></br>
              <Button>Default</Button>
              <Button primary>Primary</Button>
              <Button secondary>Secondary</Button>
              <Button success>Success</Button>
              <Button warning>Warning</Button>
              <Button danger>Danger</Button>
              <Button info>Info</Button>
            </Col>
            <Col md={6}>
              {
                data.map((item) => (
                  <Card key={item.id} heading={item.heading} text={item.text} />
                ))
              }
            </Col>
          </Row>
        </ContainerFluid>
      </HomeWrapper>
    </Wrapper>
  );
}

export default Home;