import {LOAD_PRODUCTS, SEARCH_CATEGORY, SEARCH_PRODUCTS} from "../CONSTANTS";

export const loadProducts = () => {
  return dispatch => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: LOAD_PRODUCTS,
          payload: data.map(product => {
            return {
              ...product,
              price: Math.floor(product.price * 75),
              rating: Math.floor(2 + (Math.random() * 4))
            }
          })
        })
      })
  }
}

export const searchProducts = (searchKeyword) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: searchKeyword
  }
}

export const selectCategory = (category) => {
  return {
    type: SEARCH_CATEGORY,
    payload: category
  }
}
