import React from 'react';
//context
import Context from 'components/context';
//router
import { BrowserRouter, Switch, Route, } from "react-router-dom";
//styles
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'components/styles/Reset';
import typography from 'components/styles/Typography';
//components
import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import MobileNav from 'components/ui/MobileNav';
//pages
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import Contact from 'components/pages/Contact';
import Error from 'components/pages/Error';
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
  .headroom-wrapper {
    position: relative;
    z-index: 9999;
  }
`;

const App = () => {
  return (
    <Context>
      <GlobalStyle />
      <SiteWrap>
        <BrowserRouter>
          <Header />
          <MobileNav />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </AnimatePresence>
          <Footer />
        </BrowserRouter>
      </SiteWrap>
    </Context>
  );
};

export default App;