import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer, displayCartReducer } from "./pdtReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
  cartDisplay: displayCartReducer
});

export default reducers;