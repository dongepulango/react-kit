import React from 'react';
//styles
import styled from 'styled-components';
import { rem } from 'polished';
//components
import Layout from 'components/ui/Layout';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';
//grid
import { Row, Col } from 'styled-bootstrap-grid';

//styled
const HomeWrap = styled.section`
  position: relative;
`;

const HomeSec1 = styled.section`
  position: relative;
  padding-top: ${rem('100px')};
  padding-bottom: ${rem('100px')};;
`;

const HomeSec2 = styled.section`
  position: relative;
  background-color: #f4f4f4;
  padding-top: ${rem('100px')};
  padding-bottom: ${rem('100px')};
`;

const HomeSec3 = styled.section`
  position: relative;
  padding-top: ${rem('100px')};
  padding-bottom: ${rem('100px')};
`;

const Home = () => {
  return (
    <Layout>
      <HomeWrap>
        <HomeSec1>
          <Container>
            <Heading heading1>Home Section 1</Heading>
            <Row>
              <Col md={6}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta modi voluptate accusantium deserunt error fuga, nemo, perspiciatis facilis eum illo aperiam unde delectus facere. Sint sequi earum alias tenetur magnam, totam vitae commodi accusamus quod ullam ducimus tempora consequatur laudantium aliquid, numquam ad blanditiis est dolorum. Ab repellat consectetur perferendis aliquam deserunt vero ipsum quas sequi neque beatae eveniet aut, suscipit dolor porro sapiente voluptas recusandae eius quaerat minima illum doloribus exercitationem? Eaque labore vero quo, delectus veritatis sint nostrum tempore ad, odio deleniti laborum molestias modi saepe aut reprehenderit ab vel veniam. Nisi dolor placeat esse impedit voluptatem perspiciatis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt nulla? Id quas in, soluta aliquid deserunt dicta error. Nobis, cupiditate voluptatibus optio id laudantium accusantium facilis reiciendis quasi pariatur eos quam dolores aliquid est sunt ratione neque fuga? Exercitationem nemo vero architecto perspiciatis reiciendis facere soluta tempore ad excepturi.</p>
              </Col>
              <Col md={6}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perferendis expedita fugit enim quidem aliquam deleniti asperiores ullam blanditiis adipisci. Id, mollitia. Eius earum nobis quis velit, necessitatibus voluptatem ad minus aspernatur ducimus eaque quas molestias exercitationem provident quod voluptatibus fugiat rerum non iste natus aliquid accusamus porro nisi architecto! Ipsa dignissimos impedit, incidunt distinctio, voluptas cupiditate facilis iure voluptatem adipisci mollitia architecto obcaecati dolorum nisi? Dolorem necessitatibus totam pariatur deserunt tempore illum aliquid doloribus minima. Unde reiciendis minima, eligendi numquam nobis placeat adipisci sapiente autem ipsam sint cumque nemo quibusdam quis accusantium doloremque aperiam? Quasi esse quaerat nostrum sapiente.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, incidunt nulla? Id quas in, soluta aliquid deserunt dicta error. Nobis, cupiditate voluptatibus optio id laudantium accusantium facilis reiciendis quasi pariatur eos quam dolores aliquid est sunt ratione neque fuga? Exercitationem nemo vero architecto perspiciatis reiciendis facere soluta tempore ad excepturi.</p>
              </Col>
            </Row>
          </Container>
        </HomeSec1>
        <HomeSec2>
          <Container>
            <Heading heading1>Home Section 2</Heading>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit id libero voluptatibus repudiandae aliquid iure, odit aperiam qui voluptate, a voluptates repellendus vitae, dicta molestias modi natus! Placeat maiores unde quibusdam velit consequatur vel doloribus facere magnam accusantium minima reprehenderit nisi, maxime laudantium cumque fuga soluta ullam. Ipsum esse iusto est, non sed nihil beatae inventore quis dicta? Commodi ea nisi dolorum corrupti. Optio minus iste deserunt suscipit facilis debitis ratione, esse modi nesciunt sint est incidunt velit maxime! Asperiores similique eum, omnis pariatur, distinctio quod placeat, in mollitia laboriosam ab eligendi odio non aut ipsa quam recusandae reprehenderit facere nemo dolore. Enim omnis numquam aut aliquam quisquam sapiente placeat consequatur illo facere consectetur, atque architecto explicabo officiis eius? Voluptates, minus dignissimos nam assumenda magni, quaerat exercitationem repellendus temporibus quasi in obcaecati cupiditate harum distinctio laborum magnam nostrum illo reprehenderit! Suscipit, ut facere, itaque doloribus quis aliquam dolor ipsa, quos fugit non cumque necessitatibus aut distinctio vitae! Illo culpa doloremque id laudantium labore soluta illum neque recusandae corporis, officiis non placeat aperiam cumque blanditiis ipsam perferendis suscipit sunt minima tempora reiciendis excepturi distinctio ea aliquid incidunt. Placeat rerum excepturi quod perspiciatis! Eligendi odit cumque facere libero dolorem quia nisi.</p>
          </Container>
        </HomeSec2>
        <HomeSec3>
          <Container>
            <Heading heading1>Home Section 3</Heading>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit id libero voluptatibus repudiandae aliquid iure, odit aperiam qui voluptate, a voluptates repellendus vitae, dicta molestias modi natus! Placeat maiores unde quibusdam velit consequatur vel doloribus facere magnam accusantium minima reprehenderit nisi, maxime laudantium cumque fuga soluta ullam. Ipsum esse iusto est, non sed nihil beatae inventore quis dicta? Commodi ea nisi dolorum corrupti. Optio minus iste deserunt suscipit facilis debitis ratione, esse modi nesciunt sint est incidunt velit maxime! Asperiores similique eum, omnis pariatur, distinctio quod placeat, in mollitia laboriosam ab eligendi odio non aut ipsa quam recusandae reprehenderit facere nemo dolore. Enim omnis numquam aut aliquam quisquam sapiente placeat consequatur illo facere consectetur, atque architecto explicabo officiis eius? Voluptates, minus dignissimos nam assumenda magni, quaerat exercitationem repellendus temporibus quasi in obcaecati cupiditate harum distinctio laborum magnam nostrum illo reprehenderit! Suscipit, ut facere, itaque doloribus quis aliquam dolor ipsa, quos fugit non cumque necessitatibus aut distinctio vitae! Illo culpa doloremque id laudantium labore soluta illum neque recusandae corporis, officiis non placeat aperiam cumque blanditiis ipsam perferendis suscipit sunt minima tempora reiciendis excepturi distinctio ea aliquid incidunt. Placeat rerum excepturi quod perspiciatis! Eligendi odit cumque facere libero dolorem quia nisi.</p>
          </Container>
        </HomeSec3>
      </HomeWrap>
    </Layout>
  );
};

export default Home;