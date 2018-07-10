import {fetchReviews, deleteReview, createReview} from '../../actions/review_actions';
import   {connect} from 'react-redux';
import ReviewsIndex from './reviews_index';
const msp = (state) => {
  return {
    reviews: Object.values(state.entities.reviews)
  };
};


const mdp = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: id => dispatch(deleteReview(id)),
    createReview: review => dispatch(createReview(review))
  };
};


export default connect(msp, mdp)(ReviewsIndex);