import React from 'react';
import {Review} from './review';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="review-box">
        <ul>
          <h1 className="reviews-h1">Reviews</h1>
          <li>
            {this.props.product.reviews.map(review => 
            <Review review={review} key={review.id} deleteReview={this.props.deleteReview}
            userId={this.props.userId}/>)}
          </li>
        </ul>
      </div>
    );
  }

}

export default ReviewsIndex;