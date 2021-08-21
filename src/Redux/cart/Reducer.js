import {ADD_TO_CART, REMOVE_FROM_CART} from "../CONSTANTS";

const initialState = JSON.parse(localStorage.getItem("cart")) || []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.filter(product => product.id === action.payload.id).length > 0)
        return state
      state = [...state, action.payload]
      localStorage.setItem("cart", JSON.stringify(state))
      return state
    case REMOVE_FROM_CART:
      state = [...state.filter(product => product.id !== action.payload.id)]
      localStorage.setItem("cart", JSON.stringify(state))
      return state
    default:
      return state
  }
}

export default reducer;
