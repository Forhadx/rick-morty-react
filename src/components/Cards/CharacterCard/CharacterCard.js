import React from "react";
import "./CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <div className="character">
      {props.characters.map((char) => (
        <div className="character__card" key={char.id}>
          <div className="character__card-image">
            <img className="bgImg" src={char.image} alt={char.name} />
          </div>
          <div className="character__card--details">
            <div className="character__card--details-name">{char.name}</div>
            <div className="character__card--details-others">
              <span>{char.status}</span>-<span>{char.gender}</span>-
              <span>{char.species}</span>
            </div>
            <div className="character__card--details-episode">
              <p>First seen in:</p>
              <h1>{char.episode[0].name}</h1>
            </div>
            <div className="character__card--details-location">
              <p>Last known location:</p>
              <h1>{char.location.name}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterCard;
