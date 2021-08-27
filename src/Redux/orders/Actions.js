import {ADD_ORDER} from "../CONSTANTS";

export const addOrder = (order) => {
  return {
    type: ADD_ORDER,
    payload: order
  }
}
