import React from 'react';

export const Review = ({review, deleteReview}) => {

  return (
    <div>
      {review.author_name} RATING: {review.rating}
      <br/>
      {review.body}
      <br/>
      <button className="review-delete" onClick={() => deleteReview(review.id)}>Delete</button>
    </div>
  );
};