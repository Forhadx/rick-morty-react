import React from "react";
import "./Pagination.scss";

const Pagination = (props) => {
  return (
    <div className="paginations">
      {props.prevPage && (
        <button onClick={props.firstPageHandler}>PAGE 1</button>
      )}
      {props.prevPage && <button onClick={props.prevPageHandler}>PREV</button>}
      <button>{props.crntPage}</button>
      {props.nextPage && <button onClick={props.nextpageHandler}>NEXT</button>}
    </div>
  );
};

export default Pagination;
