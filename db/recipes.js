const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.promise = global.Promise;

const recipeSchema = new mongoose.Schema({
  title: String,
  href: String,
  ingredients: String,
  thumbnail: String,
});

const Recipes = mongoose.model('Recipes', recipeSchema);

const saveToFave = (recipe, callback) => {
  let document = new Recipes(recipe);
  document.save()
    .then(() => {
      console.log('Saved to database');
      callback();
    })
}

const deleteFave = (recipe, callback) => {
  console.log('recipe in delete function', recipe);
  Recipes.remove({_id: recipe})
    .then(() => callback());
}

const findFaves = callback => {
  Recipes.find((err,resp) => {
    if (err) {
      console.log('Error in findFaves request');
    } else {
      callback(resp);
    }
  })
}

module.exports = Recipes;
module.exports.saveToFave = saveToFave;
module.exports.deleteFave = deleteFave;
module.exports.findFaves = findFaves;
