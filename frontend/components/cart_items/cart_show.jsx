import React from 'react';
import CartItem from './cart_item';
import {Link} from 'react-router-dom';

class CartShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total: 0
    };

    this.checkOut = this.checkOut.bind(this);
  }

  componentDidMount() {
   
    this.props.fetchCartItems();
   

  }

  checkOut() {
    this.props.deleteCartItems(this.props.cartItemIds);
    // this.props.history.push('/checkout');
  }
  
  render() {
    let totalSum = 0;
    this.props.cartItems.forEach(cartItem => {
      totalSum += (cartItem.price * cartItem.quantity);
    });
    let message = this.props.cartItems.length >= 1 ? `$${totalSum.toFixed(2)} is your total` : "There is nothing in your cart!";
    const total = this.props.cartItems.length != 1 ? `${this.props.cartItems.length} items in your cart` :
    "1 item in your cart";
    let checkout;

      if (this.props.cartItems.length >= 1) {
        checkout = <button className="checkout-button" onClick={this.checkOut}>Checkout</button>;
      } else {
        checkout = null;
      }
    return (
      <main className="main-cart">
        <div className="cartItems-box">
          <div className="header-box">
          <header className="cart-header">
          <h1 className="total-header">{total}</h1>
          </header>
          <div className="keep-shoppingbox">
            <Link to='/'><h2 className="header-button">Keep Shopping</h2></Link>
          </div>
          </div>
          <div className="main-cart-area">
            <div className='cartItems-list'>
            {this.props.cartItems.map(cartItem => {
              return <CartItem cartItem={cartItem} cartItems={this.props.cartItems} key={cartItem.id}
              deleteCartItem={this.props.deleteCartItem} updateCartItem={this.props.updateCartItem}
              clearErrors={this.props.clearErrors}/>;
            })}
            </div>
            <div className="checkout">
              <div className="grandTotal">
                <h1>{message}</h1>
              </div>
              <div>
                {checkout}
              </div>
          </div>
        </div>
        </div>
      </main>
    );
  }
 }


export default CartShow;





