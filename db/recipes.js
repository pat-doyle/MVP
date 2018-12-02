const mongoose = require('mongoose');
const db = require('./index.js');

const recipeSchema = new mongoose.Schema({
  title: String,
  image: String,
  usedIngredients: Number,
  missingIngredients: Number,
  favorite: Boolean
});

const recipes = mongoose.model('recipes', recipeSchema);

module.exports = recipes;
