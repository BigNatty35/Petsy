import * as ReviewUtil from "../util/review_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};


export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    review: review
  };
};


export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};


export const receiveErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

// export const createReview = (review) => {
//   return dispatch => {
//     return ReviewUtil.createReview(review).then(newReview => {
//       return dispatch(receiveReview(newReview), err => {
//         return dispatch(receiveErrors(err.responseJSON));
//       });
//     });
//   };
// };


export const createReview = review => dispatch => (
  ReviewUtil.createReview(review).then(newReview => {
    return dispatch(receiveReview(newReview));
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);




export const fetchReviews = (productId) => {
  return dispatch => {
    return ReviewUtil.fetchReviews(productId).then(reviews => {
      return dispatch(receiveReviews(reviews));
    });
  };
};

export const deleteReview = id => {
  return dispatch => {
    return ReviewUtil.deleteReview(id).then(reviewId => {
      return dispatch(removeReview(reviewId));
    });
  };
};