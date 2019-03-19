import React from 'react';
//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Transition
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './components/Transitions';
//Styles
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from './components/Reset';
import typography from './components/Typography';
import vars from './components/Vars';
//Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'

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

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route render={({ location }) => {
              const { pathname, key } = location;
              return (
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{enter: 750, exit: 150}}
                  >
                    <Switch location={location}>
                      <Route path="/" component={Home} exact={true} />
                      <Route path="/about" component={About} />
                      <Route path="/contact" component={Contact} />
                      <Route component={Error} />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              )
            }}/>
          </BrowserRouter>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;