import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SearchBar from './search_bar';
import Header from './header/header';

const App = () => (
  <div>
    <header className="header">
    <Header/>
    {/* <GreetingContainer /> */}
    </header>
  </div>
);

export default App;