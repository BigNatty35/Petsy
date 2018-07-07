import React from 'react';
import CartItem from './cart_item';


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
    return (
      <div className="cartItems-box">
        <div className="header-box">
        <header className="cart-header">
        <h1>{this.props.cartItems.length} item(s) in your cart</h1>
        <h1>${totalSum.toFixed(2)} is your total </h1>
      
        
        </header>
        <div>
          <ul className='cartItems-list'>
          {this.props.cartItems.map(cartItem => {
            return <CartItem cartItem={cartItem} key={cartItem.id}
            deleteCartItem={this.props.deleteCartItem} updateCartItem={this.props.updateCartItem}/>;
          })}
          </ul>
            
          </div>
        </div>
      </div>
    );
  }
 }
// }

export default CartShow;





