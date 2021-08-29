import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import classNames from "classnames";

const EpisodeFilter = (props) => {
  const [idArray, setIdArray] = useState([]);
  const [idNum, setIdNum] = useState("");
  const [name, setName] = useState("");
  const [episode, setEpisode] = useState("");

  const addIdInArrayHandler = () => {
    if (!idArray.includes(idNum) && idNum !== "" && idNum <= 41) {
      setIdArray([...idArray, idNum]);
      setIdNum("");
    }
  };

  const removeIdfromArrayHandler = (val) => {
    setIdArray(idArray.filter((x) => x !== val));
  };

  const idsFilterHandler = () => {
    setIdArray([]);
    props.idsFilter(idArray);
  };

  const advaceFilterHandler = (e) => {
    e.preventDefault();
    if (name || episode) {
      props.advaceFilter(name, episode);
    }
    setName("");
    setEpisode("");
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
              placeholder="enter episode name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="advance__filter--form-div">
            <label>episode</label>
            <input
              type="text"
              placeholder="enter episode (S01E11)"
              value={episode}
              onChange={(e) => setEpisode(e.target.value)}
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
            placeholder="enter episode id (max: 41)"
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

export default EpisodeFilter;
