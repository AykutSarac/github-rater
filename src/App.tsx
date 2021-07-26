import React from 'react';
import Navbar from './components/Navbar';
import ResultSection from './components/ResultSection';
import SearchUser from './components/SearchUser';

import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchUser />
      <ResultSection />
    </div>
  );
}

export default App;
