import * as types from "../types";

const initialState = {
  isLoading: false,
  isError: false,
  errors: null,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SLIDE_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case types.SLIDE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case types.SLIDE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errors: action.payload,
      };
    default:
      return state;
  }
};
