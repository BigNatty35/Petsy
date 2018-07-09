import {RECEIVE_REVIEWS, REMOVE_REVIEW} from '../actions/review_actions';
import {merge} from 'lodash';


const reviewsReducer = (state = {}, action) => {
 switch(action.type) {
   case RECEIVE_REVIEWS:
    return action.reviews;
   case REMOVE_REVIEW:
    const newState = merge({}, state);
    delete newState[action.reviewId];
    return newState;
    default:
    return state;
 }
};

export default reviewsReducer;