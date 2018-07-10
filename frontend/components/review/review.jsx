import React from 'react';

export const Review = ({review}) => {
  return (
    <div>
      {review.author_name} RATING: {review.rating}
      <br/>
      {review.body}
      <br/>
      <button>Delete</button>
    </div>
  );
};