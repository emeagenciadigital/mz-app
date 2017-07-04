import React, { Component } from 'react';
import Actions from "./actions";
class GetActions extends Component {
  constructor(props){
    super(props);

}
    render() {
        return (

          <div className="">
          <h1>Listado de Acciones</h1>
          <Actions/>
          </div>

        );
      }
    }

export default GetActions;
