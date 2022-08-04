import React from 'react';
import Navbar from './components/partials/Navbar';
import Uses from './components/Uses';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
      <Uses />
    </div>
    </div>
  );
}

export default App;
