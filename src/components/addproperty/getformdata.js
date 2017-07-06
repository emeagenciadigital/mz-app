import React, { Component } from 'react';


/* Start ActionOption*/
    class GetOption extends Component {
      constructor(props){
        super(props);
    }
    componentWillMount(){
      

    }
    render(){

        return (
          <option value={this.props.data._id}>{this.props.data.name}</option>

        );
      }
    }
/* End ActionOption*/



export {GetOption};
