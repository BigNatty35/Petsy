import { RECEIVE_CATEGORY } from "../actions/category_actions";
import {merge} from "lodash";



const categoryReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CATEGORY:
      return merge({}, state, {[action.category_name]: action.category.products});
    default:
    return state;
  }
};

export default categoryReducer;