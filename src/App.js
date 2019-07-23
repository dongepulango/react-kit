import React from 'react';
//context
import GlobalContext from './Context';
//Router
import { Router, Location } from "@reach/router"
//Styles
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from './components/Reset';
import typography from './components/Typography';
import vars from './components/Vars';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
//Pages
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Error from './components/error/Error';
//posed
import posed, { PoseGroup } from 'react-pose';

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
  /* Modal */
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

//Theme Colors
const theme = {
  gray: vars.colors.text,
  grayDark: vars.colors.textDark,
  grayLight: vars.colors.textLight,
  primary: vars.colors.blue,
  secondary: vars.colors.orange,
  success: vars.colors.green,
  danger: vars.colors.red,
  warning: vars.colors.yellow,
  info: vars.colors.teal,
}

//styled
const SiteWrap = styled.section`
  position: relative;
`;

//posed
const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    delay: 300,
  },
  exit: {
    opacity: 0
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <GlobalStyle />
        <SiteWrap>
          <Header />
          <MobileNav />
          <Location>
            {({ location }) => (
              <PoseGroup>
                <RouteContainer key={location.key}>
                  <Router location={location}>
                    <Home path="/" />
                    <About path="/about" />
                    <Contact path="/contact" />
                    <Error default />
                  </Router>
                </RouteContainer>
              </PoseGroup>
            )}
          </Location>
          <Footer />
        </SiteWrap> 
      </GlobalContext>
    </ThemeProvider>
  );
};

export default App;