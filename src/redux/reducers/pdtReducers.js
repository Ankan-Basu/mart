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

const cartForDisplay = {
  tempCart: [emptyProduct]
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
    
    case "DEL_FROM_CART":
      // console.log( state.cart);
      let newTempCart = state.cart.filter((pdt) => {
        return (pdt.id !== action.payload)
      })
      return {...state, cart: newTempCart};

    case "CHANGE_CART":
      let newTempCart2 = state.cart.filter((pdt) => {
        if (pdt.id === action.payload.id) {
          pdt.quantity = action.payload.quantity;
        }
        console.log(pdt);
        return pdt;
      })
      return {...state, cart: newTempCart2};


    default:
      return state;
  }
}

export const displayCartReducer = (state=cartForDisplay, action) => {
  switch(action.type) {
    case "DISPLAY_CART":
      return {...state, tempCart: [...state.tempCart, action.payload]};
    case "CLEAR_DISPLAY_CART":
      return cartForDisplay;
    default:
      return state;
  }
}

