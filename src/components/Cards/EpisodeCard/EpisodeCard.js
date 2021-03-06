import React from "react";
import "./EpisodeCard.scss";

const EpisodeCard = (props) => {
  return (
    <div className="episode">
      {props.episodes.map((epi, index) => (
        <div
          className="episode__card"
          key={index}
          onClick={() => props.pushToCharacterPage(epi.id)}
        >
          <div className="episode__card--name">
            <span>{epi.episode}:</span>
            {epi.name}
          </div>
          <div className="episode__card--date">{epi.air_date}</div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeCard;
