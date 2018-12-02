import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentRecipe: null,
      recipes: [],
      inputs: []
    }
  }

  getRecipes(query){
    console.log('query in getRecipes -->', query);
    this.props.searchRecipes(query, (res) => {
      console.log('res after search -->', res);
    });
  }

  render(){
    return (
      <div>
        <h1>TACO TIME!!</h1>
        <Search getRecipes={this.getRecipes.bind(this)}/>
      </div>
    )
  }
}