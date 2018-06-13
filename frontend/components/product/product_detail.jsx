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

      return (
    <div className="listing-body">
      <nav className="show-nav">
         <a href="#" className="nav-user">{this.props.product.username}</a>
      </nav>
      <div className="product-show">
        <div className="leftside-show">
          <span className="image"><h1>PRODUCT IMAGE</h1></span>
          <div className="product-description"> 
            <h2>Description</h2>
            <span className="description">{this.props.product.description}</span>
          </div>
        </div>
      
        <div className="rightside-show">
            <h1>{this.props.product.title}</h1>
          <div>
            <div>
              <form action="" className="shopping-cart-form">
              <div className="product-cost">
                ${this.props.product.price}
              </div>
                <div>
                  <label className="cart-quantity">Quantity:
                    <input className="quantity-field" onChange={this.handleQuant.bind(this)} type="number" min="1" step="1" value={this.state.value}/>
                  </label>
                </div>
                  <input type="submit" className="cart-button" value="Add to Cart"/>
              </form>
              </div>
          </div>
       </div>
      </div>
    </div>
      );
    }
  }
}



export default ProductDetail;