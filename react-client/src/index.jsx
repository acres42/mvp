import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Place from "./components/Place.jsx";
const axios = require("axios");
import Map from "./components/Map.jsx";
import LocationForm from "./components/LocationForm.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      points: []
    };
    this.loadPlaces = this.loadPlaces.bind(this);
    this.fetchPoints = this.fetchPoints.bind(this);
  }

  fetchPoints() {
    axios
      .get("/points")
      .then(data => {
        this.setState({
          points: data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  loadPlaces() {
    axios
      .get("/places")
      .then(result => {
        this.setState({
          places: result.data
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  componentDidMount() {
    this.loadPlaces();
    this.fetchPoints();
  }

  render() {
    return (
      <div>
        <h1>Places</h1>
        <Place places={this.state.places} />
        <LocationForm />
        <Map points={this.state.points} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
