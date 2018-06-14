import ProductDetail from './product_detail';
import {connect} from 'react-redux';
import {fetchProduct} from '../../actions/product_actions';
import {createCartItem} from '../../actions/cart_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  const currentProduct = state.entities.products[ownProps.match.params.product_id];
  return {
    product: currentProduct,
    // user: state.entities.users[currentProduct.user_id]
    userId: state.session.id,
    errors: state.errors.cart
  };
};



const mdp = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    createCartItem: item => dispatch(createCartItem(item))
  };
};




export default withRouter(connect(msp, mdp)(ProductDetail));