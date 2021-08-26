import {ADD_TO_CART, CLEAR_CART, DECREASE_COUNT, INCREASE_COUNT, REMOVE_FROM_CART} from "../CONSTANTS";

const initialState = JSON.parse(localStorage.getItem("cart")) || []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.filter(product => product.id === action.payload.id).length > 0)
        return state
      state = [...state, {
        count: 1,
        ...action.payload
      }]
      localStorage.setItem("cart", JSON.stringify(state))
      return state
    case REMOVE_FROM_CART:
      state = [...state.filter(product => product.id !== action.payload.id)]
      localStorage.setItem("cart", JSON.stringify(state))
      return state
    case INCREASE_COUNT:
      state = [...state.map(product => {
          if(product.id === action.payload.id)
            return {
              ...product,
              count: product.count + 1
            }
          return product
        })]
      localStorage.setItem("cart", JSON.stringify(state))
      return state
    case DECREASE_COUNT:
      state = [...state.map(product => {
          if(product.id === action.payload.id)
            if(product.count > 1)
              return {
                ...product,
                count: product.count - 1
              }
          return product
        })]
      localStorage.setItem("cart", JSON.stringify(state))
      return state
    case CLEAR_CART:
      state = []
      localStorage.setItem("cart", JSON.stringify(state))
      return state
    default:
      return state
  }
}

export default reducer;
