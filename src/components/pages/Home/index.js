import React from 'react';
//styles
import styled from 'styled-components';
import { rem } from 'polished';
import vars from 'components/styles/Vars';
//components
import Layout from 'components/ui/Layout';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';
import Button from 'components/ui/Button';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const HomeWrap = styled.section`
  position: relative;
`;

const HomeHero = styled.section`
  position: relative;
  padding-top: ${rem('150px')};
  padding-bottom: ${rem('150px')};
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
  text-align: center;
  p {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    max-width: 500px;
  }
`;

const HomeBottom = styled.section`
  position: relative;
  padding-top: ${rem('100px')};
  padding-bottom: ${rem('100px')};
  .row {
    @media (max-width: ${vars.media.smMax}) {
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    > div {
      margin-bottom: 40px;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Home = () => {
  return (
    <Layout>
      <HomeWrap>
        <HomeHero>
          <Container>
            <Heading heading1>React Starter Kit</Heading>
            <p>Activated charcoal church-key edison bulb chartreuse artisan iceland salvia organic single-origin coffee palo santo heirloom fam 3 wolf moon. Aesthetic venmo put a bird on it, edison bulb occupy meh knausgaard banh mi man bun church-key.</p>
            <Button dark>Button</Button>
          </Container>
        </HomeHero>
        <HomeBottom>
          <Container>
            <Row className="row">
              <Col md={6}>
                <img src="https://via.placeholder.com/450x500" alt="placeholder"/>
              </Col>
              <Col md={6}>
                <Heading heading2>Welcome</Heading>
                <p>Activated charcoal church-key edison bulb chartreuse artisan iceland salvia organic single-origin coffee palo santo heirloom fam 3 wolf moon. Aesthetic venmo put a bird on it, edison bulb occupy meh knausgaard banh mi man bun church-key. Palo santo small batch put a bird on it pabst asymmetrical, waistcoat locavore. La croix mixtape tofu hot chicken enamel pin man braid.</p>
                <p>Master cleanse fingerstache hell of brooklyn synth next level schlitz viral direct trade food truck jianbing you probably haven't heard of them fam. Flannel jianbing cold-pressed drinking vinegar single-origin coffee chillwave fashion axe prism yuccie vegan artisan.</p>
                <p><Button>Button</Button></p>
              </Col>
            </Row>
          </Container>
        </HomeBottom>
      </HomeWrap>
    </Layout>
  );
};

export default Home;