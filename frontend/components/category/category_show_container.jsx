import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { withRouter, Link } from 'react-router-dom';
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
      <main className="category-main">
        <div className="list-box">
          <ul className="items-list">
            <li className="category-items">

              {filtered.map(product => 
                <div className="list-item" key={product.id}>
                  <div className="category-img">
                    <Link to={`/product/${product.id}`}><img className="categoryItem-img" src={product.img_url} alt="" /></Link>
                    <div className="item-info">
                      <span className="index-title">{product.title}</span>
                      <span className="index-price">${product.price}</span>
                    </div>
                  </div>
                </div>
              )}

                
            </li>
          </ul>
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