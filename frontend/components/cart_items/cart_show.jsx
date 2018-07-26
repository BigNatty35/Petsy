import React from 'react';
import CartItem from './cart_item';
import {Link} from 'react-router-dom';

class CartShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total: 0
    };

 
  }

  componentDidMount() {
   
    this.props.fetchCartItems();
   

  }

  
  render() {
    let totalSum = 0;
    this.props.cartItems.forEach(cartItem => {
      totalSum += (cartItem.price * cartItem.quantity);
    });
    const total = this.props.cartItems.length != 1 ? `${this.props.cartItems.length} items in your cart` :
    "1 item in your cart";
    return (
      <main>
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
                <h1>${totalSum.toFixed(2)} is your total </h1>
              </div>
          </div>
        </div>
        </div>
      </main>
    );
  }
 }


export default CartShow;





