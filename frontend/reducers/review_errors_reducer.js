import {RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};


