//styles
import styled, { css } from 'styled-components';
import { darken, rem } from 'polished';
import vars from 'components/styles/Vars';

//styled
const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 15px 25px;
  border-radius: 4px;
  font-size: ${rem('14px')};
  font-weight: 500;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  line-height: 1;
  color: ${vars.colors.text};
  background-color: #eee;
  min-width: 120px;
  &:hover,
  &:focus,
  &:active {
    background-color: #ddd;
  }
  &:active {
    transform: translateY(1px);
  }
  /* Block */
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}
  /* Primary */
  ${props => props.primary && css`
    background: ${props => props.theme.primary};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, props.theme.primary)};
    }
  `}
  /* Secondary */
  ${props => props.secondary && css`
    background: ${props => props.theme.secondary};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, props.theme.secondary)};
    }
  `}
  /* Success */
  ${props => props.success && css`
    background: ${props => props.theme.success};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, props.theme.success)};
    }
  `}
  /* Warning */
  ${props => props.warning && css`
    background: ${props => props.theme.warning};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, props.theme.warning)};
    }
  `}
  /* Danger */
  ${props => props.danger && css`
    background: ${props => props.theme.danger};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, props.theme.danger)};
    }
  `}
  /* Info */
  ${props => props.info && css`
    background: ${props => props.theme.info};
    color: #fff;
    &:hover,
    &:focus,
    &:active {
      background-color: ${darken(0.1, props.theme.info)};
    }
  `}
`;

export default Button;