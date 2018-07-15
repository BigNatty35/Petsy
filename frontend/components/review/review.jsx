import React from 'react';

export const Review = ({review, deleteReview}) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = mm + '/' + dd + '/' + yyyy;
  return (
   

    <div className="singlereview-box">
      <div className="leftside-boxreview">
      {review.author_name} 
      </div>
      
      <div className="rightside-boxreview">
        <div>
        rating: {review.rating}
        date: {today}
        </div>
        <div className="review-body">
        {review.body}
        </div>
      </div>
      <br/>
      <button className="review-delete" onClick={() => deleteReview(review.id)}>delete</button>
    </div>
  );
};