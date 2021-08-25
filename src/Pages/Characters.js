import React, { useState } from "react";

import CharacterCard from "../components/Cards/CharacterCard/CharacterCard";
import Pagination from "../components/Pagination/Pagination";
import CharacterFilter from "../components/Filters/CharacterFilter/CharacterFilter";
import PageSearch from "../components/PageSearch/PageSearch";

const Characters = () => {
  const [flag, setFlag] = useState(false);

  const searchValuehandler = (val) => {
    console.log("val", val);
  };

  const filterToggleHandler = () => {
    setFlag(!flag);
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
        <CharacterCard />
        <Pagination />
      </div>
    </div>
  );
};

export default Characters;

/*

*/
