import React from "react";
import "./CharacterFilter.scss";
import classNames from "classnames";

const CharacterFilter = (props) => {
  return (
    <div className={classNames("filters", { open: props.isOpen })}>
      <div className="advance__filter">
        <h2 className="advance__filter--header">advance filter</h2>
        <form className="advance__filter--form">
          <div className="advance__filter--form-div">
            <label>Enter charater name</label>
            <input type="text" placeholder="enter name" />
          </div>
          <div className="advance__filter--form-div">
            <label>Enter charater status</label>
            <input type="text" placeholder="enter status" />
          </div>
          <div className="advance__filter--form-div">
            <label>Enter charater species</label>
            <input type="text" placeholder="enter species" />
          </div>
          <div className="advance__filter--form-div">
            <label>Enter charater type</label>
            <input type="text" placeholder="enter type" />
          </div>
          <div className="advance__filter--form-div">
            <label>Enter charater gender</label>
            <input type="text" placeholder="enter gender" />
          </div>
          <button>Search Filter</button>
        </form>
      </div>

      <div className="ids__filter">
        <h2 className="ids__filter">Filter By Ids</h2>
        <form className="ids__filter--form">
          <div className="ids__filter--form-div">
            <input type="number" placeholder="enter id" />
            <button>add</button>
          </div>
          <div>number</div>
          <button>Search Ids</button>
        </form>
      </div>
    </div>
  );
};

export default CharacterFilter;
