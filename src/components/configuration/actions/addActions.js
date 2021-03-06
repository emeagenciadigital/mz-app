import React, { Component } from 'react';

class AddActions extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      company_id:"",
      custom:"",
    };

    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlechange(e) {
    const target = e.target;
    const name = target.name;
    const value= target.value;
    this.setState({
      [name] : value
    })
  }
  handleSubmit(e){

fetch('http://localhost:3030/actions',{
method:"post",
headers:{"Content-Type": "application/json"},
body: JSON.stringify({
  "name":this.state.name,
	"custom":this.state.custom,
	"company_id":this.state.company_id,
  })
})
}

  render() {
    return (

      <div className="">
      <h2>Crear Acciones</h2>
      <form onSubmit={this.handleSubmit}>
      <label>Nombre de la Acción: <input  type="text" name="name" value={this.state.name}  onChange={this.handlechange} placeholder="Vender"/></label>
      <label>Compañia ID: <input type="text" name="company_id" value={this.state.company_id}  onChange={this.handlechange} placeholder="Id de la compañia"/></label>
      <label>
        <select name="custom" onChange={this.handlechange}>
        <option value="false">No es Custom</option>
        <option value="true">Si es CUstom</option>
        </select>
      </label>
<button type="submit">Submit </button>
      </form>
      <h4>{this.state.name}</h4>
      </div>

    );
  }
};

export default AddActions;
