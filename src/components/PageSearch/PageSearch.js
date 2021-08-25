import React, { useState } from "react";
import { ImFilter } from "react-icons/im";
import "./PageSearch.scss";

const PageSearch = (props) => {
  const [value, setValue] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    //  console.log("in val: ", value);
    if (value) {
      props.searchValue(value);
    }
  };

  return (
    <div className="search">
      <div className="search__forms">
        <form className="search__forms--form" onSubmit={formHandler}>
          <input
            type="text"
            placeholder="search for character"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
        <div className="search__forms--filter">
          <button onClick={props.filterToggle}>
            <span>
              <ImFilter />
            </span>
            filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageSearch;
