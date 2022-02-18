import * as types from "../types";

const initialState = {
  isLoading: false,
  isError: false,
  errors: null,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FAVORITE_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case types.FAVORITE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case types.FAVORITE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errors: action.payload,
      };
    case types.FAVORITE_ADD:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
