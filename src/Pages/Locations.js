import React, { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import PageSearch from "../components/PageSearch/PageSearch";

import LocationFilter from "../components/Filters/LocationFilter/LocationsFilter";
import LocationCard from "../components/Cards/LocationCard/LocationCard";

const Locations = () => {
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
        Characters list by <span>location</span>
      </div>
      <div className="page--Details">
        <PageSearch
          searchValue={searchValuehandler}
          filterToggle={filterToggleHandler}
        />
        <LocationFilter isOpen={flag} />
        <LocationCard />
        <Pagination />
      </div>
    </div>
  );
};

export default Locations;
