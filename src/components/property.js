import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

class Property extends Component {
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
      <Link to="/" ><h1>Propiedad this.props.id</h1></Link>

      </div>
    );
  }
}


export default Property;
