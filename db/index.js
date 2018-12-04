const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/recipes';

const db = mongoose.connect(mongoUri);

module.exports = db;