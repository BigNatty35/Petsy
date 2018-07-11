import React from 'react';
import {Review} from './review';
import ReviewForm from './review_form';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <div className="review-box">
          <ReviewForm product={this.props.product} createReview={this.props.createReview} userId={this.props.userId}
          username={this.props.username} />
        <ul>
          <li>
            {this.props.product.reviews.map(review => 
            <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>)}
          </li>
        </ul>
      </div>
    );
  }

}

export default ReviewsIndex;