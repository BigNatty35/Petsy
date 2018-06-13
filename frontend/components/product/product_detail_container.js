import ProductDetail from './product_detail';
import {connect} from 'react-redux';
import {fetchProduct} from '../../actions/product_actions';



const msp = (state, ownProps) => {
  const currentProduct = state.entities.products[ownProps.match.params.product_id];
  return {
    product: currentProduct
    // user: state.entities.users[currentProduct.user_id]
  };
};



const mdp = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))

  };
};




export default connect(msp, mdp)(ProductDetail);