import React from 'react';
import { Link } from 'react-router-dom';


class SessionButtons extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cartCount: 0
    };

  }


  
  render() {
    const goHome = () => {
      return (
        history.push('/')
      );
    };

    const loggedOutButtons = () => (

        <div className="right-headerbox">
          <div className="cart-sec">
            <button className="register" onClick={() => this.props.openModal('Register')}>Register</button>
          </div>
          <div className="cart-sec">
            <button className="header-button" onClick={() => this.props.openModal('Sign In')}>Sign in</button>
          </div>
        <div className="cart-line"></div>
          <div className="cart-sec">
            <Link to='/cart'><i className="fas fa-shopping-cart fa-lg"></i>
              <br />
              <span className="cart-text">Cart</span>
            </Link>
          </div>
        </div>
    );
    const loggedInButtons = () => (
      <div className="right-headerbox">
      
          <div className='cart-sec'>
            <Link to='/'><i className="fas fa-home fa-lg"></i>
              <br />
              <span className="home-text">Home</span>
            </Link>
          </div>
          <div className="cart-sec">
            <button className="header-button" onClick={() => { this.props.logout(); goHome(); }}>Log Out</button>
          </div>
          <div className="cart-line"></div>
          <div className="cart-sec">
            <Link to='/cart'><i className="fas fa-shopping-cart fa-lg"></i>
              <br />
              <span className="cart-text">Cart</span>
              <span id="itemCount"></span>
            </Link>
          </div>
        </div>
    );

    return (
      <hgroup className="right-header">
        {this.props.currentUser ? loggedInButtons() : loggedOutButtons()}
      </hgroup>
    );
  } 
}


export default SessionButtons;

