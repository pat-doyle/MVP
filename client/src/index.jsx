import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import searchRecipes from './lib/searchRecipes.js';

ReactDOM.render(<App searchRecipes={searchRecipes} />, document.getElementById('app'));