const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:8080');

module.exports = db;