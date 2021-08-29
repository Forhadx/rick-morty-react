import * as actionTypes from "./actionTypes";
import axios from "axios";

/*  FETCHING CHARACTER DATA  */
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

export const fetchCharacterFail = (err) => {
  return {
    type: actionTypes.FETCH_CHARACTERS_FAIL,
    error: err,
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
      fetchCharacterFail(err);
    }
  };
};

/*  PAGINATIONS   */
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

/*  FILTERING CHARACTERS  */
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

export const filterCharacterFail = (err) => {
  return {
    type: actionTypes.FILTER_CHARACTERS_FAIL,
    error: err,
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
      dispatch(filterCharacterFail(err));
    }
  };
};

/* FIND CHARACTER BY IDS*/
export const idsCharacterStart = () => {
  return {
    type: actionTypes.IDS_CHARACTERS_START,
  };
};

export const idsCharacterSuccess = (characters) => {
  return {
    type: actionTypes.IDS_CHARACTERS_SUCCESS,
    characters: characters,
  };
};

export const idsCharacterFail = (err) => {
  return {
    type: actionTypes.IDS_CHARACTERS_FAIL,
    error: err,
  };
};

export const idsCharacter = (idsArray) => {
  return async (dispatch) => {
    dispatch(filterCharacterStart());
    try {
      const graphqlQuery = {
        query: `{
          charactersByIds(ids: "${idsArray}") {
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
        }`,
      };
      let result = await axios.post(
        "https://rickandmortyapi.com/graphql",
        graphqlQuery
      );
      let copyFetchcharacter = [];
      for (let char of result.data.data.charactersByIds) {
        copyFetchcharacter.push(char);
      }
      dispatch(idsCharacterSuccess([...copyFetchcharacter]));
    } catch (err) {
      dispatch(idsCharacterFail(err));
    }
  };
};
