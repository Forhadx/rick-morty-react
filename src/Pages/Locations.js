import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import SearchResult from "../components/SearchResult/SearchResult";
import Pagination from "../components/Pagination/Pagination";
import PageSearch from "../components/PageSearch/PageSearch";
import LocationFilter from "../components/Filters/LocationFilter/LocationsFilter";
import LocationCard from "../components/Cards/LocationCard/LocationCard";
import Spinner from "../components/Spinner/Spinner";

const Locations = (props) => {
  const [flag, setFlag] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [dimension, setDimension] = useState("");

  const { onFetchLocations, onFilterLocations, crntPage } = props;

  useEffect(() => {
    if (isSearch) {
      onFilterLocations(crntPage, name, type, dimension);
    } else {
      onFetchLocations(crntPage);
    }
  }, [
    onFetchLocations,
    onFilterLocations,
    crntPage,
    name,
    type,
    dimension,
    isSearch,
  ]);

  const searchValuehandler = (n) => {
    setName(n);
    setIsSearch(true);
    setFilterArray([n]);
    onFilterLocations(1, n, type, dimension);
  };

  const advaceFilterHandler = (n, t, d) => {
    setIsSearch(true);
    setName(n);
    setType(t);
    setDimension(d);
    setFilterArray([n, t, d]);
    onFilterLocations(1, n, t, d);
  };

  const idsFilterHandler = (idsAarry) => {
    setFilterArray(idsAarry);
    props.onIdsLocations(idsAarry);
  };

  const filterToggleHandler = () => {
    setFlag(!flag);
  };

  const nextpageHandler = () => {
    props.onNextPage();
  };

  const prevPageHandler = () => {
    props.onPrevPage();
  };

  const firstPageHandler = () => {
    props.onFirstPage();
  };

  const clearFilterHandler = () => {
    setIsSearch(false);
    setFilterArray([]);
    setName("");
    setType("");
    setDimension("");
    props.onFirstPage();
    onFetchLocations(1);
  };

  return (
    <div className="page">
      <div className="page--header">
        Characters list by <span>location</span>
      </div>
      <div className="page--Details">
        <PageSearch
          searchValue={searchValuehandler}
          filterToggle={filterToggleHandler}
          nav={"locations"}
        />
        <LocationFilter
          isOpen={flag}
          advaceFilter={advaceFilterHandler}
          idsFilter={idsFilterHandler}
        />
        <SearchResult
          clearFilter={clearFilterHandler}
          count={props.count}
          nav={"locations"}
          filterArray={filterArray}
          error={props.err}
        />
        {props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <LocationCard locations={props.locations} />
            {!props.err && (
              <Pagination
                crntPage={props.crntPage}
                nextPage={props.nextPage}
                prevPage={props.prevPage}
                nextpageHandler={nextpageHandler}
                prevPageHandler={prevPageHandler}
                firstPageHandler={firstPageHandler}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.loc.locations,
    loading: state.loc.loading,
    crntPage: state.loc.crntPage,
    nextPage: state.loc.nextPage,
    prevPage: state.loc.prevPage,
    count: state.loc.count,
    err: state.loc.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLocations: (p) => dispatch(actions.fetchLocations(p)),
    onFilterLocations: (page, name, type, dimension) =>
      dispatch(actions.filterLocations(page, name, type, dimension)),
    onIdsLocations: (idsArray) => dispatch(actions.idsLocations(idsArray)),
    onNextPage: () => dispatch(actions.nextPageLoc()),
    onPrevPage: () => dispatch(actions.prevPageLoc()),
    onFirstPage: () => dispatch(actions.firstPageLoc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
