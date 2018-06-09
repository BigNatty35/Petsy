import SearchBar from '../search_bar';
import React from 'react';
import SessionButtons from '../session_form/session_buttons';


const Header = () => {
  
  return (
   <div className="left-header">
      <div><h1 className="logo">regrEtsy</h1></div>
      <div className="searchbar">
        <SearchBar/>
      </div>
    </div>
  );
};

export default Header;