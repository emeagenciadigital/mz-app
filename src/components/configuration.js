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
    console.log(this.state.properties)
    return (
      <div className="">
      <NavLink to="/" ><h1>Configuration</h1></NavLink>
      <AddActions/>
      <GetActions/>
      </div>
    );
  }
}


export default Configuration;
