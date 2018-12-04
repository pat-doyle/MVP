import React from 'react';
import Recipe from './Recipe.jsx';

const RecipeList = ({recipes, saveToDb}) => {
  return(
  <div id="recipe-list">
    {recipes.map(recipe => {
      return <Recipe recipe={recipe} saveToDb={saveToDb}/>
    })}
  </div>
  )
}

export default RecipeList;