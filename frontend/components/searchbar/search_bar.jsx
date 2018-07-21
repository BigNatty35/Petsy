import React from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom'
import {fetchProduct} from '../../actions/product_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item: '' 
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ item: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchProduct()
  }

  render() {
    return (
      <form className="searchform" onSubmit={this.onFormSubmit} >
      <div className="searchbox">
        <input
          placeholder="Search for items"
          className="search-field"
          value={this.state.item}
          onChange={this.onInputChange} />

        <span className="outer-search">
          <button type='submit' className="search-button">Search</button>
        </span>
        </div>
      </form>
    );
  }
}


const msp = (state, ownProps) => {
  return {
    products: Object.values(state.entities.products)
  };
};


const mdp = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};


export default withRouter(connect(msp, mdp)(SearchBar));