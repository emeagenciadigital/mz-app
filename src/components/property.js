import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

class Property extends Component {
  constructor(props){
    super(props);
    this.state = {
      propertydata:[null],
    };
  }
  componentWillMount(){
const property_id= this.props.match.params.id;
this.setState({property_id: property_id})

//call to get action name of property

fetch('http://localhost:3030/properties/'+ this.props.match.params.id)
    .then((response) => {
        return response.json();
    })
    .then((propertydata) => {
var property = propertydata;
this.setState({propertydata:property});
});
//end of get action name of property

  };

  render() {
console.log(this.state.propertydata);
    return (

      <div className="">
      <img src={this.state.propertydata.image_id}/>
      <h1>{this.state.propertydata.action} de {this.state.propertydata.type} en {this.state.propertydata.city},{this.state.propertydata.areas}</h1>
      <h2>Id de la propiedad: {this.state.propertydata._id}</h2>


      </div>
    );
  }
}


export default Property;
