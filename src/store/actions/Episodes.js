import * as actionTypes from "./actionTypes";
import axios from "axios";

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

export const fetchEpisodesFail = () => {
  return {
    type: actionTypes.FETCH_CHARACTERS_FAIL,
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
                  pages
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
    } catch (err) {}
  };
};

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
