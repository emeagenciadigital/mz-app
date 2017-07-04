import React, { Component } from 'react';

class Actionslist extends Component{
  constructor(props){
    super(props);
    this.state = {
actions:[],
    };
}
  render(){
    return(
      <li>{this.props.data.name}ok</li>

    );
    }
}

export default Actionslist;
