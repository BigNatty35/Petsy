import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/product_actions';
import ProductIndex from './product_index';
import {fetchCartItems} from '../../actions/cart_actions';
import {clearErrors} from '../../actions/session_actions';


const msp = state => {

  return {
    products: Object.values(state.entities.products)
  };
};


const mdp = dispatch => {
  return {
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCartItems: () => dispatch(fetchCartItems()),
  clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(ProductIndex);