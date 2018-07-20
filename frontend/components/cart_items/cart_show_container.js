import { connect } from 'react-redux';
import CartShow from './cart_show';
import {getFilteredItems} from '../../reducers/selectors';
import { fetchCartItems, deleteCartItem, updateCartItem} from '../../actions/cart_actions';


const msp = (state, ownProps) => {
  return {
    cartItems: Object.values(state.entities.cartItems)
  };
};

// const currentProduct = state.entities.products[ownProps.match.params.product_id];

const mdp = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: id => dispatch(deleteCartItem(id)),
    updateCartItem: (item) => dispatch(updateCartItem(item))

  };
};



export default connect(msp, mdp)(CartShow);