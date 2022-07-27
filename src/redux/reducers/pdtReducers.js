const initialState = {
  products: [],
  
}

const emptyProduct = {
  id:'' ,
  "title": "",
  "price": '',
  "description": "",
  "category": "",
  "image": "",
  "rating": {
    "rate": '',
    "count": ''
  }
}

const emptyCart = {
  cart: [{id:2, quantity:1}]
}

const tempCartForDisplay = {
  tempCart: []
}

export const productReducer = (state=initialState, action) => {
  switch(action.type) {
    case "SET_PRODUCTS":
      return {...state, products: action.payload};
    // case "SELECT_PRODUCTS":
    //   return {...state, currProduct: action.payload};
    case "RESET_PRODUCTS":
        return initialState;
    default:
      return state;
  }
}

export const selectedProductReducer = (state=emptyProduct, action) => {
  switch(action.type) {
    case "SELECT_PRODUCT":
      return {...state, ...action.payload};
    case "REMOVE_SELECTED_PRODUCT":
      return emptyProduct;
    default:
      return state;
  }
}

export const cartReducer = (state=emptyCart, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return {...state, cart: [...state.cart, action.payload]};
    // case "REMOVE_SELECTED_PRODUCT":
    //   return emptyProduct;
    default:
      return state;
  }
}

export const tempCartReducer = (state=tempCartForDisplay, action) => {
  switch(action.type) {
    case "ADD_TO_CART_DISPLAY":
      return {...state, tempCart: [...state.tempCart, action.payload]};
    // case "REMOVE_SELECTED_PRODUCT":
    //   return emptyProduct;
    default:
      return state;
  }
}

