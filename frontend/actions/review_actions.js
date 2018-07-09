import * as ReviewUtil from "../util/review_util";

export const createReview = (review) => {
  return dispatch => {
    return ReviewUtil.createReview(review).then()
  }
}