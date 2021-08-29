import * as actionTypes from "../actions/actionTypes";

const initialState = {
  locations: [],
  loading: false,
  count: 0,
  crntPage: 1,
  prevPage: null,
  nextPage: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOCATIONS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.locations,
        loading: false,
        nextPage: action.pages.next,
        prevPage: action.pages.prev,
        count: action.pages.count,
        error: false,
      };
    case actionTypes.FETCH_LOCATIONS_FAIL:
      return {
        ...state,
        locations: [],
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
    case actionTypes.FILTER_LOCATIONS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FILTER_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.locations,
        loading: false,
        nextPage: action.pages.next,
        prevPage: action.pages.prev,
        count: action.pages.count,
        error: false,
      };
    case actionTypes.FILTER_LOCATIONS_FAIL:
      return {
        ...state,
        loading: false,
        locations: [],
        error: true,
      };
    case actionTypes.IDS_LOCATIONS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.IDS_LOCATIONS_SUCCESS:
      return {
        ...state,
        locations: action.locations,
        loading: false,
        nextPage: null,
        prevPage: null,
        count: action.locations.length,
        error: false,
      };
    case actionTypes.IDS_LOCATIONS_FAIL:
      return {
        ...state,
        loading: false,
        locations: [],
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
