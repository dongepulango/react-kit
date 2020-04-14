import React from 'react';
//styles
import styled from 'styled-components';
import { between } from 'polished';
import vars from 'components/styles/Vars';
//components
import Layout from 'components/ui/Layout';
import Container from 'components/ui/Container';
import Heading from 'components/ui/Heading';

const ContactWrap = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: ${vars.media.lgMax}) {
    padding-top: ${between('60px', '100px')};
    padding-bottom: ${between('60px', '100px')};
  }
`;

const Contact = () => {
  return (
    <Layout>
      <ContactWrap>
        <Container>
          <Heading>Contact</Heading>
          <p>Laudantium velit sint quo dolorum, magni accusamus sed laboriosam aut ullam beatae vel omnis voluptatibus consequatur ipsa consequuntur eius facere qui similique earum placeat incidunt illum! Non maiores a illo consequatur officiis molestiae vero voluptatibus ducimus, enim corrupti minus eum neque, assumenda beatae corporis mollitia rem porro voluptatum optio voluptates sapiente excepturi vel ipsa? Commodi architecto expedita exercitationem non labore ab repellat praesentium possimus similique. Quod sapiente nobis quam obcaecati quo architecto optio laboriosam pariatur nostrum quis dignissimos maiores numquam, deleniti, error iure aliquid eligendi amet sint nam? Laborum fugit, aut molestias ab possimus perferendis quam, commodi optio cupiditate nemo unde natus, beatae nesciunt quasi exercitationem facere recusandae porro eum voluptate nostrum. Quis autem excepturi minus ut provident recusandae, tenetur soluta harum officiis cum quod consectetur velit consequuntur facilis placeat, voluptatem facere molestias magni distinctio odio voluptatum nisi iste possimus? Sit dolore ducimus hic tenetur libero obcaecati consequuntur non quia dignissimos a, nihil nam, debitis tempore asperiores excepturi ipsum suscipit nemo dolores enim voluptatem? Eligendi optio recusandae laborum, iure delectus voluptatibus quos perspiciatis, aliquid corrupti hic similique, molestias dolorem ad maiores eius provident pariatur. Ipsa temporibus corporis in possimus eum vero commodi officiis, est nostrum nemo perferendis. Nostrum assumenda nemo quibusdam sit suscipit, numquam voluptas. Adipisci, in similique sed eveniet animi dolore velit architecto? Nostrum suscipit temporibus ullam, consectetur quod voluptatum in nemo quas, eaque illum fugiat corrupti hic explicabo odio tempore recusandae architecto dignissimos quis, velit cumque et. Nam expedita molestiae cum est, sequi nobis facere animi eligendi voluptatibus.</p>
        </Container>
      </ContactWrap>
    </Layout>
  );
};

export default Contact;