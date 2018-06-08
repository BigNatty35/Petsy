import SearchBar from '../search_bar';
import React from 'react';
import SessionButtons from '../session_form/session_buttons';


const Header = () => {
  
  return (
    <header>
    <nav>
    <div>
      <h1 className="logo">Regretsy</h1>
      <div className="searchbar">
      <SearchBar/>
      </div>
    </div>
    </nav>
    </header>
  );
};

export default Header;