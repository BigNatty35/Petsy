import React from 'react';


export const CartItem = ({cartItem}) => {
  return (
    <div>
      <li>
        {cartItem.product_name}
        <br/>
        {cartItem.quantity}
        <br/>
        {cartItem.price}
      </li>
    </div>
  );
};



