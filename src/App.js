import React from 'react';
//context
import GlobalContext from './Context';
//Router
import { BrowserRouter, Switch, Route, } from "react-router-dom";
//Styles
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'components/Reset';
import typography from 'components/Typography';
import vars from 'components/Vars';
//components
import Header from 'components/Header';
import Footer from 'components/Footer';
import MobileNav from 'components/MobileNav';
//Pages
import Home from 'components/home/Home';
import About from 'components/about/About';
import Contact from 'components/contact/Contact';
//framer-motion
import { AnimatePresence } from 'framer-motion';

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <GlobalStyle />
        <SiteWrap>
          <BrowserRouter>
            <Header />
            <MobileNav />
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </AnimatePresence>
            <Footer />
          </BrowserRouter>
        </SiteWrap>
      </GlobalContext>
    </ThemeProvider>
  );
};

export default App;