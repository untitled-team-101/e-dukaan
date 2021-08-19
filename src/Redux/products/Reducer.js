import {LOAD_DATA} from "../CONSTANTS";

const initialState = {data:{}};
export default (state = initialState, actions) => {
  switch (actions.type) {
    case LOAD_DATA:
      return {
        ...state,
        data: actions.payload
      };
    default:
      return {
        ...state,
      };
  }
}