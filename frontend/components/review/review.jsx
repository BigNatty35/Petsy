import React from 'react';

export const Review = ({review, deleteReview}) => {

  return (
    <div>
      {review.author_name} rating: {review.rating}
      <br/>
      {review.body}
      <br/>
      <button className="review-delete" onClick={() => deleteReview(review.id)}>delete</button>
    </div>
  );
};