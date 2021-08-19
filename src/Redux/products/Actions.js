import {LOAD_DATA} from "../CONSTANTS";

export const loadProducts = () => {
  return dispatch => {
    fetch("/products.json")
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: LOAD_DATA,
          payload: data
        })
      });
  }
  // return {
  //   type: LOAD_DATA,
  //   payload: {}
  // }
}