import React from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { withRouter } from 'react-router-dom';




class CategoryShowContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };


  }

  componentDidMount() {
    this.props.fetchProducts().then((products) => {
      this.setState({
        products: 
      })
    });
  }


}








const msp = (state, ownProps) => {
  const filtered = this.state.products.filter()
  return {
    category_id: ownProps.match.params.category_id
    products: 
  };
};



const mdp = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};
