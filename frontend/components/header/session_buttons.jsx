
import React from 'react';
import { Link } from 'react-router-dom';



const SessionButtons = ({ currentUser, logout, login, signup }) => {
  const loggedOutButtons = () => (
    <nav className="login-signup">
      <button onClick={login}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={signup}>Sign up</button>
    </nav>
  );
  const loggedInButtons = () => (
    <hgroup className="header-group">
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? loggedOutButtons() : loggedInButtons();
};


export default SessionButtons;