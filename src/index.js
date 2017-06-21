import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home.js'
import Configuration from './components/configuration.js'
ReactDOM.render(

  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/configuration">Configuration</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/configuration" component={Configuration}/>
    </div>
  </Router>



  , document.getElementById('root'));
registerServiceWorker();
