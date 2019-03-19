import React from "react";
import PlaceItem from "./PlaceItem.jsx";

const Place = props => (
  <div>
    There are {props.places.length} places displaying.
    <table>
      <tr>
        <th>City</th>
        <th>State</th>
        <th>Zip Code Population</th>
      </tr>
      <tr>
        {props.places.map(place => (
          <PlaceItem place={place} />
        ))}
      </tr>
    </table>
  </div>
);

export default Place;
