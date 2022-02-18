import axios from "axios";
import * as types from "../types";

const API_URL = "http://localhost:3000";

export const addFavorite = (id) => (dispatch) => {
  dispatch({
    type: types.FAVORITE_FETCH,
  });

  axios
    .post(`${API_URL}/favorites`, {
      productId: id,
    })
    .then((res) => {
      dispatch({
        type: types.FAVORITE_ADD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.FAVORITE_FETCH_FAILURE,
        payload: err.response.data.errors,
      });
    });
};

export const favoritesFetch = (id) => (dispatch) => {
  dispatch({
    type: types.FAVORITE_FETCH,
  });

  axios
    .get(`${API_URL}/favorites`)
    .then((res) => {
      dispatch({
        type: types.FAVORITE_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.FAVORITE_FETCH_FAILURE,
        payload: err.response.data.errors,
      });
    });
};
