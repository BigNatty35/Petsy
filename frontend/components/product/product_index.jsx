import React from 'react';
import ProductIndexItem from "./product_index_item";


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }


  componentDidMount() {
    this.props.fetchProducts().then (() => 
      this.setState({products: this.shuffle(this.props.products).slice(0,6)})
    );
  }

  
  shuffle(array) {
    let length = array.length, current, idx;
    while(length) {
      idx = Math.floor(Math.random() * length--);
      current = array[length];
      array[length] = array[idx];
      array[idx] = current;
    }
    return array;
  }

  render() {
    
    return (
      <div className="list-body">
    
          <div className="splash-page">
            <div className="splash-left">
              <div className="splashleft-pic"></div>
              <div className="splashleft-words">
                <div className="left-words">
                  <span>Nothing but pure regret awaits you.</span>
                </div>
                <div className="look-inside">
                  <span>Take a look inside <i className="right"></i> </span>
                </div>
              </div>
            </div>
            <div className="splash-right">
              <div className="splash-top">
              
                <div className="Woohoo-box">
                  <span>Woohoo! These regrets ship for free.</span>
                </div>
              
              </div>
              <div className="splash-bottom">
                <span>Shop for your next regret here</span>
              </div>
            </div>
          </div>
          

            <ul className="check-list">
              <li>
                <div>
                  <i className="fas fa-check"></i>
                  <p className="checklist-title">Unique everything</p>
                </div>
              <p className="paragraph">We have millions of one-of-a-kind items, 
              so you can find whatever you need (or really, really want).
              </p>
              </li>
              
              <li>
                <div>
                  <i className="fas fa-check"></i>
                  <p className="checklist-title">Independent sellers</p>
                </div>
                <p className="paragraph">
                  Buy directly from someone who completely regrets their purchase, and is willing to pass that feeling along.
                </p>
              </li>

              <li>
                <div>
                  <i className="fas fa-check"></i>
                  <p className="checklist-title">Secure shopping</p>
                </div>
                <p className="paragraph">
                We use best-in-class technology to protect you from getting scammed.
                </p>
              </li>
            </ul>

         
           <div className="index-header">
             <h2>Popular Items</h2>
            </div>
        <div className="list-box">
            <ul className="items-list">
            <li className="index-items">
            {this.state.products.map(product => <ProductIndexItem product={product} key={product.id}/>
            )}
            </li>
          </ul>
        </div>
      </div>
    
    );
  }
}


export default ProductIndex;


