import React from 'react';
//styles
import styled from 'styled-components';
import { Row, Col } from 'styled-bootstrap-grid';
//components
import ContainerFluid from 'components/ui/Container';

//styled
const FooterWrap = styled.footer`
  background-color: #eee;
`;

const FooterTop = styled.section`
  padding-top: 100px;
  padding-bottom: 50px;
  border-bottom: 1px solid #ddd;
`;

const FooterBottom = styled.section`
  padding-top: 50px;
  padding-bottom: 100px;
  border-bottom: 1px solid #ddd;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <ContainerFluid>
        <FooterTop>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi quis quibusdam numquam modi cumque ab, vero labore aperiam quae repellat maxime nemo tenetur minima. Vero iusto id in odio?</p>
        </FooterTop>
        <FooterBottom>
          <Row>
            <Col md={6} xl={3}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia ex fugiat, ea excepturi fugit? Dolor repellat</p>
            </Col>
            <Col md={6} xl={3}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia ex fugiat, ea excepturi fugit? Dolor repellat</p>
            </Col>
            <Col md={6} xl={3}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia ex fugiat, ea excepturi fugit? Dolor repellat</p>
            </Col>
            <Col md={6} xl={3}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima officia ex fugiat, ea excepturi fugit? Dolor repellat</p>
            </Col>
          </Row>
        </FooterBottom>
      </ContainerFluid>
    </FooterWrap>
  );
};

export default Footer;