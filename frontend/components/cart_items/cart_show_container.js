import { connect } from 'react-redux';
import CartShow from './cart_show';
import {getFilteredItems} from '../../reducers/selectors';
import { fetchCartItems, deleteCartItem, updateCartItem, clearErrors, deleteCartItems} from '../../actions/cart_actions';
import {withRouter} from 'react-router-dom';


const msp = (state, ownProps) => {
  return {
    cartItems: Object.values(state.entities.cartItems),
    cartItemIds: Object.keys(state.entities.cartItems)
  };
};

// const currentProduct = state.entities.products[ownProps.match.params.product_id];

const mdp = dispatch => {
  return {
    fetchCartItems: () => dispatch(fetchCartItems()),
    deleteCartItem: id => dispatch(deleteCartItem(id)),
    updateCartItem: (item) => dispatch(updateCartItem(item)),
    clearErrors: () => dispatch(clearErrors()),
    deleteCartItems: (itemIds) => dispatch(deleteCartItems())
  };
};



export default withRouter(connect(msp, mdp)(CartShow));