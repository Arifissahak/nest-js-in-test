import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const RegistrationForm = () => {
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

    const apiUrl = "http://localhost:8000/auth/register";

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      console.log('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Handle error, display a message, etc.
    }
  };

  return (
    <>
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
      <button type="submit">Register</button>
      
    </form>
    </>
    
  );
};

export default RegistrationForm;
