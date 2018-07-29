import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import ReviewsIndexContainer from '../review/review_index_container';
import ReviewFormContainer from '../review/review_form_container';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
  
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentDidMount() {

    this.props.fetchProduct(this.props.match.params.product_id);
     $(document).scrollTop(0);
     this.props.clearErrors();
  }



  handleQuant(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const cartItem = {
      product_id: this.props.product.id,
      quantity: this.state.value,
      product_img: this.props.product.img_url,
      // user_id: this.props.userId
     };
    this.props.createCartItem(cartItem).then(() =>
    this.props.history.push('/cart'));
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {

    if(typeof this.props.product === 'undefined') {
      return (<div>Hello</div>);
    } else {
    
      return (
    <main className="detail-main">
        <div className="listing-body">
          <nav className="show-nav">
            <img className="profile-pic" src={this.props.product.profile_pic} alt=""/>
            <a href="#" className="nav-user">{this.props.product.username}</a>
          </nav>
          <div className="product-show">
            <div className="leftside-show">
              <div className="image"><img className="leftshow-img" src={this.props.product.img_url} alt=""/></div>
              <div className="product-description"> 
                <h2>Description</h2>
                <span className="description">{this.props.product.description}</span>
              </div>
            </div>
          
            <div className="rightside-show">
                <h1>{this.props.product.title}</h1>
              <div>
                <div>
                  <form onSubmit={this.handleSubmit} className="shopping-cart-form">
                  <div className="product-cost">
                    ${this.props.product.price}
                  </div>
                    <div>
                      <label className="cart-quantity">Quantity:
                        <input className="quantity-field" onChange={this.handleQuant.bind(this)} type="number" min="1" max="15" step="1" value={this.state.value}/>
                      </label>
                    </div>
                      <input type="submit" className="cart-button" value="Add to Cart"/>
                      {this.renderErrors()}
                  </form>
                  </div>
              </div>
          </div>
          </div>
            <div className="review-container">
              <ReviewFormContainer/>
              <br/>
              <br/>
              <ReviewsIndexContainer/>
            </div>
        </div>
    </main>
      );
    }
  }
}



export default ProductDetail;