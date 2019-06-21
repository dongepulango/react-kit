import React, { useState } from 'react';
//styles
import styled from 'styled-components';
import vars from '../Vars';
//animation
import { useSpring, animated as A } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
//components
import Layout from '../Layout';
import ContainerFluid from '../ContainerFluid';
import Heading from '../Heading';
import Button from '../Button';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const HomeWrapper = styled.section`
  position: relative;
`;

const HomeSec1 = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const HomeSec2 = styled.section`
  position: relative;
  background-color: #f4f4f4;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;

const HomeSec3 = styled.section`
  position: relative;
  padding-top: ${vars.rems.f100};
  padding-bottom: ${vars.rems.f100};
`;


const Home = () => {
  
  //state
  const [state, setState] = useState({
    sec1: false,
    sec2: false,
  });
  
  //toggle animation 1
  const toggleAnimation1 = () => {
    setState({
      ...state,
      sec1: !state.sec1,
    })
  }
  const animate1 = useSpring({
    opacity: state.sec1 ? 1 : 0,
    transform: state.sec1 ? 'translateY(0)' : 'translateY(30px)',
  });

  //toggle animation 2
  const toggleAnimation2 = (isVisible) => {
    //animate once
    if (isVisible === true) {
      setState({
        ...state,
        sec2: true,
      });
    }
    //toogle
    //isVisible ? setState({...state, sec2: true}) : setState({...state, sec2: false})
  }
  //animations 2
  const animate2 = useSpring({
    opacity: state.sec2 ? 1 : 0,
    transform: state.sec2 ? 'translateY(0)' : 'translateY(30px)',
  });

  return (
    <Layout>
      <HomeWrapper>
        <HomeSec1>
          <ContainerFluid>
            <A.div style={animate1}>
              <Heading heading1>Home Section 1</Heading>
            </A.div>
            <Row>
              <Col md={6}>
                <Button primary onClick={toggleAnimation1}>Toogle</Button>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi voluptate accusantium deserunt error fuga, nemo, perspiciatis facilis eum illo aperiam unde delectus facere. Sint sequi earum alias tenetur magnam, totam vitae commodi accusamus quod ullam ducimus tempora consequatur laudantium aliquid, numquam ad blanditiis est dolorum. Ab repellat consectetur perferendis aliquam deserunt vero ipsum quas sequi neque beatae eveniet aut, suscipit dolor porro sapiente voluptas recusandae eius quaerat minima illum doloribus exercitationem? Eaque labore vero quo, delectus veritatis sint nostrum tempore ad, odio deleniti laborum molestias modi saepe aut reprehenderit ab vel veniam. Nisi dolor placeat esse impedit voluptatem perspiciatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt nulla? Id quas in, soluta aliquid deserunt dicta error. Nobis, cupiditate voluptatibus optio id laudantium accusantium facilis reiciendis quasi pariatur eos quam dolores aliquid est sunt ratione neque fuga? Exercitationem nemo vero architecto perspiciatis reiciendis facere soluta tempore ad excepturi.</p>
              </Col>
              <Col md={6}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perferendis expedita fugit enim quidem aliquam deleniti asperiores ullam blanditiis adipisci. Id, mollitia. Eius earum nobis quis velit, necessitatibus voluptatem ad minus aspernatur ducimus eaque quas molestias exercitationem provident quod voluptatibus fugiat rerum non iste natus aliquid accusamus porro nisi architecto! Ipsa dignissimos impedit, incidunt distinctio, voluptas cupiditate facilis iure voluptatem adipisci mollitia architecto obcaecati dolorum nisi? Dolorem necessitatibus totam pariatur deserunt tempore illum aliquid doloribus minima. Unde reiciendis minima, eligendi numquam nobis placeat adipisci sapiente autem ipsam sint cumque nemo quibusdam quis accusantium doloremque aperiam? Quasi esse quaerat nostrum sapiente.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt nulla? Id quas in, soluta aliquid deserunt dicta error. Nobis, cupiditate voluptatibus optio id laudantium accusantium facilis reiciendis quasi pariatur eos quam dolores aliquid est sunt ratione neque fuga? Exercitationem nemo vero architecto perspiciatis reiciendis facere soluta tempore ad excepturi.</p>
              </Col>
            </Row>
          </ContainerFluid>
        </HomeSec1>
        <HomeSec2>
          <ContainerFluid>
            <Heading heading1>Home Section 2</Heading>
            <VisibilitySensor onChange={toggleAnimation2}>
              <A.div style={animate2}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit id libero voluptatibus repudiandae aliquid iure, odit aperiam qui voluptate, a voluptates repellendus vitae, dicta molestias modi natus! Placeat maiores unde quibusdam velit consequatur vel doloribus facere magnam accusantium minima reprehenderit nisi, maxime laudantium cumque fuga soluta ullam. Ipsum esse iusto est, non sed nihil beatae inventore quis dicta? Commodi ea nisi dolorum corrupti. Optio minus iste deserunt suscipit facilis debitis ratione, esse modi nesciunt sint est incidunt velit maxime! Asperiores similique eum, omnis pariatur, distinctio quod placeat, in mollitia laboriosam ab eligendi odio non aut ipsa quam recusandae reprehenderit facere nemo dolore. Enim omnis numquam aut aliquam quisquam sapiente placeat consequatur illo facere consectetur, atque architecto explicabo officiis eius? Voluptates, minus dignissimos nam assumenda magni, quaerat exercitationem repellendus temporibus quasi in obcaecati cupiditate harum distinctio laborum magnam nostrum illo reprehenderit! Suscipit, ut facere, itaque doloribus quis aliquam dolor ipsa, quos fugit non cumque necessitatibus aut distinctio vitae! Illo culpa doloremque id laudantium labore soluta illum neque recusandae corporis, officiis non placeat aperiam cumque blanditiis ipsam perferendis suscipit sunt minima tempora reiciendis excepturi distinctio ea aliquid incidunt. Placeat rerum excepturi quod perspiciatis! Eligendi odit cumque facere libero dolorem quia nisi.</p>
              </A.div>
            </VisibilitySensor>
          </ContainerFluid>
        </HomeSec2>
        <HomeSec3>
          <ContainerFluid>
            <Heading heading1>Home Section 3</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit id libero voluptatibus repudiandae aliquid iure, odit aperiam qui voluptate, a voluptates repellendus vitae, dicta molestias modi natus! Placeat maiores unde quibusdam velit consequatur vel doloribus facere magnam accusantium minima reprehenderit nisi, maxime laudantium cumque fuga soluta ullam. Ipsum esse iusto est, non sed nihil beatae inventore quis dicta? Commodi ea nisi dolorum corrupti. Optio minus iste deserunt suscipit facilis debitis ratione, esse modi nesciunt sint est incidunt velit maxime! Asperiores similique eum, omnis pariatur, distinctio quod placeat, in mollitia laboriosam ab eligendi odio non aut ipsa quam recusandae reprehenderit facere nemo dolore. Enim omnis numquam aut aliquam quisquam sapiente placeat consequatur illo facere consectetur, atque architecto explicabo officiis eius? Voluptates, minus dignissimos nam assumenda magni, quaerat exercitationem repellendus temporibus quasi in obcaecati cupiditate harum distinctio laborum magnam nostrum illo reprehenderit! Suscipit, ut facere, itaque doloribus quis aliquam dolor ipsa, quos fugit non cumque necessitatibus aut distinctio vitae! Illo culpa doloremque id laudantium labore soluta illum neque recusandae corporis, officiis non placeat aperiam cumque blanditiis ipsam perferendis suscipit sunt minima tempora reiciendis excepturi distinctio ea aliquid incidunt. Placeat rerum excepturi quod perspiciatis! Eligendi odit cumque facere libero dolorem quia nisi.</p>
          </ContainerFluid>
        </HomeSec3>
      </HomeWrapper>
    </Layout>
  );
}

export default Home;