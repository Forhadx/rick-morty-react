import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchCharacterStart = () => {
  return {
    type: actionTypes.FETCH_CHARACTERS_START,
  };
};

export const fetchCharacterSuccess = (characters, pages) => {
  return {
    type: actionTypes.FETCH_CHARACTERS_SUCCESS,
    characters: characters,
    pages: pages,
  };
};

export const fetchCharacterFail = () => {
  return {
    type: actionTypes.FETCH_CHARACTERS_FAIL,
  };
};

export const fetchCharacter = (page) => {
  return async (dispatch) => {
    dispatch(fetchCharacterStart());
    try {
      const graphqlQuery = {
        query: `{
          characters(page:${page}) {
            info{
              count
              next
              prev
            }
            results{
                id
                name
                status
                species
                gender
                image
                location{
                  id
                  name
                }
                episode{
                  id
                  name
                }
             }
          }
        }`,
      };
      let result = await axios.post(
        "https://rickandmortyapi.com/graphql",
        graphqlQuery
      );
      dispatch(
        fetchCharacterSuccess(
          result.data.data.characters.results,
          result.data.data.characters.info
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const prevPage = () => {
  return {
    type: actionTypes.PREV_PAGE,
  };
};

export const nextPage = () => {
  return {
    type: actionTypes.NEXT_PAGE,
  };
};

export const firstPage = () => {
  return {
    type: actionTypes.FIRST_PAGE,
  };
};

export const filterCharacterStart = () => {
  return {
    type: actionTypes.FILTER_CHARACTERS_START,
  };
};

export const filterCharacterSuccess = (characters, pages) => {
  return {
    type: actionTypes.FILTER_CHARACTERS_SUCCESS,
    characters: characters,
    pages: pages,
  };
};

export const filterCharacterFail = () => {
  return {
    type: actionTypes.FILTER_CHARACTERS_FAIL,
  };
};

export const filterCharacter = (page, name, status, species, type, gender) => {
  return async (dispatch) => {
    dispatch(filterCharacterStart());
    try {
      const graphqlQuery = {
        query: `{
          characters(page:${page}, filter:{
            name:"${name}",
            status:"${status}",
            species:"${species}",
            type: "${type}",
            gender:"${gender}"
          }) {
            info{
              count
              next
              prev
            }
            results{
              id
              name
              status
              species
              gender
              image
              location{
                id
                name
              }
              episode{
                id
                name
              }
            }
          }
        }`,
      };
      let result = await axios.post(
        "https://rickandmortyapi.com/graphql",
        graphqlQuery
      );
      dispatch(
        filterCharacterSuccess(
          result.data.data.characters.results,
          result.data.data.characters.info
        )
      );
    } catch (err) {
      console.log("er: ", err);
    }
  };
};
