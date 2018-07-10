import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT } from "../actions/product_actions";
import {merge} from "lodash";
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from "../actions/review_actions";

const productsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      return merge({}, state, {[action.product.id]: action.product});
     case RECEIVE_REVIEWS:
      let newerState = merge({}, state);
      newerState[action.reviews] = action.reviews;
      return newerState;
    case RECEIVE_REVIEW:
      let nextState = merge({}, state);
      nextState[action.review.product_id].reviews.push(action.review);
      return nextState;
    case REMOVE_PRODUCT:
      let newState = merge({}, state);
      delete newState[action.productId];
      return newState;
      default:
      return state;
  }
  
};

export default productsReducer;