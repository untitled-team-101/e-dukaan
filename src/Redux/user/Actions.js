import {LOGIN, LOGOUT, REMOVE_LOGIN_POPUP, SHOW_LOGIN_POPUP} from "../CONSTANTS";

export const showLoginPopup = () => {
  return {
    type: SHOW_LOGIN_POPUP
  }
}

export const removeLoginPopup = () => {
  return {
    type: REMOVE_LOGIN_POPUP
  }
}

export const loginUser = (loginData) => {
  return {
    type: LOGIN,
    payload: loginData
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT
  }
}
