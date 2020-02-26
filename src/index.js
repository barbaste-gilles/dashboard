import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FormLogin from './components/login/form-login/index';
import Dashboard from './components/dashboard/index';
import DashboardBS from './components/dashboard/indexBS';
import DashboardH from './components/dashboard/indexH';
import DashboardPA from './components/dashboard/indexPA';
import DashboardMobile from './components/dashboardMobile/index';
import DashboardMobileBS from './components/dashboardMobile/indexBS';
import DashboardMobileH from './components/dashboardMobile/indexH';
import DashboardMobilePA from './components/dashboardMobile/indexPA';
import DashboardBorne from './components/dashboardBorne/index';
import DashboardBorneBS from './components/dashboardBorne/indexBS';
import DashboardBorneH from './components/dashboardBorne/indexH';
import DashboardBornePA from './components/dashboardBorne/indexPA';
import Project from './components/project/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Don from './components/don/index';
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
                  <Route exact path="/dashboardBS" component={DashboardBS} />
                  <Route exact path="/dashboardH" component={DashboardH} />
                  <Route exact path="/dashboardPA" component={DashboardPA} />
                  <Route exact path="/dashboardMobile" component={DashboardMobile} />
                  <Route exact path="/dashboardMobileBS" component={DashboardMobileBS} />
                  <Route exact path="/dashboardMobileH" component={DashboardMobileH} />
                  <Route exact path="/dashboardMobilePA" component={DashboardMobilePA} />
                  <Route exact path="/dashboardBorne" component={DashboardBorne} />
                  <Route exact path="/dashboardBorneBS" component={DashboardBorneBS} />
                  <Route exact path="/dashboardBorneH" component={DashboardBorneH} />
                  <Route exact path="/dashboardBornePA" component={DashboardBornePA} />
                  <Route exact path="/project" component={Project} />
                  <Route exact path="/don" component={Don} />
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
