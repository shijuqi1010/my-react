import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestA from './testA';
import TestB from './testB';
import Error from './error';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import Nav from './nav';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TestA />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route  path="/TestA" component={TestA} />
        <Route  path="/TestB" component={TestB} />
        <Redirect from="/redirect" to="/TestB" />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
