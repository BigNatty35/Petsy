import SearchBar from '../search_bar';
import React from 'react';
import SessionButtons from './session_buttons';


const Header = () => {
  
  return (
    <div className="header">
      <h1 className="logo">Regretsy</h1>
      <SearchBar/>
      <SessionButtons/>
    </div>
  );
};

export default Header;