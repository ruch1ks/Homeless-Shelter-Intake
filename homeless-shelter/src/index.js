import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import ShelterList from './ShelterList';
import RegisterMember from './RegisterMember';
import AllMembers from './AllMembers';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path = "/login" component={Login} />
        <Route path = "/signup" component={Signup} />
        <Route path = "/all" component={ShelterList} />
        <Route path = "/dashboard" component={Dashboard} />
        <Route path = "/registerMember" component={RegisterMember} />
        <Route path = "/allMembers" component={AllMembers} />

      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
