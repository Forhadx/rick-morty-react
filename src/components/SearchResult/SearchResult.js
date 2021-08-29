import React from "react";
import "./SearchResult.scss";

const SearchResult = (props) => {
  return (
    <div className="results">
      {props.filterArray.length > 0 && (
        <div className="results__filters">
          {props.filterArray.map(
            (arr, index) =>
              arr && (
                <div className="results__filters--filter" key={index}>
                  {arr}
                </div>
              )
          )}
          <div className="results__filters--clear" onClick={props.clearFilter}>
            clear filter
          </div>
        </div>
      )}
      {props.error ? (
        <div className="results__count">{`No ${props.nav} found.`}</div>
      ) : (
        <div className="results__count">{`${props.count} ${props.nav} found.`}</div>
      )}
    </div>
  );
};

export default SearchResult;
