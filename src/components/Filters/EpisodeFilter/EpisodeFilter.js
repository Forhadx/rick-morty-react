import React from "react";
import "./EpisodeFilter.scss";
import classNames from "classnames";

const EpisodeFilter = (props) => {
  return (
    <div className={classNames("filters", { open: props.isOpen })}>
      <h2>advance filter</h2>
    </div>
  );
};

export default EpisodeFilter;
