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
      <div className="list-box">
      <div></div>
      <div><ul className="items-list">
        {this.props.products.map(product => <ProductIndexItem product={product} key={product.id}/>
        )}
      </ul></div>
      </div>
    );
  }
}

export default ProductIndex;


