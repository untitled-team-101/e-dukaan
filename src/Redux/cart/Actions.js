import {ADD_TO_CART, REMOVE_FROM_CART} from "../CONSTANTS";

export const addToCart = (product) => {
  console.log("add cart")
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  }
}
