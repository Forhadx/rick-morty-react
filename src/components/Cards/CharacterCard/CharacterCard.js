import React from "react";
import "./CharacterCard.scss";

const CharacterCard = () => {
  return (
    <div className="character">
      <div className="character__card">
        <div className="character__card-image">
          <img
            className="bgImg"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="name"
          />
        </div>
        <div className="character__card--details">
          <div className="character__card--details-name">
            Abadango Cluster Princess
          </div>
          <div className="character__card--details-others">
            <span>Dead</span>-<span>Female</span>-<span>Human</span>
          </div>
          <div className="character__card--details-episode">
            <p>First seen in:</p>
            <h1>Raising Gazorpazorp</h1>
          </div>
          <div className="character__card--details-location">
            <p>Last known location:</p>
            <h1>Earth (Replacement Dimension)</h1>
          </div>
        </div>
      </div>

      <div className="character__card">
        <div className="character__card-image">
          <img
            className="bgImg"
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="name"
          />
        </div>
        <div className="character__card--details">
          <div className="character__card--details-name">
            Abadango Cluster Princess
          </div>
          <div className="character__card--details-others">
            <span>Dead</span>-<span>Female</span>-<span>Human</span>
          </div>
          <div className="character__card--details-episode">
            <p>First seen in:</p>
            <h1>Raising Gazorpazorp</h1>
          </div>
          <div className="character__card--details-location">
            <p>Last known location:</p>
            <h1>Earth (Replacement Dimension)</h1>
          </div>
        </div>
      </div>

      <div className="character__card">
        <div className="character__card-image">
          <img
            className="bgImg"
            src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
            alt="name"
          />
        </div>
        <div className="character__card--details">
          <div className="character__card--details-name">
            Abadango Cluster Princess
          </div>
          <div className="character__card--details-others">
            <span>Dead</span>-<span>Female</span>-<span>Human</span>
          </div>
          <div className="character__card--details-episode">
            <p>First seen in:</p>
            <h1>Raising Gazorpazorp</h1>
          </div>
          <div className="character__card--details-location">
            <p>Last known location:</p>
            <h1>Earth (Replacement Dimension)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
