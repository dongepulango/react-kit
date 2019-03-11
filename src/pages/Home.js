import React from 'react';
import Wrapper from '../components/Wrapper';
//components
import ContainerFluid from '../components/ContainerFluid';
import Button from '../components/Button';
import Card from '../components/Card';

//grid
import { Row, Col } from 'styled-bootstrap-grid';

const Home = () => {
  return (
    <Wrapper>
        <ContainerFluid maxWidth={'1400px'}>
          <Row>
            <Col md={6}>
              <h1>Home</h1>
              <Button>Normal</Button>
              <Button primary>Primary</Button>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita, explicabo doloremque, totam aliquam hic necessitatibus mollitia tempore quibusdam ratione rerum doloribus itaque velit dolores in. Eligendi cum dicta inventore?</p>
            </Col>
            <Col md={6}>
              <Card heading={'Heading Text'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem porro, ad iste neque laudantium aliquam exercitationem sit. Beatae enim, illo aut placeat eveniet debitis dicta fuga nostrum in? Eius, recusandae!</p>
            </Col>
          </Row>
        </ContainerFluid>
    </Wrapper>
  );
}

export default Home;