import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from "../actions/product_actions";
import {merge} from "lodash";

const productsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      return merge({}, state, {[action.product.id]: action.product});
    case REMOVE_PRODUCT:
      const newState = merge({}, state);
      delete newState[action.productId];
      return newState;
      default:
      return state;
  }
  
};

export default productsReducer;