
import React from 'react';
import { Link } from 'react-router-dom';


const SessionButtons = ({ currentUser, logout, login, signup, openModal }) => {
  
  const loggedOutButtons = () => (
    <nav className="login-signup">
      <button className="register" onClick={() => openModal('Register')}>Register</button>
      <button className="login" onClick={() => openModal('Sign In')}>Sign in</button>
      <div className="cart-sec">
        <i className="fas fa-shopping-cart fa-lg"></i>
        <span className="cart-text">Cart</span>
      </div>
    </nav>
  );
  const loggedInButtons = () => (
    <hgroup className="right-header">
      <button className="header-button" onClick={logout}>Log Out</button>
      <div className="cart-sec">
      <i className="fas fa-shopping-cart fa-lg"></i>
      <span className="cart-text">Cart</span>
      </div>
    </hgroup>
    
  );

  return currentUser ? loggedInButtons() : loggedOutButtons();
};


export default SessionButtons;

