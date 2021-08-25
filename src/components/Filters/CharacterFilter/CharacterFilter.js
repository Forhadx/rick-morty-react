import React from "react";
import "./CharacterFilter.scss";
import classNames from "classnames";

const CharacterFilter = (props) => {
  return (
    <div className={classNames("filters", { open: props.isOpen })}>
      <h2>advance filter</h2>
    </div>
  );
};

export default CharacterFilter;
