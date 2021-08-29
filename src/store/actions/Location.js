import * as actionTypes from "./actionTypes";
import axios from "axios";

/*  FETCHING LOCATIONS DATA  */
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
                  count
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

/*  PAGINATIONS   */
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

/*  FILTERING LOCATIONS  */
export const filterLocationsStart = () => {
  return {
    type: actionTypes.FILTER_LOCATIONS_START,
  };
};

export const filterLocationsSuccess = (locations, pages) => {
  return {
    type: actionTypes.FILTER_LOCATIONS_SUCCESS,
    locations: locations,
    pages: pages,
  };
};

export const filterLocationsFail = (err) => {
  return {
    type: actionTypes.FILTER_LOCATIONS_FAIL,
    error: err,
  };
};

export const filterLocations = (page, name, type, dimension) => {
  return async (dispatch) => {
    dispatch(filterLocationsStart());
    try {
      const graphqlQuery = {
        query: `{
          locations(page:${page}, filter:{
            name:"${name}",
            type: "${type}",
            dimension:"${dimension}"
          }) {
            info{
              count
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
        filterLocationsSuccess(
          result.data.data.locations.results,
          result.data.data.locations.info
        )
      );
    } catch (err) {
      dispatch(filterLocationsFail(err));
    }
  };
};

/* FIND LOCATIONS BY IDS*/
export const idsLocationsStart = () => {
  return {
    type: actionTypes.IDS_LOCATIONS_START,
  };
};

export const idsLocationsSuccess = (locations, pages) => {
  return {
    type: actionTypes.IDS_LOCATIONS_SUCCESS,
    locations: locations,
  };
};

export const idsLocationsFail = (err) => {
  return {
    type: actionTypes.IDS_LOCATIONS_FAIL,
    error: err,
  };
};

export const idsLocations = (idsArray) => {
  return async (dispatch) => {
    dispatch(idsLocationsStart());
    try {
      const graphqlQuery = {
        query: `{
          locationsByIds(ids:"${idsArray}"){
            id
            name
            type
            dimension
            residents{
              id
            }
          }
        }`,
      };
      let result = await axios.post(
        "https://rickandmortyapi.com/graphql",
        graphqlQuery
      );
      let copyFetchcharacter = [];
      for (let char of result.data.data.locationsByIds) {
        copyFetchcharacter.push(char);
      }
      dispatch(idsLocationsSuccess([...copyFetchcharacter]));
    } catch (err) {
      dispatch(idsLocationsFail(err));
    }
  };
};
