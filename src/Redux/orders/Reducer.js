import {ADD_ORDER} from "../CONSTANTS";
const initialState = JSON.parse(localStorage.getItem("orders")) || []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      console.log(state)
      state = [...state, {
        ...action.payload,
        placeTime: Date.now(),
        deliveryTime: Date.now() + (1000 * 60 * 60 * 24) + Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 10)
      }]
      console.log(action.payload)
      console.log(state)
      localStorage.setItem("orders", JSON.stringify(state))
      return state
    default:
      return state
  }
}

export default reducer;
