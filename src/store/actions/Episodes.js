import * as actionTypes from "./actionTypes";
import axios from "axios";

/*  FETCHING EPISODES DATA  */
export const fetchEpisodesStart = () => {
  return {
    type: actionTypes.FETCH_EPISODES_START,
  };
};

export const fetchEpisodesSuccess = (episodes, pages) => {
  return {
    type: actionTypes.FETCH_EPISODES_SUCCESS,
    episodes: episodes,
    pages: pages,
  };
};

export const fetchEpisodesFail = (error) => {
  return {
    type: actionTypes.FETCH_EPISODES_FAIL,
    error: error,
  };
};

export const fetchEpisodes = (page) => {
  return async (dispatch) => {
    dispatch(fetchEpisodesStart());
    try {
      const graphqlQuery = {
        query: `{
            episodes(page: ${page}) {
                info{
                  count
                  next
                  prev
                }
                results{
                  id
                  name
                  episode
                  air_date      
                }
              }
        }`,
      };
      let result = await axios.post(
        "https://rickandmortyapi.com/graphql",
        graphqlQuery
      );
      dispatch(
        fetchEpisodesSuccess(
          result.data.data.episodes.results,
          result.data.data.episodes.info
        )
      );
    } catch (err) {
      dispatch(fetchEpisodesFail(err));
    }
  };
};

/*  PAGINATIONS   */
export const prevPageEpi = () => {
  return {
    type: actionTypes.PREV_PAGE,
  };
};

export const nextPageEpi = () => {
  return {
    type: actionTypes.NEXT_PAGE,
  };
};

export const firstPageEpi = () => {
  return {
    type: actionTypes.FIRST_PAGE,
  };
};

/*  FILTERING EPISODES  */
export const filterEpisodesStart = () => {
  return {
    type: actionTypes.FILTER_EPISODES_START,
  };
};

export const filterEpisodesSuccess = (episodes, pages) => {
  return {
    type: actionTypes.FILTER_EPISODES_SUCCESS,
    episodes: episodes,
    pages: pages,
  };
};

export const filterEpisodesFail = (err) => {
  return {
    type: actionTypes.FILTER_EPISODES_FAIL,
    error: err,
  };
};

export const filterEpisodes = (page, name, episode) => {
  return async (dispatch) => {
    dispatch(filterEpisodesStart());
    try {
      const graphqlQuery = {
        query: `{
          episodes(page:${page}, filter:{
            name:"${name}"
            episode:"${episode}"
          }) {
            info{
              count
              next
              prev
            }
            results{
              id
              name
              episode
              air_date   
            }
          }
        }`,
      };
      let result = await axios.post(
        "https://rickandmortyapi.com/graphql",
        graphqlQuery
      );
      dispatch(
        filterEpisodesSuccess(
          result.data.data.episodes.results,
          result.data.data.episodes.info
        )
      );
    } catch (err) {
      dispatch(filterEpisodesFail(err));
    }
  };
};

/* FIND EPISODES BY IDS*/
export const idsEpisodesStart = () => {
  return {
    type: actionTypes.IDS_EPISODES_START,
  };
};

export const idsEpisodesSuccess = (episodes) => {
  return {
    type: actionTypes.IDS_EPISODES_SUCCESS,
    episodes: episodes,
  };
};

export const idsEpisodesFail = (err) => {
  return {
    type: actionTypes.IDS_EPISODES_FAIL,
    error: err,
  };
};

export const idsEpisodes = (idsArray) => {
  return async (dispatch) => {
    dispatch(idsEpisodesStart());
    try {
      const graphqlQuery = {
        query: `{
          episodesByIds(ids:"${idsArray}"){
            id
            name
            episode
            air_date 
            characters{
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
      for (let char of result.data.data.episodesByIds) {
        copyFetchcharacter.push(char);
      }
      dispatch(idsEpisodesSuccess([...copyFetchcharacter]));
    } catch (err) {
      dispatch(idsEpisodesFail(err));
    }
  };
};
