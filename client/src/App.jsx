import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div>
        <h1>TACO TIME!!</h1>
      </div>
    )
  }
}