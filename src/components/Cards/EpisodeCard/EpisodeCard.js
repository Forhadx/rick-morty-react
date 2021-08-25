import React from "react";
import "./EpisodeCard.scss";

const EpisodeCard = () => {
  return (
    <div className="episode">
      <div className="episode__card">
        <div className="episode__card--name">
          <span>S01E01:</span>Meeseeks and Destroy
        </div>
        <div className="episode__card--date">January 20, 2014</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
