import { connect } from 'react-redux';
import CartShow from './cart_show';
import {getFilteredItems} from '../../reducers/selectors';
import {fetchCartItems} from '../../actions/cart_actions';

const msp = (state, ownProps) => {
  return {
    cartItems: getFilteredItems(state)
  };
};



const mdp = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems())
  };
};



export default connect(msp, mdp)(CartShow);