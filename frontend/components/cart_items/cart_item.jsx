import React from 'react';
// import { deleteCartItem } from '../../util/cart_item_util';


export const CartItem = ({cartItem, deleteCartItem}) => {
  return (
    <div className="cartItem-info">
      <div className="item-box">
        <div>
          {cartItem.product_name}
        </div>
        <div>
          {cartItem.quantity}
        </div>
        <div>
        {cartItem.price}
        </div>
          <div className="img-box">
            <div className="cart-image">
              <img src={cartItem.product_img} alt=""/>
            <button className="remove-item"onClick={() => deleteCartItem(cartItem.id)}>Remove Item</button>
            </div>
          </div>
      </div>
    </div>
  );
};



const total = items => {
  return 
}