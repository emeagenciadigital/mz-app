import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
class List extends Component{
  constructor(props){
    super(props);
    this.state={
      propertyimage:"name of property",
    }
  }
componentWillMount(){
  this.setState(
    {
      propertyimage: this.props.data._id,
      propertyaction: this.props.data.action_id,
      propertytype: this.props.data.type_id,
      propertycity: this.props.data.city_id,
      propertycountry: this.props.data.country_id,
      propertyzone: this.props.data.zone_id,
      propertyarea: this.props.data.area_id,
  })


//call to get action name of property

fetch('http://localhost:3030/actions/'+ this.props.data.action_id)
    .then((response) => {
        return response.json();
    })
    .then((actiondata) => {
var action = actiondata.name;
this.setState({propertyaction:action});
});
//end of get action name of property
//call to get type name of property

fetch('http://localhost:3030/typeofproperty/'+ this.props.data.type_id)
    .then((response) => {
        return response.json();
    })
    .then((typedata) => {
var type = typedata.name;
this.setState({propertytype:type});
});
//end of get type  name of property
//call to get city name of property

fetch('http://localhost:3030/cities/'+ this.props.data.city_id)
    .then((response) => {
        return response.json();
    })
    .then((citydata) => {
var city = citydata.name;
this.setState({propertycity:city});
});
//end of get city name of property



}
  render(){
    var listStyle = {
float: "left",
width: "33%",
listStyle:"none"
};
console.log(this.state)
    return(

    <Link to={"/property/"+this.props.data._id}>  <li style={listStyle}>
       <img alt="property" src={this.props.data.image_id} />
        <p>{this.state.propertyaction} de {this.state.propertytype} en {this.state.propertycity}</p>
        <p>{this.props.data.rentprice}</p>
        <p>{this.props.data.saleprice}</p>
      </li>
      </Link>
    );
  }
}
export default List;
