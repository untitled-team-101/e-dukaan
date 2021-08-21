import {combineReducers} from "redux";
import products from "./products/Reducer";
import cart from "./cart/Reducer";

export default combineReducers({
  products,
  cart
});