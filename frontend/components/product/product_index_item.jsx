import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndexItem = ({product}) => {
  return (
    <ul className="list-item">
      <li>
        <div className="index-img">
        <Link to={`/product/${product.id}`}><img src={product.img_url} alt=""/></Link>
        </div>
        <span>{product.price}</span>
      </li>
    </ul>
  );
};


export default ProductIndexItem;
