import React from 'react';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }
 
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.product_id);
  }



  handleQuant(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  render() {

    if(typeof this.props.product === 'undefined') {
      return (<div>Hello</div>);
    } else {

      console.log("bunny");
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
            
          </li>
        </ul>
        </div>
        <div className="rightside-show">
          <span>{this.props.product.price}</span>
          <label className="cart-quantity">Quantity:</label>
          <input onChange={this.handleQuant.bind(this)} id="quantity" type="number" min="1" step="1" value={this.state.value}/>
          <button className="cart-button">Add to cart</button>
        </div>
      </div>
    );
  }
}
}



export default ProductDetail;