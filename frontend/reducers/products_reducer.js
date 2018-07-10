import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from "../actions/product_actions";
import {merge} from "lodash";
import { RECEIVE_REVIEWS } from "../actions/review_actions";

const productsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      return merge({}, state, {[action.product.id]: action.product});
     case RECEIVE_REVIEWS:
      let newerState = merge({}, state);
      newerState[action.reviews] = action.reviews;
      debugger
      return newerState;
    case REMOVE_PRODUCT:
      let newState = merge({}, state);
      delete newState[action.productId];
      return newState;
      default:
      return state;
  }
  
};

export default productsReducer;