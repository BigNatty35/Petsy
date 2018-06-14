import React from 'react';
import ProductIndexItem from "./product_index_item";


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchProducts();
  }

  
  render() {
    
    return (
      <div className="list-body">
        <div className="list-box">
        <ul className="items-list">
        <li className="index-items">
        {this.props.products.map(product => <ProductIndexItem product={product} key={product.id}/>
        )}
        </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default ProductIndex;


