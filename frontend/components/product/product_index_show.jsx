import React from 'react';
import {fetchProducts} from '../../actions/product_actions';
import {ProductIndexItem} from '../product/product_index_item';
import {connect} from 'react-redux';

class ProductIndexShowContainer extends React.Component {
  constructor(props) {
    super(props);
    
    
   }


   componentDidMount() {
     this.props.fetchProducts();
   }


   render() {
     return (
       <main>
         <div className="list-box">
           <ul className="items-list">
             <li className="index-items">
               {this.props.products.map(product => <ProductIndexItem product={product} key={product.id} />
               )}
             </li>
           </ul>
         </div>
       </main>
     );
   }


}








const msp = state => {
  return {
    products: Object.values(state.entities.products)
  };
};


const mdp = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};


export default connect(msp, mdp)(ProductIndexShowContainer);

