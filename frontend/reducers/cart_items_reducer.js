import { 
  RECEIVE_CART_ITEMS, 
  RECEIVE_CART_ITEM, 
  REMOVE_CART_ITEM 
} from '../actions/cart_actions';

import {merge} from 'lodash';

const cartItemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return merge({}, state, action.cartItems);
    case RECEIVE_CART_ITEM:
    // debugger
      return merge({}, state, {[action.cartItem.id]: action.cartItem});
    case REMOVE_CART_ITEM:
    const newState = merge({}, state);
    delete newState[action.itemId];
      return newState;
    default:
    return state;
  }
};

export default cartItemsReducer;