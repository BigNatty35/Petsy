import {fetchReviews, deleteReview, createReview} from '../../actions/review_actions';
import {connect} from 'react-redux';
import ReviewsIndex from './reviews_index';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {

  return {
    product: state.entities.products[ownProps.match.params.product_id],
    userId: state.session.id
  };
};


const mdp = dispatch => {
  return {
    fetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
    deleteReview: id => dispatch(deleteReview(id)),
    createReview: review => dispatch(createReview(review))
  };
};


export default withRouter(connect(msp, mdp)(ReviewsIndex));