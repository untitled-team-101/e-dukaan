import {ADD_TO_CART, CLEAR_CART, DECREASE_COUNT, INCREASE_COUNT, REMOVE_FROM_CART} from "../CONSTANTS";

export const addToCart = (product) => {
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

export const increaseCount = (product) => {
  return {
    type: INCREASE_COUNT,
    payload: product
  }
}

export const decreaseCount = (product) => {
  return {
    type: DECREASE_COUNT,
    payload: product
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}
