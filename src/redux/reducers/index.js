import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer, tempCartReducer } from "./pdtReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
  tempCart: tempCartReducer
});

export default reducers;