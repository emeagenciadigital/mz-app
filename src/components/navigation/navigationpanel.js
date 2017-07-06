import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

class Navigationpanel extends Component {
  constructor(props){
    super(props);

}



render() {

    return (
      <div>
      <nav>
        <ul>
          <li><Link to="/" className="scrolly">Home</Link></li>
          <li><Link to="/addproperty">Agregar Propiedad</Link></li>
          <li><Link to="/configuration">Configuration</Link></li>
        </ul>
      </nav>
      </div>
    );
  }


}

export default Navigationpanel;
