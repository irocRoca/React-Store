import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import storeReducer from "./storeReducer";

export default combineReducers({
  cart: cartReducer,
  store: storeReducer
});
