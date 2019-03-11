import React from 'react';
//styles
import styled from 'styled-components';

//styled
const CardInner = styled.div`
  border-radius: 4px;
  background-color: #eee;
  padding: 20px;
`;

const Card = (props) => {
  return (
    <CardInner>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </CardInner>
  );
}

export default Card;