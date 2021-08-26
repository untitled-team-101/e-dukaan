import {combineReducers} from "redux";
import products from "./products/Reducer";
import cart from "./cart/Reducer";
import user from './user/Reducer'
import orders from './orders/Reducer'

export default combineReducers({
  products,
  cart,
  user,
  orders
});
