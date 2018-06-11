import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";


export const receiveCategory = (category) => {
  return {
    type: RECEIVE_CATEGORY, 
    category
  };
};




export const fetchCategory = (id) => {
  return dispatch => {
    return APIUtil.fetchCategory(id).then(category => {
      return dispatch(receiveCategory(category));
    });
  };
};