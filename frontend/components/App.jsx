import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SearchBar from './search_bar';


const App = () => (
  <div>
    <header>
    <h1> Regretsy </h1>
    <SearchBar />
    <GreetingContainer />
    </header>
  </div>
);

export default App;