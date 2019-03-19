import React from "react";

const PlaceItem = props => (
  <div>
    <td>{props.place.city}</td>
    <td>{props.place.state}</td>
    <td>{props.place.pop}</td>
  </div>
);

export default PlaceItem;
