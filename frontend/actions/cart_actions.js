import * as CartUtil from "../util/cart_item_util";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCartItems = (cartItems) => {
  return {
    type: RECEIVE_CART_ITEMS,
    cartItems
  };
};
export const updateCart = (item) => {
  return {
    type: RECEIVE_CART_ITEM,
    item
  };
};


export const receiveCartItem = (item) => {
  return {
    type: RECEIVE_CART_ITEM,
    item
  };
};

export const removeCartItem = (item) => {
  return {
    type: REMOVE_CART_ITEM,
    itemId: item.id
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors
});

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchCartItems = () => {
  return dispatch => {
    return CartUtil.fetchCartItems().then(cartItems => {
      return dispatch(receiveCartItems(cartItems));
    });
  };
};
export const fetchCartItem = (id) => {
  return dispatch => {
    return CartUtil.fetchCartItem(id).then(cartItems => {
      return dispatch(receiveCartItems(cartItems));
    });
  };
};


// export const createCartItem = (item) => {
//   return dispatch => {
//     return CartUtil.createCartItem(item).then(cartItem => {
//       return dispatch(receiveCartItem(cartItem));
//     });
//   };
// };

export const createCartItem = item => dispatch => (
  CartUtil.createCartItem(item).then(cartItem => {

    return dispatch(receiveCartItem(cartItem));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteCartItem = id => {
  return dispatch => {
    return CartUtil.deleteCartItem(id).then(itemId => {
      return dispatch(removeCartItem(itemId));
    });
  };
};

export const updateCartItem = item => {
  return dispatch => {
    return CartUtil.updateCartItem(item).then(item => {
      return dispatch(updateCart(item));
    });
  };
};

