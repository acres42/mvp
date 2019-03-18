import React from "react";
import PlaceItem from "./PlaceItem.jsx";

const Place = props => (
  <div>
    <h4> Place Component </h4>
    There are {props.places.length} places displaying.
    {props.places.map(place => (
      <PlaceItem place={place} />
    ))}
  </div>
);

export default Place;
