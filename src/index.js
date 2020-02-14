import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FormLogin from './components/login/form-login/index';
import Dashboard from './components/dashboard/index';
import DashboardMobile from './components/dashboardMobile/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
          <Router>
              <Switch>
                  <Route exact path="/" component={FormLogin} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/dashboardMobile" component={DashboardMobile} />
              </Switch>
          </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
