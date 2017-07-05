import React, { Component } from 'react';

class Actionslist extends Component{
  constructor(props){
    super(props);
    this.state = {
actions:[],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

}

handleUpdate(e){
  alert("it´s me " + " " + this.props.data._id)
}
handleDelete(e){
  console.log("delete"+ "  "+this.props.data._id);

  fetch('http://localhost:3030/actions/'+ this.props.data._id,{
  method:"delete",
  headers:{"Content-Type": "application/json"},
  })
  var element = document.getElementById(this.props.data._id);
element.parentNode.removeChild(element);

};

  render(){
    return(

<tr id={this.props.data._id}>
  <td>{this.props.data.name} - {this.props.data._id}</td>
  <td>{this.props.data.custom}</td>
  <td>{this.props.data.company_id}</td>
  <td><button onClick={this.handleUpdate}>Editar</button> - <button onClick={this.handleUpdate}>Eliminar</button></td>
</tr>


    );
    }
}

export default Actionslist;
