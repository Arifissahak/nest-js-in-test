// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = "http://localhost:8000/auth/login";

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Assuming the backend sends the token in the response
      const data = await response.json();
      const token = data.token;

      // Store the token in localStorage
      localStorage.setItem('yourAuthTokenKey', token);

      console.log('Login successful!');
      navigate('/home'); // Redirect to the home page upon successful login
    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle error, display a message, etc.
    }
  };

  return (
    <div>
      <form className='form-submition' onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
