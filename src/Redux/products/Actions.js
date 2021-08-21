import {LOAD_PRODUCTS, SEARCH_PRODUCTS} from "../CONSTANTS";

export const loadProducts = () => {
  return dispatch => {
    fetch("/products.json")
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: LOAD_PRODUCTS,
          payload: data
        })
      });
  }
}

export const searchProducts = (searchKeyword) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: searchKeyword
  }
}
