import React from "react";
import "./LocationsCard.scss";

const LocationsCard = () => {
  return (
    <div className="location">
      <div className="location__card">
        <div className="location__card--name">Gromflom Prime</div>
        <div className="location__card--dimension">
          <span>Dimension:</span>Replacement Dimension
        </div>
        <div className="location__card--type">
          <span>Type:</span>Planet
        </div>
      </div>
    </div>
  );
};

export default LocationsCard;
