import {combineReducers} from "redux";
import products from "./products/Reducer";
import cart from "./cart/Reducer";
import user from './user/Reducer'

export default combineReducers({
  products,
  cart,
  user
});