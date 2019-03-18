const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const placeSchema = mongoose.Schema({
  zip: String,
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
