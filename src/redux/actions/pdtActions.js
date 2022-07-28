export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products
  }
}

export const resetProducts = () => {
  return {
    type: "RESET_PRODUCTS",
  }
}

export const selectProduct = (product) => {
  return {
    type: "SELECT_PRODUCT",
    payload: product
  }
}

export const removeSlectedProduct = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCT",
  }
}

export const addToCart = (id, quantity=1) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id, quantity
    }
  }
}

export const deleteFromCart = (id) => {
  return {
    type: "DEL_FROM_CART",
    payload: id
  }
}

export const changeQnInCart = (id, quantity) => {
  return {
    type: "CHANGE_CART",
    payload: {
      id, quantity
    }
  }
}


export const displayInCart = (product) => {
  return {
    type: "DISPLAY_CART",
    payload: product
  }
}

export const clearDisplayInCart = () => {
  return {
    type: "CLEAR_DISPLAY_CART"
  }
}

