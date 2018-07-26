import React from 'react';
import { Link } from 'react-router-dom';

export const ProductIndexItem = ({product}) => {
  return (
    <div className="list-item">
        <div className="index-img">
        <Link to={`/product/${product.id}`}><img className="indexItem-img"src={product.img_url} alt=""/></Link>
        <div className="item-info">
        <span className="index-title">{product.title}</span>
        <span className="index-price">${product.price}</span>
        </div>
        </div>
    </div>
  );
};


export default ProductIndexItem;
