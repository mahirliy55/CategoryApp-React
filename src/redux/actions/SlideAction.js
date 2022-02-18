import axios from "axios";
import * as types from "../types";

const API_URL = "http://localhost:3000";

export const slideFetch = () => (dispatch) => {
  dispatch({
    type: types.SLIDE_FETCH,
  });

  axios
    .get(`${API_URL}/sliders`)
    .then((res) => {
      dispatch({
        type: types.SLIDE_FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.SLIDE_FETCH_FAILURE,
        payload: err.response.data.errors,
      });
    });
};
