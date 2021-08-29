import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "./AllFilter.scss";
import classNames from "classnames";

const CharacterFilter = (props) => {
  const [idArray, setIdArray] = useState([]);
  const [idNum, setIdNum] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const addIdInArrayHandler = () => {
    if (!idArray.includes(idNum) && idNum !== "" && idNum <= 671) {
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
    if (name || status || species || type || gender) {
      props.advaceFilter(name, status, species, type, gender);
    }
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
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
              placeholder="enter charater name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="advance__filter--form-div">
            <label>status</label>
            <input
              type="text"
              placeholder="enter charater status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="advance__filter--form-div">
            <label>species</label>
            <input
              type="text"
              placeholder="enter charater species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
          </div>
          <div className="advance__filter--form-div">
            <label>type</label>
            <input
              type="text"
              placeholder="enter charater type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="advance__filter--form-div">
            <label>gender</label>
            <input
              type="text"
              placeholder="enter charater gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
            placeholder="enter charater id (max: 671)"
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

export default CharacterFilter;
