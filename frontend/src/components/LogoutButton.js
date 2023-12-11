// LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const apiUrl = "http://localhost:8000/auth/logout";

    try {
      // Assuming you have a way to retrieve the JWT token from where it's stored (e.g., localStorage)
      const token = localStorage.getItem('yourAuthTokenKey');

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error('Logout failed:', response.statusText);
        // Handle failed logout (optional)
        return;
      }

      // Clear authentication status or user data in the client-side
      localStorage.removeItem('yourAuthTokenKey');

      // Redirect to the login page or any other desired page
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error.message);
      // Handle other errors if needed
    }
  };

  return (
    <button className='logout-btn' onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
