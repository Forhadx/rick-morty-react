import React, { useState } from "react";

import Pagination from "../components/Pagination/Pagination";
import PageSearch from "../components/PageSearch/PageSearch";
import EpisodeFilter from "../components/Filters/EpisodeFilter/EpisodeFilter";
import EpisodeCard from "../components/Cards/EpisodeCard/EpisodeCard";

const Episodes = () => {
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
        Characters list by <span>Episode</span>
      </div>
      <div className="page--Details">
        <PageSearch
          searchValue={searchValuehandler}
          filterToggle={filterToggleHandler}
        />
        <EpisodeFilter isOpen={flag} />
        <EpisodeCard />
        <Pagination />
      </div>
    </div>
  );
};

export default Episodes;
