
import React from 'react';
import { Link } from 'react-router-dom';


const SessionButtons = ({ currentUser, logout, login, signup, openModal }) => {
  
  const loggedOutButtons = () => (
    <nav className="login-signup">
      <button className="register" onClick={() => openModal('signup')}>Register</button>
      <button className="login" onClick={() => openModal('signin')}>Sign in</button>
    </nav>
  );
  const loggedInButtons = () => (
    <hgroup className="header-group">
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? loggedInButtons() : loggedOutButtons();
};


export default SessionButtons;

