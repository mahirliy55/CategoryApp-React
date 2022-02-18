import axios from "axios";
import * as types from "../types";

const API_URL = "http://localhost:3000";

export const categoryFetch = () => (dispatch) => {
  dispatch({
    type: types.CATEGORY_FETCH,
  });

  axios
    .get(`${API_URL}/categories`)
    .then((res) => {
      dispatch({
        type: types.CATEGORY_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.CATEGORY_FETCH_FAILURE,
        payload: err.response.data.errors,
      });
    });
};
