import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import RecipeList from './components/RecipeList.jsx';
import Favorites from './components/Favorites.jsx';

const styles = {
  container: {
    display: 'flex',
  },
  heading:{
    textAlign: 'center',
    fontFamily: 'Didact Gothic, sans-serif',
    color: 'maroon', /* #dae2f8 fallback for old browsers */
    // color: 'linear-gradient(to right, #dae2f8, #d6a4a4)'
  },
  flex1: {
    flex: '1'
  },
}

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentRecipe: null,
      recipes: [],
      inputs: [],
      favorites: []
    }
    this.saveToDb.bind(this);
    this.deleteFromDb.bind(this);
    // this.getRecipes.bind(this);
  }

  componentDidMount(){
    console.log('mounted correctly')
    axios.get('http://localhost:8080/faves')
      .then(res => {
        console.log('response in didMount', res.data)
        this.setState({
          favorites: res.data
        })
      })
      .catch(() => console.log('Error in componentDidMount request.'))
  }

  getRecipes(query){
    console.log('query in getRecipes -->', query);
    query = query.join(',');
    axios.get(`http://localhost:8080/data/${query}`)
    .then(res => {
      console.log('res in get ==>', res.data);
      this.setState({
        recipes: res.data,
        currentRecipe: res.data[0]
      })
    })
  }

  saveToDb(recipe) {
    // axios.post('/recipes', {recipe})
    //   .then(() => {
    //     console.log('sent post request')
    //   })
    console.log('CLICKED IN POST')
    console.log('recipe in post request ==>', recipe)
    axios({
      url: 'http://localhost:8080/recipes',
      method: 'post',
      data: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    alert('Saved to Favorites');
  }

  deleteFromDb(recipe) {
    console.log('This is inside delete request App.jsx', recipe);
    axios.delete(`/database/${recipe._id}`)
      .then((res) => {
        console.log('Delete request response in App.jsx line 67', res);
        axios.get(`http://localhost:8080/data/${query}`)
          .then(res => {
            console.log('res in get ==>', res.data);
            this.setState({
              recipes: res.data,
              currentRecipe: res.data[0]
            })
          })
      })
      .catch(() => console.log('Catch block of delete in App.jsx'));
  }

  renderView(){
    if(this.state.favorites.length < 1) {
      return <div>Loading. Please wait.</div>
    } else {
      return(
        <div>
          <h1 style={styles.heading}>TACO TIME</h1>
          <div style={styles.container}>
          <div style={styles.flex1}>
           <Search getRecipes={this.getRecipes.bind(this)} />
          </div>
          <div style={styles.flex1}>
          <Favorites favorites={this.state.favorites} deleteFromDb={this.deleteFromDb} />
          </div>
          <div style={styles.flex1}>
          <RecipeList recipes={this.state.recipes} saveToDb={this.saveToDb} />
          </div>
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}