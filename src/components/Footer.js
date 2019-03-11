import React from 'react';
//styles
import styled from 'styled-components';

//styled
const FooterInner = styled.footer`
  background-color: #eee;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterInner>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, cumque corporis voluptatem, non minus hic fugit aspernatur officiis sint sunt facere ullam amet quidem? Molestias sapiente ex dicta amet eligendi architecto, saepe iste itaque mollitia quidem, accusantium sint.</p>
    </FooterInner>
  );
}

export default Footer;