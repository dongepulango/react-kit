import React, { useContext } from 'react';
//context
import GlobalContext from './Context';
//Router
import { Route, Switch, __RouterContext } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
//Styles
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from './components/Reset';
import typography from './components/Typography';
import vars from './components/Vars';
//components
import Header from './components/Header';
//Pages
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Error from './components/error/Error'
//animations
import { useTransition, animated as A } from 'react-spring';

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
  /* Collapse */
  .collapse-css-transition {
    overflow: hidden;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
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
const PageWrap = styled.section`
  position: relative;
  > section {
    position: relative;
  }
`;

const App = () => {

  //use Router Context for location
  const { location } = useContext(__RouterContext);
  //page transitions
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext>
        <GlobalStyle />
        <ScrollToTop />
        <PageWrap>
          <Header />
          {transitions.map(({ item, props, key }) => (
            <A.section key={key} style={props}>
              <Switch location={item}>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </A.section>
          ))}
        </PageWrap> 
      </GlobalContext>
    </ThemeProvider>
  );
}

export default App;