import axios from "axios";
import * as types from "../types";

const API_URL = "http://localhost:3000";

export const productsFetch = (id) => (dispatch) => {
  dispatch({
    type: types.PRODUCTS_FETCH,
  });

  axios
    .get(`${API_URL}/categories/${id}/products`)
    .then((res) => {
      dispatch({
        type: types.PRODUCTS_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.PRODUCTS_FETCH_FAILURE,
        payload: err.response.data.errors,
      });
    });
};

export const productFetch = (id) => (dispatch) => {
  dispatch({
    type: types.PRODUCT_FETCH,
  });

  axios
    .get(`${API_URL}/products/${id}`)
    .then((res) => {
      dispatch({
        type: types.PRODUCT_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.PRODUCT_FETCH_FAILURE,
        payload: err.response.data.errors,
      });
    });
};
