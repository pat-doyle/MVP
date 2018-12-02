import React from 'react';
import axios from 'axios';

export default class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
      inputs: [],
      inputValue: ''
    };

  }

  appendInput() {
    let newInput = `input-${this.state.inputs.length}`;
    console.log('newInput -->', newInput);
    this.setState({
      inputs: this.state.inputs.concat([newInput])
    });
  }

  addIngredient(event){
    event.preventDefault();
    this.setState({
      value: event.target.value,
      inputValue: event.target.value
    })
    console.log('value state -->', this.state.value)
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({
      inputs: this.state.inputs.concat([this.state.value]),
      inputValue: ''
    })
    console.log('inputs state', this.state.inputs);
  }

  render(){
    return(
      <div>
          <input id="ingInput" type="text" placeholder="Enter Ingredient" onChange={this.addIngredient.bind(this)} value={this.state.inputValue}></input><br/>
          <button onClick={this.handleClick.bind(this)}>
            Add Another Ingredient
          </button>
          <button type="submit" onClick={this.props.getRecipes(this.state.inputs)}>Search</button>
      </div>
    );
  }
}