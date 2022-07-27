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

export const addToCartForDisplay = (product) => {
  return {
    type: "ADD_TO_CART_DISPLAY",
    payload: product
  }
}