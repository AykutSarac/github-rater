import React from 'react';
import Navbar from './Navbar';
import Results from './Results';
import SearchUser from './SearchUser';
import ResultsExplainer from './ResultsExplainer';

import '../styles/index.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchUser />
      <Results />
      <ResultsExplainer />
    </div>
  );
}

export default App;
