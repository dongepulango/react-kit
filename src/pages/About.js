import React from 'react';
//styles
import styled from 'styled-components';
import { between } from 'polished';
import vars from '../components/Vars';
//components
import Wrapper from '../components/Wrapper';
import ContainerFluid from '../components/ContainerFluid';

const AboutWrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: ${vars.media.lgMax}) {
    padding-top: ${between('60px', '100px')};
    padding-bottom: ${between('60px', '100px')};
  }
`;

const About = () => {
  return (
    <Wrapper>
      <AboutWrapper>
        <ContainerFluid>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sapiente neque ad sequi deleniti architecto accusantium porro consequuntur. Est, esse expedita fuga, tenetur distinctio cupiditate quos ab consequatur sint soluta voluptatibus nesciunt culpa, consequuntur adipisci consectetur id. Laborum sit quo natus consequatur, quis qui adipisci quidem culpa perspiciatis quasi aspernatur ratione optio voluptatibus officia at aliquam accusamus id repellat eos voluptatem. Hic recusandae quaerat sed ad nemo nam cum modi obcaecati rerum incidunt eos facilis officia nobis, fuga ducimus cumque sit ex deleniti animi in quibusdam nihil voluptates! Corporis officiis doloribus, eaque totam numquam temporibus blanditiis unde necessitatibus ad, similique quo eligendi amet. Dolores facilis, totam ea delectus fugit aspernatur expedita vel consequatur debitis nam quidem suscipit perspiciatis ducimus quaerat voluptate maiores incidunt excepturi deserunt doloremque repellendus, tempore modi? Ipsa quibusdam aliquam temporibus blanditiis beatae voluptatibus alias. Consequuntur, maiores enim totam, quas deleniti nostrum officia a rerum hic obcaecati, eveniet non est eaque? Illum sed sint voluptatibus! Cupiditate a culpa ratione laborum fuga aut qui quae consequuntur, officia maxime porro labore inventore placeat ipsa eligendi facere ullam ipsam repellat magni neque. Quam dignissimos consequatur natus? Assumenda nobis debitis pariatur dicta sit? Iusto autem minima officiis alias accusantium rerum nostrum ratione?</p>
        </ContainerFluid>
      </AboutWrapper>
    </Wrapper>
  );
}

export default About;