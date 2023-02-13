import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h2>URL Shortener</h2>
        <h4>Input your URL below:</h4>
        <div className="input-container">
          <input
            className="url-input" />
          <button
            className="generate-button">
            Generate
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
