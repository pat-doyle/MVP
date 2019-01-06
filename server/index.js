const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

const port = 8080
const Recipes = require('../db/recipes.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/../client/dist`));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  console.log('This is the initial get request')
  const file = path.join(__dirname + '/../client/dist/index.html');
  app.sendFile(file);
});

app.get('/data/:ingredients', (req, res) => {
  let params = req.params.ingredients;
  // console.log('req params -->', params);
  let options = {
    url: `http://www.recipepuppy.com/api/?i=${params}&q=taco`
  }
  console.log('optionsUrl in get with params', options.url);
  request({
    url: options.url,
    json: true
  }, (err, response, body) => {
    if(err) {
      console.log('Error in request line 40');
    } else if (response.statusCode === 200) {
      // console.log('body.results----->', body)
      res.json(body.results);
      // console.log('res in request ==>', response.body)
    }
  })
})

app.post('/recipes', (req, res) => {
  console.log('req.body in post request ---->', req.body)
  Recipes.saveToFave(req.body, () => {
    console.log('Successfully saved via post request');
  })
});

app.get('/faves', (req, res) => {
  console.log('got into fave request *******');
  Recipes.findFaves(recipes => {
    console.log('recipes in faves get request', recipes)
    res.send(recipes);
    res.end();
  })
});

app.delete('/database/:recipe', (req, res) => {
  let params = req.params.recipe
  console.log('Inside delete request. Index,js line 67', params);
  Recipes.deleteFave(params, () => {
    console.log('Successful Deletion');
    res.sendStatus(204).end();
  })
})

app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports.app = app;
