var express = require('express');
var path = require('path');
var dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env')
})
var bodyParser = require('body-parser');
var places = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

// app.get('/places', function (req, res) {
//   places.selectAllPlaces().then((data) => {
//     return res.json(data);
//   }).catch((err) =>
//     console.log('err', err));
// });

app.get('/points', function (req, res) {
  places.fetchPoints().then((data) => {
    return res.json(data);
  }).catch((err) =>
    console.log('err', err));
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
