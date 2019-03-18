const db = require('./index.js');
const Place = require('./Place.js');

const samplePlaces = [{
    zip: '08638'
  },
  {
    zip: '19067'
  },
  {
    zip: '08096'
  },
  {
    zip: '14513'
  },
  {
    zip: '19030'
  },
  {
    zip: '46260'
  },
  {
    zip: '08051'
  },
  {
    zip: '18045'
  },
  {
    zip: '46235'
  },
  {
    zip: '18042'
  },
  {
    zip: '18015'
  },
  {
    zip: '19606'
  },
  {
    zip: '19601'
  },
  {
    zip: '19603'
  },
  {
    zip: '46201'
  },
  {
    zip: '46225'
  },
  {
    zip: '89128'
  },
  {
    zip: '89129'
  }
];

const insertSamplePlaces = function () {
  Place.create(samplePlaces)
    .then(() => db.disconnect());
};

insertSamplePlaces();
