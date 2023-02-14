import React, { useState } from 'react';
import { postUrl } from './utils/ApiServices';
import './App.css';

function App() {
  const [fullUrl, setFullUrl] = useState("");

  const handleUrlChange = (e) => {
    setFullUrl(e.target.value)
  }

  const generateShortUrl = async () => {
    const res = await postUrl(fullUrl);
    console.log(res)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>URL Shortener</h2>
        <h4>Input your URL below:</h4>
        <div className="input-container">
          <input
            className="url-input" 
            value={fullUrl}
            onInput={handleUrlChange}/>
          <button
            className="generate-button"
            onClick={generateShortUrl}>
            Generate
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
