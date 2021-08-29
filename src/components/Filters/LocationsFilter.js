import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import classNames from "classnames";
import "./AllFilter.scss";

const LocationsFilter = (props) => {
  const [idArray, setIdArray] = useState([]);
  const [idNum, setIdNum] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  const addIdInArrayHandler = () => {
    if (!idArray.includes(idNum) && idNum !== "" && idNum <= 108) {
      setIdArray([...idArray, idNum]);
      setIdNum("");
    }
  };

  const removeIdfromArrayHandler = (val) => {
    setIdArray(idArray.filter((x) => x !== val));
  };

  const idsFilterHandler = () => {
    if (idArray.length > 0) {
      setIdArray([]);
      props.idsFilter(idArray);
    }
  };

  const advaceFilterHandler = (e) => {
    e.preventDefault();
    if (name || type || dimension) {
      props.advaceFilter(name, type, dimension);
    }
    setName("");
    setType("");
    setDimension("");
  };

  return (
    <div className={classNames("filters", { open: props.isOpen })}>
      <div className="advance__filter">
        <h2 className="advance__filter--header">advance filter</h2>
        <form className="advance__filter--form" onSubmit={advaceFilterHandler}>
          <div className="advance__filter--form-div">
            <label>name</label>
            <input
              type="text"
              placeholder="enter location name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="advance__filter--form-div">
            <label>type</label>
            <input
              type="text"
              placeholder="enter location type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="advance__filter--form-div">
            <label>dimension</label>
            <input
              type="text"
              placeholder="enter location gender"
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
            />
          </div>
          <button type="submit">Search Filter</button>
        </form>
      </div>

      <div className="ids__filter">
        <h2 className="ids__filter--header">Filter By Ids</h2>
        <div className="ids__filter--input">
          <input
            type="number"
            placeholder="enter location id (max: 108)"
            value={idNum}
            onChange={(e) => setIdNum(e.target.value)}
          />
          <button onClick={addIdInArrayHandler}>add</button>
        </div>
        <div className="ids__filter--output">
          {idArray.map((i) => (
            <p key={i}>
              {`id-${i}`}
              <span onClick={() => removeIdfromArrayHandler(i)}>
                <ImCancelCircle />
              </span>
            </p>
          ))}
        </div>
        <button className="ids__filter--submit" onClick={idsFilterHandler}>
          Search Ids
        </button>
      </div>
    </div>
  );
};

export default LocationsFilter;
