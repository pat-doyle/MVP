const axios = require('axios');

const searchRecipes = (ingredients, callback) => {
  axios.get(`/api/?i=${ingredients}`)
      .then(res => {
        console.log('res in axios get -->', res);
        callback(res);
      })
      .catch(() => console.log('Error in recipe search'));
}

export default searchRecipes;