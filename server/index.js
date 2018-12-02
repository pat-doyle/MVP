const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = 8080
const recipes = require('../db/recipes.js');

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

app.get('http:www.recipepuppy.com/', (req, res) => {
  const file = path.join(__dirname + '/../client/dist/index.html');
  app.sendFile(file);
});

app.get('/:ingredients', (req, res) => {
  
})

app.listen(port, () => console.log(`Listening on port: ${port}`));

module.exports.app = app;
