import React from "react";
import "./LocationsFilter.scss";
import classNames from "classnames";

const LocationsFilter = (props) => {
  return (
    <div className={classNames("filters", { open: props.isOpen })}>
      <h2>advance filter</h2>
    </div>
  );
};

export default LocationsFilter;
