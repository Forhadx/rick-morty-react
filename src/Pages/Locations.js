import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import Pagination from "../components/Pagination/Pagination";
import PageSearch from "../components/PageSearch/PageSearch";
import LocationFilter from "../components/Filters/LocationFilter/LocationsFilter";
import LocationCard from "../components/Cards/LocationCard/LocationCard";
import Spinner from "../components/Spinner/Spinner";

const Locations = (props) => {
  const [flag, setFlag] = useState(false);

  const { onFetchLocations, crntPage } = props;

  useEffect(() => {
    onFetchLocations(crntPage);
  }, [onFetchLocations, crntPage]);

  const searchValuehandler = (val) => {
    console.log("val", val);
  };

  const filterToggleHandler = () => {
    setFlag(!flag);
  };

  const nextpageHandler = () => {
    console.log("next");
    props.onNextPage();
  };

  const prevPageHandler = () => {
    console.log("prev");
    props.onPrevPage();
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
        />
        <LocationFilter isOpen={flag} />
        {props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <LocationCard locations={props.locations} />
            <Pagination
              crntPage={props.crntPage}
              nextPage={props.nextPage}
              prevPage={props.prevPage}
              nextpageHandler={nextpageHandler}
              prevPageHandler={prevPageHandler}
            />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLocations: (p) => dispatch(actions.fetchLocations(p)),
    onNextPage: () => dispatch(actions.nextPageLoc()),
    onPrevPage: () => dispatch(actions.prevPageLoc()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
