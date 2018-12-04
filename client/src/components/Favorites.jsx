import React from 'react';
import FavedRecipe from './FavedRecipe.jsx'

const Favorites = ({favorites, deleteFromDb}) => {
  return(
    <div>
      {favorites.map(recipe => {
        return <FavedRecipe key={recipe._id} recipe={recipe} deleteFromDb={deleteFromDb}/>
      })}
    </div>
  )
}

export default Favorites;