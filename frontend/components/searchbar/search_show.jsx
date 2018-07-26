import React from 'react';
import {connect} from 'react-redux';
import {ProductIndexItem} from '../product/product_index_item';

class SearchShowContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.searchItems.length === 0) {
      debugger
      return (
        <main>
          <div className="cant-find-box">
    
            <div>Item not found!</div> 
            
            <div className="cant-find"></div>
          </div>
        </main>
      );
    } else {

      return (
        <main>
          <div className="category-box">
            <div>
              {this.props.searchItems.map(product =>
                <ProductIndexItem product={product} key={product.id} />)}
            </div>
          </div>
        </main>
      );
    }
    }


}




const msp = state => {
  return {
    searchItems: Object.values(state.entities.products)
  };
};


export default connect(msp, null)(SearchShowContainer);