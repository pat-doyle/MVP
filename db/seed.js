const db = require('./index.js');
const Recipes = require('./recipes.js');

const starters = [
  { 
    title: 'Fried Bittersweet Chocolate Bread',
    href: 'http://www.epicurious.com/recipes/food/views/Fried-Bittersweet-Chocolate-Bread-236691',
    ingredients: 'butter',
    thumbnail: 'http://img.recipepuppy.com/95684.jpg' 
  },
  { 
    title: 'Cheese Bites',
    href: 'http://www.recipezaar.com/Cheese-Bites-184874',
    ingredients: 'bread',
    thumbnail: 'http://img.recipepuppy.com/287935.jpg' 
  }
];

const insertStarters = () => {
  Recipes.create(starters)
    .then(() => {
      console.log('Created db')
      db.disconnect()
    })
};

insertStarters();
