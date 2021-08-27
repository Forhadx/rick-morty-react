import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import SearchResult from "../components/SearchResult/SearchResult";
import Pagination from "../components/Pagination/Pagination";
import PageSearch from "../components/PageSearch/PageSearch";
import EpisodeFilter from "../components/Filters/EpisodeFilter/EpisodeFilter";
import EpisodeCard from "../components/Cards/EpisodeCard/EpisodeCard";
import Spinner from "../components/Spinner/Spinner";

const Episodes = (props) => {
  const [flag, setFlag] = useState(false);

  const { onFetchEpisodes, crntPage } = props;

  useEffect(() => {
    onFetchEpisodes(crntPage);
  }, [onFetchEpisodes, crntPage]);

  const searchValuehandler = (val) => {
    console.log("val", val);
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

  return (
    <div className="page">
      <div className="page--header">
        Characters list by <span>Episode</span>
      </div>
      <div className="page--Details">
        <PageSearch
          searchValue={searchValuehandler}
          filterToggle={filterToggleHandler}
          nav={"episodes"}
        />
        <EpisodeFilter isOpen={flag} />
        <SearchResult />
        {props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <EpisodeCard episodes={props.episodes} />
            <Pagination
              crntPage={props.crntPage}
              nextPage={props.nextPage}
              prevPage={props.prevPage}
              nextpageHandler={nextpageHandler}
              prevPageHandler={prevPageHandler}
              firstPageHandler={firstPageHandler}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    episodes: state.epi.episodes,
    loading: state.epi.loading,
    crntPage: state.epi.crntPage,
    nextPage: state.epi.nextPage,
    prevPage: state.epi.prevPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchEpisodes: (p) => dispatch(actions.fetchEpisodes(p)),
    onNextPage: () => dispatch(actions.nextPageEpi()),
    onPrevPage: () => dispatch(actions.prevPageEpi()),
    onFirstPage: () => dispatch(actions.firstPageEpi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
