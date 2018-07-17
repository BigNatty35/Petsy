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
              <div className="splashleft-words">
                <div className="left-words">
                <span>Nothing but pure regret awaits you.</span>
                </div>
                <div className="look-inside">
                <span>Take a look inside <i className="right"></i> </span>
                </div>
              </div>
              <div className="splashleft-pic">
                <img src="https://s3-us-west-1.amazonaws.com/productpics35/regretman2.jpeg"/>
              </div>
            </div>
            <div className="splash-right">
              <div className="splash-top">
              <img src={"https://s3-us-west-1.amazonaws.com/productpics35/desertjunk.jpeg"}/>
              <span>Woohoo! These regrets ship for free.</span>
              
              </div>
              <div className="splash-bottom">
                <span>Shop for your next regret here</span>
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


