import React, { Component } from 'react';
import Actionslist from "./actionlist";
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

    class Actions extends Component {
      constructor(props){
        super(props);
         this.state = {
           actions:[],
         };
    }

    componentWillMount(){
      fetch('http://localhost:3030/actions')
          .then((response) => {
              return response.json();
          })
          .then((actionsdata) => {
     var actions = actionsdata.data;
     this.setState({actions:actions });
  });

    }
        render() {
            return (
              <div className="">
              <ul>
              {this.state.actions.map((action,i) => <Actionslist key={i} data={action}/>)}
                <Actionslist/>
              </ul>
              </div>

            );
          }
        }
