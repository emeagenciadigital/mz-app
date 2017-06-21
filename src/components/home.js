import React, { Component } from 'react';
import List from './list';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
properties:[],
    };
  }
  componentWillMount(){

    fetch('http://localhost:3030/properties')
        .then((response) => {
            return response.json();
        })
        .then((propertiesdata) => {
   var properties = propertiesdata.data;
   this.setState({properties:properties });
});
  };

  render() {
    return (

      <div>
        <ul>
          {this.state.properties.map((property,i) => <List key={i} data={property}/>)}
        </ul>
      </div>
    );
  }
}


export default Home;
