//styles
import styled from 'styled-components';
import { lighten } from 'polished';
import vars from 'components/styles/Vars';

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: ${vars.fonts.fontSize};
  color: ${vars.colors.textDark};
  font-weight: 500;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px 15px;
  transition: ${vars.transitions.hover1};
  color: ${vars.colors.textDark};
  font-size: ${vars.fonts.fontSize};
  font-weight: 400;
  font-family: ${vars.fonts.fontFamily};
  line-height: 1.5;
  border: 1px solid ${lighten('0.6', vars.colors.text)};
  border-radius: 4px;
  appearance: none;
  background-clip: padding-box;
  ::placeholder {
    color: ${vars.colors.textLight};
  }
  &:focus {
    outline: none;
    border-color: ${vars.colors.text};
    &:active {
      outline: none;
    }
  }
`;

export const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px 15px;
  transition: ${vars.transitions.hover1};
  color: ${vars.colors.textDark};
  font-size: ${vars.fonts.fontSize};
  font-weight: 400;
  font-family: ${vars.fonts.fontFamily};
  line-height: 1.5;
  border: 1px solid ${lighten('0.6', vars.colors.text)};
  border-radius: 4px;
  appearance: none;
  background-clip: padding-box;
  ::placeholder {
    color: ${vars.colors.textLight};
  }
  &:focus {
    outline: none;
    border-color: ${vars.colors.text};
    &:active {
      outline: none;
    }
  }
`;