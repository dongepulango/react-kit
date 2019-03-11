//styles
import styled from 'styled-components';

//styled
const Button = styled.button`
  color: ${props => props.primary ? '#fff' : '#222'};
  background-color: ${props => props.primary ? props.theme.pink : '#eee'};
  border: none;
  padding: 8px 25px;
  border-radius: 4px;
  font-size: 14px;
`;

export default Button;