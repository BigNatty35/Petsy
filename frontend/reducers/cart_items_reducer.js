import { 
  RECEIVE_CART_ITEMS, 
  RECEIVE_CART_ITEM, 
  REMOVE_CART_ITEM,
  CLEAR_CART
} from '../actions/cart_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

import {merge} from 'lodash';

const cartItemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return merge({}, state, action.cartItems);
    case RECEIVE_CART_ITEM:
      return merge({}, state, {[action.item.id]: action.item});
    case REMOVE_CART_ITEM:
    const newState = merge({}, state);
    delete newState[action.itemId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    case CLEAR_CART:
      return action.empty;
    default:
    return state;
  }
};

export default cartItemsReducer;