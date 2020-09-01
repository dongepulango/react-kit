import React from 'react';
//router
import { Link } from 'react-router-dom';
//styles
import styled from 'styled-components';
import { rem } from 'polished';
//grid
import { Row, Col } from 'styled-bootstrap-grid';
//components
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';
//assets
import logo from 'assets/images/BalkanBrothers-logo.svg';

//styled
const FooterWrap = styled.footer`
  background-color: #fafafa;
  border-top: 1px solid #eee;
`;

const FooterTop = styled.section`
  padding-top: 100px;
  padding-bottom: 50px;
`;

const FooterBottom = styled.section`
  padding-bottom: 100px;
  .row {
    > div {
      margin-bottom: 40px;
    }
  }
  .lead {
    font-size: ${rem('18px')};
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <FooterTop>
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </FooterTop>
        <FooterBottom>
          <Row className="row">
            <Col sm={6} md={3}>
              <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia.</p>
            </Col>
            <Col sm={6} md={3}>
              <Heading as="h4" heading6>Footer Heading</Heading>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia ex fugiat, ea excepturi fugit? Dolor repellat</p>
            </Col>
            <Col sm={6} md={3}>
              <Heading as="h4" heading6>Footer Heading</Heading>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia ex fugiat, ea excepturi fugit? Dolor repellat</p>
            </Col>
            <Col sm={6} md={3}>
              <Heading as="h4" heading6>Footer Heading</Heading>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia ex fugiat, ea excepturi fugit? Dolor repellat</p>
            </Col>
          </Row>
        </FooterBottom>
      </Container>
    </FooterWrap>
  );
};

export default Footer;