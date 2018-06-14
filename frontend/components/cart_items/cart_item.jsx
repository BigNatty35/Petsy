import React from 'react';
// import { deleteCartItem } from '../../util/cart_item_util';


export const CartItem = ({cartItem, deleteCartItem}) => {
  return (
    <div className="cartItem-info">
      <div>
        {cartItem.product_name}
        {cartItem.quantity}
        {cartItem.price}
          <div className="cart-image">
            <img src={cartItem.product_img} alt=""/>
          <button onClick={() => deleteCartItem(cartItem.id)}>Remove Item</button>
          </div>
      </div>
    </div>
  );
};



