import { css, createGlobalStyle } from 'styled-components'
import { darken, rem } from 'polished';
import vars from 'components/styles/Vars';

const typography = css`
  /* My Typography Styles */
  body {
    font-size: ${vars.fonts.fontSize};
    font-family: ${vars.fonts.fontFamily};
    font-weight: ${vars.fonts.fontWeight};
    line-height:  ${vars.fonts.lineHeight};
    color: ${vars.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a,
  button {
    transition: ${vars.transitions.hover2};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      outline: none;
    }
    &:active {
      &:focus {
        outline: none;
      }
    }
    &[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
  }
  a {
    color: ${vars.colors.blue};
    &:hover,
    &:active,
    &:focus {
      color: ${darken(0.2, vars.colors.blue)};
    }
  }
  p {
    margin-bottom: 0;
    + p {
      margin-top: ${rem('20px')};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${vars.colors.textDark};
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: ${rem('20px')};
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
`;

export const Typography = createGlobalStyle`${typography}`;

export default typography;