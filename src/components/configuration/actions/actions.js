import React, { Component } from 'react';
import Actionslist from "./actionlist";

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
};

    render() {
console.log(this.state.actions);
        return (
          <div className="">
          <ul>
          {this.state.actions.map((action,i) => <Actionslist key={i} data={action}/>)}
          </ul>
          </div>

        );
      }
    }
    export default Actions;
