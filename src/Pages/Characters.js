import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import CharacterCard from "../components/Cards/CharacterCard/CharacterCard";
import Pagination from "../components/Pagination/Pagination";
import CharacterFilter from "../components/Filters/CharacterFilter/CharacterFilter";
import PageSearch from "../components/PageSearch/PageSearch";
import Spinner from "../components/Spinner/Spinner";

const Characters = (props) => {
  const [flag, setFlag] = useState(false);

  const { onFetchCharacter, crntPage } = props;

  useEffect(() => {
    onFetchCharacter(crntPage);
  }, [onFetchCharacter, crntPage]);

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

  return (
    <div className="page">
      <div className="page--header">
        All <span>Characters</span> List
      </div>
      <div className="page--Details">
        <PageSearch
          searchValue={searchValuehandler}
          filterToggle={filterToggleHandler}
        />
        <CharacterFilter isOpen={flag} />
        {props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <CharacterCard characters={props.characters} />
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
    characters: state.char.characters,
    loading: state.char.loading,
    crntPage: state.char.crntPage,
    nextPage: state.char.nextPage,
    prevPage: state.char.prevPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCharacter: (p) => dispatch(actions.fetchCharacter(p)),
    onNextPage: () => dispatch(actions.nextPage()),
    onPrevPage: () => dispatch(actions.prevPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
