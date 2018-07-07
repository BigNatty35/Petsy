import React from 'react';
// import { deleteCartItem } from '../../util/cart_item_util';


class CartItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      quantity: this.props.cartItem.quantity
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const item = {
      product_id: this.props.cartItem.product_id,
      quantity: this.state.quantity,
      product_img: this.props.cartItem.img_url,
      price: this.props.cartItem.price,
      product_name: this.props.cartItem.product_name,
      user_id: this.props.cartItem.userId,
      id: this.props.cartItem.id
    };
    this.props.updateCartItem(item);
  }

  handleQuant(e) {
    this.setState({quantity: e.target.value});
  }

  render() {
  
    return (
    <div className="cartItem-info">
      <div className="item-box">
        <div>
          {this.props.cartItem.product_name}
        </div>
        <div>
          {this.props.cartItem.quantity}
        </div>
        <div>
        {(this.props.cartItem.quantity * this.props.cartItem.price).toFixed(2)} is your total
        @({this.props.cartItem.price}(each))
        </div>
          <div className="img-box">
            <div className="cart-image">
              <img src={this.props.cartItem.product_img} alt=""/>
            <button className="remove-item"onClick={() => this.props.deleteCartItem(this.props.cartItem.id)}>Remove Item</button>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <label className="cart-quantity">Quantity:
            <input className="quantity-field" onChange={this.handleQuant.bind(this)} type="number" min="1" step="1" value={this.state.quantity} />
            <input  type="submit" value="Update" />
            </label>
            </form>
            </div>
          </div>
      </div>
    </div>
  );
  }
}

export default CartItem;
// update the quantity of a specific item
// this should update the quantity of the cart item