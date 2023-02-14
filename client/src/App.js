import React, { useEffect } from 'react';
import Home from './pages/Home';
import { getUrl } from './utils/ApiServices';

function App() {
  useEffect(() => {
    const shortUrl = window.location.pathname.slice(1);
    if (shortUrl != "") startRedirect(shortUrl);
  },[window.location.pathname])

  const startRedirect = async (shortUrl) => {
    const res = await getUrl(shortUrl);
    if (res.data) window.location.replace(res.data.fullUrl);
  }

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
