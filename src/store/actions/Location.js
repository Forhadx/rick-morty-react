import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchLocationsStart = () => {
  return {
    type: actionTypes.FETCH_LOCATIONS_START,
  };
};

export const fetchLocationsSuccess = (locations, pages) => {
  return {
    type: actionTypes.FETCH_LOCATIONS_SUCCESS,
    locations: locations,
    pages: pages,
  };
};

export const fetchLocationsFail = () => {
  return {
    type: actionTypes.FETCH_LOCATIONS_FAIL,
  };
};

export const fetchLocations = (page) => {
  return async (dispatch) => {
    dispatch(fetchLocationsStart());
    try {
      const graphqlQuery = {
        query: `{
            locations(page:${page}) {
                info{
                  next
                  prev
                }
                results{
                  id
                  name
                  type
                  dimension
                }
              }
        }`,
      };
      let result = await axios.post(
        "https://rickandmortyapi.com/graphql",
        graphqlQuery
      );
      dispatch(
        fetchLocationsSuccess(
          result.data.data.locations.results,
          result.data.data.locations.info
        )
      );
    } catch (err) {}
  };
};

export const prevPageLoc = () => {
  return {
    type: actionTypes.PREV_PAGE,
  };
};

export const nextPageLoc = () => {
  return {
    type: actionTypes.NEXT_PAGE,
  };
};

export const firstPageLoc = () => {
  return {
    type: actionTypes.FIRST_PAGE,
  };
};
