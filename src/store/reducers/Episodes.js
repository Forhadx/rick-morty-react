import * as actionTypes from "../actions/actionTypes";

const initialState = {
  episodes: [],
  loading: false,
  count: 0,
  crntPage: 1,
  prevPage: null,
  nextPage: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EPISODES_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.episodes,
        loading: false,
        nextPage: action.pages.next,
        prevPage: action.pages.prev,
        count: action.pages.count,
        error: false,
      };
    case actionTypes.FETCH_EPISODES_FAIL:
      return {
        ...state,
        episodes: [],
        loading: false,
        error: true,
      };
    case actionTypes.PREV_PAGE:
      return {
        ...state,
        crntPage: state.crntPage - 1,
      };
    case actionTypes.NEXT_PAGE:
      return {
        ...state,
        crntPage: state.crntPage + 1,
      };
    case actionTypes.FIRST_PAGE:
      return {
        ...state,
        crntPage: 1,
      };
    case actionTypes.FILTER_EPISODES_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FILTER_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.episodes,
        loading: false,
        nextPage: action.pages.next,
        prevPage: action.pages.prev,
        count: action.pages.count,
        error: false,
      };
    case actionTypes.FILTER_EPISODES_FAIL:
      return {
        ...state,
        loading: false,
        episodes: [],
        error: true,
      };
    case actionTypes.IDS_EPISODES_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.IDS_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.episodes,
        loading: false,
        nextPage: null,
        prevPage: null,
        count: action.episodes.length,
        error: false,
      };
    case actionTypes.IDS_EPISODES_FAIL:
      return {
        ...state,
        loading: false,
        episodes: [],
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
