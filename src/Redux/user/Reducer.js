import {LOGIN, LOGOUT, REMOVE_LOGIN_POPUP, SHOW_LOGIN_POPUP} from "../CONSTANTS";

const initialState = JSON.parse(localStorage.getItem("user")) || []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        loggedIn: true,
        popup: false,
        ...action.payload
      }
      localStorage.setItem("user", JSON.stringify(state))
      return state;
    case LOGOUT:
      state =  {
        ...state,
        popup: false,
        loggedIn: false
      }
      localStorage.setItem("user", JSON.stringify(state))
      return state;
    case SHOW_LOGIN_POPUP:
      state = {
        ...state,
        popup: true
      }
      localStorage.setItem("user", JSON.stringify(state))
      return state;
    case REMOVE_LOGIN_POPUP:
      state = {
        ...state,
        popup: false
      }
      localStorage.setItem("user", JSON.stringify(state))
      return state;
    default:
      return state
  }
}

export default reducer
