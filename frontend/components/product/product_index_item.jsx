import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndexItem = ({product}) => {
  return (
    <div className="list-item">
      <li>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
        <span>{product.price}</span>
      </li>
    </div>
  );
};


export default ProductIndexItem;