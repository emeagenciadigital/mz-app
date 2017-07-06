import React, { Component } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import AddActions from "./configuration/actions/addActions";
import GetActions from "./configuration/actions/getactions";

class Configuration extends Component {
  constructor(props){
    super(props);
    this.state = {
properties:[],
    };
  }
  componentWillMount(){

  };

  render() {
    return (
      <div className="inner">
        <h1>Configuraciones</h1>
        <AddActions/>
        <GetActions/>
      </div>
    );
  }
}


export default Configuration;
