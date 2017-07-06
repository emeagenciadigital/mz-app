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
import Home from './components/home.js';
import Property from './components/property.js';
import Configuration from './components/configuration.js';
import Navigationpanel from './components/navigation/navigationpanel.js';
import AddProperty from './components/addproperty/addproperty.js';



ReactDOM.render(

  <Router>
    <div>
      <div id="sidebar">
          <Navigationpanel/>
      </div>
      <div id="wrapper" className="wrapper style1 fade-up">
        <Route exact path="/" component={Home}/>
        <Route path="/addproperty" component={AddProperty}/>
        <Route path="/configuration" component={Configuration}/>
        <Route path="/property/:id" component={Property}/>
      </div>
    </div>
  </Router>



  , document.getElementById('root'));
registerServiceWorker();
