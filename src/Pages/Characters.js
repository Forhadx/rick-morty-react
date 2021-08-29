import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import SearchResult from "../components/SearchResult/SearchResult";
import CharacterCard from "../components/Cards/CharacterCard/CharacterCard";
import Pagination from "../components/Pagination/Pagination";
import CharacterFilter from "../components/Filters/CharacterFilter";
import PageSearch from "../components/PageSearch/PageSearch";
import Spinner from "../components/Spinner/Spinner";
import "./page.scss";

const Characters = (props) => {
  const [flag, setFlag] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const {
    onFetchCharacter,
    onFilterCharacter,
    crntPage,
    episodes,
    locations,
    onIdsCharacter,
  } = props;

  let eid = props.match.params.eId;
  let lid = props.match.params.lid;
  let cName = props.match.params.cName;

  useEffect(() => {
    if (cName) {
      setFilterArray([cName]);
      onFilterCharacter(crntPage, cName, status, species, type, gender);
    } else if (eid) {
      let copyEpiObj = { ...episodes[0] };
      if (copyEpiObj.characters) {
        let charIds = copyEpiObj.characters.map((i) => {
          return i.id;
        });
        setFilterArray([copyEpiObj.episode]);
        onIdsCharacter(charIds);
      }
    } else if (lid) {
      let copylocObj = { ...locations[0] };
      if (copylocObj.residents) {
        let charIds = copylocObj.residents.map((i) => {
          return i.id;
        });
        setFilterArray([copylocObj.name]);
        onIdsCharacter(charIds);
      }
    } else if (isSearch) {
      onFilterCharacter(crntPage, name, status, species, type, gender);
    } else {
      onFetchCharacter(crntPage);
    }
  }, [
    onFetchCharacter,
    onFilterCharacter,
    crntPage,
    name,
    status,
    species,
    type,
    gender,
    isSearch,
    episodes,
    locations,
    eid,
    lid,
    cName,
    onIdsCharacter,
  ]);

  const searchValuehandler = (n) => {
    if (eid || lid || cName) {
      props.history.push("/characters");
    }
    setName(n);
    setIsSearch(true);
    setFilterArray([n]);
    onFilterCharacter(1, n, status, species, type, gender);
  };

  const advaceFilterHandler = (n, st, sp, t, g) => {
    if (eid || lid || cName) {
      props.history.push("/characters");
    }
    props.onFirstPage();
    setIsSearch(true);
    setName(n);
    setStatus(st);
    setSpecies(sp);
    setType(t);
    setGender(g);
    setFilterArray([n, st, sp, t, g]);
    onFilterCharacter(1, n, st, sp, t, g);
  };

  const idsFilterHandler = (idsAarry) => {
    if (eid || lid || cName) {
      props.history.push("/characters");
    }
    setFilterArray(idsAarry);
    props.onIdsCharacter(idsAarry);
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
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");
    props.onFirstPage();
    onFetchCharacter(1);
    if (eid || lid || cName) {
      props.history.push("/characters");
    }
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
          nav={"charaters"}
        />
        <CharacterFilter
          isOpen={flag}
          advaceFilter={advaceFilterHandler}
          idsFilter={idsFilterHandler}
        />
        <SearchResult
          clearFilter={clearFilterHandler}
          count={props.count}
          nav={"charaters"}
          filterArray={filterArray}
          error={props.err}
        />
        {props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <CharacterCard
              characters={props.characters}
              advaceFilter={advaceFilterHandler}
            />
            {props.characters.length > 0 && (
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
    characters: state.char.characters,
    loading: state.char.loading,
    crntPage: state.char.crntPage,
    nextPage: state.char.nextPage,
    prevPage: state.char.prevPage,
    count: state.char.count,
    err: state.char.error,
    episodes: state.epi.episodes,
    locations: state.loc.locations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCharacter: (p) => dispatch(actions.fetchCharacter(p)),
    onFilterCharacter: (page, name, status, species, type, gender) =>
      dispatch(
        actions.filterCharacter(page, name, status, species, type, gender)
      ),
    onIdsCharacter: (idsAarry) => dispatch(actions.idsCharacter(idsAarry)),
    onNextPage: () => dispatch(actions.nextPage()),
    onPrevPage: () => dispatch(actions.prevPage()),
    onFirstPage: () => dispatch(actions.firstPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
