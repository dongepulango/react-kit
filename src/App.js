import React from 'react';
//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Styles
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset } from './components/Reset';
//Pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

//Reset
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

//Theme
const theme = {
  red: '#e93d3d',
  orange: '#ff6f00',
  yellow: '#ffbc00',
  green: '#37ca37',
  blue: '#188bf6',
  teal: '#17cfbc',
  pink: '#ff3e7f',
  purple: '#876cff',
  grayDark: '#222222',
  gray: '#444444',
  grayLight: '#adb5bd',
  maxWidth: '1200px',
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/about" component={About} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;