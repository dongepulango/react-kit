import { css, createGlobalStyle } from 'styled-components'
import { darken } from 'polished';
import vars from './Vars';

const typography = css`
  /* My Typography Styles */
  body {
    color: ${vars.colors.text};
    font-family: ${vars.fonts.fontFamily};
    font-weight: ${vars.fonts.fontWeight};
    line-height:  ${vars.fonts.lineHeight};
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
      margin-top: ${vars.rems.f20};
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
    margin-bottom: ${vars.rems.f20};
  }

  /* Web Fonts */
  /* @font-face {
    font-family: 'Lota Grotesque';
    src: url('./assets/fonts/LotaGrotesque-Regular.eot');
    src: url('./assets/fonts/LotaGrotesque-Regular.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/LotaGrotesque-Regular.woff2') format('woff2'),
         url('./assets/fonts/LotaGrotesque-Regular.woff') format('woff'),
         url('./assets/fonts/LotaGrotesque-Regular.ttf') format('truetype'),
         url('./assets/fonts/LotaGrotesque-Regular.svg#LotaGrotesque-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lota Grotesque';
    src: url('./assets/fonts/LotaGrotesque-Bold.eot');
    src: url('./assets/fonts/LotaGrotesque-Bold.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/LotaGrotesque-Bold.woff2') format('woff2'),
         url('./assets/fonts/LotaGrotesque-Bold.woff') format('woff'),
         url('./assets/fonts/LotaGrotesque-Bold.ttf') format('truetype'),
         url('./assets/fonts/LotaGrotesque-Bold.svg#LotaGrotesque-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  } */
`;

export const Typography = createGlobalStyle`${typography}`;

export default typography;