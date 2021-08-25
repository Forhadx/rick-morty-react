import * as actionTypes from "../actions/actionTypes";

const initialState = {
  characters: [],
  loading: false,
  crntPage: 1,
  prevPage: null,
  nextPage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.characters,
        loading: false,
        nextPage: action.pages.next,
        prevPage: action.pages.prev,
      };
    case actionTypes.FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        loading: false,
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
    default:
      return state;
  }
};

export default reducer;
