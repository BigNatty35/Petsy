import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { withRouter } from 'react-router-dom';
import {ProductIndexItem} from '../product/product_index_item';



class CategoryShowContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchProducts();
  }




  render() {
    const filtered = this.props.products.filter(el =>
      el.category_name === this.props.category_id);
    return (
      <main>
      <div className="category-box">
        <div>
          {filtered.map(product =>
            <ProductIndexItem product={product} key={product.id} />)}
        </div>
      </div>
      </main>
    );
  }
}








const msp = (state, ownProps) => {
 
  return {
    category_id: ownProps.match.params.category_id,
    products: Object.values(state.entities.products)
  };
};



const mdp = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};


export default withRouter(connect(msp,mdp)(CategoryShowContainer));