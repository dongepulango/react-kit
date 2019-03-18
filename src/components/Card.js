import React from 'react';
//styles
import styled from 'styled-components';

//styled
const CardInner = styled.div`
  border-radius: 4px;
  background-color: #eee;
  padding: 30px;
  margin-bottom: 20px;
  h3 {
    margin-bottom: 10px;
  }
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