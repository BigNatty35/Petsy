import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <button onClick={() => this.props.history.push(`/categories/entertainment`)}>
            Entertainment
          </button>
          <button
            onClick={() => this.props.history.push(`/categories/pets`)}
          >
            Pets
          </button>
          <button onClick={() => this.props.history.push(`/categories/food`)}>
            Food
          </button>
          <button onClick={() => this.props.history.push(`/categories/clothes`)}>
            Clothes
          </button>
          <button onClick={() => this.props.history.push(`/categories/jewelry`)}>
            Jewelry
          </button>
          <button onClick={() => this.props.history.push(`/categories/vehicles`)}>
            Vehicles
          </button>
          <button onClick={() => this.props.history.push(`/categories/household`)}>
            Household
          </button>
          <button onClick={() => this.props.history.push(`/categories/electronics`)}>
            Electronics
          </button>
        </ul>
      </nav>
    );
  }
}
  
  



export default withRouter(Navbar);