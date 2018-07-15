import React from 'react';

export const Review = ({review, deleteReview}) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = mm + '/' + dd + '/' + yyyy;

  let one = <span className="stars">&#9733;</span>;
  let two = <span className="stars">&#9733;&#9733;</span>;
  let three = <span className="stars">&#9733;&#9733;&#9733;</span>;
  let four = <span className="stars">&#9733;&#9733;&#9733;&#9733;</span>;
  let five = <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>;
  let stars;

  if (review.rating === 1) {
    stars = one;
  } else if (review.rating === 2) {
    stars = two;
  } else if (review.rating === 3) {
    stars = three;
  } else if (review.rating === 4) {
    stars = four;
  } else {
    stars = five;
  }


  return (
   
    <div>
    <div className="singlereview-box">
      <div className="leftside-boxreview">
      {review.author_name} 
      </div>
      
      <div className="rightside-boxreview">
        <div className="review-top">
          <div>
              {stars}
          </div>
          <div>
          {today}
          </div>
        </div>
        <div className="review-body">
        {review.body}
        </div>
      <button className="review-delete" onClick={() => deleteReview(review.id)}>delete</button>
      </div>
      <br/>
    </div>
    </div>

  );
};