import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerObjects: this.props.points.data,
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
  }

  render() {
    const google = window.google;
    const markers = this.state.markerObjects;
    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{
          lat: 39.8283,
          lng: -98.5795
        }}
      >
        {markers.map((mark, idx) => (
          <Marker key={idx} position={mark} />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2IizTu-eJCKvChb_AdPecJflVmV0Sk2I"
})(MapContainer);
