import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/product_actions';
import ProductIndex from './product_index';
import {fetchCartItems} from '../../actions/cart_actions'
const msp = state => {

  return {
    products: Object.values(state.entities.products)
  };
};


const mdp = dispatch => {
  return {
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCartItems: () => dispatch(fetchCartItems())
  };
};

export default connect(msp, mdp)(ProductIndex);