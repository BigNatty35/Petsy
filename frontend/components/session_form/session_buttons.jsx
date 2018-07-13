
import React from 'react';
import { Link} from 'react-router-dom';


const SessionButtons = ({ fetchCartItems, currentUser, logout, login, signup, openModal, history }) => {
  

  const goHome = () => {
    return (
      history.push('/')
    );
  };

  const loggedOutButtons = () => (
    <hgroup className="right-header">
      <div className="right-headerbox">
        <div className="cart-sec">
        <button className="register" onClick={() => openModal('Register')}>Register</button>

        </div>
        <div className="cart-sec">
        <button className="header-button" onClick={() => openModal('Sign In')}>Sign in</button>
        </div>
        <div className="cart-sec">
          <Link to='/cart'><i className="fas fa-shopping-cart fa-lg"></i></Link>
          <span className="cart-text">Cart</span>
        </div>
      </div>
    </hgroup>
  );
  const loggedInButtons = () => (
    <hgroup className="right-header">
      <div className="right-headerbox">
        <div className='cart-sec'>
          <Link to='/'><i className="fas fa-home fa-lg"></i></Link>
          <span className="home-text">Home</span>
        </div>
        <div className="cart-sec">
          <button className="header-button" onClick={() => {logout(); goHome();}}>Log Out</button>
        </div>
        <div className="cart-sec">
          <Link to='/cart'><i className="fas fa-shopping-cart fa-lg"></i></Link>
          <span className="cart-text">Cart</span>
        </div>
      </div>
    </hgroup>
    
  );

  return currentUser ? loggedInButtons() : loggedOutButtons();
};


export default SessionButtons;

