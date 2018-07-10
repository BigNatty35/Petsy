import React from 'react';

export const Review = ({review}) => {
  return (
    <div>
      {review.username}
      {review.rating}
      {review.body}
      {/* <button onClick={deleteReview(review.id)}>Delete</button> */}
    </div>
  );
};