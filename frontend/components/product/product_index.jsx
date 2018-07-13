import React from 'react';
import ProductIndexItem from "./product_index_item";


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchProducts();
  }

  
  render() {
    
    return (
      <div className="list-body">
    
          <div className="splash-page">
            <div className="splash-left">
              
            </div>
            <div className="splash-right">
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
           <div className="index-header">
             <h2>Popular Items</h2>
            </div>
        <div className="list-box">
            <ul className="items-list">
            <li className="index-items">
            {this.props.products.map(product => <ProductIndexItem product={product} key={product.id}/>
            )}
            </li>
          </ul>
        </div>
      </div>
    
    );
  }
}


export default ProductIndex;


