import React from 'react';
import {CartItem} from './cart_item';
class CartShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchCartItems();
  }


  render() {
    
    return (
      <div className="cartItems-box">
        <div>
          <ul>
          {this.props.cartItems.map(cartItem => {
            return <CartItem cartItem={cartItem} key={cartItem.id}/>;
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CartShow;