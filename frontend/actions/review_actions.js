import * as ReviewUtil from "../util/review_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};

export const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    reviewId: review.id
  };
};


export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const createReview = (review) => {
  return dispatch => {
    return ReviewUtil.createReview(review).then(newReview => {
      return dispatch(receiveReview(newReview));
    });
  };
};

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