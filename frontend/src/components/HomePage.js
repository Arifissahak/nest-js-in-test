import React, { useState, useEffect } from 'react';
import LogoutButton from './LogoutButton';

const HomePage = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [userUrls, setUserUrls] = useState([]);
  const [error, setError] = useState('');

  const shortenUrl = async () => {
    try {
      const token = localStorage.getItem('yourAuthTokenKey');
      console.log('Token:', token);

      const response = await fetch('http://localhost:8000/url/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ originalUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedUrl(data.shortUrl);
        // Optionally, fetch user URLs again after shortening
        getUserUrls();
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  const getUserUrls = async () => {
    try {
      const response = await fetch('http://localhost:8000/url/list', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('yourAuthTokenKey')}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUserUrls(data);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error fetching user URLs:', error);
    }
  };

  useEffect(() => {
    getUserUrls();
  }, []); // Fetch user URLs on component mount

  return (
    <div className='homePage'>
      <h1>Welcome to the Home Page!</h1>
      <div className='home-input'>
        <label htmlFor="originalUrl">Enter URL:</label>
        <input
          type="text"
          id="originalUrl"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button onClick={shortenUrl}>Shorten URL</button>
      </div>
      {shortenedUrl && (
        <div className='result'>
          <p>Shortened URL: {shortenedUrl}</p>
        </div>
      )}
      {userUrls.length > 0 && (
        <div className='homePage'>
          <h3>Your Shortened URLs:</h3>
          <ul>
            {userUrls.map((url) => (
              <li key={url._id}>{url.shortUrl} - {url.originalUrl}</li>
            ))}
          </ul>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LogoutButton />
    </div>
  );
};

export default HomePage;
