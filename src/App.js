import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Error from './components/pages/Error'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;