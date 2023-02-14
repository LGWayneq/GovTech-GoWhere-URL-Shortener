import React, { useState } from 'react';
import { postUrl } from '../utils/ApiServices';
import './Home.css';

function Home() {
  const [fullUrl, setFullUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleUrlChange = (e) => {
    setFullUrl(e.target.value)
  }

  const generateShortUrl = async () => {
    const res = await postUrl(fullUrl);
    setShortUrl(res.data.shortUrl);
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <h2>URL Shortener</h2>
        <h4>Input your URL below:</h4>
        <div className="input-container">
          <input
            className="url-input"
            value={fullUrl}
            onInput={handleUrlChange} />
          <button
            className="generate-button"
            onClick={generateShortUrl}>
            Generate
          </button>
        </div>
        {shortUrl !== "" && <>
          <b>Your new URL: </b>
          <body>url-shortener-lgw.vercel.app/{shortUrl}</body>
        </>}
      </header>
    </div>
  );
}

export default Home;
