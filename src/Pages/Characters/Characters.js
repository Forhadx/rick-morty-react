import React from "react";
import { ImFilter } from "react-icons/im";
import "./Characters.scss";

const Characters = () => {
  return (
    <div className="character__page">
      <div className="character__page--header">All Characters List</div>
      <div className="character__page--Details">
        <div className="search">
          <div className="search__forms">
            <form className="search__forms--form">
              <input type="text" placeholder="search for character" />
              <button>search</button>
            </form>
            <div className="search__forms--filter">
              <button>
                <span>
                  <ImFilter />
                </span>
                filter
              </button>
            </div>
          </div>
          <div className="filters">advance filter</div>
        </div>
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

        <div className="paginations">
          <button>PREV</button>
          <button>1</button>
          <button>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default Characters;

/*
  
*/
