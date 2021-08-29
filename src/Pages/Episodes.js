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
  const [isSearch, setIsSearch] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const [name, setName] = useState("");
  const [episode, setEpisode] = useState("");

  const { onFetchEpisodes, onFilterEpisodes, crntPage } = props;

  useEffect(() => {
    if (isSearch) {
      onFilterEpisodes(crntPage, name, episode);
    } else {
      onFetchEpisodes(crntPage);
    }
  }, [onFetchEpisodes, onFilterEpisodes, crntPage, name, episode, isSearch]);

  const searchValuehandler = (n) => {
    setName(n);
    setIsSearch(true);
    setFilterArray([n]);
    onFilterEpisodes(1, n, episode);
  };

  const advaceFilterHandler = (n, epi) => {
    setIsSearch(true);
    setName(n);
    setEpisode(epi);
    setFilterArray([n, epi]);
    onFilterEpisodes(1, n, epi);
  };

  const idsFilterHandler = (idsAarry) => {
    setFilterArray(idsAarry);
    props.onIdsEpisodes(idsAarry);
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
    setEpisode("");
    props.onFirstPage();
    onFetchEpisodes(1);
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
        <EpisodeFilter
          isOpen={flag}
          advaceFilter={advaceFilterHandler}
          idsFilter={idsFilterHandler}
        />
        <SearchResult
          clearFilter={clearFilterHandler}
          count={props.count}
          nav={"episodes"}
          filterArray={filterArray}
          error={props.err}
        />
        {props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <EpisodeCard episodes={props.episodes} />
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
    episodes: state.epi.episodes,
    loading: state.epi.loading,
    crntPage: state.epi.crntPage,
    nextPage: state.epi.nextPage,
    prevPage: state.epi.prevPage,
    count: state.epi.count,
    err: state.epi.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchEpisodes: (p) => dispatch(actions.fetchEpisodes(p)),
    onFilterEpisodes: (page, name, episode) =>
      dispatch(actions.filterEpisodes(page, name, episode)),
    onIdsEpisodes: (idsArray) => dispatch(actions.idsEpisodes(idsArray)),
    onNextPage: () => dispatch(actions.nextPageEpi()),
    onPrevPage: () => dispatch(actions.prevPageEpi()),
    onFirstPage: () => dispatch(actions.firstPageEpi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
