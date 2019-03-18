var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/test';
var Place = require('./Place.js');
var Zip = require('./Zip.js');

const db = mongoose.connect(mongoURI, {
  useNewUrlParser: true
});

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });
//ITEMS
var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAllItems = function () {
  let query = Item.find({});
  return query.exec();
};


var selectAllPlaces = async function () {
  let query = Place.find({});
  return query.exec();
};

var getLocByZip = async function (zip) {
  let query = Zip.findById({
    _id: zip
  }).select('loc');
  return query.exec();
}
//Points
var fetchPoints = async function () {
  var zips = await selectAllPlaces();
  // console.log(zips);
  var points = [];
  if (zips.length > 0) {
    zips.forEach((zip) => {
      points.push(getLocByZip(zip.zip).then((result) => {
        if (result) {
          // console.log(result.loc);
          return result.loc
        }
      }));
    });
  }
  var resolvedPoints = await Promise.all(points);
  //convert array to an array of objects;
  var pointsAsObjects = [];
  resolvedPoints.forEach((pointSet) => {
    if (pointSet) {
      var obj = {
        lat: pointSet[1],
        lng: pointSet[0]
      }
      pointsAsObjects.push(obj);
    }
  })
  return pointsAsObjects;
};
module.exports = db;
module.exports.selectAllItems = selectAllItems;
module.exports.selectAllPlaces = selectAllPlaces;
module.exports.fetchPoints = fetchPoints;
