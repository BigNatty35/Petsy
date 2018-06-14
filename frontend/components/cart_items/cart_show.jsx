import React from 'react';
import {CartItem} from './cart_item';


class CartShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchCartItems();
  }


  // componentWillReceiveProps(nextProps) {
  //   if (this.props.cartItems.length != nextProps.match.params.postId) {
  //     this.props.fetchPost(nextProps.match.params.postId);
  //   }
  // }

  render() {
    
    // if (typeof this.props.cartItems === 'undefined') {
    //   return (<div>Hello</div>);
    // } else {

    return (
      <div className="cartItems-box">
        <div>
          <ul>
          {this.props.cartItems.map(cartItem => {
            return <CartItem cartItem={cartItem} key={cartItem.id}
             deleteCartItem={this.props.deleteCartItem}/>;
          })}
          </ul>
        </div>
      </div>
    );
  }
 }
// }

export default CartShow;