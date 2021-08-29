import * as actionTypes from "../actions/actionTypes";

const initialState = {
  characters: [],
  loading: false,
  count: 0,
  crntPage: 1,
  prevPage: null,
  nextPage: null,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        loading: false,
        nextPage: action.pages.next,
        prevPage: action.pages.prev,
        count: action.pages.count,
        error: false,
      };
    case actionTypes.FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        characters: [],
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
    case actionTypes.FILTER_CHARACTERS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FILTER_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        loading: false,
        nextPage: action.pages.next,
        prevPage: action.pages.prev,
        count: action.pages.count,
        error: false,
      };
    case actionTypes.FILTER_CHARACTERS_FAIL:
      return {
        ...state,
        loading: false,
        characters: [],
        error: true,
      };
    case actionTypes.IDS_CHARACTERS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.IDS_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        loading: false,
        nextPage: null,
        prevPage: null,
        count: action.characters.length,
        error: false,
      };
    case actionTypes.IDS_CHARACTERS_FAIL:
      return {
        ...state,
        loading: false,
        characters: [],
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
