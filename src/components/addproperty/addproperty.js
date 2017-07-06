import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import {GetOption} from './getformdata.js';

class AddProperty extends Component {
  constructor(props){
    super(props);
    this.state=({
      type_id:"59419056cf847c20900464d2",
      action_id:"5941916ff8601922206b00c8",
      city_id:"594173e83283ad06905c1493",
      country_id:"5941735518441347e8a55d2a",
      zone_id:"594193b2fc32052dbc99f957",
      area_id:"59418ed18de417406c0c74b8",
      serviceroom:true,
      deposit:true,
      pool:true,
      balcony:true,
      image_id:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8F9ta8zDiObFI4oWBtkXZQTkQqV772_agwOm3SOlpPdPH6Kk",
      company_id:"59416330bd894b3b8ce68524",
      owner_id:"594170aa27dd153e946a4ae6",
      actions:[],
      types:[],
      countries:[],
      cities:[]
    });
  this.handlechange = this.handlechange.bind(this);
  this.getoptions = this.getoptions.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

}

componentWillMount(){

// Start get Actions //
  fetch('http://localhost:3030/actions')
      .then((response) => {
          return response.json();
      })
      .then((actionsdata) => {
 var actions = actionsdata.data;
 this.setState({actions:actions });
});

// End Get Actions //

//Start Get Types //
fetch('http://localhost:3030/typeofproperty')
    .then((response) => {
        return response.json();
    })
    .then((typesdata) => {
var types = typesdata.data;
this.setState({types:types });
});
// End Get Types//
//Start Get countries //
fetch('http://localhost:3030/countries')
    .then((response) => {
        return response.json();
    })
    .then((countriesdata) => {
var countries = countriesdata.data;
this.setState({countries:countries });
});
// End Get CCountries//

}

//Start Get cities //



// End Get Cities//
handleSubmit(e){
  alert("you click submit")
}

handlechange(e) {
  const target = e.target;
  const name = target.name;
  const value= target.value;
  this.setState({
    [name] : value
  });

if(target.name === "country_id"){
this.getoptions("http://localhost:3030/cities","?country_id=",target.value,"cities");
}


}




getoptions(url,targetname,filtervalue,statename){
  const name = statename;
  console.log(this.state.country_id+"before")
fetch(url+targetname+filtervalue)
    .then((response) => {
        return response.json();
    })
    .then((citiesdata) => {
var statename = citiesdata.data;
this.setState({[name]:statename });
});
console.log("cities called")
console.log(this.state.country_id+"after")
}

render() {
console.log(this.state);
    return (
      <div className="inner">
      <span>{this.state.action_id}</span>
      <h1>Nueva Propiedad</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Tipo de Propiedad<span className="required">*</span>
            <select name="type_id" onChange={this.handlechange}>
              {this.state.types.map((type,i) => <GetOption key={i} data={type}/>)}
            </select>
          </label>
          <label>Acción<span className="required">*</span>
            <select name="action_id" onChange={this.handlechange}>
            {this.state.actions.map((action,i) => <GetOption key={i} data={action}/>)}
            </select>
          </label>
          <label>Precio Arriendo  <input type="number" name="rentprice" onChange={this.handlechange}/></label>
          <label>Precio Venta<input type="number" name="salesprice" onChange={this.handlechange}/></label>
          <label>Metros Cuadrados<input type="number" name="area" onChange={this.handlechange}/></label>
          <label>Cuartos<input type="number" name="rooms" onChange={this.handlechange}/></label>
          <label>Baños<input type="number" name="bathrooms" onChange={this.handlechange}/></label>
          <label>Garaje<input type="number" name="garage" onChange={this.handlechange}/></label>
          <h2>Ubicación</h2>
          <label>Pais
            <select name="country_id" onClick={this.handleChange} onChange={this.handlechange}>
              {this.state.countries.map((type,i) => <GetOption key={i} data={type}/>)}
            </select>
          </label>
          <label>Ciudad
          <select name="city_id"  onChange={this.handlechange}>
            {this.state.cities.map((type,i) => <GetOption key={i} data={type}/>)}
          </select>
          </label>
          <label>Zona</label>
          <label>Barrio</label>
          <label>Dirección<input type="text" name="address" onChange={this.handlechange}/></label>
          <label>Latitud<input type="text" name="latitude" onChange={this.handlechange}/></label>
          <label>Longitud<input type="text" name="longitude" onChange={this.handlechange}/></label>
          <h2>Caracteristicas</h2>
          <label>Cuarto de Empleada
          <select name="serviceroom" onChange={this.handlechange}>
            <option value="">--</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
          </label>
          <label>Deposito
            <select name="deposit" onChange={this.handlechange}>
              <option value="">--</option>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </label>
          <label>Piscina
            <select name="pool" onChange={this.handlechange}>
              <option value="">--</option>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </label>
          <label>Balcon
            <select name="balcony" onChange={this.handlechange}>
              <option value="">--</option>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </label>

          <button type="submit">Submit </button>
        </form>
      </div>
    );
  }


}

export default AddProperty;
