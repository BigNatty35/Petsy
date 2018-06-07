import SearchBar from '../search_bar';
import React from 'react';
import SessionButtons from '../session_form/session_buttons';


const Header = () => {
  
  return (
    <div className="header">
      <h1 className="logo">Regretsy</h1>
      <div className="searchbar">
      <SearchBar/>
      </div>
    </div>
  );
};

export default Header;