import { connect } from 'react-redux';
import CartShow from './cart_show';
import {getFilteredItems} from '../../reducers/selectors';
import { fetchCartItems, deleteCartItem} from '../../actions/cart_actions';




const msp = (state, ownProps) => {
  return {
    cartItems: Object.values(state.entities.cartItems)
  };
};



const mdp = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: id => dispatch(deleteCartItem(id))
  };
};



export default connect(msp, mdp)(CartShow);