import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndexItem = ({product}) => {
  return (
    <ul className="list-item">
      <li>
        <div className="index-img">
        <Link to={`/product/${product.id}`}><img className="indexItem-img"src={product.img_url} alt=""/></Link>
        <div className="item-info">
        <span>{product.title}</span>
        <span>${product.price}</span>
        </div>
        </div>
      </li>
    </ul>
  );
};


export default ProductIndexItem;
