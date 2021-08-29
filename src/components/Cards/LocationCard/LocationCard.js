import React from "react";
import "./LocationsCard.scss";

const LocationsCard = (props) => {
  return (
    <div className="location">
      {props.locations.map((loc) => (
        <div
          className="location__card"
          key={loc.id}
          onClick={() => props.pushToCharacterPage(loc.id)}
        >
          <div className="location__card--name">{loc.name}</div>
          <div className="location__card--dimension">
            <span>Dimension:</span>
            {loc.dimension}
          </div>
          <div className="location__card--type">
            <span>Type:</span>
            {loc.type}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationsCard;
