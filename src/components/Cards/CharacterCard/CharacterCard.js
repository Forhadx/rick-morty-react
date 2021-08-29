import React from "react";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import "./CharacterCard.scss";
import { withRouter } from "react-router-dom";

const CharacterCard = (props) => {
  const episodeToCharacter = (eId) => {
    props.onInitCharacters();
    props.onIdsEpisodes([eId]);
    props.history.push("/characters/e/" + eId);
  };
  const locationsToCharacter = (lid) => {
    props.onInitCharacters();
    props.onIdsLocations([lid]);
    props.history.push("/characters/l/" + lid);
  };
  return (
    <div className="character">
      {props.characters.length > 0 &&
        props.characters.map(
          (char, index) =>
            char !== null && (
              <div className="character__card" key={index}>
                <div className="character__card-image">
                  <img className="bgImg" src={char.image} alt={char.name} />
                </div>
                <div className="character__card--details">
                  <div className="character__card--details-name">
                    {char.name}
                  </div>
                  <div className="character__card--details-others">
                    <span
                      onClick={() =>
                        props.advaceFilter("", char.status, "", "", "")
                      }
                    >
                      {char.status}
                    </span>
                    -
                    <span
                      onClick={() =>
                        props.advaceFilter("", "", "", "", char.gender)
                      }
                    >
                      {char.gender}
                    </span>
                    -
                    <span
                      onClick={() =>
                        props.advaceFilter("", "", char.species, "", "")
                      }
                    >
                      {char.species}
                    </span>
                  </div>
                  <div className="character__card--details-episode">
                    <p>First seen in:</p>
                    <h1 onClick={() => episodeToCharacter(char.episode[0].id)}>
                      {char.episode[0].name}
                    </h1>
                  </div>
                  <div className="character__card--details-location">
                    <p>Last known location:</p>
                    <h1 onClick={() => locationsToCharacter(char.location.id)}>
                      {char.location.name}
                    </h1>
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIdsLocations: (idsArray) => dispatch(actions.idsLocations(idsArray)),
    onIdsEpisodes: (idsArray) => dispatch(actions.idsEpisodes(idsArray)),
    onInitCharacters: () => dispatch(actions.initCharacters()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(CharacterCard));
