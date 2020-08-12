import React from 'react';
//recoil
import { RecoilRoot } from 'recoil';
//Router
import { BrowserRouter, Switch, Route, } from "react-router-dom";
//Styles
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'components/styles/Reset';
import typography from 'components/styles/Typography';
//components
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import MobileNav from 'components/ui/MobileNav';
//Pages
import Home from 'components/Home';
import About from 'components/About';
import Contact from 'components/Contact';
//framer-motion
import { AnimatePresence } from 'framer-motion';

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

//styled
const SiteWrap = styled.div`
  position: relative;
`;

const App = () => {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
};

export default App;