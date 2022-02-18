import * as types from "../types";

const initialState = {
  isLoading: false,
  isError: false,
  errors: null,
  data: [],
  product: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case types.PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errors: null,
        data: action.payload,
      };
    case types.PRODUCTS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errors: action.payload,
      };
    case types.PRODUCT_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case types.PRODUCT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errors: null,
        product: action.payload,
      };
    case types.PRODUCT_FETCH_FAILURE:
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
