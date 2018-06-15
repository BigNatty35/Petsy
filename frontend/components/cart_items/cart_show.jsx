import React from 'react';
import {CartItem} from './cart_item';


class CartShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total: 0
    }
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }


  calculateTotal() {
   const totals = this.props.cartItems.map(cartItem => {
      return cartItem.price * cartItem.quality
    });
   return totals;
  }

  updateTotal() {
    this.setState({total: this.calculateTotal()});
  }
  
  render() {
    
    return (
      <div className="cartItems-box">
        <div className="header-box">
        <header className="cart-header">
        <h1>{this.props.cartItems.length} item(s) in your cart</h1>
        
        </header>
        <div>
          <ul className='cartItems-list'>
          {this.props.cartItems.map(cartItem => {
            return <CartItem cartItem={cartItem} key={cartItem.id}
            deleteCartItem={this.props.deleteCartItem}/>;
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





