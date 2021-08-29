import React, { useState } from "react";
import * as actions from "../../store/actions/index";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { connect } from "react-redux";
import "./Home.scss";

import bg1 from "./bg1.gif";
import bg2 from "./bg2.jpg";
import cover from "./cover.jpg";

const Home = (props) => {
  const [charName, setCharName] = useState("");

  const pushToCharacterPageHandler = (e) => {
    e.preventDefault();
    props.onInitCharacters();
    props.history.push("/characters/c/" + charName);
  };

  return (
    <div className="HomePage">
      <div
        className="HomePage__header bgImg"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      >
        <form
          className="HomePage__header--form"
          onSubmit={pushToCharacterPageHandler}
        >
          <input
            type="text"
            placeholder="search characters"
            value={charName}
            onChange={(e) => setCharName(e.target.value)}
          />
          <button type="submit">
            <BiSearchAlt />
          </button>
        </form>
      </div>
      <div
        className="HomePage__details bgImg bgImgFixed"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        <div className="anime">
          <div className="anime__left">
            <div
              className="anime__left--img bgImg"
              style={{
                backgroundImage: `url(${cover})`,
              }}
            ></div>
            <div className="anime__left--rating">
              <BsFillStarFill />
              <span> 9.2/10 IMDb</span>
            </div>
          </div>
          <div className="anime__right">
            <h1>The Rick and Morty</h1>
            <p>
              After having been missing for nearly 20 years, Rick Sanchez
              suddenly arrives at daughter Beth's doorstep to move in with her
              and her family. Although Beth welcomes Rick into her home, her
              husband, Jerry, isn't as happy about the family reunion. Jerry is
              concerned about Rick, a sociopathic scientist, using the garage as
              his personal laboratory. In the lab, Rick works on a number of
              sci-fi gadgets, some of which could be considered dangerous. But
              that's not all Rick does that concerns Jerry. He also goes on
              adventures across the universe that often involve his
              grandchildren, Morty and Summer.
            </p>
            <div>
              <span>First episode date:</span> December 2, 2013
            </div>
            <div>
              <span>Producers:</span> J. Michael Mendel , Kenny Micka (pilot)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCharacters: () => dispatch(actions.initCharacters()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
