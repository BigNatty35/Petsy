import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT, RECEIVE_SEARCH_PRODUCTS } from "../actions/product_actions";
import {merge} from "lodash";
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const productsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
    
      return action.products;
    case RECEIVE_PRODUCT:
      return merge({}, state, {[action.product.id]: action.product});
     case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      let nextState = merge({}, state);
      nextState[action.review.product_id].reviews.push(action.review);
      return nextState;
     case REMOVE_REVIEW:
      let newestState = merge({}, state);
      // goes through the current products reviews and filters the one that
      // matches the review id that is to be deleted
      let review = newestState[action.review.product_id].reviews.filter(el => 
      el.id === action.review.id)[0];
      // find the index of the review object in the reveiws array
      let idx = newestState[action.review.product_id].reviews.indexOf(review);
      // splice the array, removing the appropriate review
      newestState[action.review.product_id].reviews.splice(idx, 1);
      return newestState;
    case REMOVE_PRODUCT:
      let newState = merge({}, state);
      delete newState[action.productId];
      return newState;
      case RECEIVE_SEARCH_PRODUCTS:
        return action.products;
      default:
      return state;
  }
  
};

export default productsReducer;