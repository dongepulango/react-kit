import React from 'react';
//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
//Transition
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//Styles
import styled, { createGlobalStyle } from 'styled-components';
import reset from './components/Reset';
import typography from './components/Typography';
//components
import Header from './components/Header';
//Pages
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Error from './components/error/Error'

//Reset & Default Styles
const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

//Page Wrapper
const PageWrap = styled.main`
  position: relative;
  /* Transition */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 0.5s linear;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 0.5s linear;
  }
`;

const PageWrapInner = styled.section`
  width: 100%;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-color: #fff;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
`;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Fragment>
          <GlobalStyle />
          <PageWrap>
            <PageWrapInner>
              <Header />
              <ScrollToTop />
              <Route render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit={true}>
                    <Switch>
                      <Route path="/" component={Home} exact={true} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route component={Error} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </PageWrapInner>
          </PageWrap> 
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;