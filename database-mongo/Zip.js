const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var zipSchema = mongoose.Schema({
  _id: String,
  city: String,
  loc: [Number],
  pop: Number,
  state: String,
});

var Zip = mongoose.model('Zip', zipSchema);

module.exports = Zip;
