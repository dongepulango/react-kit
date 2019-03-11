//styles
import styled from 'styled-components';

const ContainerFluid = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export default ContainerFluid;