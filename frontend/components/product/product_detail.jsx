import React from 'react';

class ProductDetail extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.product_id);
  }

  render() {
  
    return (
      <div>
      <div className="product-show">
        <ul className="product-list">
          <li>
            <span>{this.props.product.title}</span>
          </li>
          <li>
            <span>{this.props.product.description}</span>
          </li>
          <li>
            <span>{this.props.product.price}</span>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}



export default ProductDetail;