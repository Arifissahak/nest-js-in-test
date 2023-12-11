import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
    <div className='nav-button'>
      <button onClick={handleRegisterClick}>Go to Register</button>
      <button onClick={handleLoginClick}>Go to Login</button>
      
    </div>
     <h1 className='main-comp'>Project of Authorization and URL shortening.</h1>
    </>
  );
};

export default NavigationBar;
