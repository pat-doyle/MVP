import React from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

const styles = {
  button: {
    borderRadius: '5px',
    width: '112px',
    height: '26px',
    fontSize: '14px'
  },
  input: {
    height: '26px',
    fontSize: '14px'
  },
  div: {
    display: 'flex'
  }
}

export default class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
      inputs: [],
      inputValue: '',
      ingInput1: '',
      ingInput2: '',
      ingInput3: '',
      ingInput4: '',
      ingInput5: '',
    };
    // this.handleClick.bind(this)
  }

  componentDidMount() {
    this.delayed = debounce((e) => {
      let change = {};
      change[e.target.name] = e.target.value
      console.log(change, '<-- change')
      this.setState(change)
      console.log('value state -->', this.state.value)
    }, 600)
  }

  appendInput() {
    let newInput = `input-${this.state.inputs.length}`;
    console.log('newInput -->', newInput);
    this.setState({
      inputs: this.state.inputs.concat([newInput])
    });
  }

  addIngredient(e) {
    e.persist();
    this.delayed(e);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this, '<-- this');
    console.log(e.target.value, '<-- target value')
    this.setState({
      inputs: this.state.inputs.concat([e.target.value]),
    })
    console.log('inputs state', this.state.inputs);
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //   console.log('clicked submit')
  // }

  render(){
    return(
     
      <div style={styles.div}>
      <form>
          <input style={styles.input} name="ingInput1" type="text" placeholder="Enter Ingredient" onChange={this.addIngredient.bind(this)} onBlur={this.handleClick.bind(this)} required></input><br/><br/>
          <input style={styles.input} name="ingInput2" type="text" placeholder="Enter Ingredient" onChange={this.addIngredient.bind(this)} onBlur={this.handleClick.bind(this)}></input><br/><br/>
          <input style={styles.input} name="ingInput3" type="text" placeholder="Enter Ingredient" onChange={this.addIngredient.bind(this)} onBlur={this.handleClick.bind(this)}></input><br/><br/>
          <input style={styles.input} name="ingInput4" type="text" placeholder="Enter Ingredient" onChange={this.addIngredient.bind(this)} onBlur={this.handleClick.bind(this)}></input><br/><br/>
          <input style={styles.input} name="ingInput5" type="text" placeholder="Enter Ingredient" onChange={this.addIngredient.bind(this)} onBlur={this.handleClick.bind(this)}></input><br/><br/>
          <button type="submit"
            style={styles.button}
            onClick={(e) => {
              e.preventDefault();
              this.props.getRecipes(this.state.inputs)
          }}>Search</button>
        </form>
      </div>
      
    );
  }
}