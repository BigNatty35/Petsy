import React from 'react';


export const CartItem = ({cartItem}) => {
  return (
    <div className="cartItem-info">
      <div>
        {cartItem.product_name}
        {cartItem.quantity}
        {cartItem.price}
          <div className="cart-image">
            <img src={cartItem.product_img} alt=""/>
          <button>Remove Item</button>
          </div>
      </div>
    </div>
  );
};



