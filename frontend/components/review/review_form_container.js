import {connect} from 'react-redux';
import {createReview, deleteReview } from '../../actions/review_actions';
import {withRouter} from 'react-router-dom';
import ReviewForm from './review_form';

const msp = (state, ownProps) => {
  
  return {
    product: state.entities.products[ownProps.match.params.product_id],
    userId: state.session.id,
    username: state.entities.users[state.session.id].username
    
  };
};



const mdp = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    deleteReview: id => dispatch(deleteReview(id))
  };
};


export default withRouter(connect(msp, mdp)(ReviewForm));